import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { optimizeImage } from '@/lib/imageOptimizer';

interface ImageUploaderProps {
  onImageUploaded: (imageUrl: string) => void;
  currentImages?: string[];
  label?: string;
  maxWidth?: number;
  quality?: number;
}

export function ImageUploader({ 
  onImageUploaded, 
  currentImages = [],
  label = "Upload Image",
  maxWidth = 1200,
  quality = 0.8 
}: ImageUploaderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      console.error('No file selected');
      return;
    }

    console.log('Selected file:', file);

    try {
      setIsLoading(true);
      const optimizedImageUrl = await optimizeImage(file, { maxWidth, quality });
      console.log('Optimized image URL:', optimizedImageUrl);
      onImageUploaded(optimizedImageUrl);

      toast({
        title: "Success",
        description: "Image optimized and uploaded successfully",
      });
    } catch (error) {
      console.error('Failed to process image:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to process image. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        disabled={isLoading}
        aria-label={label}
      />
      {isLoading && (
        <div className="flex items-center justify-center">
          <div className="animate-spin w-6 h-6 border-2 border-[#FFD700] border-t-transparent rounded-full"></div>
        </div>
      )}
      {currentImages.length > 0 && (
        <div className="mt-4">
          {currentImages.map((image, index) => (
            <img 
              key={index}
              src={image}
              alt="Uploaded image preview"
              className="max-h-40 rounded-md"
            />
          ))}
        </div>
      )}
    </div>
  );
}
