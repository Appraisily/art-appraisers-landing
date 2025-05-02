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

// Key benefits for conversion - reduced to 4 critical points
const keyBenefits = [
  { icon: <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />, text: "USPAP-certified experts" },
  { icon: <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />, text: "15+ years experience" },
  { icon: <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />, text: "24-48h turnaround time" },
  { icon: <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />, text: "Trusted worldwide" },
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
      {/* Floating logo - positioned at the top */}
      <div className="absolute top-4 right-4 md:top-6 md:right-8 z-20">
        <Logo variant="dark" size="sm" />
      </div>

      {/* Main hero content */}
      <div className="bg-gradient-to-b from-blue-50 to-white pt-12 pb-8 sm:pt-16 sm:pb-12 md:pt-16 md:pb-16 lg:pt-16 lg:pb-20 relative z-0">
        {/* Background patterns and elements - more subtle */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] opacity-[0.05] [background-size:20px_20px]"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
          <div className="absolute right-10 top-1/3 h-48 w-48 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
          <div className="absolute left-1/3 bottom-1/4 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500/10 to-indigo-500/5 blur-3xl animate-[pulse_7s_ease-in-out_infinite]"></div>
        </div>

        {/* Main content container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 md:pt-12 lg:pt-16">
          {/* Two-column layout - adjusted to 60/40 ratio */}
          <div className="grid grid-cols-1 md:grid-cols-[3fr,2fr] lg:grid-cols-[3fr,2fr] gap-6 md:gap-10 lg:gap-12 items-start md:items-start">
            
            {/* Left column - Main text and CTA */}
            <div className="flex flex-col">
              {/* Headline and description - improved hierarchy and line breaks with smaller typography */}
              <div className="mb-5 md:mb-6 max-w-[600px]">
                <div className="inline-flex items-center mb-1.5 px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  24-48h turnaround time
                </div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-2 mt-3">
                  Connect with Certified<br />
                  Art Appraisers
                </h1>
                
                <h2 className="text-lg md:text-xl text-gray-700 font-medium max-w-xl">
                  Museum-grade valuations by industry experts
                </h2>
              </div>
              
              {/* Key benefits list - reorganized as a single row */}
              <div className="mb-6 max-w-xl">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      {benefit.icon}
                      <span className="ml-2 text-gray-800 text-sm">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA buttons - fixed layout with smaller text */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 md:mb-8 max-w-md">
                <a
                  href="https://appraisily.com/start"
                  id="start-appraisal-nav"
                  className={cn(
                    "inline-flex items-center justify-center font-medium transition-all duration-200",
                    "py-3 px-6 text-sm sm:text-base font-semibold shadow-md",
                    "bg-amber-500 hover:bg-amber-600 text-white rounded-lg",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 w-full"
                  )}
                >
                  Find My Expert Appraiser
                </a>
                <a
                  href="#services"
                  className={cn(
                    "inline-flex items-center justify-center font-medium transition-all duration-200",
                    "py-3 px-6 text-sm sm:text-base rounded-lg border border-gray-300",
                    "bg-transparent text-gray-700 hover:bg-gray-50 w-full",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  )}
                >
                  View Services
                </a>
              </div>
              
              {/* Trust badge bar */}
              <div className="flex flex-col gap-4 mb-6">
                {/* Social proof */}
                <div className="flex items-center bg-white/70 backdrop-blur-sm border border-gray-100 rounded-lg p-3 shadow-sm max-w-lg">
                  {/* Expert faces */}
                  <div className="flex -space-x-2 mr-3">
                    {experts.slice(0, 3).map((expert, index) => (
                      <img
                        key={expert.name}
                        src={expert.image}
                        alt={expert.name}
                        className="h-7 w-7 rounded-full border-2 border-white object-cover shadow-sm"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={28}
                        height={28}
                      />
                    ))}
                    <div className="flex items-center justify-center h-7 w-7 rounded-full border-2 border-white bg-gray-100 text-gray-600 text-xs font-medium">
                      +10
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">5,000+ collectors worldwide</span> trust our certified appraisal services
                  </p>
                </div>
                
                {/* Testimonial */}
                <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-lg p-3 shadow-sm max-w-lg">
                  <p className="text-xs sm:text-sm text-gray-700 italic mb-2">
                    "The expert knew exactly what to look for and delivered a comprehensive report within 24 hours."
                  </p>
                  <p className="text-xs text-gray-600 font-medium">— Michael R., Estate Manager</p>
                </div>
              </div>
            </div>
            
            {/* Right column - Expert card and stats - visually lighter */}
            <div className="hidden md:block relative mt-8 lg:mt-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-500/5 rounded-2xl blur-3xl opacity-40"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-gray-100 rounded-xl shadow-md overflow-hidden">
                <div className="p-5 lg:p-6">
                  {/* Featured expert */}
                  <dl>
                    <div className="mb-5 flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-100 transition-colors duration-200 shadow-sm">
                      <img
                        src={experts[0].image}
                        alt={`${experts[0].name}, ${experts[0].role}`}
                        className="h-14 w-14 rounded-lg object-cover shadow-sm"
                        loading="eager"
                        width={56}
                        height={56}
                      />
                      <div>
                        <dt className="sr-only">Expert Name</dt>
                        <dd>
                          <h3 className="text-base font-semibold text-gray-900">{experts[0].name}</h3>
                        </dd>
                        <dt className="sr-only">Expert Role</dt>
                        <dd className="text-gray-600 text-sm">{experts[0].role}</dd>
                        <dt className="sr-only">Expert Certification</dt>
                        <dd className="mt-1.5">
                          <Badge 
                            variant="accent"
                            icon={<Award className="h-3 w-3 text-amber-600" />}
                            className="text-xs font-medium px-2 py-0.5"
                          >
                            Certified Expert
                          </Badge>
                        </dd>
                      </div>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-3 bg-white/80 rounded-lg border border-gray-100 shadow-sm">
                        <dt className="text-xs text-gray-600 mb-0.5">Artworks Appraised</dt>
                        <dd className="text-2xl font-bold text-gray-900">15K+</dd>
                      </div>
                      <div className="text-center p-3 bg-white/80 rounded-lg border border-gray-100 shadow-sm">
                        <dt className="text-xs text-gray-600 mb-0.5">Client Satisfaction</dt>
                        <dd className="text-2xl font-bold text-gray-900">98%</dd>
                      </div>
                      <div className="text-center p-3 bg-white/80 rounded-lg border border-gray-100 shadow-sm">
                        <dt className="text-xs text-gray-600 mb-0.5">Countries Served</dt>
                        <dd className="text-2xl font-bold text-gray-900">50+</dd>
                      </div>
                      <div className="text-center p-3 bg-white/80 rounded-lg border border-gray-100 shadow-sm">
                        <dt className="text-xs text-gray-600 mb-0.5">Avg. Turnaround</dt>
                        <dd className="text-2xl font-bold text-gray-900">24h</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust badges bar at bottom */}
      <div className="border-t border-gray-200 bg-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              <span className="text-gray-600">ISA Accredited</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              <span className="text-gray-600">AAA Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              <span className="text-gray-600">USPAP Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              <span className="text-gray-600">15K+ Artworks Appraised</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              <span className="text-gray-600">5K+ Satisfied Clients</span>
            </div>
            <a href="/appraisals" className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
              View Real Appraisals 
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 