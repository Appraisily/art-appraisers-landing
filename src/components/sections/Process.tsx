import React from 'react';
import { Upload, Search, TrendingUp, FileText, Clock, ArrowRight } from 'lucide-react';
import LazyImage from '../core/media/LazyImage';

const steps = [
  {
    title: 'Submit Your Artwork to Your Dedicated Appraiser',
    description: 'Upload high-quality images and documentation to your assigned expert.',
    icon: Upload,
    timeline: 'Immediate',
    iconClass: 'bg-blue-100',
    iconTextClass: 'text-blue-600',
    badgeClass: 'bg-blue-50 text-blue-700',
    image: 'https://ik.imagekit.io/appraisily/WebPage/step1.png',
    imageAlt: 'Submit your artwork to your dedicated appraiser'
  },
  {
    title: 'Our Experts Analyze & Authenticate',
    description: 'Your appraiser examines your items using advanced analytical tools and expertise.',
    icon: Search,
    timeline: 'Minutes',
    iconClass: 'bg-indigo-100',
    iconTextClass: 'text-indigo-600',
    badgeClass: 'bg-indigo-50 text-indigo-700',
    image: 'https://ik.imagekit.io/appraisily/WebPage/step2.png',
    imageAlt: 'Experts analyzing and authenticating artwork'
  },
  {
    title: 'Appraiser Conducts Market Valuation',
    description: 'Your expert evaluates current market trends and historical significance of your item.',
    icon: TrendingUp,
    timeline: '12 Hours',
    iconClass: 'bg-purple-100',
    iconTextClass: 'text-purple-600',
    badgeClass: 'bg-purple-50 text-purple-700',
    image: 'https://ik.imagekit.io/appraisily/WebPage/step3.png',
    imageAlt: 'Appraiser conducting market valuation'
  },
  {
    title: 'Receive Your Detailed Expert Report',
    description: 'Get your comprehensive appraisal report with professional certification.',
    icon: FileText,
    timeline: '24 Hours',
    iconClass: 'bg-green-100',
    iconTextClass: 'text-green-600',
    badgeClass: 'bg-green-50 text-green-700',
    image: 'https://ik.imagekit.io/appraisily/WebPage/step4.png',
    imageAlt: 'Detailed expert appraisal report'
  }
];

export default function Process() {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50 py-24 sm:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
      
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-blue-50 rounded-full shadow-sm">
              <Clock className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-primary font-semibold">24-48 Hour Turnaround</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Fast & Efficient, Appraiser-Led Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our certified appraisers ensure accurate and timely evaluations within 24-48 hours
            </p>
          </div>

          {/* Process Steps */}
          <div className="mt-16 space-y-16">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className={`relative ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:flex lg:items-center lg:gap-12`}
              >
                {/* Step Content */}
                <div className="lg:w-1/2 relative">
                  {/* Connecting Line (except for last item) - Moved inside step content */}
                  {index < steps.length - 1 && (
                    <div className="absolute -left-7 top-[4.5rem] bottom-[-8rem] w-px bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 lg:hidden" />
                  )}
                  
                  <div className="relative bg-white lg:bg-transparent p-6 lg:p-0 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${step.iconClass}`}>
                          <step.icon className={`h-7 w-7 ${step.iconTextClass}`} />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                          Step {index + 1}
                        </span>
                        <span className={`mt-1 inline-flex items-center rounded-full ${step.badgeClass} px-2.5 py-1 text-xs font-medium`}>
                          {step.timeline}
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-lg text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Step Image */}
                <div className="mt-8 lg:mt-0 lg:w-1/2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl bg-gray-100 group">
                    <LazyImage
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      width={1456}
                      height={816}
                      placeholderColor="#f9fafb"
                      blurAmount={10}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <a
              href="https://appraisily.com/start"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
            >
              Start with Your Appraiser
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}