import React, { useEffect } from 'react';
// SEO Component
import SEO from '../components/SEO';
import { ART_APPRAISER_SEO } from '../config/seo.config';

// Critical components above the fold (eager loading)
import Hero from '../components/sections/Hero';
import TrustBar from '../components/TrustBar';
import Features from '../components/sections/Features';
import LazyComponent from '../components/LazyComponent';

// Regular imports for components below the fold
// We use regular imports since LazyComponent will handle visibility
import Process from '../components/sections/Process';
import ValueProposition from '../components/ValueProposition';
import RecentAppraisals from '../components/sections/RecentAppraisals';
import SuccessStories from '../components/sections/SuccessStories';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Experts from '../components/Experts';
import TrustFooter from '../components/TrustFooter';

// Add type declaration for window.dataLayer
declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export default function ArtAppraiser() {
  useEffect(() => {
    // Push page view to GTM
    window.dataLayer?.push({
      event: 'pageview',
      page: {
        title: ART_APPRAISER_SEO.title,
        description: ART_APPRAISER_SEO.description,
        path: window.location.pathname
      }
    });
    
    // Prefetch components when the page is inactive
    // This improves perception of speed for components that will soon be visible
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        // Dynamic import for prefetching during idle time
        import('../components/sections/Process');
        import('../components/ValueProposition');
      }, { timeout: 2000 });
    }
  }, []);

  return (
    <>
      {/* SEO Head */}
      <SEO {...ART_APPRAISER_SEO} />
      
      {/* Critical Components - Loaded Eagerly */}
      <main className="relative">
        <Hero />
        <TrustBar />
        <Features />
        
        {/* Below-the-fold Components with Lazy Loading */}
        <LazyComponent threshold={0.1} rootMargin="100px">
          <Process />
        </LazyComponent>
        
        <LazyComponent threshold={0.1} rootMargin="100px">
          <ValueProposition />
        </LazyComponent>
        
        <LazyComponent threshold={0.1} rootMargin="100px">
          <RecentAppraisals />
        </LazyComponent>
        
        <LazyComponent threshold={0.1} rootMargin="100px">
          <SuccessStories />
        </LazyComponent>
        
        <LazyComponent threshold={0.1} rootMargin="100px">
          <WhyChooseUs />
        </LazyComponent>
        
        <LazyComponent threshold={0.1} rootMargin="100px">
          <Services />
        </LazyComponent>
        
        <LazyComponent threshold={0.1} rootMargin="100px">
          <Experts />
        </LazyComponent>
        
        <LazyComponent threshold={0.1} rootMargin="100px">
          <TrustFooter />
        </LazyComponent>
      </main>
    </>
  );
}