import React from 'react';
import { Metadata } from 'next';
import AdHero from '../../components/ads/AdHero';
import TrustBar from '../../components/TrustBar';
import ServiceHighlights from '../../components/ads/ServiceHighlights';
import QuickValueProp from '../../components/ads/QuickValueProp';
import AdTestimonials from '../../components/ads/AdTestimonials';
import CTASection from '../../components/ads/CTASection';
import AdFooter from '../../components/ads/AdFooter';

export const metadata: Metadata = {
  title: 'Professional Art Appraisal Services | Online Art Valuation Experts',
  description: 'Get your artwork appraised by certified experts starting at $59. Fast, accurate art valuations for insurance, estate planning, and sales. 24-48 hour turnaround.',
};

export default function AdsLandingPage() {
  return (
    <main className="bg-white">
      <AdHero />
      <TrustBar />
      <QuickValueProp />
      <ServiceHighlights />
      <AdTestimonials />
      <CTASection />
      <AdFooter />
    </main>
  );
} 