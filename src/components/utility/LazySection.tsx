import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  height?: string;
  placeholder?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  onVisible?: () => void;
}

export default function LazySection({
  children,
  height = 'auto',
  placeholder,
  threshold = 0.1,
  rootMargin = '100px 0px',
  className = '',
  onVisible
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);
          if (onVisible) onVisible();
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, onVisible]);

  // Si la sección ya ha sido visible, siempre mostramos el contenido
  // para evitar problemas con los componentes que dependen de estar montados
  const shouldRenderContent = isVisible || hasBeenVisible;

  return (
    <div
      ref={ref}
      className={className}
      style={{ minHeight: shouldRenderContent ? 'auto' : height }}
    >
      {shouldRenderContent ? (
        children
      ) : (
        placeholder || (
          <div 
            className="w-full flex items-center justify-center bg-gray-50 animate-pulse"
            style={{ height }}
          >
            <div className="text-gray-400">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
          </div>
        )
      )}
    </div>
  );
} 