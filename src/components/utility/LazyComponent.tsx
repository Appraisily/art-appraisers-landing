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
      <div className="rounded-full bg-gray-200 h-12 w-12"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
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
  // State to control if the component is visible
  const [isVisible, setIsVisible] = useState(false);
  // State to control if the component is loaded
  const [isLoaded, setIsLoaded] = useState(false);
  // Reference to the DOM element that will be observed
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the browser supports Intersection Observer
    if (!('IntersectionObserver' in window)) {
      // If not compatible, simply show the component
      setIsVisible(true);
      return;
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // If the element is visible in the viewport
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Once visible, stop observing
        observer.disconnect();
      }
    };

    // Options for the observer
    const options = {
      rootMargin,
      threshold,
    };

    // Create the observer
    const observer = new IntersectionObserver(observerCallback, options);
    
    // If we have a reference to the element, start observing
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [rootMargin, threshold]);

  // Handle loading transition
  useEffect(() => {
    if (isVisible) {
      // Simulate a small delay for the transition animation
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