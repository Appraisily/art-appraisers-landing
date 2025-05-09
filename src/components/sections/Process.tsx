import React from 'react';
import { Upload, Search, TrendingUp, FileText, Clock, ArrowRight } from 'lucide-react';
import LazyImage from '../core/media/LazyImage';
import LottieAnimation from '../core/media/LottieAnimation';
import Button from '../core/Button';
import Badge from '../core/Badge';
import { Card } from '../core/Card';
import { Box, backgroundClasses, spacingClasses, layoutClasses } from '../core/layout';
import { cn } from '../../utils/cn';

const steps = [
  {
    title: 'Share Photos & Story',
    description: '5 min',
    icon: Upload,
    timeline: 'Step 1',
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
    badgeClass: 'bg-gray-100 text-gray-700',
    image: 'https://ik.imagekit.io/appraisily/WebPage/step1.png',
    imageAlt: 'Share photos and story of your artwork',
    useStaticImage: true,
    additionalText: 'Upload photos of your artwork from all angles and share any details you know about the piece.'
  },
  {
    title: 'Expert Review & Authentication',
    description: 'same day',
    icon: Search,
    timeline: 'Step 2',
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
    badgeClass: 'bg-gray-100 text-gray-700',
    image: 'https://ik.imagekit.io/appraisily/WebPage/lab_photo.png',
    imageAlt: 'Experts analyzing and authenticating artwork',
    useStaticImage: true,
    additionalText: 'Our experts examine your artwork, identify the object, and authenticate its origin and period.'
  },
  {
    title: 'Market Analysis & Valuation',
    description: 'within 12 h',
    icon: TrendingUp,
    timeline: 'Step 3',
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
    badgeClass: 'bg-gray-100 text-gray-700',
    image: 'https://ik.imagekit.io/appraisily/WebPage/step3.png?updatedAt=1745922349843&tr=w-800,h-600',
    imageAlt: 'Appraiser conducting market valuation',
    useStaticImage: true,
    additionalText: 'We research comparable sales and analyze current market conditions to determine accurate value.'
  },
  {
    title: 'Receive Your Digital Report',
    description: 'less than 24h total',
    icon: FileText,
    timeline: 'Step 4',
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
    badgeClass: 'bg-gray-100 text-gray-700',
    image: 'https://ik.imagekit.io/appraisily/WebPage/step4.png?updatedAt=1745922349843&tr=w-800,h-600',
    imageAlt: 'Detailed expert appraisal report',
    useStaticImage: true,
    additionalText: 'You receive a comprehensive appraisal report with detailed market analysis and valuation.'
  }
];

