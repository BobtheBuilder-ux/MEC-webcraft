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
  image: string;
  tags: string[];
  category: string;
  githubUrl?: string;
  tools?: string[];
  phoneScreenshot?: string;
  desktopScreenshot?: string;
}

interface ProjectUploadFormProps {
  onAddProject: (newProjectData: Omit<Project, 'id'>) => void;
}

export function ProjectUploadForm({ onAddProject }: ProjectUploadFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    tags: '',
    category: '',
    githubUrl: '',
    tools: '',
    phoneScreenshot: '',
    desktopScreenshot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (imageUrl: string, field: keyof typeof formData) => {
    setFormData(prev => ({ ...prev, [field]: imageUrl }));
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

    if (!formData.image) {
      toast({
        variant: "destructive",
        title: "Main Image Required",
        description: "Please upload a main project image.",
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
        image: formData.image,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        category: formData.category.trim(),
        // Only include optional fields if they have actual values
        ...(formData.githubUrl.trim() && { githubUrl: formData.githubUrl.trim() }),
        tools: formData.tools ? formData.tools.split(',').map(tool => tool.trim()).filter(Boolean) : [],
        ...(formData.phoneScreenshot && { phoneScreenshot: formData.phoneScreenshot }),
        ...(formData.desktopScreenshot && { desktopScreenshot: formData.desktopScreenshot })
      };

      console.log('Submitting project with data:', projectData);
      await onAddProject(projectData);
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        image: '',
        tags: '',
        category: '',
        githubUrl: '',
        tools: '',
        phoneScreenshot: '',
        desktopScreenshot: ''
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
        <label className="block text-sm font-medium mb-1">Main Image *</label>
        <ImageUploader
          currentImages={formData.image ? [formData.image] : []}
          onImageUploaded={(url) => handleImageUpload(url, 'image')}
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
        <label className="block text-sm font-medium mb-1">Phone Screenshot</label>
            <ImageUploader
          currentImages={formData.phoneScreenshot ? [formData.phoneScreenshot] : []}
          onImageUploaded={(url) => handleImageUpload(url, 'phoneScreenshot')}
            />
          </div>
          
      <div>
        <label className="block text-sm font-medium mb-1">Desktop Screenshot</label>
        <ImageUploader
          currentImages={formData.desktopScreenshot ? [formData.desktopScreenshot] : []}
          onImageUploaded={(url) => handleImageUpload(url, 'desktopScreenshot')}
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
