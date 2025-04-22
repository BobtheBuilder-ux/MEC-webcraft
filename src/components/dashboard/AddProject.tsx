import React from "react";
import { ProjectUploadForm } from "@/components/ProjectUploadForm";

// Define Project type matching DashboardTabs & ProjectUploadForm
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

// Define props including the callback function
interface AddProjectProps {
  onAddProject: (newProjectData: Omit<Project, 'id'>) => void;
}

export const AddProject = ({ onAddProject }: AddProjectProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Project</h2>
      <p className="text-gray-600 mb-6">
        Fill out the form below to add a new project to your portfolio.
      </p>
      {/* Pass the onAddProject prop down to the form component */}
      <ProjectUploadForm onAddProject={onAddProject} /> 
    </div>
  );
};
