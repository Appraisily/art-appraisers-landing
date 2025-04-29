import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface LazyComponentProps {
  children: ReactNode;
  placeholder?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
}

const DefaultPlaceholder = () => (
  <div className="py-8 px-4 flex justify-center items-center min-h-[200px]">
    <div className="animate-pulse flex space-x-4 w-full max-w-md">
      <div className="rounded-full bg-slate-200 h-12 w-12"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-slate-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-slate-200 rounded"></div>
          <div className="h-4 bg-slate-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
);

export default function LazyComponent({
  children,
  placeholder = <DefaultPlaceholder />,
  rootMargin = '100px',
  threshold = 0.1,
  className = '',
}: LazyComponentProps) {
  // Estado para controlar si el componente está visible
  const [isVisible, setIsVisible] = useState(false);
  // Estado para controlar si el componente está cargado
  const [isLoaded, setIsLoaded] = useState(false);
  // Referencia al elemento del DOM que será observado
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Verificar si el navegador soporta Intersection Observer
    if (!('IntersectionObserver' in window)) {
      // Si no es compatible, simplemente mostrar el componente
      setIsVisible(true);
      return;
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Si el elemento es visible en el viewport
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Una vez que es visible, dejar de observar
        observer.disconnect();
      }
    };

    // Opciones para el observer
    const options = {
      rootMargin,
      threshold,
    };

    // Crear el observer
    const observer = new IntersectionObserver(observerCallback, options);
    
    // Si tenemos la referencia al elemento, empezar a observarlo
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Limpiar el observer cuando el componente se desmonte
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [rootMargin, threshold]);

  // Manejar la transición de carga
  useEffect(() => {
    if (isVisible) {
      // Simular un pequeño retraso para la animación de transición
      const timeout = setTimeout(() => {
        setIsLoaded(true);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <div
          className={`transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {children}
        </div>
      ) : (
        placeholder
      )}
    </div>
  );
} 