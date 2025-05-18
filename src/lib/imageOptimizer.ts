export const optimizeImage = async (file: File, options: {
  maxWidth?: number;
  quality?: number;
} = {}): Promise<string> => {
  const { maxWidth = 1200, quality = 0.8 } = options;

  console.log('Starting image optimization with options:', options);

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log('FileReader result:', e.target?.result);

      const img = new Image();
      img.onload = () => {
        console.log('Image loaded with dimensions:', img.width, img.height);

        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // Calculate new dimensions
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        console.log('Resized dimensions:', width, height);

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          console.error('Failed to get canvas context');
          reject(new Error('Could not get canvas context'));
          return;
        }

        // Draw and compress image
        ctx.drawImage(img, 0, 0, width, height);
        const optimizedImage = canvas.toDataURL('image/webp', quality);
        console.log('Optimized image data URL:', optimizedImage);
        resolve(optimizedImage);
      };

      img.onerror = () => {
        console.error('Failed to load image');
        reject(new Error('Failed to load image'));
      };
      img.src = e.target?.result as string;
    };

    reader.onerror = () => {
      console.error('Failed to read file');
      reject(new Error('Failed to read file'));
    };
    reader.readAsDataURL(file);
  });
};