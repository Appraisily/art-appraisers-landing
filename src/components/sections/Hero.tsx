import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';
import Logo from '../Logo';
import { usePreloadResources } from '../../hooks/usePreloadResources';
import Button from '../core/Button';
import Badge from '../core/Badge';
import { Card, CardContent } from '../core/Card';
import { 
  Box, 
  containerClasses, 
  spacingClasses, 
  backgroundClasses, 
  responsiveClasses,
  layoutClasses,
  typographyClasses
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

export default function Hero() {
  // Preload critical resources for the Hero
  usePreloadResources([
    { type: 'image', url: experts[0].image },
    { type: 'image', url: experts[1].image },
    { type: 'image', url: experts[2].image },
  ], []);

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className={layoutClasses.topBar}>
        <Box variant="content" className="flex justify-center">
          <Logo variant="dark" size="md" />
        </Box>
      </div>

      {/* Main Hero Section */}
      <Box 
        variant="section"
        background="primary"
        className="py-8 sm:py-12 md:py-16 lg:py-20 mb-6 sm:mb-8 pt-0 md:pt-0 lg:pt-0 mt-[-4rem] md:mt-[-5rem] lg:mt-[-6rem]"
        aria-labelledby="hero-heading"
      >
        {/* Enhanced Background Pattern */}
        <div 
          className={cn(backgroundClasses.pattern, "absolute inset-0")}
          aria-hidden="true"
        />
        
        {/* Abstract shapes - modern design elements */}
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
          
          {/* Enhanced orbs with more visible gradients */}
          <div className="absolute -left-4 top-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-blue-600/15 to-purple-600/10 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
          <div className="absolute right-10 top-1/3 h-48 w-48 rounded-full bg-gradient-to-r from-blue-400/15 to-cyan-400/10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute left-1/3 bottom-1/4 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500/10 to-indigo-500/5 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
        </div>

        {/* Content Container */}
        <Box variant="content" className="px-4 sm:px-6 relative z-10 mt-16 md:mt-20 lg:mt-24">
          {/* Main Content Grid - Using adjusted hero layout */}
          <div className={cn(layoutClasses.heroLayout)}>
            
            {/* Left Content Section */}
            <Box variant="flex" direction="col" className="z-10 pt-0">
              {/* Headline & Description */}
              <Box direction="col" spacing="md" className="mb-6 md:mb-8">
                <h1 
                  id="hero-heading" 
                  className={cn(typographyClasses.heroHeading, "mb-3 md:mb-4")}
                >
                  Connect with Certified Art Appraisers Instantly
                </h1>
                <p className={cn(typographyClasses.bodyLarge, "max-w-xl")}>
                  Specializing in fine art, antiques & collectibles—trusted by collectors worldwide.
                </p>
              </Box>
              
              {/* CTA Buttons */}
              <Box direction="col" spacing="md" className="mb-6 md:mb-8 w-full max-w-sm">
                <Box className="relative w-full">
                  <Button
                    variant="highConversion"
                    size="xl" // Larger size for desktop emphasis
                    as="a"
                    href="https://appraisily.com/start"
                    id="start-appraisal-nav"
                    fullWidth
                    className="shadow-md scale-100 hover:scale-[1.03] transition-transform duration-200"
                  >
                    Find My Expert Appraiser
                  </Button>
                  <Badge 
                    variant="accent"
                    className="absolute -right-3 -top-3 shadow-md font-medium"
                  >
                    24-48h turnaround
                  </Badge>
                </Box>
                <Button
                  variant="secondary"
                  size="xl" // Matching size for consistency
                  as="a"
                  href="#services"
                  startIcon={<Award className="h-5 w-5" />} // Using startIcon for consistency
                  fullWidth
                  className="bg-white/80 backdrop-blur-sm border-gray-300 hover:bg-white"
                >
                  View Services
                </Button>
              </Box>
              
              {/* Experts Section */}
              <Box 
                variant="flex" 
                direction="row" 
                spacing="sm" 
                className="items-center mb-6 md:mb-8"
                aria-label="Our expert appraisers"
              >
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
                      className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm group-hover:border-amber-300 transition-colors duration-200"
                      loading={index === 0 ? "eager" : "lazy"}
                      width={48} // Adjusted size
                      height={48}
                    />
                    <div 
                      className="absolute -bottom-1 -right-1 rounded-full bg-amber-500 border border-white p-0.5"
                      aria-hidden="true"
                    >
                      <Award className="h-2.5 w-2.5 text-white" aria-hidden="true" />
                    </div>
                  </a>
                ))}
                <a 
                  href="#experts"
                  className="flex items-center justify-center h-12 w-12 rounded-full border-2 border-dashed border-gray-300 bg-white/60 backdrop-blur-sm text-gray-600 text-xs font-medium hover:bg-gray-50/80 transition-colors duration-200 shadow-sm"
                  aria-label="View all of our expert appraisers"
                >
                  +10
                </a>
              </Box>
              
              {/* Trust Indicators - Desktop view (Simplified) */}
              <Box
                variant="flex"
                direction="col"
                spacing="md"
                className={cn(responsiveClasses.hideOnMobile, "mt-auto pt-4")}
              >
                <p className={cn(typographyClasses.bodySmall, "mb-3 text-gray-600")}>
                  Join thousands who trust our certified experts
                </p>
                <Box variant="flex" direction="row" spacing="sm" className="items-center">
                  <Shield className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p className={cn(typographyClasses.bodyStandard, "text-gray-700")}>
                    USPAP-certified experts with 15+ years of experience
                  </p>
                </Box>
                <Box variant="flex" direction="row" spacing="sm" className="items-center">
                  <Award className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p className={cn(typographyClasses.bodyStandard, "text-gray-700")}>
                    Trusted by leading institutions worldwide
                  </p>
                </Box>
                <Box variant="flex" direction="row" spacing="sm" className="items-center">
                  <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p className={cn(typographyClasses.bodyStandard, "text-gray-700")}>
                    Fast 24-48 hour professional appraisals
                  </p>
                </Box>
              </Box>

              {/* Mobile-only compact trust indicators - KEPT FOR MOBILE */} 
              <Box
                variant="flex"
                direction="row"
                className={cn(responsiveClasses.hideOnDesktop, "justify-between mb-4 mt-2")}
              >
                 <Box direction="col" className="items-center">
                  <div className="rounded-full bg-blue-100 p-2.5 mb-2">
                    <Shield className="h-6 w-6 text-blue-700" />
                  </div>
                  <span className="text-xs font-medium text-gray-700 text-center">Expert<br />Certified</span>
                </Box>
                
                <Box direction="col" className="items-center">
                  <div className="rounded-full bg-blue-100 p-2.5 mb-2">
                    <Award className="h-6 w-6 text-blue-700" />
                  </div>
                  <span className="text-xs font-medium text-gray-700 text-center">Trusted<br />Worldwide</span>
                </Box>
                
                <Box direction="col" className="items-center">
                  <div className="rounded-full bg-blue-100 p-2.5 mb-2">
                    <Clock className="h-6 w-6 text-blue-700" />
                  </div>
                  <span className="text-xs font-medium text-gray-700 text-center">24-48hr<br />Turnaround</span>
                </Box>
              </Box>
            </Box>

            {/* Right Content Section (Stats Card) */}
            <Box 
              className={cn(responsiveClasses.hideOnMobile, "relative")}
            >
              <div 
                className={cn(backgroundClasses.gradient, "absolute inset-0 rounded-2xl blur-3xl opacity-50")}
                aria-hidden="true"
              />
              <Card variant="primary" className="relative border border-gray-200/80 shadow-xl bg-white/80 backdrop-blur-md">
                <CardContent className="p-6 lg:p-8">
                  {/* Featured Expert */}
                  <a
                    href="#experts"
                    className="mb-6 flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors duration-200 shadow-sm"
                    aria-label={`View profile of ${experts[0].name}, ${experts[0].role}`}
                  >
                    <img
                      src={experts[0].image}
                      alt={`${experts[0].name}, ${experts[0].role}`}
                      className="h-16 w-16 rounded-lg object-cover shadow-sm" // Slightly smaller, rounded-lg
                      loading="eager"
                      width={64} // Adjusted size
                      height={64}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{experts[0].name}</h3>
                      <p className="text-gray-600 text-base">{experts[0].role}</p>
                      <div className="mt-2 flex gap-2">
                        <Badge 
                          variant="accent"
                          icon={<Award className="h-3 w-3 text-amber-600" />}
                          className="text-sm font-medium px-2.5 py-0.5" // Adjusted padding
                        >
                          Certified Expert
                        </Badge>
                      </div>
                    </div>
                  </a>

                  {/* Statistics Grid */}
                  <div 
                    className="grid grid-cols-2 gap-4 lg:gap-5"
                    aria-label="Our appraisal service statistics"
                  >
                    <div className="text-center p-4 lg:p-5 bg-white/90 rounded-lg border border-gray-100 shadow-sm">
                      <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">15K+</div>
                      <div className="text-sm text-gray-600">Artworks Appraised</div>
                    </div>
                    <div className="text-center p-4 lg:p-5 bg-white/90 rounded-lg border border-gray-100 shadow-sm">
                      <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">98%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                    <div className="text-center p-4 lg:p-5 bg-white/90 rounded-lg border border-gray-100 shadow-sm">
                      <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">50+</div>
                      <div className="text-sm text-gray-600">Countries Served</div>
                    </div>
                    <div className="text-center p-4 lg:p-5 bg-white/90 rounded-lg border border-gray-100 shadow-sm">
                      <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">24h</div>
                      <div className="text-sm text-gray-600">Avg. Turnaround</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Box>
          </div>
        </Box>
      </Box>
    </div>
  );
}