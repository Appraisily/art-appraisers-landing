"use client";

import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Shield, 
  HeartHandshake, 
  Landmark, 
  Scale, 
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    name: 'Insurance Appraisals',
    description: 'Accurate valuations for insurance coverage of your art collection, with comprehensive documentation for your policy.',
    icon: ShieldCheck,
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Estate Appraisals',
    description: 'Expert valuations for estate planning, probate, and tax purposes, ensuring fair distribution of assets.',
    icon: Landmark,
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'Donation Appraisals',
    description: 'IRS-compliant appraisals for charitable donations, maximizing tax benefits while ensuring regulatory compliance.',
    icon: HeartHandshake,
    color: 'from-pink-500 to-pink-600',
  },
  {
    name: 'Equitable Distribution',
    description: 'Fair market valuations for divorce settlements and property division, providing objective assessments.',
    icon: Scale,
    color: 'from-amber-500 to-amber-600',
  },
  {
    name: 'Resale Appraisals',
    description: 'Market analysis and valuations to help you determine optimal pricing for art sales in the current market.',
    icon: Shield,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    name: 'Expert Witness Services',
    description: 'Professional testimony and documentation for legal proceedings involving art valuation disputes.',
    icon: Award,
    color: 'from-red-500 to-red-600',
  },
];

// Container variant for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Individual item variants
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-flex items-center justify-center gap-1.5 rounded-md bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 mb-4">
            <Award className="h-4 w-4" />
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Comprehensive Art Appraisal Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our team of certified appraisers provides accurate valuations for various purposes, 
            ensuring compliance with industry standards and regulations.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:max-w-none"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
            >
              {/* Background gradient accent */}
              <div className={`absolute right-0 top-0 h-24 w-24 -mr-8 -mt-8 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20`} />
              
              <div className="mb-5">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-sm`}>
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold leading-6 text-gray-900 mb-3">
                {service.name}
              </h3>
              
              <p className="text-base text-gray-600 mb-5">
                {service.description}
              </p>
              
              <div className="mt-auto">
                <a 
                  href={`#service-${index}`} 
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 group-hover:underline"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.a
            href="https://appraisily.com/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
} 