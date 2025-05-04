import React, { useEffect } from 'react';
// SEO Component
import SEO from '../components/utility/SEO';
import { ART_APPRAISER_SEO } from '../config/seo.config';

// Critical components above the fold (eager loading)
import MainHero from '../components/sections/MainHero';
import TrustBar from '../components/features/trust/TrustBar';
import Features from '../components/sections/Features';
import LazyComponent from '../components/utility/LazyComponent';

// Regular imports for components below the fold
// We use regular imports since LazyComponent will handle visibility
import Process from '../components/sections/Process';
import ValuerAnalytics from '../components/sections/ValuerAnalytics';
import RecentAppraisals from '../components/sections/RecentAppraisals';
import SuccessStories from '../components/sections/SuccessStories';
import Services from '../components/features/services/Services';
import Experts from '../components/features/experts/Experts';
import TrustFooter from '../components/features/trust/TrustFooter';

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
        import('../components/sections/ValuerAnalytics');
      }, { timeout: 2000 });
    }
  }, []);

  return (
    <>
      {/* SEO Head */}
      <SEO {...ART_APPRAISER_SEO} />
      
      {/* Critical Components - Loaded Eagerly */}
      <main className="relative">
        <MainHero />
        <TrustBar />
        <Features />
        
        {/* Below-the-fold Components with Lazy Loading */}
        
        <LazyComponent threshold={0.1} rootMargin="100px">
          <Process />
        </LazyComponent>
        
        <LazyComponent threshold={0.1} rootMargin="100px">
          <ValuerAnalytics />
        </LazyComponent>
        
        <LazyComponent threshold={0.1} rootMargin="100px">
          <RecentAppraisals />
        </LazyComponent>
        
        <LazyComponent threshold={0.1} rootMargin="100px">
          <SuccessStories />
        </LazyComponent>
        
        <LazyComponent threshold={0.1} rootMargin="100px">
          <Services />
        </LazyComponent>
        
        <LazyComponent threshold={0.1} rootMargin="100px" id="experts">
          <Experts />
        </LazyComponent>
        
        <LazyComponent threshold={0.1} rootMargin="100px" id="trust-footer">
          <TrustFooter />
        </LazyComponent>
      </main>
    </>
  );
}