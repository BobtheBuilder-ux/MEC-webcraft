import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageUploader } from "./ImageUploader";
import { useToast } from "@/hooks/use-toast";
import { BlogPost, createBlogPost, updateBlogPost, uploadImage } from '@/lib/firebaseUtils';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface BlogEditorProps {
  initialPost?: BlogPost;
}

const BlogEditor: React.FC<BlogEditorProps> = ({ initialPost }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [title, setTitle] = useState(initialPost?.title || '');
  const [tags, setTags] = useState(initialPost?.tags?.join(', ') || '');
  const [coverImage, setCoverImage] = useState(initialPost?.coverImage || '');
  const [content, setContent] = useState(initialPost?.content || '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEditorImageUpload = async (blobInfo: any, progress: (percent: number) => void): Promise<string> => {
    try {
      const file = new File([blobInfo.blob()], blobInfo.filename(), { type: blobInfo.blob().type });
      const imageUrl = await uploadImage(file, `blog/${Date.now()}_${file.name}`);
      return imageUrl;
    } catch (error) {
      console.error('Failed to upload image:', error);
      throw new Error('Failed to upload image');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    if (!title || !content) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create a text-only version for excerpt
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;
      const excerpt = tempDiv.textContent?.slice(0, 160) + '...' || '';

      const postData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'> = {
        title,
        content,
        excerpt,
        coverImage,
        author: {
          id: user.uid,
          name: 'M-E-C webcraft'
        },
        tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      };

      if (initialPost?.id) {
        await updateBlogPost(initialPost.id, postData);
        toast({
          title: "Success",
          description: "Blog post updated successfully"
        });
      } else {
        const postId = await createBlogPost(postData);
        toast({
          title: "Success",
          description: "Blog post created successfully"
        });
      }

      navigate('/blog');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save blog post",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCoverImageUpload = async (imageUrl: string) => {
    setCoverImage(imageUrl);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label>Cover Image</Label>
        <ImageUploader
          currentImages={coverImage ? [coverImage] : []}
          onImageUploaded={handleCoverImageUpload}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tags">Tags (comma-separated)</Label>
        <Input
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="tech, web-development, etc."
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label>Content</Label>
        <div className="border rounded-md">
          <Editor
            apiKey="swu9ncgesbgtxku0uivx3uz38ldl45e7fhp3t283ktn7aaye"
            init={{
              height: 500,
              menubar: true,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | image | help',
              content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, Inter, sans-serif; font-size: 16px }',
              images_upload_handler: handleEditorImageUpload
            }}
            value={content}
            onEditorChange={setContent}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-[#FFD700] hover:bg-[#e6c300] text-black"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {initialPost ? 'Updating...' : 'Creating...'}
          </>
        ) : (
          initialPost ? 'Update Post' : 'Create Post'
        )}
      </Button>
    </form>
  );
};

export default BlogEditor;