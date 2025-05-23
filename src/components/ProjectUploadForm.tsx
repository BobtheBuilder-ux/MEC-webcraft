import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageUploader } from "@/components/ImageUploader";
import { useToast } from "@/hooks/use-toast";

// Update Project type for Firebase
interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  category: string;
  githubUrl?: string;
  liveDemo?: string;
  tools?: string[];
  phoneScreenshots?: string[];
  desktopScreenshots?: string[];
}

interface ProjectUploadFormProps {
  onAddProject: (newProjectData: Omit<Project, 'id'>) => void;
}

export function ProjectUploadForm({ onAddProject }: ProjectUploadFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    images: [] as string[],
    tags: '',
    category: '',
    githubUrl: '',
    liveDemo: '',
    tools: '',
    phoneScreenshots: [] as string[],
    desktopScreenshots: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImagesUpload = (imageUrls: string[], field: 'images' | 'phoneScreenshots' | 'desktopScreenshots') => {
    setFormData(prev => ({ 
      ...prev, 
      [field]: [...prev[field], ...imageUrls]
    }));
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      toast({
        variant: "destructive",
        title: "Title Required",
        description: "Please enter a project title.",
      });
      return false;
    }

    if (!formData.description.trim()) {
      toast({
        variant: "destructive",
        title: "Description Required",
        description: "Please enter a project description.",
      });
      return false;
    }

    if (formData.images.length === 0) {
      toast({
        variant: "destructive",
        title: "Images Required",
        description: "Please upload at least one project image.",
      });
      return false;
    }

    if (!formData.category.trim()) {
      toast({
        variant: "destructive",
        title: "Category Required",
        description: "Please enter a project category.",
      });
      return false;
    }

    if (!formData.tags.trim()) {
      toast({
        variant: "destructive",
        title: "Tags Required",
        description: "Please enter at least one project tag.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      // Clean and prepare the data
      const projectData: Omit<Project, 'id'> = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        images: formData.images,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        category: formData.category.trim(),
        // Only include optional fields if they have actual values
        ...(formData.githubUrl.trim() && { githubUrl: formData.githubUrl.trim() }),
        ...(formData.liveDemo.trim() && { liveDemo: formData.liveDemo.trim() }),
        tools: formData.tools ? formData.tools.split(',').map(tool => tool.trim()).filter(Boolean) : [],
        ...(formData.phoneScreenshots.length > 0 && { phoneScreenshots: formData.phoneScreenshots }),
        ...(formData.desktopScreenshots.length > 0 && { desktopScreenshots: formData.desktopScreenshots })
      };

      console.log('Submitting project with data:', projectData);
      await onAddProject(projectData);
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        images: [],
        tags: '',
        category: '',
        githubUrl: '',
        liveDemo: '',
        tools: '',
        phoneScreenshots: [],
        desktopScreenshots: []
      });

      toast({
        title: "Success",
        description: "Project added successfully!",
      });
    } catch (error) {
      console.error('Error submitting project:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add project. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">Title *</label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
          placeholder="Project title"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">Description *</label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
          placeholder="Project description"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Project Images *</label>
        <ImageUploader
          currentImages={formData.images}
          onImagesUploaded={(urls) => handleImagesUpload(urls, 'images')}
          multiple={true}
          label="Upload project images"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium mb-1">Category *</label>
        <Input 
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
          placeholder="e.g., React, WordPress, Python"
        />
      </div>
        
      <div>
        <label htmlFor="tags" className="block text-sm font-medium mb-1">Tags *</label>
        <Input
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleInputChange}
          required
          placeholder="Comma-separated tags e.g., React, TypeScript, Firebase"
        />
      </div>

      <div>
        <label htmlFor="tools" className="block text-sm font-medium mb-1">Tools Used</label>
        <Input
          id="tools"
          name="tools"
          value={formData.tools}
          onChange={handleInputChange}
          placeholder="Comma-separated tools e.g., VS Code, Git, npm"
        />
      </div>

      <div>
        <label htmlFor="githubUrl" className="block text-sm font-medium mb-1">GitHub URL</label>
        <Input
          id="githubUrl"
          name="githubUrl"
          type="url"
          value={formData.githubUrl}
          onChange={handleInputChange}
          placeholder="https://github.com/username/project"
        />
      </div>

      <div>
        <label htmlFor="liveDemo" className="block text-sm font-medium mb-1">Live Demo URL</label>
        <Input
          id="liveDemo"
          name="liveDemo"
          type="url"
          value={formData.liveDemo}
          onChange={handleInputChange}
          placeholder="https://your-project-demo.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Mobile Screenshots</label>
        <ImageUploader
          currentImages={formData.phoneScreenshots}
          onImagesUploaded={(urls) => handleImagesUpload(urls, 'phoneScreenshots')}
          multiple={true}
          label="Upload mobile screenshots"
        />
      </div>
          
      <div>
        <label className="block text-sm font-medium mb-1">Desktop Screenshots</label>
        <ImageUploader
          currentImages={formData.desktopScreenshots}
          onImagesUploaded={(urls) => handleImagesUpload(urls, 'desktopScreenshots')}
          multiple={true}
          label="Upload desktop screenshots"
        />
      </div>
        
      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Adding Project..." : "Add Project"}
      </Button>
    </form>
  );
}
