import React from "react";
import { ProjectUploadForm } from "@/components/ProjectUploadForm";

// Update Project type for Firebase
interface Project {
  id: string;
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

interface AddProjectProps {
  onAddProject: (newProjectData: Omit<Project, 'id'>) => void;
}

export function AddProject({ onAddProject }: AddProjectProps) {
  // Will be replaced with Firebase Storage upload logic
  const handleAddProject = async (projectData: Omit<Project, 'id'>) => {
    onAddProject(projectData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add New Project</h2>
      <ProjectUploadForm onAddProject={handleAddProject} />
    </div>
  );
}
