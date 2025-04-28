import { useState, useEffect } from 'react';

export const useImageCache = (imageUrl: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      setIsLoaded(true);
    };

    img.onerror = (e) => {
      setError(new Error('Failed to load image'));
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  return { isLoaded, error };
}; 
