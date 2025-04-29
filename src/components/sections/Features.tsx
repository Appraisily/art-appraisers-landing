import React, { useState, useRef, useEffect } from 'react';
import { Award, Shield, FileCheck, Clock, Users, ArrowRight, X } from 'lucide-react';
import LazyVideo from '../core/media/LazyVideo';
import { Card, CardHeader, CardTitle, CardContent } from '../core/Card';
import Button from '../core/Button';
import Badge from '../core/Badge';
import { cn } from '../../utils/cn';
import { Box, containerClasses, spacingClasses, backgroundClasses } from '../core/layout';

// TypeScript interfaces
interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  benefit: string;
  learnMore: string;
}

interface FeatureModalProps {
  feature: Feature;
  onClose: () => void;
}

// Feature data with expanded information
const features = [
  {
    icon: Award,
    title: 'Certified Experts',
    description: 'Hand-picked, ISA-&-AAA-vetted appraisers for museum-grade accuracy',
    benefit: 'Get valuations you can truly trust',
    learnMore: 'Our appraisers have an average of 15+ years of experience in their specialty fields. Each expert undergoes rigorous credential verification through leading professional associations.'
  },
  {
    icon: Shield,
    title: 'USPAP Compliant',
    description: 'Reports that meet strict industry standards required by institutions',
    benefit: 'Ensure your appraisal is accepted everywhere',
    learnMore: 'USPAP (Uniform Standards of Professional Appraisal Practice) compliance means your appraisal report will be accepted by insurance companies, the IRS, courts, and financial institutions.'
  },
  {
    icon: FileCheck,
    title: 'Legal Documentation',
    description: 'Comprehensive reports accepted by insurance, IRS, and courts',
    benefit: 'Use one report for all your needs',
    learnMore: 'Our detailed reports include all necessary elements for legal and financial purposes: provenance research, condition assessment, market analysis, and comparable sales data.'
  },
  {
    icon: Clock,
    title: '24-48h Turnaround',
    description: 'Get your legally admissible valuation in as little as two business days',
    benefit: 'No more waiting weeks for results',
    learnMore: 'Our streamlined digital process lets experts focus on what matters - accurately appraising your artwork, not administrative tasks. Most clients receive their reports within 36 hours.'
  },
  {
    icon: Users,
    title: 'Category Specialists',
    description: 'Experts in every art category from Old Masters to Contemporary Works',
    benefit: 'Always matched with the perfect expert',
    learnMore: "We maintain a network of specialists across 20+ art categories and periods. Your item will be matched with an appraiser who specializes specifically in your artwork's style, period, and medium."
  }
];

// Testimonial snippets for social proof
const testimonialSnippets = [
  { quote: "Incredible turnaround and detail!", author: "Sarah T., Collector" },
  { quote: "The expert knew exactly what to look for.", author: "Michael R., Estate Manager" }
];

export default function Features() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const isElementInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    };
    
    const handleScroll = () => {
      if (sectionRef.current && videoRef.current) {
        if (isElementInViewport(sectionRef.current)) {
          if (videoRef.current.paused) {
            videoRef.current.play().catch(e => console.log("Video play failed:", e));
          }
        } else {
          if (!videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Modal component for "Learn More" functionality
  const FeatureModal = ({ feature, onClose }: FeatureModalProps) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <Box variant="card" shadow="lg" rounded="lg" className="relative w-full max-w-md animate-fadeIn">
        <Box padding="lg" spacing="md">
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          
          <Box variant="flex" spacing="md" className="items-center">
            <div className="rounded-lg bg-gray-100 p-3 flex-shrink-0">
              <feature.icon className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
          </Box>
          
          <p className="text-gray-600">{feature.learnMore}</p>
          
          <Box className="mt-4">
            <Button
              variant="primary"
              fullWidth
              onClick={onClose}
            >
              Got it
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );

  return (
    <Box 
      variant="section"
      className="bg-white relative overflow-hidden"
      ref={sectionRef}
      aria-labelledby="features-heading"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover opacity-20"
          playsInline
          muted
          loop
          preload="none"
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        >
          <source src="https://ik.imagekit.io/appraisily/Videos/hero4.mp4?updatedAt=1731840454419" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 z-0" />

      <Box variant="content" className="relative z-10">
        <Box direction="col" spacing="md" className="max-w-3xl mx-auto text-center mb-12">
          <div 
            className="absolute -inset-x-4 -inset-y-2 bg-gray-100 blur-2xl rounded-3xl" 
            aria-hidden="true"
          />
          <h2 
            id="features-heading"
            className="relative text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6"
          >
            Why Our Certified Appraisers Deliver Unmatched Value
          </h2>
          <p className="relative text-lg leading-8 text-gray-600 font-medium">
            Museum-grade analysis, 24–48h turnaround, and reports accepted by top institutions
          </p>
        </Box>

        {/* Social proof above feature grid */}
        <Box variant="flex" className="flex-wrap justify-center gap-6 mt-8 mb-12">
          {testimonialSnippets.map((testimonial, index) => (
            <span 
              key={index}
              className="inline-flex items-center rounded-full font-medium border border-gray-200 bg-white text-gray-700 py-1.5 px-3 text-sm"
            >
              <span className="text-gray-700 italic mr-1">"{testimonial.quote}"</span>
              <span className="text-gray-500 text-xs">– {testimonial.author}</span>
            </span>
          ))}
        </Box>

        <Box className="mx-auto mt-12 max-w-2xl lg:max-w-none">
          <Box 
            variant="grid"
            className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
            role="list"
            aria-labelledby="features-heading"
          >
            {features.map((feature, index) => (
              <li key={feature.title}>
                <Box 
                  variant="card" 
                  padding="md" 
                  spacing="md" 
                  className="h-full flex flex-col group hover:shadow-md transition-shadow duration-200"
                >
                  <Box variant="flex" spacing="md" className="items-center">
                    <div 
                      className="rounded-lg bg-gray-100 p-2.5 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  </Box>
                  
                  {/* Benefit text - simplified */}
                  <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 ring-1 ring-inset ring-gray-300/30 mb-3">
                    {feature.benefit}
                  </span>
                  
                  {/* Description */}
                  <p className="text-sm leading-6 text-gray-600 flex-grow">{feature.description}</p>
                  
                  {/* Learn More interaction */}
                  <button 
                    onClick={() => setActiveModal(index)}
                    className="mt-4 text-xs font-medium text-gray-700 hover:text-gray-900 inline-flex items-center justify-start"
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    Learn More
                    <ArrowRight size={12} className="ml-1 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </Box>
              </li>
            ))}
          </Box>
          
          {/* Primary and secondary CTAs */}
          <Box variant="flex" direction="col" className="sm:flex-row justify-center items-center gap-4 mt-12">
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
          </Box>
        </Box>
      </Box>

      {/* Feature modals */}
      {activeModal !== null && (
        <FeatureModal 
          feature={features[activeModal]} 
          onClose={() => setActiveModal(null)} 
        />
      )}
    </Box>
  );
}