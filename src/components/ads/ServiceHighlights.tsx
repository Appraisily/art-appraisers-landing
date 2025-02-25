import React from 'react';
import { ShieldCheck, Landmark, HeartHandshake, DollarSign } from 'lucide-react';

const services = [
  {
    name: 'Insurance Appraisals',
    description: 'Get your artwork properly valued for insurance coverage with our comprehensive documentation.',
    icon: ShieldCheck,
    color: 'bg-blue-50 text-blue-700',
    popular: true,
  },
  {
    name: 'Estate Appraisals',
    description: 'Accurate valuations for estate planning, probate, and tax purposes.',
    icon: Landmark,
    color: 'bg-purple-50 text-purple-700',
    popular: false,
  },
  {
    name: 'Donation Appraisals',
    description: 'IRS-compliant appraisals for charitable donations, maximizing tax benefits.',
    icon: HeartHandshake,
    color: 'bg-pink-50 text-pink-700',
    popular: false,
  },
  {
    name: 'Resale Valuations',
    description: 'Know the current market value before selling your artwork or collectibles.',
    icon: DollarSign,
    color: 'bg-amber-50 text-amber-700',
    popular: true,
  },
];

export default function ServiceHighlights() {
  return (
    <div id="service-details" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Professional Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Expert Art Appraisal Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our team of certified appraisers provides accurate valuations for all your artwork needs.
          </p>
        </div>
        
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-16 lg:max-w-4xl">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div 
                key={service.name} 
                className={`relative overflow-hidden rounded-xl p-6 ${service.popular ? 'ring-2 ring-primary shadow-md' : 'ring-1 ring-gray-200'}`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="h-8 w-28 bg-primary text-white text-xs font-medium flex items-center justify-center rounded-bl-xl transform translate-x-2 -translate-y-0.5 rotate-12">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-center gap-4">
                  <div className={`flex-shrink-0 rounded-lg ${service.color} p-2`}>
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {service.name}
                  </h3>
                </div>
                
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {service.description}
                </p>
                
                <p className="mt-4 flex items-center text-sm font-medium text-primary">
                  <a 
                    href="https://appraisily.com/start/"
                    className="hover:underline"
                  >
                    Learn more about this service
                  </a>
                  <svg viewBox="0 0 8 8" className="ml-1 h-2.5 w-2.5 text-primary" fill="currentColor">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-base text-gray-600 mb-6">
            All appraisals include detailed documentation, market analysis, and certification
          </p>
          <a
            href="https://appraisily.com/start/"
            className="rounded-lg bg-primary px-4 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
} 