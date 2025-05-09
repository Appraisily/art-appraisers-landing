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
      cta_type: 'bulk_appraisal'
    });
    
    // Analytics event
    if (window.gtag) {
      window.gtag('event', 'bulk_appraisal_click');
    }
  };

  return (
    <section id="bulk-appraisal" className="py-20 bg-gray-50/70 relative" aria-labelledby="bulk-appraisal-heading">
      {/* Background pattern - subtle grid in black and white */}
      <div className="absolute inset-0 bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      
      {/* Decorative elements - more subtle in grayscale */}
      <div className="absolute top-0 right-0 w-1/3 h-40 bg-gradient-to-b from-gray-200/30 to-transparent rounded-bl-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-32 bg-gradient-to-t from-gray-200/30 to-transparent rounded-tr-3xl"></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Barn Collection Image - Left Side */}
          <div className="w-full md:w-1/2 h-full">
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-full" style={{ minHeight: '500px' }}>
              <img 
                src="https://ik.imagekit.io/appraisily/WebPage/barn"
                alt="Art-filled attic space with numerous paintings and artwork in rustic setting"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                style={{ objectPosition: 'center center' }}
                loading="lazy"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Content - Right Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
            <h2 id="bulk-appraisal-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Have a Whole Collection? Let Us Appraise Everything—Fast.
            </h2>
            
            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              Upload all your images once, relax, and get a complete, expert-signed appraisal report for every artwork or antique within 48 hours.
            </p>
            
            {/* Trust Badges - Changed to grayscale */}
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline">USPAP-Compliant</Badge>
              <Badge variant="outline">ISO-Certified Valuers</Badge>
              <Badge variant="outline">Money-Back Guarantee</Badge>
            </div>
            
            {/* Benefits Bullet List */}
            <ul className="mt-6 space-y-3 text-base text-gray-700">
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
            <div className="mt-8 flex flex-col space-y-6">
              <a 
                href="/bulk-appraisal/upload"
                onClick={handleBulkAppraisalClick}
                className={cn(
                  "inline-flex items-center justify-center font-semibold rounded-lg px-6 py-3 shadow-lg",
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
      </Container>
    </section>
  );
} 