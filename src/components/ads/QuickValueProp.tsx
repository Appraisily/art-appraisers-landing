import React from 'react';
import { Clock, Award, Shield } from 'lucide-react';

const valueProps = [
  {
    icon: Clock,
    title: 'Fast 24-48 Hour Turnaround',
    description: 'Receive your professional appraisal quickly without waiting weeks'
  },
  {
    icon: Award,
    title: 'Certified Appraisers',
    description: 'Our team of ISA and USPAP certified experts ensures accurate valuations'
  },
  {
    icon: Shield,
    title: 'Insurance Accepted',
    description: 'Our appraisals are accepted by all major insurance providers'
  }
];

export default function QuickValueProp() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Our Appraisal Service?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Professional appraisers with over two decades of experience in the art market
          </p>
        </div>
        
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-3 lg:mx-0 lg:max-w-none">
          {valueProps.map((prop) => (
            <div key={prop.title} className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all duration-200">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <prop.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900">
                {prop.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-primary">
            Starting at just $59 for standard appraisals
          </p>
        </div>
      </div>
    </div>
  );
} 