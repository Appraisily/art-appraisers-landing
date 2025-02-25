import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Process from '../components/sections/Process';
import RecentAppraisals from '../components/sections/RecentAppraisals';
import SuccessStories from '../components/sections/SuccessStories';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Experts from '../components/Experts';
import TrustFooter from '../components/TrustFooter';
import MobileNav from '../components/MobileNav';

export default function ArtAppraiser() {
  useEffect(() => {
    // Push page view to GTM
    window.dataLayer?.push({
      event: 'pageview',
      page: {
        title: 'Professional Art Appraisers',
        path: '/art-appraiser'
      }
    });
  }, []);

  return (
    <div className="bg-white relative">
      <MobileNav />
      <Hero />
      <Features />
      <div id="process">
        <Process />
      </div>
      <RecentAppraisals />
      <SuccessStories />
      <div id="why-choose-us">
        <WhyChooseUs />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="experts">
        <Experts />
      </div>
      <div id="contact">
        <TrustFooter />
      </div>
      
      {/* Mobile Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href="https://appraisily.com/start"
          aria-label="Start appraisal"
          className="flex items-center justify-center gap-2 h-14 w-14 rounded-full bg-primary shadow-lg hover:bg-primary/90 transition-all duration-200 text-white"
        >
          <ArrowRight className="h-6 w-6" />
        </a>
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-md py-1 px-3 opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Start Appraisal
        </div>
      </div>
    </div>
  );
}