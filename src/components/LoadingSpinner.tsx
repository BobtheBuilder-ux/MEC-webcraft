import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin w-8 h-8 border-4 border-[#FFD700] border-t-transparent rounded-full"></div>
  </div>
);

export default LoadingSpinner;