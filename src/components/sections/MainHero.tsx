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
      <div className="relative z-0 pt-12 pb-8 sm:pt-12 sm:pb-12 md:pt-12 md:pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
        {/* Enhanced artistic background with Forza-inspired effects and more vibrant colors */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            background: 'linear-gradient(135deg, #F0F4F8 0%, #FFFFFF 50%, #F8FAFC 100%)',
            backgroundImage: `
              linear-gradient(135deg, rgba(219, 234, 254, 0.4) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(241, 245, 249, 0.3) 100%),
              radial-gradient(circle at 15% 25%, rgba(79, 70, 229, 0.15) 0%, transparent 45%),
              radial-gradient(circle at 85% 25%, rgba(37, 99, 235, 0.1) 0%, transparent 45%),
              radial-gradient(circle at 50% 60%, rgba(220, 38, 38, 0.07) 0%, transparent 60%),
              radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.07) 0%, transparent 40%),
              repeating-linear-gradient(to right, rgba(203, 213, 225, 0.08) 0px, rgba(203, 213, 225, 0.08) 1px, transparent 1px, transparent 30px),
              repeating-linear-gradient(to bottom, rgba(203, 213, 225, 0.08) 0px, rgba(203, 213, 225, 0.08) 1px, transparent 1px, transparent 30px),
              linear-gradient(to right, rgba(59, 130, 246, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 30px 30px, 30px 30px, 90px 90px, 90px 90px'
          }}
        >
          {/* Abstract art brushstrokes */}
          <svg className="absolute w-full h-full opacity-20" preserveAspectRatio="none">
            <filter id="gooey">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              <feColorMatrix values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10
              "/>
            </filter>
            <g filter="url(#gooey)">
              <circle cx="10%" cy="20%" r="50" fill="rgba(37, 99, 235, 0.2)" />
              <circle cx="90%" cy="15%" r="60" fill="rgba(79, 70, 229, 0.15)" />
              <circle cx="35%" cy="85%" r="70" fill="rgba(220, 38, 38, 0.1)" />
              <circle cx="75%" cy="75%" r="45" fill="rgba(245, 158, 11, 0.12)" />
              <path d="M10,30 Q150,10 250,90 T500,40" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="20" fill="none" />
              <path d="M600,100 Q650,180 500,200 T300,150" stroke="rgba(124, 58, 237, 0.12)" strokeWidth="15" fill="none" />
            </g>
          </svg>
        </div>
        
        {/* Main content container */}
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          {/* Repositioned logo - better aligned with content */}
          <div className="flex justify-center sm:justify-end mb-7 md:mb-5">
            <Logo variant="dark" size="md" className="scale-110 sm:scale-100" />
          </div>

          {/* Two-column layout - adjusted for better balance */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr] gap-8 md:gap-8 lg:gap-10 items-center">
            
            {/* Left column - Main text and CTA */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              {/* Headline and description - improved hierarchy and spacing */}
              <div className="mb-8 md:mb-7 max-w-[600px]">
                <div className="inline-flex items-center mb-5 sm:mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-gray-800 text-sm font-semibold shadow-sm">
                  <Clock className="h-4 w-4 mr-1.5 text-blue-600" />
                  Know the True Worth of Your Art in 24-48 Hours
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] mb-6 sm:mb-5 mt-5 sm:mt-4 relative">
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
                      Instant Confidence
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-md opacity-70 rounded-lg"></span>
                  </span>{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
                      in Your
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10 blur-md opacity-70 rounded-lg"></span>
                  </span>{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
                      Collection
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-pink-600/10 to-blue-600/10 blur-md opacity-70 rounded-lg"></span>
                  </span>
                </h1>
                
                <h2 className="text-lg md:text-xl font-medium max-w-xl relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800">
                    Get a museum-grade appraisal—accepted by insurers, courts, and the IRS—without leaving home.
                  </span>
                </h2>
              </div>
              
              {/* Key benefits list - reorganized for better visibility */}
              <div className="mb-8 md:mb-7 max-w-xl w-full px-2 md:px-0">
                <div className="flex flex-col space-y-4">
                  {keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-transparent transition-all duration-300">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 shadow-sm">
                        <CheckCircle className={`h-5 w-5 ${index === 0 ? 'text-blue-600' : index === 1 ? 'text-indigo-600' : 'text-purple-600'} flex-shrink-0`} />
                      </div>
                      <span className="ml-3 text-gray-800 font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA buttons - improved visibility and mobile display */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-8 w-full sm:max-w-md">
                <a
                  href="https://appraisily.com/start"
                  id="start-appraisal-nav"
                  className={cn(
                    "inline-flex items-center justify-center font-medium transition-all duration-200",
                    "py-4 sm:py-3.5 px-6 text-base font-semibold shadow-md",
                    "bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white rounded-lg",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-full",
                    "relative overflow-hidden"
                  )}
                >
                  <span className="relative z-10">Get My Appraisal Now</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </a>
                <a
                  href="#services"
                  className={cn(
                    "inline-flex items-center justify-center font-medium transition-all duration-200",
                    "py-4 sm:py-3.5 px-6 text-base rounded-lg",
                    "bg-white text-gray-700 hover:bg-gray-50 w-full shadow-sm",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                    "border border-gray-300 hover:border-gray-400",
                    "relative overflow-hidden"
                  )}
                >
                  <span className="relative z-10">See How It Works</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </div>
              
              {/* Trust badge bar - with subtle colors */}
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-sm w-full sm:max-w-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/30 opacity-50"></div>
                {/* Expert faces - fixed alignment with proper spacing */}
                <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-0 relative z-10">
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
                    <div className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-gray-100 to-gray-50 text-gray-600 text-xs font-medium shadow-sm">
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
            <div className="md:block relative mt-10 md:mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5 rounded-2xl blur-3xl opacity-50"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/90 rounded-xl shadow-md overflow-hidden">
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
                      {/* Enhanced gradient overlay for text readability with subtle color */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent mix-blend-overlay"></div>
                      
                      {/* Text overlay positioned at bottom */}
                      <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                        <h3 className="text-xl font-semibold">{experts[0].name}</h3>
                        <p className="text-gray-200 text-sm mb-2">{experts[0].role}</p>
                        
                        <span className="inline-flex items-center rounded-sm px-2.5 py-1 text-sm font-medium bg-black text-white border border-gray-800 shadow-sm">
                          <Award className="h-3.5 w-3.5 text-white mr-1.5" />
                          Certified Expert
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats grid - more compact display with subtle color accents */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-gradient-to-br from-white to-blue-50/30 rounded-lg border border-gray-200/90 shadow-sm">
                      <dt className="text-xs text-gray-600">Artworks Appraised</dt>
                      <dd className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-900">15K+</dd>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-white to-indigo-50/30 rounded-lg border border-gray-200/90 shadow-sm">
                      <dt className="text-xs text-gray-600">Client Satisfaction</dt>
                      <dd className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-indigo-900">98%</dd>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-white to-purple-50/30 rounded-lg border border-gray-200/90 shadow-sm">
                      <dt className="text-xs text-gray-600">Countries Served</dt>
                      <dd className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-purple-900">50+</dd>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-white to-red-50/30 rounded-lg border border-gray-200/90 shadow-sm">
                      <dt className="text-xs text-gray-600">Avg. Turnaround</dt>
                      <dd className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-red-900">24h</dd>
                    </div>
                  </div>
                  
                  {/* Testimonial - moved from left to right column for better balance */}
                  <div className="mt-5 p-4 bg-gradient-to-br from-white to-gray-50 border border-gray-200/90 rounded-lg shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 via-indigo-50/5 to-purple-50/10"></div>
                    <p className="text-sm text-gray-700 italic mb-2 relative z-10">
                      "The expert knew exactly what to look for and delivered a comprehensive report within 24 hours."
                    </p>
                    <p className="text-xs text-gray-600 font-medium relative z-10">— Michael R., Estate Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust badges bar - improved for mobile display with subtle color accents */}
      <div className="border-t border-gray-200 bg-gradient-to-r from-white via-gray-50/50 to-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-y-2 sm:gap-x-6 text-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              <span className="text-gray-700">USPAP Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
              <span className="text-gray-700">ISA & AAA Accredited</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
              <span className="text-gray-700">98% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 