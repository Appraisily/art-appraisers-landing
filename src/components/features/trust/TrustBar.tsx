import React from 'react';
import { Award, Shield, Check, Users, Star, FileCheck } from 'lucide-react';
import LazyImage from '../../core/media/LazyImage';

const associations = [
  {
    name: 'International Society of Appraisers (ISA)',
    logo: 'https://ik.imagekit.io/appraisily/WebPage/isa_logo.jpg?tr=w-180,h-120,q-100',
    alt: 'ISA Logo',
    width: 180,
    height: 120,
    url: 'https://www.isa-appraisers.org/'
  },
  {
    name: 'American Appraisers Association (AAA)',
    logo: 'https://ik.imagekit.io/appraisily/WebPage/aaa_logo.png?tr=w-180,h-120,q-100',
    alt: 'AAA Logo',
    width: 180,
    height: 120,
    url: 'https://www.appraisersassociation.org/'
  },
  {
    name: 'Appraisers Association of America',
    logo: 'https://ik.imagekit.io/appraisily/WebPage/appraisers_association.jpg?tr=w-180,h-120,q-100',
    alt: 'Appraisers Association Logo',
    width: 180,
    height: 120,
    url: 'https://www.appraisersassociation.org/'
  }
];

const statistics = [
  {
    icon: FileCheck,
    value: '15,000+',
    label: 'Artworks Appraised'
  },
  {
    icon: Users,
    value: '5,000+',
    label: 'Satisfied Clients'
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Client Satisfaction'
  }
];

export default function TrustBar() {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Guarantees */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div 
            className="flex items-center gap-2 bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm border border-blue-100"
          >
            <div className="text-primary shrink-0">
              <Shield size={16} className="sm:w-[18px] sm:h-[18px]" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-800 whitespace-nowrap">
              100% Satisfaction & Money-Back Guarantee.
            </span>
            <a 
              href="#trust-footer" 
              className="text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors ml-1"
            >
              Learn more ↓
            </a>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {statistics.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-blue-100">
              <div className="rounded-full bg-blue-50 p-2 sm:p-3 mb-2 sm:mb-3">
                {React.createElement(stat.icon, { className: "h-5 w-5 sm:h-6 sm:w-6 text-primary" })}
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-600 text-center">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Professional Associations */}
        <div className="flex flex-col items-center">
          <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-4 sm:mb-6 text-center">CERTIFIED BY PROFESSIONAL ASSOCIATIONS</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
            {associations.map((association, index) => (
              <div key={index} className="group relative flex items-center">
                <a 
                  href={association.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative overflow-hidden rounded-lg bg-white p-4 shadow-md transition-all duration-300 group-hover:shadow-lg"
                  aria-label={`Visit ${association.name} website`}
                >
                  <LazyImage 
                    src={association.logo} 
                    alt={association.alt} 
                    className="h-12 sm:h-14 md:h-16 w-auto filter grayscale opacity-75 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    title={association.name}
                    placeholderColor="#ffffff"
                    blurAmount={3}
                    width={association.width}
                    height={association.height}
                  />
                  <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-200 group-hover:ring-primary/20 transition-colors duration-300" />
                </a>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-600 shadow-sm border border-gray-100 transition-all duration-300 group-hover:opacity-100 group-hover:-bottom-6 whitespace-nowrap">
                  {association.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 