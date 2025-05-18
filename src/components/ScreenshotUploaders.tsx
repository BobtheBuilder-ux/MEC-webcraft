import React from "react";
import { ImageUploader } from "./ImageUploader";

interface ScreenshotUploadersProps {
  phoneScreenshot: string;
  setPhoneScreenshot: (url: string) => void;
  desktopScreenshot: string;
  setDesktopScreenshot: (url: string) => void;
}

export function ScreenshotUploaders({
  phoneScreenshot,
  setPhoneScreenshot,
  desktopScreenshot,
  setDesktopScreenshot
}: ScreenshotUploadersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-medium mb-2">Mobile Screenshot</h3>
        <p className="text-sm text-gray-500 mb-4">
          Upload a screenshot of your project's mobile view
        </p>
        <ImageUploader 
          currentImages={phoneScreenshot ? [phoneScreenshot] : []}
          onImageUploaded={setPhoneScreenshot}
        />
      </div>
      
      <div>
        <h3 className="font-medium mb-2">Desktop Screenshot</h3>
        <p className="text-sm text-gray-500 mb-4">
          Upload a screenshot of your project's desktop view
        </p>
        <ImageUploader 
          currentImages={desktopScreenshot ? [desktopScreenshot] : []}
          onImageUploaded={setDesktopScreenshot}
        />
      </div>
    </div>
  );
}
