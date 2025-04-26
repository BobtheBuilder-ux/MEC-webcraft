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
import { addProject } from '@/lib/firebaseUtils';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, query, where, orderBy, getDocs } from "firebase/firestore";

interface AddProjectProps {
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

export const AddProject: React.FC<AddProjectProps> = ({ onSuccess, onCancel }) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useForm<ProjectFormData>();

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    const adminUID = "YufEe334U5aElrXznr0uBp60hb93"; // Updated with the actual admin UID

    if (!user || user.uid !== adminUID) {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "You do not have permission to add a project."
      });
      onCancel();
    }
  }, [onCancel, toast]);

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
      await addProject({
        ...data,
        tags,
        image: imageUrl,
      });

      // Trigger Firestore query after successful project addition
      const db = getFirestore();
      const q = query(
        collection(db, "projects"),
        where("tags", "array-contains", "react"),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log("Queried Project:", doc.id, doc.data());
      });

      toast({
        title: "Success",
        description: "Project added successfully",
      });
      onSuccess();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to add project",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-6">Add New Project</h2>
      
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
              {isSubmitting ? "Adding..." : "Add Project"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};