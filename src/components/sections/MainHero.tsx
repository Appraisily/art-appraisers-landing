import React from 'react';
import { Shield, Award, Clock, CheckCircle } from 'lucide-react';
import Logo from '../Logo';
import { usePreloadResources } from '../../hooks/usePreloadResources';
import Badge from '../core/Badge';
import { Card, CardContent } from '../core/Card';
import { 
  Box, 
  containerClasses, 
  spacingClasses, 
  backgroundClasses, 
  responsiveClasses,
  layoutClasses,
  typographyClasses,
  componentClasses
} from '../core/layout';
import { cn } from '../../utils/cn';

interface ExpertFace {
  name: string;
  image: string;
  role: string;
  stats: {
    icon: typeof Award;
    text: string;
  }[];
}

const experts: ExpertFace[] = [
  {
    name: 'Andrés Gómez',
    image: 'https://ik.imagekit.io/appraisily/Appraisers/andres.png?tr=w-400,h-400,q-75',
    role: 'Lead Art Appraiser',
    stats: [{ icon: Award, text: 'Certified Expert' }]
  },
  {
    name: 'Charlotte Smith',
    image: 'https://ik.imagekit.io/appraisily/Appraisers/charlotte.png?tr=w-400,h-400,q-75',
    role: 'European Art Specialist',
    stats: [{ icon: Award, text: 'European Specialist' }]
  },
  {
    name: 'Adrian Dupont',
    image: 'https://ik.imagekit.io/appraisily/Appraisers/adrian.png?tr=w-400,h-400,q-75',
    role: 'Modern Art Specialist',
    stats: [{ icon: Award, text: 'Modern Art Specialist' }]
  }
];

// Key benefits for conversion - updated with client's exact wording
const keyBenefits = [
  { icon: <CheckCircle className="h-5 w-5 text-gray-800 flex-shrink-0" />, text: "24-48 h turnaround, guaranteed" },
  { icon: <CheckCircle className="h-5 w-5 text-gray-800 flex-shrink-0" />, text: "Certified experts with 15+ yrs experience" },
  { icon: <CheckCircle className="h-5 w-5 text-gray-800 flex-shrink-0" />, text: "5,000+ collectors served in 50+ countries" },
];

