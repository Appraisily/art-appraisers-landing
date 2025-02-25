import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Award } from 'lucide-react';
import Logo from './Logo';

const navigation = {
  main: [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Insurance Appraisals', href: '#' },
    { name: 'Estate Appraisals', href: '#' },
    { name: 'Donation Appraisals', href: '#' },
    { name: 'Resale Appraisals', href: '#' },
    { name: 'Equitable Distribution', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ],
};

const contactInfo = [
  { icon: Phone, text: '(800) 123-4567', href: 'tel:8001234567' },
  { icon: Mail, text: 'info@appraisily.com', href: 'mailto:info@appraisily.com' },
  { icon: MapPin, text: '123 Art Avenue, New York, NY 10001', href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16 overflow-hidden">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-8 xl:col-span-2">
            <div>
              <Logo variant="light" size="lg" />
              <p className="mt-4 text-sm text-gray-300 max-w-md">
                Expert art appraisal services for insurance, estate planning, donations, and more. 
                Trusted by collectors, institutions, and art professionals nationwide.
              </p>
            </div>
            
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <item.icon className="h-5 w-5 flex-shrink-0 text-gray-400" />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
            
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 xl:col-span-3 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Navigation
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <a
                  href="https://appraisily.com/start"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
                >
                  <Award className="h-4 w-4" />
                  Start Appraisal
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 text-center">
            &copy; {currentYear} Appraisily. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 