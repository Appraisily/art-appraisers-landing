import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';
import Logo from '../Logo';
import { usePreloadResources } from '../../hooks/usePreloadResources';
import Button from '../core/Button';
import Badge from '../core/Badge';
import { Card, CardContent } from '../core/Card';
import { Container } from '../core/Container';

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

export default function Hero() {
  // Preload critical resources for the Hero
  usePreloadResources([
    { type: 'image', url: experts[0].image },
    { type: 'image', url: experts[1].image },
    { type: 'image', url: experts[2].image },
  ], []);

  return (
    <section 
      className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100 to-white pt-6 pb-0 sm:pt-8 sm:pb-0"
      aria-labelledby="hero-heading"
    >
      {/* Enhanced Background Pattern */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] opacity-[0.05] [background-size:20px_20px]" 
        aria-hidden="true"
      />
      
      {/* Abstract shapes - modern design elements (reduced size and position for desktop) */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Geometric elements */}
        <svg className="absolute -left-20 -top-20 w-[400px] h-[400px] text-blue-600/10" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          <circle cx="250" cy="250" r="200" fill="url(#heroGradient1)" opacity="0.8"/>
          <path d="M100,100 L400,100 L400,400 L100,400 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
        </svg>
        
        {/* Enhanced orbs with more visible gradients (reduced size for better desktop view) */}
        <div className="absolute -left-4 top-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-blue-600/15 to-purple-600/10 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute right-10 top-1/3 h-48 w-48 rounded-full bg-gradient-to-r from-blue-400/15 to-cyan-400/10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute left-1/3 bottom-1/4 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500/10 to-indigo-500/5 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
      </div>

      {/* Mobile-optimized Container */}
      <Container className="px-4 sm:px-6">
        {/* Logo with improved visibility */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-blue-50 border border-blue-200 px-4 py-2 shadow-sm">
          <Logo variant="dark" size="md" />
        </div>
        
        {/* Mobile-optimized grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          {/* Content Section - Mobile-optimized */}
          <div className="flex flex-col z-10">
            {/* Mobile Headline with optimized spacing */}
            <div className="mb-6 md:mb-4">
              <h1 
                id="hero-heading" 
                className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-3"
              >
                Connect with Certified Art Appraisers Instantly
              </h1>

              <p className="text-base md:text-lg text-gray-700 max-w-xl hidden sm:block">
                Specializing in fine art, antiques & collectibles—trusted by collectors worldwide.
              </p>
              
              {/* Mobile-only condensed tagline */}
              <p className="text-lg font-medium text-blue-700 sm:hidden">
                Professional art valuations in 24-48 hours
              </p>
            </div>
            
            {/* Mobile-optimized CTA section - Prominent for mobile */}
            <div className="order-last sm:order-none mb-8 sm:mb-0 sm:mt-3 sm:mb-5">
              <div className="relative w-full mb-4 sm:mb-3">
                <Button
                  variant="highConversion"
                  size="lg"
                  as="a"
                  href="https://appraisily.com/start"
                  id="start-appraisal-nav"
                  fullWidth
                  className="p-3.5 text-base sm:p-3 sm:text-base shadow-md"
                >
                  Find My Expert Appraiser
                </Button>
                <Badge 
                  variant="accent"
                  className="absolute -right-2 -top-2 shadow-md font-medium"
                >
                  24-48h turnaround
                </Badge>
              </div>
              
              <Button
                variant="secondary"
                size="lg"
                as="a"
                href="#services"
                endIcon={<Award className="h-5 w-5 sm:h-4 sm:w-4" />}
                fullWidth
                className="sm:hidden p-3.5 text-base border-2"
              >
                View Services
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                as="a"
                href="#services"
                endIcon={<Award className="h-4 w-4 sm:h-5 sm:w-5" />}
                className="hidden sm:inline-flex p-2.5 sm:p-3 text-sm sm:text-base"
              >
                View Services
              </Button>
            </div>
            
            {/* Mobile-optimized experts section */}
            <div className="flex items-center -space-x-1 sm:-space-x-3 mb-6 sm:mb-0 sm:py-1 order-first sm:order-none" aria-label="Our expert appraisers">
              {experts.map((expert, index) => (
                <a 
                  key={expert.name} 
                  href="#experts" 
                  className="relative group"
                  aria-label={`View profile of ${expert.name}, ${expert.role}`}
                >
                  <img
                    src={expert.image}
                    alt={`${expert.name}, ${expert.role}`}
                    className="h-14 w-14 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full border-2 border-white object-cover hover:border-amber-300 transition-colors duration-200"
                    loading={index === 0 ? "eager" : "lazy"}
                    width={56}
                    height={56}
                  />
                  <div 
                    className="absolute -bottom-1 -right-1 rounded-full bg-amber-500 border-2 border-white p-1"
                    aria-hidden="true"
                  >
                    {React.createElement(expert.stats[0].icon, {
                      className: "h-3 w-3 sm:h-2.5 sm:w-2.5 text-white",
                      'aria-hidden': true
                    })}
                  </div>
                </a>
              ))}
              <a 
                href="#experts"
                className="flex items-center justify-center h-14 w-14 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full border-2 border-dashed border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                aria-label="View all of our expert appraisers"
              >
                +10
              </a>
              {/* Mobile-only label */}
              <span className="ml-3 font-medium text-gray-700 text-base sm:hidden">
                Certified Experts
              </span>
            </div>
            
            {/* Trust indicators - hidden on mobile, visible on desktop */}
            <div className="hidden sm:flex flex-col gap-3 mt-0 md:mt-1">
              <p className="text-gray-600 text-sm">
                Join thousands who trust our certified experts for professional art appraisals
              </p>
            
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-gray-100 p-2 sm:p-2.5" aria-hidden="true">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-base font-medium text-gray-700">
                  USPAP-certified experts with 15+ years of experience
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-gray-100 p-2 sm:p-2.5" aria-hidden="true">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-base font-medium text-gray-700">
                  Trusted by leading institutions worldwide
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-gray-100 p-2 sm:p-2.5" aria-hidden="true">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-base font-medium text-gray-700">
                  Fast 24-48 hour professional appraisals
                </p>
              </div>
            </div>
            
            {/* Mobile-only compact trust indicators */}
            <div className="flex sm:hidden justify-between mb-4 mt-2">
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-blue-100 p-2.5 mb-2">
                  <Shield className="h-6 w-6 text-blue-700" />
                </div>
                <span className="text-xs font-medium text-gray-700 text-center">Expert<br />Certified</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-blue-100 p-2.5 mb-2">
                  <Award className="h-6 w-6 text-blue-700" />
                </div>
                <span className="text-xs font-medium text-gray-700 text-center">Trusted<br />Worldwide</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-blue-100 p-2.5 mb-2">
                  <Clock className="h-6 w-6 text-blue-700" />
                </div>
                <span className="text-xs font-medium text-gray-700 text-center">24-48hr<br />Turnaround</span>
              </div>
            </div>
          </div>

          {/* Stats Card - improved for desktop, hidden on mobile */}
          <div className="relative mt-6 md:mt-0 hidden sm:block">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-500/10 rounded-2xl blur-3xl" 
              aria-hidden="true"
            />
            <Card variant="primary" className="relative">
              <CardContent className="p-4 sm:p-5 lg:p-6">
                {/* Featured Expert */}
                <a
                  href="#experts"
                  className="mb-4 flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                  aria-label={`View profile of ${experts[0].name}, ${experts[0].role}`}
                >
                  <img
                    src={experts[0].image}
                    alt={`${experts[0].name}, ${experts[0].role}`}
                    className="h-16 w-16 sm:h-16 sm:w-16 rounded-xl object-cover shadow-sm"
                    loading="eager"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">{experts[0].name}</h3>
                    <p className="text-gray-600 text-sm">{experts[0].role}</p>
                    <div className="mt-1 flex gap-2">
                      <Badge 
                        variant="accent"
                        icon={<Award className="h-3 w-3 text-amber-600" />}
                        className="text-xs"
                      >
                        Certified Expert
                      </Badge>
                    </div>
                  </div>
                </a>

                <div 
                  className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5"
                  aria-label="Our appraisal service statistics"
                >
                  <div className="text-center p-2 sm:p-3 bg-gray-50/80 rounded-lg">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">15K+</div>
                    <div className="mt-1 text-xs sm:text-sm text-gray-600">Artworks Appraised</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-gray-50/80 rounded-lg">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">98%</div>
                    <div className="mt-1 text-xs sm:text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-gray-50/80 rounded-lg">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">50+</div>
                    <div className="mt-1 text-xs sm:text-sm text-gray-600">Countries Served</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-gray-50/80 rounded-lg">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">24h</div>
                    <div className="mt-1 text-xs sm:text-sm text-gray-600">Avg. Turnaround</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}