export default function MainHero() {
  // Preload critical resources for the Hero
  usePreloadResources([
    { type: 'image', url: experts[0].image },
    { type: 'image', url: experts[1].image },
    { type: 'image', url: experts[2].image },
  ], []);

  return (
    <section className="w-full relative">
      {/* Main hero content */}
      <div className="relative z-0 pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-12 md:pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
        {/* Simplified single background layer */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            background: 'linear-gradient(120deg, #EFF6FF 0%, #FFFFFF 50%, #F9FAFB 100%)',
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.05) 2px, transparent 2px),
              linear-gradient(to right, rgba(59, 130, 246, 0.05) 2px, transparent 2px)
            `,
            backgroundSize: '30px 30px, 30px 30px, 90px 90px, 90px 90px'
          }}
        ></div>
        
        {/* Main content container */}
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          {/* Repositioned logo - better aligned with content */}
          <div className="flex justify-center sm:justify-end mb-5 md:mb-5">
            <Logo variant="dark" size="sm" />
          </div>

          {/* Two-column layout - adjusted for better balance */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr] gap-8 md:gap-8 lg:gap-10 items-center">
            
            {/* Left column - Main text and CTA */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              {/* Headline and description - improved hierarchy and spacing */}
              <div className="mb-7 md:mb-7 max-w-[600px]">
                <div className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full bg-gray-100 text-gray-800 text-sm font-semibold">
                  <Clock className="h-4 w-4 mr-1.5" />
                  Know the True Worth of Your Art in 24-48 Hours
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.2] mb-5 mt-4">
                  Instant Confidence in Your Collection
                </h1>
                
                <h2 className="text-lg md:text-xl text-gray-700 font-medium max-w-xl">
                  Get a museum-grade appraisal—accepted by insurers, courts, and the IRS—without leaving home.
                </h2>
              </div>
              
              {/* Key benefits list - reorganized for better visibility */}
              <div className="mb-7 max-w-xl w-full px-2 md:px-0">
                <div className="flex flex-col space-y-4">
                  {keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      {benefit.icon}
                      <span className="ml-3 text-gray-800">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA buttons - improved visibility and mobile display */}
              <div className="flex flex-col sm:flex-row gap-4 mb-7 md:mb-8 w-full sm:max-w-md">
                <a
                  href="https://appraisily.com/start"
                  id="start-appraisal-nav"
                  className={cn(
                    "inline-flex items-center justify-center font-medium transition-all duration-200",
                    "py-3.5 px-6 text-base font-semibold shadow-md",
                    "bg-gray-900 hover:bg-gray-800 text-white rounded-lg",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-full"
                  )}
                >
                  Get My Appraisal Now
                </a>
                <a
                  href="#services"
                  className={cn(
                    "inline-flex items-center justify-center font-medium transition-all duration-200",
                    "py-3.5 px-6 text-base rounded-lg border border-gray-300",
                    "bg-transparent text-gray-700 hover:bg-gray-50 w-full",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  )}
                >
                  See How It Works
                </a>
              </div>
              
              {/* Trust badge bar - moved to bottom of left column */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm w-full sm:max-w-lg">
                {/* Expert faces - fixed alignment with proper spacing */}
                <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-0">
                  <div className="flex -space-x-2 sm:mr-4">
                    {experts.slice(0, 3).map((expert, index) => (
                      <img
                        key={expert.name}
                        src={expert.image}
                        alt={expert.name}
                        className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={40}
                        height={40}
                      />
                    ))}
                    <div className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-white bg-gray-100 text-gray-600 text-xs font-medium">
                      +10
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700">
                    <span className="font-semibold">5,000+ collectors worldwide</span> trust our certified appraisal services
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right column - Expert card and stats - improved visibility and display on mobile */}
            <div className="md:block relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/5 to-gray-500/5 rounded-2xl blur-3xl opacity-40"></div>
              <div className="relative bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
                <div className="p-5 lg:p-6">
                  {/* Featured expert - LARGER image with overlay text */}
                  <div className="mb-6">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                      <img
                        src={experts[0].image}
                        alt={`${experts[0].name}, ${experts[0].role}`}
                        className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                        loading="eager"
                        width={400}
                        height={300}
                      />
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                      
                      {/* Text overlay positioned at bottom */}
                      <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                        <h3 className="text-xl font-semibold">{experts[0].name}</h3>
                        <p className="text-gray-200 text-sm mb-2">{experts[0].role}</p>
                        
                        <Badge 
                          variant="accent"
                          icon={<Award className="h-3.5 w-3.5 text-amber-500" />}
                          className="text-sm font-medium px-2.5 py-1 bg-black/40 backdrop-blur-sm border border-white/20"
                        >
                          Certified Expert
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Stats grid - more compact display */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                      <dt className="text-xs text-gray-600">Artworks Appraised</dt>
                      <dd className="text-xl font-bold text-gray-900">15K+</dd>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                      <dt className="text-xs text-gray-600">Client Satisfaction</dt>
                      <dd className="text-xl font-bold text-gray-900">98%</dd>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                      <dt className="text-xs text-gray-600">Countries Served</dt>
                      <dd className="text-xl font-bold text-gray-900">50+</dd>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                      <dt className="text-xs text-gray-600">Avg. Turnaround</dt>
                      <dd className="text-xl font-bold text-gray-900">24h</dd>
                    </div>
                  </div>
                  
                  {/* Testimonial - moved from left to right column for better balance */}
                  <div className="mt-5 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-700 italic mb-2">
                      "The expert knew exactly what to look for and delivered a comprehensive report within 24 hours."
                    </p>
                    <p className="text-xs text-gray-600 font-medium">— Michael R., Estate Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust badges bar - improved for mobile display */}
      <div className="border-t border-gray-200 bg-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-y-2 sm:gap-x-6 text-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-800"></div>
              <span className="text-gray-600">USPAP Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-800"></div>
              <span className="text-gray-600">ISA & AAA Accredited</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-800"></div>
              <span className="text-gray-600">98% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 