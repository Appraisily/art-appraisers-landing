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
    useStaticImage: true
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
    useStaticImage: true
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
    useStaticImage: true
  },
  {
    title: 'Receive Your Digital Report',
    description: '24-48 h total',
    icon: FileText,
    timeline: 'Step 4',
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
    badgeClass: 'bg-gray-100 text-gray-700',
    image: 'https://ik.imagekit.io/appraisily/WebPage/step4.png?updatedAt=1745922349843&tr=w-800,h-600',
    imageAlt: 'Detailed expert appraisal report',
    useStaticImage: true
  }
];

export default function Process() {
  return (
    <section className="w-full relative overflow-hidden py-16 md:py-24 bg-white">
      {/* Background Pattern - subtle gray */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-gray-100 text-gray-700 mb-6">
            <Clock className="h-4 w-4 mr-2 text-blue-600" />
            24-48 Hour Turnaround
          </span>
          
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            From Upload to Report in Two Business Days
          </h2>
          
          <p className="text-lg leading-8 text-gray-600 font-medium">
            Our certified appraisers ensure accurate and timely evaluations within 24-48 hours
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mt-16 space-y-24">
          {/* Connecting line through all steps - changed to gray */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
          
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className={cn(
                'relative flex flex-col items-center md:items-stretch gap-12 md:gap-16',
                index % 2 === 0 
                  ? 'md:flex-row' 
                  : 'md:flex-row-reverse',
              )}
            >
              {/* Step number indicator on the timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-gray-400 z-10 flex items-center justify-center text-gray-700 font-bold text-lg hidden md:flex">
                {index + 1}
              </div>
              
              {/* Step Content */}
              <div className="w-full md:w-1/2 relative z-10">
                <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={cn(`flex h-14 w-14 items-center justify-center rounded-xl`, step.iconClass)}>
                      <step.icon className={cn(`h-7 w-7`, step.iconTextClass)} />
                    </div>
                    
                    <div className="flex flex-col space-y-1">
                      <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", step.badgeClass)}>
                        {step.timeline}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mt-4">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-600">{step.description}</p>
                </div>
              </div>

              {/* Step Image */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-md bg-gray-100 aspect-[4/3] group">
                  {step.useStaticImage ? (
                    // Direct img tag for static images from ImageKit
                    <img 
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      width={800}
                      height={600}
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
                          width={800}
                          height={600}
                          loading="lazy"
                        />
                      }
                    />
                  )}
                  
                  {/* Elegant overlay with gradient - more subtle */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button - Updated with neutral colors and blue accent */}
        <div className="mt-20 flex justify-center">
          <a 
            href="https://appraisily.com/start"
            className="inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 w-full max-w-md text-lg px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus:ring-blue-600 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Start My 5-Minute Submission
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}