import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectsList } from "./ProjectsList";
import { AddProject } from "./AddProject";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

// Re-define Project type if needed (or import from a shared types file)
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  githubUrl?: string;
  tools?: string[];
  phoneScreenshot?: string;
  desktopScreenshot?: string;
}

// Define the base URL for the backend API
// Using relative URLs now for Vite proxy

export const DashboardTabs = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(() => localStorage.getItem('authToken')); // Get token from LS
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect to login if no token on initial load
  useEffect(() => {
    if (!authToken) {
      navigate('/login');
    }
  }, [authToken, navigate]);

  // Fetch projects from the backend API (only if authenticated)
  useEffect(() => {
    if (!authToken) return; // Don't fetch if not authenticated

    const fetchProjects = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/projects`, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          },
          credentials: 'include'
        }); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllProjects(data);
      } catch (err: any) {
        console.error("Failed to fetch projects:", err);
        setError(err.message || "Failed to load projects. Please try again later.");
        if (err.message?.includes('401') || err.message?.includes('403')) {
            // Handle potential auth errors during fetch if GET becomes protected
            localStorage.removeItem('authToken');
            setAuthToken(null);
            // navigate('/login'); // Already handled by the first useEffect
        }
        setAllProjects([]); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [authToken]); // Re-fetch if authToken changes (e.g., after login)

  // Handler to add a new project via API
  const handleAddProject = async (newProjectData: Omit<Project, 'id'>) => {
    if (!authToken) {
      toast({ variant: "destructive", title: "Unauthorized", description: "Please log in to add projects." });
      navigate('/login');
      return;
    }
    try {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}` 
        },
        body: JSON.stringify(newProjectData),
        credentials: 'include'
      });
      if (!response.ok) {
         const errorData = await response.json().catch(() => ({})); 
         throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      const addedProject = await response.json(); 
      setAllProjects(prevProjects => [...prevProjects, addedProject]); 
      toast({ title: "Project Added", description: "New project saved successfully." });
    } catch (err: any) {
       console.error("Failed to add project:", err);
       toast({ variant: "destructive", title: "Error Adding Project", description: err.message || "Could not add project." });
    }
  };

  // Handler to delete a project via API
  const handleDeleteProject = async (id: number) => {
    if (!authToken) {
      toast({ variant: "destructive", title: "Unauthorized", description: "Please log in to delete projects." });
      navigate('/login');
      return;
    }
    // Optimistic UI update: remove project immediately
    const originalProjects = [...allProjects];
    setAllProjects(prevProjects => prevProjects.filter(p => p.id !== id));

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${authToken}` 
        },
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({})); // Try to parse error body
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      
      toast({ title: "Project Deleted", description: "Project removed successfully." });
      // No need to update state again if successful

    } catch (err: any) {
      console.error("Failed to delete project:", err);
      toast({ variant: "destructive", title: "Error Deleting Project", description: err.message || "Could not delete project." });
      // Rollback UI update on error
      setAllProjects(originalProjects);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null); // Update state to trigger redirect
    toast({ title: "Logged Out", description: "You have been successfully logged out." });
    // No need to navigate here, the useEffect watching authToken will handle it
  };

  // If no token, render null or a loading indicator while redirecting
  if (!authToken) {
     return null; // Or <LoadingSpinner />
  }

  return (
    <Tabs defaultValue="projects" className="w-full">
      <div className="flex justify-between items-center mb-8">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="add-project">Add New Project</TabsTrigger>
        </TabsList>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>
      
      <TabsContent value="projects" className="mt-4">
        {isLoading && <p>Loading projects...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
        {!isLoading && !error && (
          <ProjectsList projects={allProjects} onDeleteProject={handleDeleteProject} />
        )}
      </TabsContent>
      
      <TabsContent value="add-project" className="mt-4">
        <AddProject onAddProject={handleAddProject} />
      </TabsContent>
    </Tabs>
  );
};
