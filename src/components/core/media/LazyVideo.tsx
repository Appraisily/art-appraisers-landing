import React, { useState, useEffect, useRef } from 'react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  width?: string | number;
  height?: string | number;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  className?: string;
  fallbackImage?: string;
  onLoad?: () => void;
  onError?: () => void;
  preload?: 'auto' | 'metadata' | 'none';
  threshold?: number;
  rootMargin?: string;
}

export default function LazyVideo({
  src,
  poster,
  width = '100%',
  height = 'auto',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  className = '',
  fallbackImage,
  onLoad,
  onError,
  preload = 'metadata',
  threshold = 0.1,
  rootMargin = '100px 0px'
}: LazyVideoProps) {
  const [isInView, setIsInView] = useState(false);
  const [canAutoPlay, setCanAutoPlay] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Comprobar si el navegador soporta autoplay
  useEffect(() => {
    // Comprobación simplificada de soporte de autoplay
    const video = document.createElement('video');
    const canAutoplayPromise = video.play();
    
    if (canAutoplayPromise !== undefined) {
      canAutoplayPromise
        .then(() => {
          setCanAutoPlay(true);
          video.pause();
        })
        .catch(() => {
          setCanAutoPlay(false);
        });
    } else {
      // Navegadores antiguos que no soportan Promise con video.play()
      setCanAutoPlay(true);
    }

    // Limpieza
    return () => {
      video.remove();
    };
  }, []);

  // Observer para lazy loading
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold,
        rootMargin,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  // Timeout para mostrar fallback si el video no carga después de un tiempo
  useEffect(() => {
    if (!isInView || isLoaded) return;

    const timeoutId = setTimeout(() => {
      if (!isLoaded && videoRef.current) {
        setHasError(true);
      }
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isInView, isLoaded]);

  // Intentar reproducir el video cuando está en vista
  useEffect(() => {
    if (isInView && videoRef.current && autoPlay && canAutoPlay && !hasError) {
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Si falla la reproducción automática, mostramos el poster o fallback
          setHasError(true);
        });
      }
    }
  }, [isInView, autoPlay, canAutoPlay, hasError]);

  // Handlers para eventos de video
  const handleCanPlay = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setHasError(true);
    if (onError) onError();
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {hasError && fallbackImage ? (
        // Fallback de imagen si el video falla
        <img 
          src={fallbackImage} 
          alt="Video fallback" 
          className="w-full h-full object-cover"
        />
      ) : (
        <>
          {!isLoaded && (
            // Placeholder mientras el video carga
            <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          )}
          
          <video
            ref={videoRef}
            className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            poster={poster}
            preload={preload}
            playsInline={playsInline}
            muted={muted}
            loop={loop}
            autoPlay={isInView && autoPlay && canAutoPlay}
            onCanPlay={handleCanPlay}
            onError={handleError}
          >
            {isInView && <source src={src} type="video/mp4" />}
            Tu navegador no soporta video HTML5.
          </video>
        </>
      )}
    </div>
  );
} 