import React from 'react';
import { Check, ArrowRight, MessageCircle, Mail } from 'lucide-react';
import { Container, Section } from '../core/Container';
import Button from '../core/Button';
import Badge from '../core/Badge';
import collectionGridImage from '../../images/collections/collection-grid.jpg';
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
    <section id="bulk-appraisal" className="py-20 bg-blue-50/50 relative" aria-labelledby="bulk-appraisal-heading">
      {/* Background pattern - more subtle and different from hero */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-30" />
      
      {/* Decorative elements - different from hero */}
      <div className="absolute top-0 right-0 w-1/3 h-40 bg-gradient-to-b from-blue-100/30 to-transparent rounded-bl-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-32 bg-gradient-to-t from-blue-100/30 to-transparent rounded-tr-3xl"></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Collection Image - Left Side */}
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={collectionGridImage}
                alt="Assorted fine art and antique pieces laid out for appraisal"
                className="w-full aspect-[16/9] object-cover transition-transform duration-500 hover:scale-105"
                width={800}
                height={450}
                loading="lazy"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
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
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="primary">USPAP-Compliant</Badge>
              <Badge variant="primary">ISO-Certified Valuers</Badge>
              <Badge variant="accent">Money-Back Guarantee</Badge>
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
                  <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: benefit }} />
                </li>
              ))}
            </ul>
            
            {/* Primary CTA Button - Changed to blue */}
            <div className="mt-8">
              <a 
                href="/bulk-appraisal/upload"
                onClick={handleBulkAppraisalClick}
                className={cn(
                  "inline-flex items-center justify-center font-semibold rounded-lg px-6 py-3 shadow-lg",
                  "bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200"
                )}
                role="button"
              >
                Start Bulk Appraisal
                <ArrowRight className="ml-2 h-4.5 w-4.5" />
              </a>
              
              {/* Secondary Link - Changed to email link */}
              <a
                href={`mailto:${expertEmailAddress}?subject=Bulk%20Appraisal%20Question`}
                className="mt-4 text-blue-600 hover:text-blue-800 inline-flex items-center gap-2 font-medium"
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