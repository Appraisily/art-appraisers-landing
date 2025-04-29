import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';
import Logo from '../Logo';
import { usePreloadResources } from '../../hooks/usePreloadResources';

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
      className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800/90 pt-6 pb-16"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern - Decorative */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#6366f1_0.8px,transparent_0.8px)] opacity-[0.03] [background-size:16px_16px]" 
        aria-hidden="true"
      />
      
      {/* Refined orbs - More subtle */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-4 top-1/4 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute right-10 top-1/3 h-48 w-48 rounded-full bg-sky-400/15 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute left-1/3 bottom-1/4 h-80 w-80 rounded-full bg-slate-400/10 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Logo and header - Moved above the grid for better positioning */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20">
            <Logo variant="light" size="md" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content Section */}
            <div className="flex flex-col space-y-6 z-10">
              <h1 
                id="hero-heading" 
                className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200 sm:text-5xl lg:text-6xl"
              >
                Connect with Certified Art Appraisers Instantly
              </h1>

              <p className="text-lg sm:text-xl text-slate-100">
                Specializing in fine art, antiques & collectibles—trusted by collectors worldwide.
              </p>
              
              {/* Expert Faces - Made more compact */}
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
                      className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-900/90 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
                      role="tooltip"
                    >
                      {expert.name}
                    </div>
                  </a>
                ))}
                <a 
                  href="#experts"
                  className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full border-2 border-dashed border-white/50 bg-white/10 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/20 transition-colors duration-200"
                  aria-label="View all of our expert appraisers"
                >
                  +10
                </a>
              </div>
              
              <p className="text-slate-300 text-sm">
                Join thousands who trust our certified experts for professional art appraisals
              </p>
              
              {/* Trust indicators condensed */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-slate-700/70 p-1.5 sm:p-2" aria-hidden="true">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-slate-300" />
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-slate-200">
                    USPAP-certified experts with 15+ years of experience
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-slate-700/70 p-1.5 sm:p-2" aria-hidden="true">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-slate-300" />
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-slate-200">
                    Trusted by leading institutions worldwide
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-slate-700/70 p-1.5 sm:p-2" aria-hidden="true">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-slate-300" />
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-slate-200">
                    Fast 24-48 hour professional appraisals
                  </p>
                </div>
              </div>

              {/* CTA section - Changed to amber for better conversion */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="relative">
                  <a
                    href="https://appraisily.com/start"
                    id="start-appraisal-nav"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-base sm:text-lg font-semibold text-white shadow-lg hover:from-amber-600 hover:to-amber-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-all duration-200 ring-1 ring-amber-400/30 hover:shadow-xl w-full sm:w-auto"
                    aria-label="Find my expert appraiser - Start the art valuation process"
                  >
                    <span className="relative">
                      Find My Expert Appraiser
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" aria-hidden="true" />
                    </span>
                    <svg 
                      className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <div className="absolute -right-2 -top-2 flex items-center justify-center rounded-full bg-amber-500 px-2 py-0.5 text-xs font-semibold text-white shadow-md">
                    24-48h turnaround
                  </div>
                </div>
                
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800/80 backdrop-blur-sm px-6 py-3.5 text-base sm:text-lg font-semibold text-white hover:bg-slate-700/80 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 transition-all duration-200 border border-slate-600/30 hover:border-slate-500/50 shadow-md"
                  aria-label="View our art appraisal services"
                >
                  View Services
                  <Award 
                    className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-200" 
                    aria-hidden="true" 
                  />
                </a>
              </div>
            </div>

            {/* Stats Card - Refined styling */}
            <div className="relative mt-4 lg:mt-0">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-indigo-500/5 rounded-2xl blur-3xl" 
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 shadow-lg">
                <div className="p-4 sm:p-6 lg:p-8">
                  {/* Featured Expert */}
                  <a
                    href="#experts"
                    className="mb-6 flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:bg-slate-800/80 transition-colors duration-200"
                    aria-label={`View profile of ${experts[0].name}, ${experts[0].role}`}
                  >
                    <img
                      src={experts[0].image}
                      alt={`${experts[0].name}, ${experts[0].role}`}
                      className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-cover"
                      loading="eager"
                      width={80}
                      height={80}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{experts[0].name}</h3>
                      <p className="text-slate-300">{experts[0].role}</p>
                      <div className="mt-1 sm:mt-2 flex gap-2">
                        <div 
                          className="inline-flex items-center rounded-full bg-amber-100 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-slate-900"
                          role="text"
                        >
                          <Award 
                            className="h-3 w-3 sm:h-4 sm:w-4 text-amber-600 mr-1" 
                            aria-hidden="true" 
                          />
                          Certified Expert
                        </div>
                      </div>
                    </div>
                  </a>

                  <div 
                    className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
                    aria-label="Our appraisal service statistics"
                  >
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-white">15K+</div>
                      <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-300">Artworks Appraised</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-white">98%</div>
                      <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-300">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-white">50+</div>
                      <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-300">Countries Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-white">24h</div>
                      <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-300">Avg. Turnaround</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky mobile CTA that appears on scroll - Changed to amber for consistency */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md p-3 z-50 shadow-lg border-t border-slate-800">
        <a
          href="https://appraisily.com/start"
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 text-base font-semibold text-white w-full"
          aria-label="Find my expert appraiser - Start the art valuation process"
        >
          <span>Find My Expert Appraiser</span>
          <Clock className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}