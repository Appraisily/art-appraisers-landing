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
      className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100 to-white pt-8 pb-0 sm:pt-10 sm:pb-0"
      aria-labelledby="hero-heading"
    >
      {/* Enhanced Background Pattern */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] opacity-[0.05] [background-size:20px_20px]" 
        aria-hidden="true"
      />
      
      {/* Abstract shapes - modern design elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Geometric elements */}
        <svg className="absolute -left-28 -top-28 w-[500px] h-[500px] text-blue-600/10" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          <circle cx="250" cy="250" r="200" fill="url(#heroGradient1)" opacity="0.8"/>
          <path d="M100,100 L400,100 L400,400 L100,400 Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
        </svg>
        
        {/* Enhanced orbs with more visible gradients */}
        <div className="absolute -left-4 top-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-blue-600/15 to-purple-600/10 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute right-10 top-1/3 h-60 w-60 rounded-full bg-gradient-to-r from-blue-400/15 to-cyan-400/10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute left-1/3 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-500/10 to-indigo-500/5 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
      </div>

      <Container className="px-5 sm:px-6">
        {/* Logo and header - Fixed background for logo visibility */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 border border-gray-200/50 shadow-sm">
          <Logo variant="light" size="md" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-start md:items-center">
          {/* Content Section */}
          <div className="flex flex-col space-y-7 z-10">
            <h1 
              id="hero-heading" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight"
            >
              Connect with Certified Art Appraisers Instantly
            </h1>

            <p className="text-lg sm:text-xl text-gray-700">
              Specializing in fine art, antiques & collectibles—trusted by collectors worldwide.
            </p>
            
            {/* Expert Faces - improved for mobile */}
            <div className="flex -space-x-2 sm:-space-x-4 py-2" aria-label="Our expert appraisers">
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
                    className="h-14 w-14 sm:h-16 sm:w-16 rounded-full border-2 border-white object-cover hover:border-amber-300 transition-colors duration-200"
                    loading={index === 0 ? "eager" : "lazy"}
                    width={64}
                    height={64}
                  />
                  <div 
                    className="absolute -bottom-1 -right-1 rounded-full bg-amber-500 border-2 border-white p-1"
                    aria-hidden="true"
                  >
                    {React.createElement(expert.stats[0].icon, {
                      className: "h-3 w-3 sm:h-4 sm:w-4 text-white",
                      'aria-hidden': true
                    })}
                  </div>
                  <div 
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800/90 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
                    role="tooltip"
                  >
                    {expert.name}
                  </div>
                </a>
              ))}
              <a 
                href="#experts"
                className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full border-2 border-dashed border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                aria-label="View all of our expert appraisers"
              >
                +10
              </a>
            </div>
            
            <p className="text-gray-600 text-base">
              Join thousands who trust our certified experts for professional art appraisals
            </p>
            
            {/* Trust indicators - improved for mobile */}
            <div className="flex flex-col gap-5 mt-2">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-gray-100 p-2.5 sm:p-3" aria-hidden="true">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-700">
                  USPAP-certified experts with 15+ years of experience
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-gray-100 p-2.5 sm:p-3" aria-hidden="true">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-700">
                  Trusted by leading institutions worldwide
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-gray-100 p-2.5 sm:p-3" aria-hidden="true">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-700">
                  Fast 24-48 hour professional appraisals
                </p>
              </div>
            </div>

            {/* CTA section - improved for mobile */}
            <div className="flex flex-col gap-4 mt-4 w-full">
              <div className="relative w-full">
                <Button
                  variant="highConversion"
                  size="lg"
                  as="a"
                  href="https://appraisily.com/start"
                  id="start-appraisal-nav"
                  fullWidth
                  className="p-3 sm:p-4 text-base sm:text-lg"
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
                endIcon={<Award className="h-5 w-5" />}
                className="p-3 sm:p-4 text-base sm:text-lg"
              >
                View Services
              </Button>
            </div>
          </div>

          {/* Stats Card - improved for mobile */}
          <div className="relative mt-8 md:mt-0">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-500/10 rounded-2xl blur-3xl" 
              aria-hidden="true"
            />
            <Card variant="primary" className="relative">
              <CardContent className="p-5 sm:p-6 lg:p-8">
                {/* Featured Expert */}
                <a
                  href="#experts"
                  className="mb-6 flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                  aria-label={`View profile of ${experts[0].name}, ${experts[0].role}`}
                >
                  <img
                    src={experts[0].image}
                    alt={`${experts[0].name}, ${experts[0].role}`}
                    className="h-20 w-20 rounded-xl object-cover shadow-sm"
                    loading="eager"
                    width={80}
                    height={80}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{experts[0].name}</h3>
                    <p className="text-gray-600 text-base">{experts[0].role}</p>
                    <div className="mt-2 flex gap-2">
                      <Badge 
                        variant="accent"
                        icon={<Award className="h-4 w-4 text-amber-600" />}
                      >
                        Certified Expert
                      </Badge>
                    </div>
                  </div>
                </a>

                <div 
                  className="grid grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
                  aria-label="Our appraisal service statistics"
                >
                  <div className="text-center p-3 bg-gray-50/80 rounded-lg">
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">15K+</div>
                    <div className="mt-1 sm:mt-2 text-sm text-gray-600">Artworks Appraised</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50/80 rounded-lg">
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">98%</div>
                    <div className="mt-1 sm:mt-2 text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50/80 rounded-lg">
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">50+</div>
                    <div className="mt-1 sm:mt-2 text-sm text-gray-600">Countries Served</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50/80 rounded-lg">
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">24h</div>
                    <div className="mt-1 sm:mt-2 text-sm text-gray-600">Avg. Turnaround</div>
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