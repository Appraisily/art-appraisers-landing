import React from 'react';
import { Mail, Phone, Shield, Clock, Award } from 'lucide-react';
import Logo from '../Logo';

const trustIcons = [
  { icon: Shield, text: 'Secure & Confidential' },
  { icon: Clock, text: 'Fast 24-48 Hour Service' },
  { icon: Award, text: 'Certified Professionals' },
];

export default function AdFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a 
            href="mailto:info@appraisily.com" 
            className="text-gray-400 hover:text-white flex items-center gap-2"
          >
            <Mail className="h-5 w-5" />
            <span className="hidden sm:inline">info@appraisily.com</span>
          </a>
          <a 
            href="tel:+18005551212" 
            className="text-gray-400 hover:text-white flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            <span className="hidden sm:inline">1-800-555-1212</span>
          </a>
        </div>
        
        <div className="mt-8 md:order-1 md:mt-0">
          <Logo variant="light" size="md" />
          <p className="mt-2 text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Appraisily. All rights reserved.
          </p>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {trustIcons.map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-primary/80" />
                <span className="text-xs text-gray-400">{item.text}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>Results may vary. Appraisals are based on market data and expert analysis at the time of valuation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 