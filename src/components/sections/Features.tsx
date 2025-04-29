import React, { useState } from 'react';
import { Award, Shield, FileCheck, Clock, Users, ArrowRight, X } from 'lucide-react';
import LazyVideo from '../core/media/LazyVideo';
import { Container, Section } from '../core/Container';
import { Card, CardHeader, CardTitle, CardContent } from '../core/Card';
import Button from '../core/Button';
import Badge from '../core/Badge';
import { cn } from '../../utils/cn';

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

  // Modal component for "Learn More" functionality
  const FeatureModal = ({ feature, onClose }: FeatureModalProps) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <Card className="relative w-full max-w-md animate-fadeIn">
        <CardHeader>
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-3 mb-1">
            <div className="rounded-lg bg-blue-600 p-3 flex-shrink-0">
              <feature.icon className="h-6 w-6 text-white" />
            </div>
            <CardTitle>{feature.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{feature.learnMore}</p>
          <div className="mt-4">
            <Button
              variant="primary"
              fullWidth
              onClick={onClose}
            >
              Got it
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <Section
      className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Video Background - Reduced opacity and enhanced overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/95 via-gray-50/90 to-white/95 z-10" />
        <LazyVideo
          src="https://ik.imagekit.io/appraisily/Videos/hero4.mp4?updatedAt=1731840454419"
          poster="https://placehold.co/1920x1080/333/fff?text=Art+Appraisal+Video"
          fallbackImage="https://placehold.co/1920x1080/333/fff?text=Art+Appraisal+Video"
          className="h-full w-full object-cover opacity-20"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          rootMargin="200px 0px"
          disableMobileAutoplay={true} // Performance improvement for mobile
        />
      </div>

      <Container>
        <div className="relative mx-auto max-w-3xl text-center mb-12">
          <div 
            className="absolute -inset-x-4 -inset-y-2 bg-blue-600/10 blur-2xl rounded-3xl" 
            aria-hidden="true"
          />
          <h2 
            id="features-heading"
            className="relative text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6"
          >
            Why Our Certified Appraisers Deliver Unmatched Value
          </h2>
          <p className="relative text-lg leading-8 text-gray-700 font-medium">
            Museum-grade analysis, 24–48h turnaround, and reports accepted by top institutions
          </p>
        </div>

        {/* Social proof above feature grid */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 mb-12">
          {testimonialSnippets.map((testimonial, index) => (
            <Badge 
              key={index}
              variant="outline"
              className="py-1.5 px-3 text-sm"
            >
              <span className="text-gray-700 italic mr-1">"{testimonial.quote}"</span>
              <span className="text-gray-500 text-xs">– {testimonial.author}</span>
            </Badge>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl lg:max-w-none">
          <ul 
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
            role="list"
            aria-labelledby="features-heading"
          >
            {features.map((feature, index) => (
              <li key={feature.title}>
                <Card 
                  variant="feature" 
                  className="h-full flex flex-col group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 p-2.5 flex-shrink-0 shadow-md"
                      aria-hidden="true"
                    >
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white drop-shadow-sm" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  
                  {/* Benefit text - highlighted */}
                  <Badge variant="primary" className="inline-block mb-3 bg-blue-50">
                    {feature.benefit}
                  </Badge>
                  
                  {/* Description */}
                  <p className="text-sm leading-6 text-gray-600 flex-grow">{feature.description}</p>
                  
                  {/* Learn More interaction */}
                  <Button 
                    variant="text"
                    onClick={() => setActiveModal(index)}
                    className="mt-4 text-xs justify-start"
                    endIcon={<ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />}
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    Learn More
                  </Button>
                </Card>
              </li>
            ))}
          </ul>
          
          {/* Primary and secondary CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <Button 
              variant="highConversion"
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
      </Container>

      {/* Feature modals */}
      {activeModal !== null && (
        <FeatureModal 
          feature={features[activeModal]} 
          onClose={() => setActiveModal(null)} 
        />
      )}
    </Section>
  );
}