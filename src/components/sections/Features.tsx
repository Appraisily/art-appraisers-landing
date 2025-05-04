import React, { useRef } from 'react';
import { Award, Shield, FileCheck, Clock } from 'lucide-react';
import Button from '../core/Button';
import { cn } from '../../utils/cn';
import MultiVideoBackground from '../video/MultiVideoBackground';

// TypeScript interfaces
interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Video URLs for the background
const videoUrls = [
  'https://ik.imagekit.io/appraisily/Videos/hero1.mp4?updatedAt=1731837130060',
  'https://ik.imagekit.io/appraisily/Videos/hero2.mp4?updatedAt=1731837130060',
  'https://ik.imagekit.io/appraisily/Videos/hero3.mp4?updatedAt=1731837130060',
  'https://ik.imagekit.io/appraisily/Videos/hero4.mp4?updatedAt=1731840454419',
  'https://ik.imagekit.io/appraisily/Videos/hero5.mp4?updatedAt=1731840454419'
];

// Feature data with updated information
const features = [
  {
    icon: Shield,
    title: 'Guaranteed Acceptance',
    description: 'Compliant with every major institution and insurer.'
  },
  {
    icon: Clock,
    title: 'Lightning-Fast',
    description: 'No more 6-week waits; our experts deliver in two days.'
  },
  {
    icon: FileCheck,
    title: 'Court-Ready Clarity',
    description: 'Documentation written for lawyers, agents, and tax pros.'
  },
  {
    icon: Award,
    title: 'Expert-Led, Not AI-Only',
    description: 'Real appraisers validate every detail so you sleep easy.'
  }
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <section 
      className="w-full relative overflow-hidden py-12 sm:py-16 md:py-24 bg-white"
      ref={sectionRef}
      aria-labelledby="features-heading"
    >
      {/* Video Background from ValueProposition */}
      <MultiVideoBackground 
        videoUrls={videoUrls}
        fallbackImage="https://ik.imagekit.io/appraisily/bg/appraisal-workspace.jpg?tr=q-70,w-1920"
        opacity={0.25}
        contrast={1.3}
        brightness={1.2}
      />
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4 relative">
          <div 
            className="absolute -inset-x-4 -inset-y-2 bg-gray-100 blur-2xl rounded-3xl" 
            aria-hidden="true"
          />
          <h2 
            id="features-heading"
            className="relative text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6"
          >
            Why Collectors Choose Us
          </h2>
          <p className="relative text-lg leading-8 text-gray-600 font-medium">
            The Appraisal That Opens Doors—Not Questions
          </p>
        </div>

        {/* Features grid */}
        <div className="mx-auto mt-12 max-w-2xl lg:max-w-none">
          <ul className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <li key={feature.title}>
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden p-4 h-full flex flex-col group hover:shadow-md transition-shadow duration-200 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="rounded-lg bg-gray-100 p-2.5 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm leading-6 text-gray-600 flex-grow">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <Button 
              variant="primary"
              as="a"
              href="#start-appraisal"
              fullWidth
              size="lg" 
            >
              Find My Expert Appraiser
            </Button>
            <Button
              variant="text"
              as="a" 
              href="#experts"
              className="group"
              endIcon={
                <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              }
            >
              See Our Experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}