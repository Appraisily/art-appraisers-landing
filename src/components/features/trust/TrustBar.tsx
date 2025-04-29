import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { FileText, Users, Star } from 'lucide-react';

// TypeScript interfaces
interface SvgLogoProps {
  children: ReactNode;
  url: string;
  name: string;
  className?: string;
}

interface CounterProps {
  icon: React.ComponentType<{ className?: string }>;
  end: number;
  suffix?: string;
  children: ReactNode;
}

// New SVG component for crisp, high-quality logos
const SvgLogo = ({ children, url, name, className = '' }: SvgLogoProps) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center h-16 w-32 p-2 bg-white rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 ${className}`}
    aria-label={`Visit ${name} website`}
  >
    {children}
  </a>
);

// Counter component with animation
const Counter = ({ icon: Icon, end, suffix = '', children }: CounterProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const target = Number(end);
    const duration = 2000;
    const startTime = Date.now();
    
    const updateCount = () => {
      const now = Date.now();
      const elapsedTime = now - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuad = (p: number) => p * (2 - p);
      const currentCount = Math.floor(easeOutQuad(progress) * target);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [isVisible, end]);

  return (
    <div 
      ref={counterRef}
      className="flex flex-col items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="rounded-full bg-blue-50 p-3 mb-3">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{count}{suffix}</div>
      <div className="text-sm text-gray-600 text-center">{children}</div>
    </div>
  );
};

export default function TrustBar() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hidden heading for accessibility */}
        <h3 className="sr-only">Accreditations & Metrics</h3>
        
        {/* Accreditation logos */}
        <div className="flex flex-col items-center mb-10">
          <span className="text-sm uppercase tracking-wide text-gray-500 font-medium mb-6">As accredited by</span>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <SvgLogo url="https://www.isa-appraisers.org/" name="International Society of Appraisers">
              <svg viewBox="0 0 276 124" className="h-full w-full" aria-hidden="true">
                <title>International Society of Appraisers Logo</title>
                <path d="M50.52,36.71c18.15,0,32.87,14.72,32.87,32.87s-14.72,32.87-32.87,32.87S17.66,87.73,17.66,69.58,32.38,36.71,50.52,36.71" fill="none" stroke="#333" strokeWidth="1.5"/>
                <path d="M230.11,36.71c18.15,0,32.87,14.72,32.87,32.87s-14.72,32.87-32.87,32.87-32.87-14.72-32.87-32.87S211.96,36.71,230.11,36.71Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                <path d="M140.32,21.45c26.58,0,48.13,21.56,48.13,48.13s-21.56,48.13-48.13,48.13-48.13-21.56-48.13-48.13,21.56-48.13,48.13-48.13Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                <path d="M121.65,69.58c0-10.31,8.36-18.67,18.67-18.67s18.67,8.36,18.67,18.67-8.36,18.67-18.67,18.67-18.67-8.36-18.67-18.67Z" fill="none" stroke="#333" strokeWidth="1.5"/>
                <path d="M140.32,32.29v74.59" fill="none" stroke="#333" strokeWidth="1.5"/>
                <path d="M103.12,69.58h74.59" fill="none" stroke="#333" strokeWidth="1.5"/>
                <path d="M111.67,40.93l57.29,57.29" fill="none" stroke="#333" strokeWidth="1.5"/>
                <path d="M111.67,98.22l57.29-57.29" fill="none" stroke="#333" strokeWidth="1.5"/>
              </svg>
            </SvgLogo>
            
            <SvgLogo url="https://www.appraisersassociation.org/" name="American Appraisers Association">
              <svg viewBox="0 0 200 100" className="h-full w-full" aria-hidden="true">
                <title>American Appraisers Association Logo</title>
                <circle cx="100" cy="50" r="40" fill="none" stroke="#333" strokeWidth="2"/>
                <text x="100" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">AAA</text>
                <text x="100" y="65" textAnchor="middle" fontSize="10" fill="#333">75 YEARS</text>
              </svg>
            </SvgLogo>
            
            <SvgLogo url="https://www.appraisersassociation.org/" name="Appraisers Association of America">
              <svg viewBox="0 0 200 100" className="h-full w-full" aria-hidden="true">
                <title>Appraisers Association Logo</title>
                <path d="M30,50 L50,30 L150,30 L170,50 L150,70 L50,70 Z" fill="none" stroke="#333" strokeWidth="2"/>
                <text x="100" y="55" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">ASA</text>
                <path d="M60,80 C100,85 100,85 140,80" fill="none" stroke="#333" strokeWidth="1"/>
              </svg>
            </SvgLogo>
          </div>
        </div>
        
        {/* Animated stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-8">
          <Counter icon={FileText} end={15000} suffix="+">
            Artworks Appraised
          </Counter>
          <Counter icon={Users} end={5000} suffix="+">
            Satisfied Clients
          </Counter>
          <Counter icon={Star} end={4.9} suffix="/5">
            Client Satisfaction
          </Counter>
        </div>
        
        {/* Micro-CTA */}
        <div className="text-center">
          <a href="#case-studies" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
            View Real Appraisals
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 