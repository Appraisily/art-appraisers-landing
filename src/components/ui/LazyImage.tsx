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

  // Configuración del placeholder
  const aspectRatio = (height / width) * 100;
  const placeholderStyle = {
    backgroundColor: placeholderColor,
    paddingBottom: `${aspectRatio}%`,
  };

  // Efecto para observer intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  // Manejador de carga de imagen
  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  // Manejador de error de imagen
  const handleImageError = () => {
    setError(true);
    if (onError) onError();
  };

  // Configurar clases para efectos de carga
  let imageClasses = className;
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
      className="relative overflow-hidden"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-100" 
          style={placeholderStyle}
        />
      )}
      
      {error ? (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500"
          style={{ width: `${width}px`, height: `${height}px` }}
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
          style={{ display: isLoaded ? 'block' : 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
    </div>
  );
} 