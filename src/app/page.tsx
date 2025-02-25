import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="bg-white">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  );
} 