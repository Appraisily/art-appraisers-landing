import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const offerPoints = [
  "Professional appraisal report in 24-48 hours",
  "Certified by ISA/USPAP appraisers",
  "Detailed market analysis and comparables",
  "Accepted by all major insurance companies",
  "Money back guarantee if not satisfied"
];

export default function CTASection() {
  return (
    <div className="relative isolate overflow-hidden bg-primary py-16 sm:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg
          className="absolute left-0 top-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="70"
              height="70"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:max-w-xl">
              <div className="inline-flex items-center gap-x-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white ring-1 ring-inset ring-white/20">
                <span>Limited Time Offer</span>
                <span className="font-bold bg-white/20 -m-1 px-2 py-1 rounded-full">10% OFF</span>
              </div>
              
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get Your Art Professionally Appraised Today
              </h2>
              
              <p className="mt-6 text-lg leading-8 text-white/80">
                Don't leave your valuable artwork unprotected. Our expert team provides accurate, reliable appraisals at an affordable price. Starting at just $59.
              </p>
              
              <div className="mt-8 grid gap-3">
                {offerPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 rounded-full bg-white/20 p-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm text-white">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 lg:ml-12 lg:flex-shrink-0">
              <div className="rounded-2xl bg-white py-10 px-8 shadow-xl ring-1 ring-gray-900/5 sm:px-10">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Start Your Appraisal
                </h3>
                <p className="mt-2 text-base leading-8 text-gray-600">
                  Upload photos of your artwork and receive a professional appraisal in as little as 24 hours.
                </p>
                
                <div className="mt-8 flex flex-col gap-y-4">
                  <div className="flex items-center justify-between border-b border-gray-900/10 pb-4">
                    <div className="text-sm text-gray-500">Standard Appraisal</div>
                    <div className="text-lg font-semibold text-gray-900">$59</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-900 font-medium">Today's Special Offer:</span>
                    <span className="text-sm text-primary font-bold">10% OFF</span>
                  </div>
                  
                  <a
                    href="https://appraisily.com/start/"
                    className="rounded-lg bg-primary px-5 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Get Started Now
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  
                  <div className="mt-2 text-center text-xs text-gray-500">
                    No credit card required to start • Satisfaction guaranteed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 