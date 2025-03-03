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
  // Precargar recursos críticos para el Hero
  usePreloadResources([
    { type: 'image', url: experts[0].image },
    { type: 'image', url: experts[1].image },
    { type: 'image', url: experts[2].image },
  ], []);

  return (
    <section 
      className="relative min-h-screen isolate overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-primary/20"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern - Decorativo */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] opacity-10 [background-size:16px_16px] animate-[pulse_4s_ease-in-out_infinite]" 
        aria-hidden="true"
      />
      
      {/* Floating Orbs - Decorativo */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-4 top-1/4 h-64 w-64 rounded-full bg-primary/30 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute right-10 top-1/3 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute left-1/3 bottom-1/4 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Section */}
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20">
                <Logo variant="light" size="md" />
              </div>
              
              <h1 
                id="hero-heading" 
                className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 sm:text-6xl"
              >
                Expert Art Appraisers You Can Trust
              </h1>
              
              {/* Expert Faces */}
              <div className="mt-8 flex -space-x-4" aria-label="Our expert appraisers">
                {experts.map((expert, index) => (
                  <div key={expert.name} className="relative group">
                    <img
                      src={expert.image}
                      alt={`${expert.name}, ${expert.role}`}
                      className="h-16 w-16 rounded-full border-2 border-white object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                      width={64}
                      height={64}
                    />
                    <div 
                      className="absolute -bottom-1 -right-1 rounded-full bg-primary border-2 border-white p-1"
                      aria-hidden="true"
                    >
                      {React.createElement(expert.stats[0].icon, {
                        className: "h-4 w-4 text-white",
                        'aria-hidden': true
                      })}
                    </div>
                    <div 
                      className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
                      role="tooltip"
                    >
                      {expert.name}
                    </div>
                  </div>
                ))}
                <div 
                  className="flex items-center justify-center h-16 w-16 rounded-full border-2 border-dashed border-white/50 bg-white/10 backdrop-blur-sm text-white text-sm font-medium"
                  aria-label="And 10 more expert appraisers"
                >
                  +10
                </div>
              </div>
              
              <p className="mt-4 text-blue-200 text-sm">
                Join thousands who trust our certified experts for professional art appraisals
              </p>
              
              <div className="mt-8 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-primary/10 p-2" aria-hidden="true">
                      <Shield className="h-5 w-5 text-blue-300" />
                    </div>
                  </div>
                  <p className="text-lg text-blue-100">
                    USPAP-certified experts with 15+ years of experience
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-primary/10 p-2" aria-hidden="true">
                      <Award className="h-5 w-5 text-blue-300" />
                    </div>
                  </div>
                  <p className="text-lg text-blue-100">
                    Trusted by leading institutions worldwide
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-primary/10 p-2" aria-hidden="true">
                      <Clock className="h-5 w-5 text-blue-300" />
                    </div>
                  </div>
                  <p className="text-lg text-blue-100">
                    Fast 24-48 hour professional appraisals
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://appraisily.com/start"
                  id="start-appraisal-nav"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg hover:from-primary/90 hover:to-blue-600/90 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 animate-pulse-subtle scale-105 ring-2 ring-blue-300/50 hover:shadow-xl"
                  aria-label="Obtener mi tasación - Comienza el proceso de valoración de arte"
                >
                  <span className="relative">
                    Obtener mi tasación
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
                
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white hover:bg-white/20 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 transition-all duration-200 border border-white/20 hover:border-white/30"
                  aria-label="Ver nuestros servicios de tasación de arte"
                >
                  Ver Servicios
                  <Award 
                    className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-200" 
                    aria-hidden="true" 
                  />
                </a>
              </div>
            </div>

            {/* Stats Card */}
            <div className="relative">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl blur-3xl" 
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl bg-white/[0.075] backdrop-blur-sm border border-white/10">
                <div className="p-8">
                  {/* Featured Expert */}
                  <div className="mb-8 flex items-center gap-6 p-4 rounded-xl bg-white/[0.05] border border-white/10">
                    <img
                      src={experts[0].image}
                      alt={`${experts[0].name}, ${experts[0].role}`}
                      className="h-20 w-20 rounded-xl object-cover"
                      loading="eager"
                      width={80}
                      height={80}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{experts[0].name}</h3>
                      <p className="text-blue-200">{experts[0].role}</p>
                      <div className="mt-2 flex gap-2">
                        <div 
                          className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-medium text-gray-900"
                          role="text"
                        >
                          <Award 
                            className="h-4 w-4 text-primary mr-1" 
                            aria-hidden="true" 
                          />
                          Certified Expert
                        </div>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="grid grid-cols-2 gap-8"
                    aria-label="Our appraisal service statistics"
                  >
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">15K+</div>
                      <div className="mt-2 text-sm text-blue-200">Artworks Appraised</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">98%</div>
                      <div className="mt-2 text-sm text-blue-200">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">50+</div>
                      <div className="mt-2 text-sm text-blue-200">Countries Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">24h</div>
                      <div className="mt-2 text-sm text-blue-200">Avg. Turnaround</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}