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
      className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-6 pb-16"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern - Decorative */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#3b82f6_0.8px,transparent_0.8px)] opacity-[0.03] [background-size:16px_16px]" 
        aria-hidden="true"
      />
      
      {/* Refined orbs - More subtle with blue tones */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-4 top-1/4 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute right-10 top-1/3 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute left-1/3 bottom-1/4 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
      </div>

      <Container>
        {/* Logo and header */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-xl bg-white/70 backdrop-blur-sm px-4 py-2 border border-gray-200/50 shadow-sm">
          <Logo variant="light" size="md" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content Section */}
          <div className="flex flex-col space-y-6 z-10">
            <h1 
              id="hero-heading" 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Connect with Certified Art Appraisers Instantly
            </h1>

            <p className="text-lg sm:text-xl text-gray-700">
              Specializing in fine art, antiques & collectibles—trusted by collectors worldwide.
            </p>
            
            {/* Expert Faces */}
            <div className="flex -space-x-3 sm:-space-x-4" aria-label="Our expert appraisers">
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
            
            <p className="text-gray-600 text-sm">
              Join thousands who trust our certified experts for professional art appraisals
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-gray-100 p-1.5 sm:p-2" aria-hidden="true">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700">
                  USPAP-certified experts with 15+ years of experience
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-gray-100 p-1.5 sm:p-2" aria-hidden="true">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700">
                  Trusted by leading institutions worldwide
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-gray-100 p-1.5 sm:p-2" aria-hidden="true">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700">
                  Fast 24-48 hour professional appraisals
                </p>
              </div>
            </div>

            {/* CTA section */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="relative">
                <Button
                  variant="highConversion"
                  size="lg"
                  as="a"
                  href="https://appraisily.com/start"
                  id="start-appraisal-nav"
                  fullWidth
                >
                  Find My Expert Appraiser
                </Button>
                <Badge 
                  variant="accent"
                  className="absolute -right-2 -top-2 shadow-md"
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
              >
                View Services
              </Button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative mt-4 lg:mt-0">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-500/5 rounded-2xl blur-3xl" 
              aria-hidden="true"
            />
            <Card variant="primary" className="relative">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                {/* Featured Expert */}
                <a
                  href="#experts"
                  className="mb-6 flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                  aria-label={`View profile of ${experts[0].name}, ${experts[0].role}`}
                >
                  <img
                    src={experts[0].image}
                    alt={`${experts[0].name}, ${experts[0].role}`}
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-cover shadow-sm"
                    loading="eager"
                    width={80}
                    height={80}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{experts[0].name}</h3>
                    <p className="text-gray-600">{experts[0].role}</p>
                    <div className="mt-1 sm:mt-2 flex gap-2">
                      <Badge 
                        variant="accent"
                        icon={<Award className="h-3 w-3 sm:h-4 sm:w-4 text-amber-600" />}
                      >
                        Certified Expert
                      </Badge>
                    </div>
                  </div>
                </a>

                <div 
                  className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
                  aria-label="Our appraisal service statistics"
                >
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">15K+</div>
                    <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Artworks Appraised</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">98%</div>
                    <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">50+</div>
                    <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">24h</div>
                    <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">Avg. Turnaround</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
      
      {/* Sticky mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md p-3 z-50 shadow-lg border-t border-gray-200">
        <Button
          variant="highConversion"
          fullWidth
          as="a"
          href="https://appraisily.com/start"
          size="md"
          startIcon={<Clock className="h-4 w-4" />}
        >
          Find My Expert Appraiser
        </Button>
      </div>
    </section>
  );
}