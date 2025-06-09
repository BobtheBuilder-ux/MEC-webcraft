import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';
import { generateBlogContent } from '@/lib/aiBlogService';

interface AIBlogGeneratorProps {
  onBlogGenerated: (blogData: {
    title: string;
    content: string;
    tags: string[];
    metaDescription: string;
  }) => void;
}

const AIBlogGenerator: React.FC<AIBlogGeneratorProps> = ({ onBlogGenerated }) => {
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast({
        title: "Error",
        description: "Please enter a blog title",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    try {
      const generatedContent = await generateBlogContent(title);
      onBlogGenerated({
        title,
        content: generatedContent.content,
        tags: generatedContent.tags,
        metaDescription: generatedContent.metaDescription
      });
      
      toast({
        title: "Success",
        description: "Blog post generated successfully"
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to generate blog content",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <form onSubmit={handleGenerate} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Blog Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a title for your blog post"
          required
          disabled={isGenerating}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-[#FFD700] hover:bg-[#e6c300] text-black"
        disabled={isGenerating}
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Blog Post...
          </>
        ) : (
          'Generate Blog Post'
        )}
      </Button>
    </form>
  );
};

export default AIBlogGenerator;