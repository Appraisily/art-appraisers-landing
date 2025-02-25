"use client";

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const stats = [
  { id: 1, name: 'Appraisals Completed', value: '10,000+' },
  { id: 2, name: 'Customer Satisfaction', value: '99.8%' },
  { id: 3, name: 'Years Experience', value: '25+' },
];

const heroFeatures = [
  "Professional art appraisals",
  "USPAP compliant reports",
  "Fast turnaround times",
  "Competitive pricing"
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bgImages = [
    '/images/hero-bg-1.jpg',
    '/images/hero-bg-2.jpg',
    '/images/hero-bg-3.jpg',
  ];

  // Preload images for smoother transitions
  useEffect(() => {
    bgImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Automatic image rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative isolate overflow-hidden min-h-screen">
      {/* Background image with animated transitions */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 -z-10"
        >
          {/* Using native img for better control with Netlify deployment */}
          <img
            src={bgImages[currentImageIndex]}
            alt="Art collection"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading={currentImageIndex === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <MobileNav />
      <DesktopNav />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:pt-40 lg:pb-32 relative z-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-sm">
              <span className="block">Professional</span>
              <span className="block mt-2 text-blue-300">Art Appraisals</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 max-w-xl mx-auto lg:ml-0 lg:mr-0">
              Expert art appraisal services for insurance, estate planning, donations, and more. 
              Trusted by collectors, institutions, and art professionals nationwide.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href="https://appraisily.com/start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 flex items-center gap-2 group"
              >
                Start Your Appraisal
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg bg-white/10 backdrop-blur-sm px-6 py-3.5 text-base font-semibold text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 flex items-center gap-2 group"
              >
                Explore Services
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </div>
            
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-100 max-w-xl mx-auto lg:ml-0">
              {heroFeatures.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 flex-none text-blue-300" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:pl-10"
          >
            {/* Decorative elements */}
            <div className="absolute -left-4 -top-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -right-4 -bottom-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            
            {/* Stats card */}
            <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md p-6 lg:p-8 shadow-lg border border-white/20">
              <img
                src="/images/appraisal-image.jpg"
                alt="Art appraisal in progress"
                width="500"
                height="320"
                className="w-full h-64 object-cover rounded-lg shadow-md mb-8"
                loading="lazy"
              />
              
              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4 lg:gap-8">
                {stats.map((stat) => (
                  <motion.div 
                    key={stat.id}
                    whileHover={{ y: -5 }}
                    className="text-center p-4 rounded-lg bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10"
                  >
                    <div className="font-bold text-2xl lg:text-3xl text-white mb-1">{stat.value}</div>
                    <div className="text-xs lg:text-sm text-gray-300">{stat.name}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <div className="flex items-center justify-center gap-2 text-white mb-3">
                  <Award className="h-6 w-6 text-blue-300" />
                  <span className="font-semibold">Certified Appraisers</span>
                </div>
                <p className="text-sm text-gray-300">
                  Our team of experts provides accurate, compliant, and reliable appraisals 
                  that meet the highest industry standards.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 