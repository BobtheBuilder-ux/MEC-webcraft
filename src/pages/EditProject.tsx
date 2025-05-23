import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { ImageUploader } from '@/components/ImageUploader';
import { Navbar } from "@/components/Navbar";
import { navItems } from "@/lib/data";
import { getProject, updateProject } from '@/lib/firebaseUtils';
import LoadingSpinner from '@/components/LoadingSpinner';

interface ProjectFormData {
  title: string;
  description: string;
  category: string;
  tags: string;
  githubUrl?: string;
  liveDemo?: string;
  tools?: string;
}

export const EditProject = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [phoneScreenshots, setPhoneScreenshots] = useState<string[]>([]);
  const [desktopScreenshots, setDesktopScreenshots] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ProjectFormData>();

  useEffect(() => {
    const loadProject = async () => {
      if (!id) {
        navigate('/');
        return;
      }

      try {
        const project = await getProject(id);
        if (!project) {
          setError('Project not found');
          return;
        }

        form.reset({
          title: project.title,
          description: project.description,
          category: project.category,
          tags: project.tags.join(', '),
          githubUrl: project.githubUrl,
          liveDemo: project.liveDemo,
          tools: project.tools?.join(', ')
        });

        setImages(project.images || []);
        setPhoneScreenshots(project.phoneScreenshots || []);
        setDesktopScreenshots(project.desktopScreenshots || []);
      } catch (err: any) {
        console.error('Failed to load project:', err);
        setError(err.message || 'Failed to load project');
      } finally {
        setIsLoading(false);
      }
    };

    loadProject();
  }, [id, navigate, form]);

  const onSubmit = async (data: ProjectFormData) => {
    if (images.length === 0) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please upload at least one project image",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const tags = data.tags.split(',').map(tag => tag.trim()).filter(Boolean);
      const tools = data.tools?.split(',').map(tool => tool.trim()).filter(Boolean);
      
      await updateProject(id!, {
        ...data,
        tags,
        tools,
        images,
        phoneScreenshots,
        desktopScreenshots
      });
      
      toast({
        title: "Success",
        description: "Project updated successfully",
      });
      navigate(`/projects/${id}`);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to update project",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar items={navItems} onNavClick={() => {}} />
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar items={navItems} onNavClick={() => {}} />
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Error</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
              className="bg-[#FFD700] hover:bg-[#e6c300] text-black"
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar items={navItems} onNavClick={() => {}} />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Edit Project</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Title *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter project title" {...field} required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter project description" 
                          className="min-h-[100px]"
                          {...field} 
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., React, WordPress, Python" 
                          {...field} 
                          required 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tags (comma-separated) *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="React, TypeScript, Tailwind CSS" 
                          {...field} 
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tools"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tools Used (comma-separated)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="VS Code, Git, npm" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="githubUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GitHub URL</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="https://github.com/username/project" 
                          type="url"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="liveDemo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Live Demo URL</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="https://your-project-demo.com" 
                          type="url"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <div>
                    <FormLabel>Project Images *</FormLabel>
                    <ImageUploader 
                      currentImages={images}
                      onImagesUploaded={(urls) => setImages(prev => [...prev, ...urls])}
                      multiple
                      label="Upload project images"
                    />
                  </div>

                  <div>
                    <FormLabel>Mobile Screenshots</FormLabel>
                    <ImageUploader 
                      currentImages={phoneScreenshots}
                      onImagesUploaded={(urls) => setPhoneScreenshots(prev => [...prev, ...urls])}
                      multiple
                      label="Upload mobile screenshots"
                    />
                  </div>

                  <div>
                    <FormLabel>Desktop Screenshots</FormLabel>
                    <ImageUploader 
                      currentImages={desktopScreenshots}
                      onImagesUploaded={(urls) => setDesktopScreenshots(prev => [...prev, ...urls])}
                      multiple
                      label="Upload desktop screenshots"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate(-1)}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Updating..." : "Update Project"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
};