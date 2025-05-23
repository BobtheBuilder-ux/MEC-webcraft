import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { optimizeImage } from '@/lib/imageOptimizer';

interface ImageUploaderProps {
  onImagesUploaded: (imageUrls: string[]) => void;
  currentImages?: string[];
  label?: string;
  maxWidth?: number;
  quality?: number;
  multiple?: boolean;
}

export function ImageUploader({ 
  onImagesUploaded, 
  currentImages = [],
  label = "Upload Image",
  maxWidth = 1200,
  quality = 0.8,
  multiple = false
}: ImageUploaderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) {
      console.error('No files selected');
      return;
    }

    try {
      setIsLoading(true);
      const uploadPromises = files.map(async (file) => {
        const optimizedImageUrl = await optimizeImage(file, { maxWidth, quality });
        return optimizedImageUrl;
      });

      const uploadedUrls = await Promise.all(uploadPromises);
      onImagesUploaded(uploadedUrls);

      toast({
        title: "Success",
        description: `${files.length} image${files.length > 1 ? 's' : ''} uploaded successfully`,
      });
    } catch (error) {
      console.error('Failed to process images:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to process images. Please try again.",
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
        multiple={multiple}
        aria-label={label}
      />
      {isLoading && (
        <div className="flex items-center justify-center">
          <div className="animate-spin w-6 h-6 border-2 border-[#FFD700] border-t-transparent rounded-full"></div>
        </div>
      )}
      {currentImages.length > 0 && (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          {currentImages.map((image, index) => (
            <img 
              key={index}
              src={image}
              alt={`Uploaded image ${index + 1}`}
              className="w-full h-40 object-cover rounded-md"
            />
          ))}
        </div>
      )}
    </div>
  );
}
