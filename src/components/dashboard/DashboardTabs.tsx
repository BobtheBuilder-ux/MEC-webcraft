import React, { useState, useEffect, lazy, Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectsList } from "./ProjectsList";
import { AddProject } from "./AddProject";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { getAllProjects, addProject, deleteProject } from "@/lib/firebaseUtils";
import type { Project } from "@/lib/firebaseUtils";

// Lazy load components for better performance
const LeadsDashboard = lazy(() => import("./LeadsDashboard"));
const BlogDashboard = lazy(() => import("./BlogDashboard"));

// Loading spinner for lazy-loaded components
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin w-8 h-8 border-4 border-[#FFD700] border-t-transparent rounded-full"></div>
  </div>
);

export const DashboardTabs = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const { toast } = useToast();

  // Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      if (!user) return;
      
      setIsLoading(true);
      setError(null);
      try {
        const projects = await getAllProjects();
        setAllProjects(projects);
      } catch (err: any) {
        console.error("Failed to fetch projects:", err);
        setError(err.message || "Failed to load projects. Please try again later.");
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load projects. Please try again later.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [user]);

  const handleAddProject = async (newProjectData: Omit<Project, 'id' | 'createdAt'>) => {
    try {
      console.log('Adding project data:', newProjectData);
      
      // Add the project to Firebase
      const projectId = await addProject(newProjectData);
      console.log('Project added with ID:', projectId);
      
      // Refresh the project list to ensure we show all projects including the new one
      setIsLoading(true);
      const updatedProjects = await getAllProjects();
      setAllProjects(updatedProjects);
      setIsLoading(false);
      
      toast({ 
        title: "Project Added", 
        description: "New project saved successfully." 
      });
    } catch (err: any) {
      console.error("Failed to add project:", err);
      toast({ 
        variant: "destructive", 
        title: "Error Adding Project", 
        description: err.message || "Could not add project." 
      });
    }
  };

  const handleDeleteProject = async (id: string) => {
    const originalProjects = [...allProjects];
    setAllProjects(prev => prev.filter(p => p.id !== id));

    try {
      await deleteProject(id);
      toast({ 
        title: "Project Deleted", 
        description: "Project has been removed successfully." 
      });
    } catch (err: any) {
      console.error("Failed to delete project:", err);
      setAllProjects(originalProjects);
      toast({ 
        variant: "destructive", 
        title: "Error Deleting Project", 
        description: err.message || "Could not delete project." 
      });
    }
  };

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <Tabs defaultValue="projects" className="w-full">
      <TabsList className="grid w-full max-w-[800px] grid-cols-4">
        <TabsTrigger value="projects">Your Projects</TabsTrigger>
        <TabsTrigger value="add">Add Project</TabsTrigger>
        <TabsTrigger value="blog">Blog Posts</TabsTrigger>
        <TabsTrigger value="leads">Lead Management</TabsTrigger>
      </TabsList>
      
      <TabsContent value="projects">
        <ProjectsList 
          projects={allProjects}
          isLoading={isLoading}
          onDeleteProject={handleDeleteProject}
        />
      </TabsContent>

      <TabsContent value="add">
        <AddProject onAddProject={handleAddProject} />
      </TabsContent>

      <TabsContent value="blog">
        <Suspense fallback={<LoadingSpinner />}>
          <BlogDashboard />
        </Suspense>
      </TabsContent>
      
      <TabsContent value="leads">
        <Suspense fallback={<LoadingSpinner />}>
          <LeadsDashboard />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};
