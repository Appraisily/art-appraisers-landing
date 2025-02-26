import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import LeadCapture from '../components/LeadCapture';
import TrustBar from '../components/TrustBar';
import Features from '../components/sections/Features';
import Process from '../components/sections/Process';
import ValueProposition from '../components/ValueProposition';
import RecentAppraisals from '../components/sections/RecentAppraisals';
import SuccessStories from '../components/sections/SuccessStories';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Experts from '../components/Experts';
import TrustFooter from '../components/TrustFooter';

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
    <div className="bg-white">
      <Hero />
      <LeadCapture />
      <TrustBar />
      <Features />
      <Process />
      <ValueProposition />
      <RecentAppraisals />
      <SuccessStories />
      <WhyChooseUs />
      <Services />
      <Experts />
      <TrustFooter />
    </div>
  );
}