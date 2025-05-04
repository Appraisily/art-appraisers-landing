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
  { icon: <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />, text: "24-48 h turnaround, guaranteed" },
  { icon: <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />, text: "Certified experts with 15+ yrs experience" },
  { icon: <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />, text: "5,000+ collectors served in 50+ countries" },
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
      <div className="bg-gradient-to-b from-blue-50 to-white pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-12 md:pb-16 lg:pt-14 lg:pb-20 relative z-0">
        {/* Background patterns and elements - more subtle */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] opacity-[0.05] [background-size:20px_20px]"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
          <div className="absolute right-10 top-1/3 h-48 w-48 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
          <div className="absolute left-1/3 bottom-1/4 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500/10 to-indigo-500/5 blur-3xl animate-[pulse_7s_ease-in-out_infinite]"></div>
        </div>

        {/* Main content container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Repositioned logo - better aligned with content */}
          <div className="flex justify-center sm:justify-end mb-3 md:mb-4">
            <Logo variant="dark" size="sm" />
          </div>

          {/* Two-column layout - adjusted for better balance */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] lg:grid-cols-[1.2fr,1fr] gap-8 md:gap-8 lg:gap-10 items-center">
            
            {/* Left column - Main text and CTA */}
            <div className="flex flex-col">
              {/* Headline and description - improved hierarchy */}
              <div className="mb-5 md:mb-6 max-w-[600px]">
                <div className="inline-flex items-center mb-3 px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
                  <Clock className="h-4 w-4 mr-1.5" />
                  Know the True Worth of Your Art in 24-48 Hours
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.2] mb-4 mt-3">
                  Instant Confidence in Your Collection
                </h1>
                
                <h2 className="text-lg md:text-xl text-gray-700 font-medium max-w-xl">
                  Get a museum-grade appraisal—accepted by insurers, courts, and the IRS—without leaving home.
                </h2>
              </div>
              
              {/* Key benefits list - reorganized for better visibility */}
              <div className="mb-6 max-w-xl">
                <div className="flex flex-col space-y-3">
                  {keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      {benefit.icon}
                      <span className="ml-2.5 text-gray-800">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA buttons - improved visibility and mobile display */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8 max-w-md">
                <a
                  href="https://appraisily.com/start"
                  id="start-appraisal-nav"
                  className={cn(
                    "inline-flex items-center justify-center font-medium transition-all duration-200",
                    "py-3.5 px-6 text-base font-semibold shadow-md",
                    "bg-amber-500 hover:bg-amber-600 text-white rounded-lg",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 w-full"
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
              
              {/* Trust badge bar - improved visibility for mobile */}
              <div className="flex flex-col gap-5 mb-6">
                {/* Social proof - fixed alignment of profile images */}
                <div className="flex flex-col sm:flex-row sm:items-center bg-white/70 backdrop-blur-sm border border-gray-100 rounded-lg p-4 shadow-sm max-w-lg">
                  {/* Expert faces - fixed alignment with proper spacing */}
                  <div className="flex -space-x-2 mb-3 sm:mb-0 sm:mr-4 justify-center sm:justify-start">
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
                  <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left">
                    <span className="font-semibold">5,000+ collectors worldwide</span> trust our certified appraisal services
                  </p>
                </div>
                
                {/* Testimonial - increased font size and improved mobile layout */}
                <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-lg p-5 shadow-sm max-w-lg">
                  <p className="text-base sm:text-lg text-gray-700 italic mb-3">
                    "The expert knew exactly what to look for and delivered a comprehensive report within 24 hours."
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">— Michael R., Estate Manager</p>
                </div>
              </div>
            </div>
            
            {/* Right column - Expert card and stats - improved visibility and display on mobile */}
            <div className="md:block relative mt-4 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-500/5 rounded-2xl blur-3xl opacity-40"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-gray-100 rounded-xl shadow-md overflow-hidden">
                <div className="p-5 lg:p-6">
                  {/* Featured expert - improved layout and spacing for mobile */}
                  <dl>
                    <div className="mb-5 flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 transition-colors duration-200 shadow-sm">
                      <img
                        src={experts[0].image}
                        alt={`${experts[0].name}, ${experts[0].role}`}
                        className="h-16 w-16 rounded-lg object-cover shadow-sm"
                        loading="eager"
                        width={64}
                        height={64}
                      />
                      <div>
                        <dt className="sr-only">Expert Name</dt>
                        <dd>
                          <h3 className="text-lg font-semibold text-gray-900">{experts[0].name}</h3>
                        </dd>
                        <dt className="sr-only">Expert Role</dt>
                        <dd className="text-gray-600 text-base">{experts[0].role}</dd>
                        <dt className="sr-only">Expert Certification</dt>
                        <dd className="mt-1.5">
                          <Badge 
                            variant="accent"
                            icon={<Award className="h-3.5 w-3.5 text-amber-600" />}
                            className="text-sm font-medium px-2.5 py-1"
                          >
                            Certified Expert
                          </Badge>
                        </dd>
                      </div>
                    </div>

                    {/* Stats grid - improved spacing and visibility for mobile */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-3.5 bg-white/80 rounded-lg border border-gray-100 shadow-sm">
                        <dt className="text-sm text-gray-600 mb-1">Artworks Appraised</dt>
                        <dd className="text-2xl font-bold text-gray-900">15K+</dd>
                      </div>
                      <div className="text-center p-3.5 bg-white/80 rounded-lg border border-gray-100 shadow-sm">
                        <dt className="text-sm text-gray-600 mb-1">Client Satisfaction</dt>
                        <dd className="text-2xl font-bold text-gray-900">98%</dd>
                      </div>
                      <div className="text-center p-3.5 bg-white/80 rounded-lg border border-gray-100 shadow-sm">
                        <dt className="text-sm text-gray-600 mb-1">Countries Served</dt>
                        <dd className="text-2xl font-bold text-gray-900">50+</dd>
                      </div>
                      <div className="text-center p-3.5 bg-white/80 rounded-lg border border-gray-100 shadow-sm">
                        <dt className="text-sm text-gray-600 mb-1">Avg. Turnaround</dt>
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
      
      {/* Trust badges bar - improved for mobile display */}
      <div className="border-t border-gray-200 bg-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-y-2 sm:gap-x-6 text-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              <span className="text-gray-600">USPAP Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              <span className="text-gray-600">ISA & AAA Accredited</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              <span className="text-gray-600">98% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 