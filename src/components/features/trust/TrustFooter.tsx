import React, { useEffect, useRef } from 'react';
import { Shield, Award, Building2, Scale, FileCheck, Globe2 } from 'lucide-react';
import Button from '../../core/Button';
import { cn } from '../../../utils/cn';

const credentials = [
  {
    icon: Shield,
    title: 'USPAP Compliance',
    description: 'Fully compliant with Uniform Standards of Professional Appraisal Practice - the gold standard in appraisals',
    highlight: '100% Compliant'
  },
  {
    icon: Award,
    title: 'ISA Member',
    description: 'Active member of the International Society of Appraisers with certified expertise',
    highlight: 'Certified Member'
  },
  {
    icon: Building2,
    title: 'AAA Certified',
    description: 'Full accreditation from the prestigious Appraisers Association of America',
    highlight: 'Full Accreditation'
  },
  {
    icon: Scale,
    title: 'IRS Qualified',
    description: 'Meets all IRS requirements for Form 8283 and charitable contribution appraisals',
    highlight: 'Form 8283 Ready'
  },
  {
    icon: FileCheck,
    title: 'Insurance Approved',
    description: 'Reports accepted by all major insurance carriers for coverage and claims',
    highlight: 'All Carriers'
  },
  {
    icon: Globe2,
    title: 'Global Network',
    description: 'Extensive international network with expertise across major art markets worldwide',
    highlight: '50+ Countries'
  }
];

export default function TrustFooter() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const mountainsRef = useRef<HTMLDivElement>(null);
  const cityRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollPosition = window.scrollY;
      const parallaxElement = parallaxRef.current;
      const offset = parallaxElement.offsetTop;
      const elementHeight = parallaxElement.offsetHeight;
      
      // Check if the element is in the viewport
      if (scrollPosition > offset - window.innerHeight && scrollPosition < offset + elementHeight) {
        // Calculate how far we've scrolled into the section
        const scrollIntoElement = scrollPosition - (offset - window.innerHeight);
        const percent = scrollIntoElement / (elementHeight + window.innerHeight);
        const scale = 1 + (percent * 0.05); // Subtle scale effect
        
        // Apply different parallax speeds to different elements
        if (starsRef.current) {
          starsRef.current.style.transform = `translateY(${scrollIntoElement * 0.03}px)`;
        }
        
        if (mountainsRef.current) {
          mountainsRef.current.style.transform = `translateY(${scrollIntoElement * 0.08}px)`;
        }
        
        if (cityRef.current) {
          cityRef.current.style.transform = `translateY(${scrollIntoElement * 0.12}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set positions
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={parallaxRef}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ minHeight: '640px' }}
    >
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars/Sky Layer - Moves slowest */}
        <div 
          ref={starsRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://ik.imagekit.io/appraisily/WebPage/background_city.png")',
            backgroundPosition: 'center top',
            opacity: 0.95,
            transform: 'scale(1.1)' // Slightly larger to avoid edge gaps during parallax
          }}
        />
        
        {/* Removed dark overlay to show the image more clearly */}
        {/* Adding a very subtle gradient overlay for text readability instead */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
        
        {/* Subtle glow effects for depth - changed to grayscale */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-white/10 blur-[100px] animate-[pulse_15s_ease-in-out_infinite]" />
          <div className="absolute right-40 bottom-1/3 h-48 w-48 rounded-full bg-white/5 blur-[80px] animate-[pulse_20s_ease-in-out_infinite]" />
          <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-white/5 blur-[120px] animate-[pulse_25s_ease-in-out_infinite]" />
        </div>
        
        {/* Stars/sparkles overlay */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white rounded-full animate-[pulse_3s_ease-in-out_infinite]"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.1,
                animationDelay: Math.random() * 5 + 's'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Global Recognition & Accreditation
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Our appraisals are recognized by leading institutions and meet the highest global standards
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {credentials.map((credential, index) => {
                // Create different subtle accent colors for each card
                const cardStyles = [
                  { border: "from-gray-300 to-gray-200", icon: "from-gray-900 to-black" },
                  { border: "from-gray-200 to-gray-100", icon: "from-gray-900 to-gray-800" },
                  { border: "from-gray-300 to-gray-100", icon: "from-gray-900 to-gray-700" }
                ];
                
                const style = cardStyles[index % 3];
                
                return (
                  <div
                    key={credential.title}
                    className="group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-md hover:bg-white/95 transition-all duration-300 shadow-lg"
                  >
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${style.border} [mask-image:linear-gradient(black,black)_content-box,linear-gradient(black,black)] p-[1px]`} />

                    <div className="relative p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${style.icon} shadow-md`}>
                            <credential.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {credential.title}
                            </h3>
                            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 border border-gray-200">
                              {credential.highlight}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                            {credential.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-16">
              <div className="relative rounded-2xl bg-white/90 backdrop-blur-md p-6 sm:p-8 shadow-lg">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <Award className="h-6 w-6 text-gray-800" />
                  <span className="text-gray-800 sm:flex-1">
                    Get your professional appraisal from certified experts
                  </span>
                  <Button
                    as="a"
                    href="https://appraisily.com/start"
                    className={cn(
                      "w-full sm:w-auto rounded-xl px-6 py-3 text-base font-semibold shadow-sm transition-all duration-200",
                      "bg-black hover:bg-gray-800 text-white border border-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
                    )}
                  >
                    Connect with Your Appraiser
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}