import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholderColor?: string;
  blurAmount?: number;
  loadEagerly?: boolean;
  imageSizes?: string;
  imageSrcSet?: string;
  title?: string;
  onLoad?: () => void;
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderColor = '#f3f4f6',
  blurAmount = 5,
  loadEagerly = false,
  imageSizes,
  imageSrcSet,
  title,
  onLoad,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Placeholder generado como data URI para un rectángulo de color
  const placeholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width || 300} ${height || 200}'%3E%3Crect width='100%25' height='100%25' fill='${placeholderColor.replace('#', '%23')}'/%3E%3C/svg%3E`;

  useEffect(() => {
    // Si se debe cargar la imagen inmediatamente, saltamos la detección de intersección
    if (loadEagerly) {
      setIsIntersecting(true);
      return;
    }

    // Si no existe IntersectionObserver, cargar la imagen de manera estándar
    if (!('IntersectionObserver' in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Cargar cuando la imagen esté a 200px de entrar en el viewport
        threshold: 0.01, // Cargar cuando al menos 1% de la imagen sea visible
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loadEagerly]);

  // Manejador para cuando la imagen termine de cargar
  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={{ width: width ? `${width}px` : 'auto', height: height ? `${height}px` : 'auto' }}
      ref={imgRef}
    >
      {/* Placeholder visible mientras carga la imagen real */}
      <div
        className={`absolute inset-0 ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        style={{ 
          backgroundImage: `url(${placeholder})`,
          filter: `blur(${blurAmount}px)`,
          transform: 'scale(1.05)' // Evitar bordes visibles durante el blur
        }}
        aria-hidden="true"
      />
      
      {/* Imagen real que se cargará solo cuando sea visible o loadEagerly=true */}
      {isIntersecting && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          title={title}
          className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          loading={loadEagerly ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleImageLoad}
          sizes={imageSizes}
          srcSet={imageSrcSet}
        />
      )}
    </div>
  );
} 