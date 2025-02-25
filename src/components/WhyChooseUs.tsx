import React from 'react';
import { Users, Camera, FileCheck, LockKeyhole, Star, Award, Globe2, Search, TrendingUp, ImagePlus, Clock } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'AI-Powered Image Analysis',
    description: 'Our Google Vision technology identifies similar artworks and authenticates your piece through advanced visual comparison'
  },
  {
    icon: TrendingUp,
    title: 'Real Market Comparisons',
    description: 'Reports include 10+ recent auction results to validate your artwork\'s value with concrete market evidence'
  },
  {
    icon: FileCheck,
    title: 'ISA-Compliant Documentation',
    description: 'Comprehensive reports that meet International Society of Appraisers standards for insurance, tax, and estate planning'
  },
  {
    icon: Clock,
    title: 'Fast 24-48 Hour Turnaround',
    description: 'Receive your professional appraisal quickly without compromising on quality or thoroughness'
  },
  {
    icon: Users,
    title: 'Expert Authentication',
    description: 'Professional signature verification and provenance research by certified appraisers with 15+ years of experience'
  },
  {
    icon: Award,
    title: 'Multi-Purpose Valuation',
    description: 'One report serves multiple needs: insurance coverage, estate planning, charitable donations, and resale decisions'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Makes Our Appraisals Superior
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive appraisal reports provide everything you need for insurance, tax, estate planning, and informed sales decisions
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2.5 flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://appraisily.com/start"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary/90 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
          >
            Start Your Appraisal
            <Globe2 className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;