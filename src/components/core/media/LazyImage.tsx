import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  placeholderColor?: string;
  threshold?: number;
  loadingEffect?: 'fade' | 'blur' | 'none';
  onLoad?: () => void;
  onError?: () => void;
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderColor = '#f3f4f6', // gray-100
  threshold = 0.1,
  loadingEffect = 'fade',
  onLoad,
  onError
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Calculate aspect ratio for placeholder
  const aspectRatio = (height / width) * 100;
  const placeholderStyle = {
    backgroundColor: placeholderColor,
    paddingBottom: `${aspectRatio}%`,
  };

  // Intersection Observer to load images only when in viewport
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: threshold, rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  // Image load handler
  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  // Image error handler
  const handleImageError = () => {
    setError(true);
    if (onError) onError();
  };

  // Apply loading effect classes
  let imageClasses = className || '';
  if (loadingEffect === 'fade' && !isLoaded) {
    imageClasses += ' opacity-0';
  } else if (loadingEffect === 'fade' && isLoaded) {
    imageClasses += ' opacity-100 transition-opacity duration-300';
  } else if (loadingEffect === 'blur' && !isLoaded) {
    imageClasses += ' blur-sm';
  } else if (loadingEffect === 'blur' && isLoaded) {
    imageClasses += ' blur-0 transition-all duration-300';
  }

  return (
    <div 
      className="relative overflow-hidden w-full h-full"
      style={{ maxWidth: `${width}px` }}
    >
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 bg-gray-100 animate-pulse" 
          style={placeholderStyle}
        />
      )}
      
      {error ? (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500"
          style={{ aspectRatio: `${width} / ${height}` }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={isInView ? src : ''}
          alt={alt}
          className={imageClasses}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ 
            display: isLoaded ? 'block' : 'block', 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            aspectRatio: `${width} / ${height}`
          }}
        />
      )}
    </div>
  );
} 