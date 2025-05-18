import React, { useState, useEffect } from 'react';
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
import { ImageUploader } from './ImageUploader';
// import { updateProject } from '@/lib/firebaseUtils'; // <-- comment out if not found

interface EditProjectProps {
  project: {
    id: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    image: string;
    githubUrl?: string;
  };
  onSuccess: () => void;
  onCancel: () => void;
}

interface ProjectFormData {
  title: string;
  description: string;
  category: string;
  tags: string;
  githubUrl?: string;
}

export const EditProject: React.FC<EditProjectProps> = ({ 
  project, 
  onSuccess, 
  onCancel 
}) => {
  const [imageUrl, setImageUrl] = useState(project.image);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ProjectFormData>({
    defaultValues: {
      title: project.title,
      description: project.description,
      category: project.category,
      tags: project.tags.join(', '),
      githubUrl: project.githubUrl,
    },
  });

  const onSubmit = async (data: ProjectFormData) => {
    if (!imageUrl) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please upload a project image",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const tags = data.tags.split(',').map(tag => tag.trim());
      // TODO: Implement updateProject functionality or import it from firebaseUtils
      // await updateProject(project.id, {
      //   ...data,
      //   tags,
      //   image: imageUrl,
      // });
      
      toast({
        title: "Success",
        description: "Project updated successfully",
      });
      onSuccess();
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-6">Edit Project</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter project title" {...field} />
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
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter project description" 
                    className="min-h-[100px]"
                    {...field} 
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
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="Enter project category" {...field} />
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
                <FormLabel>Tags (comma-separated)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="React, TypeScript, Tailwind CSS" 
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
                <FormLabel>GitHub URL (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter GitHub repository URL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-4">
            <FormLabel>Project Image</FormLabel>
            <ImageUploader 
              onImageUploaded={(url) => setImageUrl(url)}
              currentImages={imageUrl ? [imageUrl] : []}
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
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
  );
};