import React from 'react';
import { Award, Shield, FileCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certified Experts',
    description: 'Our team consists of ISA and AAA certified professional appraisers'
  },
  {
    icon: Shield,
    title: 'USPAP Compliant',
    description: 'All appraisals follow Uniform Standards of Professional Appraisal Practice'
  },
  {
    icon: FileCheck,
    title: 'Legal Documentation',
    description: 'Comprehensive reports accepted by insurance companies, IRS, and courts'
  },
  {
    icon: Clock,
    title: '24-48h Turnaround',
    description: 'Fast professional service with detailed analysis'
  }
];

export default function Features() {
  return (
    <div className="relative bg-gray-900 py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-30"
        >
          <source src="https://ik.imagekit.io/appraisily/Videos/hero4.mp4?updatedAt=1731840454419" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="absolute -inset-x-4 -inset-y-2 bg-primary/20 blur-2xl rounded-3xl" />
          <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            Why Choose Our Appraisers
          </h2>
          <p className="relative mt-4 sm:mt-6 text-base sm:text-lg leading-6 sm:leading-8 text-blue-100 font-medium">
            Professional expertise you can trust for all your appraisal needs
          </p>
        </div>

        <div className="mx-auto mt-10 sm:mt-16 md:mt-20 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-white/10 p-2 sm:p-3 flex-shrink-0">
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-5 sm:leading-6 text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}