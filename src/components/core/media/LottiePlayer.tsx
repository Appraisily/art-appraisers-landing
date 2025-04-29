import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface LottiePlayerProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

export default function LottiePlayer({
  src,
  className = '',
  loop = true,
  autoplay = true,
  style = {}
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Clean up previous animation if it exists
      if (animationRef.current) {
        animationRef.current.destroy();
      }

      // Load and play the animation
      fetch(src)
        .then(response => response.json())
        .then(animationData => {
          animationRef.current = lottie.loadAnimation({
            container: containerRef.current!,
            renderer: 'svg',
            loop,
            autoplay,
            animationData
          });

          return () => {
            if (animationRef.current) {
              animationRef.current.destroy();
            }
          };
        })
        .catch(error => {
          console.error('Error loading Lottie animation:', error);
        });
    }
  }, [src, loop, autoplay]);

  return <div ref={containerRef} className={className} style={style} />;
} 