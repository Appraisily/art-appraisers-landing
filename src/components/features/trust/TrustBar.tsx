import React from 'react';
import { ChevronRight } from 'lucide-react';

// Simple text-based trust indicator component
const TrustIndicator = ({ text }: { text: string }) => (
  <div className="flex items-center text-sm text-gray-600 font-medium">
    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
    {text}
  </div>
);

export default function TrustBar() {
  // Trust indicators - text only, no large icons
  const trustIndicators = [
    'ISA Accredited',
    'AAA Certified',
    'USPAP Compliant',
    '15K+ Artworks Appraised',
    '5K+ Satisfied Clients'
  ];

  return (
    <section className="bg-white bg-opacity-90 backdrop-blur-sm border-y border-gray-100 py-3 shadow-sm" aria-label="Trust indicators">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {trustIndicators.map((indicator, index) => (
              <TrustIndicator key={index} text={indicator} />
            ))}
          </div>
          
          <a 
            href="#case-studies" 
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors mt-2 sm:mt-0"
          >
            View Real Appraisals
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
} 