export default function Process() {
  return (
    <Box variant="section">
      {/* Enhanced layered background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 opacity-80"></div>
      
      <div className="absolute inset-0 pattern-bg"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>
      
      {/* Diagonal lines pattern - very subtle */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'repeating-linear-gradient(45deg, #000000, #000000 1px, transparent 1px, transparent 40px)' 
      }}></div>
      
      {/* Subtle gradient accents */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[radial-gradient(circle_at_50%_50%,#00000005_0%,transparent_70%)]"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_50%_50%,#00000005_0%,transparent_70%)]"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_50%_50%,#00000003_0%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with subtle highlight behind it */}
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16 relative">
          <div className="absolute inset-0 -inset-x-8 -inset-y-4 bg-white/70 blur-xl rounded-3xl"></div>
          
          <div className="relative">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-base font-medium bg-blue-100 text-blue-800 mb-6">
              <Clock className="h-4 w-4 mr-2 text-blue-600" />
              Fast Expert Evaluations
            </span>
            
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              From Upload to Report in Less Than 24 Hours
            </h2>
            
            <p className="text-lg leading-8 text-gray-600 font-medium">
              Our certified appraisers ensure accurate and timely evaluations without compromising quality
            </p>
          </div>
        </div>

        {/* Process Steps - Alternating left/right layout */}
        <div className="relative mt-20 space-y-24">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className={cn(
                "relative flex flex-col md:flex-row items-center gap-8 md:gap-12",
                // Reverse order for even-indexed steps on desktop
                index % 2 !== 0 && "md:flex-row-reverse"
              )}
            >
              {/* Step number - positioned to left or right depending on layout */}
              <div className={cn(
                "absolute z-20 flex items-center justify-center rounded-full bg-white shadow-lg border-2 border-blue-600 text-blue-800 font-bold",
                "w-14 h-14 md:w-16 md:h-16 text-xl",
                "top-0 left-1/2 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2",
                // Position left or right depending on step index
                index % 2 === 0 
                  ? "md:left-auto md:right-[calc(50%-16px)] md:translate-x-1/2" 
                  : "md:left-[calc(50%-16px)] md:-translate-x-1/2"
              )}>
                {index + 1}
              </div>
              
              {/* Content Column */}
              <div className="w-full md:w-1/2 mt-10 md:mt-0">
                <div className={cn(
                  "bg-white shadow-md rounded-2xl p-6 md:p-7 border border-gray-200 transition-all duration-300 hover:shadow-lg",
                  // Add subtle directional indicator based on index
                  index % 2 === 0 
                    ? "md:mr-6 md:rounded-tr-none" 
                    : "md:ml-6 md:rounded-tl-none"
                )}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={cn(
                      "flex items-center justify-center rounded-xl", 
                      "bg-blue-100",
                      "h-14 w-14 md:h-16 md:w-16"
                    )}>
                      <step.icon className={cn(
                        "text-blue-700",
                        "h-7 w-7 md:h-8 md:w-8"
                      )} />
                    </div>
                    
                    <div className="flex flex-col space-y-1">
                      <span className={cn(
                        "inline-flex items-center px-3 py-1.5 rounded-full font-medium", 
                        "bg-gray-100 text-gray-700",
                        "text-base md:text-lg"
                      )}>
                        {step.timeline}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className={cn(
                    "font-bold text-gray-900 mt-4 mb-1.5",
                    "text-xl md:text-2xl"
                  )}>
                    {step.title}
                  </h3>
                  <p className={cn(
                    "text-gray-600 mb-3",
                    "text-lg md:text-xl font-medium"
                  )}>
                    {step.description}
                  </p>
                  
                  {/* Additional description text for all steps */}
                  <p className="text-gray-700 text-base md:text-lg">
                    {step.additionalText}
                  </p>
                </div>
              </div>

              {/* Image Column */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-md bg-gray-100 aspect-[4/3] group">
                  {step.useStaticImage ? (
                    // Direct img tag for static images from ImageKit
                    <img 
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      width={600}
                      height={450}
                      loading="lazy"
                    />
                  ) : (
                    // Animation with fallback
                    <LottieAnimation 
                      src={`/lotties/step${index + 1}.json`}
                      className="w-full h-full"
                      loop={true}
                      autoplay={true}
                      fallback={
                        <img 
                          src={step.image}
                          alt={step.imageAlt}
                          className="w-full h-full object-cover"
                          width={600}
                          height={450}
                          loading="lazy"
                        />
                      }
                    />
                  )}
                  
                  {/* Caption overlay for all steps */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-3 md:p-4 text-white">
                    <p className="text-base md:text-lg font-medium">
                      {step.imageAlt}
                    </p>
                  </div>
                  
                  {/* Elegant overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Connecting line between steps */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 md:left-auto md:top-1/2 h-24 md:h-0.5 w-0.5 md:w-full bg-gray-200 -bottom-24 md:bottom-auto transform -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA Button - Updated to match "Find My Expert Appraiser" style */}
        <div className="mt-20 flex justify-center">
          <Button 
            variant="primary"
            as="a"
            href="https://appraisily.com/start"
            className="bg-gray-900 hover:bg-gray-800 text-white py-3 px-8 text-xl rounded-lg w-full max-w-md shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center font-medium"
          >
            Start My 5-Minute Submission
            <ArrowRight className="h-6 w-6 ml-2" />
          </Button>
        </div>
      </div>
    </Box>
  );
}