import React from 'react';
import { Check, ArrowRight, MessageCircle, Mail } from 'lucide-react';
import { Container, Section } from '../core/Container';
import Button from '../core/Button';
import Badge from '../core/Badge';
import { cn } from '../../utils/cn';

/**
 * BulkAppraisalSection Component
 * 
 * A dedicated section highlighting the Bulk Appraisal service for users with art collections.
 * This follows the specifications outlined in bulk-appraisal-section-spec.md.
 */
export default function BulkAppraisalSection() {
  // Email address for the "Talk to an expert" link
  const expertEmailAddress = 'experts@appraisily.com';

  const handleBulkAppraisalClick = () => {
    // Track click event
    window.dataLayer?.push({
      event: 'cta_click',
      cta_type: 'bulk_appraisal',
      event_action: 'bulk_appraisal_click'
    });
    
    // Analytics event - Removing direct gtag call, using dataLayer instead
  };

  return (
    <section id="bulk-appraisal" className="py-20 bg-gray-50/70 relative" aria-labelledby="bulk-appraisal-heading">
      {/* Removed dot pattern since we're restricting it to the Features section */}
      
      {/* Decorative elements - more subtle in grayscale */}
      <div className="absolute top-0 right-0 w-1/3 h-40 bg-gradient-to-b from-gray-200/30 to-transparent rounded-bl-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-32 bg-gradient-to-t from-gray-200/30 to-transparent rounded-tr-3xl"></div>
      
      <div className="relative z-10">
        {/* Mobile background image (visible only on mobile) */}
        <div className="md:hidden absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 w-full h-full" 
            style={{
              backgroundImage: "url('https://ik.imagekit.io/appraisily/WebPage/barn')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundFallback: '#f9fafb'
            }}
            role="img"
            aria-label="Collection of artwork in a gallery setting"
          ></div>
          {/* White glow overlay for better text contrast on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/60 backdrop-blur-sm"></div>
        </div>

        <div className="flex flex-col md:flex-row relative">
          {/* Full-width Barn Image as Background - Left Side (desktop only) */}
          <div className="hidden md:block w-full md:w-1/2 relative h-auto md:h-[650px]">
            <div 
              className="absolute inset-0 w-full h-full" 
              style={{
                backgroundImage: "url('https://ik.imagekit.io/appraisily/WebPage/barn')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundFallback: '#f9fafb'
              }}
              role="img"
              aria-label="Collection of artwork in a gallery setting"
            ></div>
          </div>
          
          {/* Content - Right Side on desktop, overlaid on image for mobile */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
            <h2 id="bulk-appraisal-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight md:leading-tight relative">
              Have a Whole Collection? Let Us Appraise Everything—Fast.
            </h2>
            
            <p className="mt-4 text-lg text-gray-700 max-w-xl relative">
              Upload all your images once, relax, and get a complete, expert-signed appraisal report for every artwork or antique within 48 hours.
            </p>
            
            {/* Trust Badges - Changed to grayscale */}
            <div className="flex flex-wrap gap-2 mt-2 relative">
              <Badge variant="outline">USPAP-Compliant</Badge>
              <Badge variant="outline">ISO-Certified Valuers</Badge>
              <Badge variant="outline">Money-Back Guarantee</Badge>
            </div>
            
            {/* Benefits Bullet List */}
            <ul className="mt-6 space-y-3 text-base text-gray-700 relative">
              {[
                'Save up to <strong>20 %</strong> on multi-item appraisals',
                'Individual descriptions, condition notes, and valuations',
                'Insurance-ready PDF & CSV report delivered via email',
                'Dedicated support liaison for collections over 30 items',
                '100 % money-back accuracy guarantee'
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-gray-800 flex-shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: benefit }} />
                </li>
              ))}
            </ul>
            
            {/* CTA Buttons - Now with increased spacing and black/white styling */}
            <div className="mt-8 flex flex-col space-y-6 relative">
              <a 
                href="/bulk-appraisal/upload"
                onClick={handleBulkAppraisalClick}
                className={cn(
                  "inline-flex items-center justify-center font-semibold rounded-lg px-6 py-3.5 sm:py-3 shadow-lg",
                  "bg-gray-900 hover:bg-gray-800 text-white transition-all duration-200"
                )}
                role="button"
              >
                Start Bulk Appraisal
                <ArrowRight className="ml-2 h-4.5 w-4.5" />
              </a>
              
              {/* Secondary Link - Now with more spacing and gray styling */}
              <a
                href={`mailto:${expertEmailAddress}?subject=Bulk%20Appraisal%20Question`}
                className="text-gray-700 hover:text-gray-900 inline-flex items-center gap-2 font-medium"
              >
                <Mail className="h-4 w-4" />
                Talk to an expert first
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 