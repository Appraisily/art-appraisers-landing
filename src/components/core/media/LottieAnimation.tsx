import React, { useEffect, useRef, useState, ReactNode } from 'react';
import lottie from 'lottie-web';

interface LottieAnimationProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  width?: number | string;
  height?: number | string;
  fallback?: ReactNode;
}

export default function LottieAnimation({
  src,
  className = '',
  loop = true,
  autoplay = true,
  width = '100%',
  height = '100%',
  fallback
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (containerRef.current && !isError) {
      try {
        animationRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop,
          autoplay,
          path: src,
        });

        // Handle loading errors
        animationRef.current.addEventListener('data_failed', () => {
          console.error(`Failed to load Lottie animation from: ${src}`);
          setIsError(true);
        });

        // Handle other errors
        animationRef.current.addEventListener('error', () => {
          console.error(`Error with Lottie animation from: ${src}`);
          setIsError(true);
        });
      } catch (error) {
        console.error(`Error initializing Lottie animation: ${error}`);
        setIsError(true);
      }
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, [src, loop, autoplay, isError]);

  if (isError && fallback) {
    return <>{fallback}</>;
  }

  return (
    <div
      ref={containerRef}
      className={`lottie-container ${className}`}
      style={{ width, height }}
    />
  );
} 