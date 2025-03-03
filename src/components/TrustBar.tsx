import React from 'react';
import { Award, Shield, Check, Users, Star, FileCheck } from 'lucide-react';
import LazyImage from './LazyImage';

const associations = [
  {
    name: 'International Society of Appraisers (ISA)',
    logo: 'https://ik.imagekit.io/appraisily/Associations/isa_logo.png?tr=w-120,h-80,q-70',
    alt: 'ISA Logo',
    width: 120,
    height: 80
  },
  {
    name: 'American Appraisers Association (AAA)',
    logo: 'https://ik.imagekit.io/appraisily/Associations/aaa_logo.png?tr=w-120,h-80,q-70',
    alt: 'AAA Logo',
    width: 120,
    height: 80
  },
  {
    name: 'Appraisers Association of America',
    logo: 'https://ik.imagekit.io/appraisily/Associations/appraisers_association.png?tr=w-120,h-80,q-70',
    alt: 'Appraisers Association Logo',
    width: 120, 
    height: 80
  },
  {
    name: 'Art Dealers Association',
    logo: 'https://ik.imagekit.io/appraisily/Associations/art_dealers.png?tr=w-120,h-80,q-70',
    alt: 'Art Dealers Association Logo',
    width: 120,
    height: 80
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

const guarantees = [
  {
    icon: Shield,
    text: '100% Satisfaction Guarantee'
  },
  {
    icon: Check,
    text: 'Money-Back Guarantee'
  }
];

export default function TrustBar() {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        {/* Guarantees */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm border border-blue-100"
            >
              <div className="text-primary shrink-0">
                {React.createElement(guarantee.icon, { size: 16, className: "sm:w-[18px] sm:h-[18px]" })}
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-800 whitespace-nowrap">{guarantee.text}</span>
            </div>
          ))}
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
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            {associations.map((association, index) => (
              <div key={index} className="flex items-center">
                <LazyImage 
                  src={association.logo} 
                  alt={association.alt} 
                  className="h-10 sm:h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  title={association.name}
                  placeholderColor="#f9fafb"
                  blurAmount={3}
                  width={association.width}
                  height={association.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 