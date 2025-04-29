import React from 'react';
import { Upload, Search, TrendingUp, FileText, Clock, ArrowRight } from 'lucide-react';
import LazyImage from '../core/media/LazyImage';
import LottieAnimation from '../core/media/LottieAnimation';
import { Section } from '../core/Container';
import Button from '../core/Button';
import Badge from '../core/Badge';
import { Card } from '../core/Card';
import { Box, backgroundClasses, spacingClasses } from '../core/layout';
import { cn } from '../../utils/cn';

const steps = [
  {
    title: 'Submit Your Artwork to Your Dedicated Appraiser',
    description: 'Upload high-quality images and documentation to your assigned expert.',
    icon: Upload,
    timeline: 'Immediate',
    iconClass: 'bg-blue-100',
    iconTextClass: 'text-blue-600',
    badgeClass: 'bg-blue-50 text-blue-700',
    image: 'https://ik.imagekit.io/appraisily/WebPage/step1.png?updatedAt=1745922349843',
    imageAlt: 'Submit your artwork to your dedicated appraiser'
  },
  {
    title: 'Our Experts Analyze & Authenticate',
    description: 'Your appraiser examines your items using advanced analytical tools and expertise.',
    icon: Search,
    timeline: 'Minutes',
    iconClass: 'bg-indigo-100',
    iconTextClass: 'text-indigo-600',
    badgeClass: 'bg-indigo-50 text-indigo-700',
    image: 'https://ik.imagekit.io/appraisily/WebPage/step2.png?updatedAt=1745922349843',
    imageAlt: 'Experts analyzing and authenticating artwork'
  },
  {
    title: 'Appraiser Conducts Market Valuation',
    description: 'Your expert evaluates current market trends and historical significance of your item.',
    icon: TrendingUp,
    timeline: '12 Hours',
    iconClass: 'bg-purple-100',
    iconTextClass: 'text-purple-600',
    badgeClass: 'bg-purple-50 text-purple-700',
    image: 'https://ik.imagekit.io/appraisily/WebPage/step3.png?updatedAt=1745922349843',
    imageAlt: 'Appraiser conducting market valuation'
  },
  {
    title: 'Receive Your Detailed Expert Report',
    description: 'Get your comprehensive appraisal report with professional certification.',
    icon: FileText,
    timeline: '24 Hours',
    iconClass: 'bg-green-100',
    iconTextClass: 'text-green-600',
    badgeClass: 'bg-green-50 text-green-700',
    image: 'https://ik.imagekit.io/appraisily/WebPage/step4.png?updatedAt=1745922349843',
    imageAlt: 'Detailed expert appraisal report'
  }
];

export default function Process() {
  return (
    <Box 
      variant="section" 
      background="primary"
      className="from-white to-blue-50"
    >
      {/* Background Pattern */}
      <div className={cn(backgroundClasses.pattern, "absolute inset-0")} />
      
      <Box variant="content">
        <Box variant="flex" direction="col" className="mx-auto max-w-2xl text-center mb-16">
          <Badge 
            variant="primary"
            className="mb-6 py-2 px-4 bg-blue-100 inline-flex items-center justify-center gap-2"
            icon={<Clock className="h-5 w-5 text-blue-600 animate-pulse" />}
          >
            <span className="text-blue-700 font-semibold">24-48 Hour Turnaround</span>
          </Badge>
          
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
            Fast & Efficient, Appraiser-Led Process
          </h2>
          
          <p className="text-lg leading-8 text-gray-600">
            Our certified appraisers ensure accurate and timely evaluations within 24-48 hours
          </p>
        </Box>

        {/* Process Steps */}
        <Box variant="flex" direction="col" spacing="xl" className="mt-16">
          {steps.map((step, index) => (
            <Box 
              key={step.title}
              variant="flex" 
              direction="row"
              className={cn(
                'lg:items-center lg:gap-12',
                index % 2 === 0 ? '' : 'lg:flex-row-reverse',
                'relative flex-col lg:flex-row'
              )}
            >
              {/* Step Content */}
              <Box variant="flex" direction="col" className="lg:w-1/2 relative">
                {/* Connecting Line (except for last item) - Moved inside step content */}
                {index < steps.length - 1 && (
                  <div className="absolute -left-7 top-[4.5rem] bottom-[-8rem] w-px bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 lg:hidden" />
                )}
                
                <Card variant="feature" className="lg:bg-transparent">
                  <Box variant="flex" spacing="md" className="mb-4">
                    <Box className="flex-shrink-0">
                      <Box className={cn(`flex h-14 w-14 items-center justify-center rounded-xl`, step.iconClass)}>
                        <step.icon className={cn(`h-7 w-7`, step.iconTextClass)} />
                      </Box>
                    </Box>
                    <Box variant="flex" direction="col">
                      <Badge variant="primary" className={cn(step.badgeClass)}>
                        Step {index + 1}
                      </Badge>
                      <Badge variant="primary" className={cn(`mt-1`, step.badgeClass)}>
                        {step.timeline}
                      </Badge>
                    </Box>
                  </Box>
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-lg text-gray-600">{step.description}</p>
                </Card>
              </Box>

              {/* Step Image or Lottie Animation */}
              <Box className="mt-8 lg:mt-0 lg:w-1/2">
                <Box className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl bg-gray-100 group">
                  {(index === 1 || index === 3) ? (
                    <LottieAnimation 
                      src={`/lotties/step${index + 1}.json`}
                      className="w-full h-full"
                      loop={true}
                      autoplay={true}
                    />
                  ) : (
                    <LazyImage
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      width={1456}
                      height={816}
                      placeholderColor="#f9fafb"
                      loadingEffect="blur"
                    />
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        
        <Box variant="flex" className="mt-16 justify-center">
          <Button
            variant="highConversion"
            as="a"
            href="https://appraisily.com/start"
            size="lg"
            endIcon={<ArrowRight className="h-5 w-5" />}
            className="hover:scale-105"
          >
            Start with Your Appraiser
          </Button>
        </Box>
      </Box>
    </Box>
  );
}