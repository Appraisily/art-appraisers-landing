import React from 'react';
import { Upload, Search, TrendingUp, FileText, Clock, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Submit Your Artwork',
    description: 'Upload high-quality images and documentation of your items.',
    icon: Upload,
    timeline: 'Immediate',
    iconClass: 'bg-blue-100',
    iconTextClass: 'text-blue-600',
    badgeClass: 'bg-blue-50 text-blue-700'
  },
  {
    title: 'Image Analysis',
    description: 'Our experts analyze your items using advanced AI-driven tools.',
    icon: Search,
    timeline: 'Minutes',
    iconClass: 'bg-indigo-100',
    iconTextClass: 'text-indigo-600',
    badgeClass: 'bg-indigo-50 text-indigo-700'
  },
  {
    title: 'Market Valuation',
    description: 'We evaluate based on current market trends and historical significance.',
    icon: TrendingUp,
    timeline: '12 Hours',
    iconClass: 'bg-purple-100',
    iconTextClass: 'text-purple-600',
    badgeClass: 'bg-purple-50 text-purple-700'
  },
  {
    title: 'Receive Report',
    description: 'Get your detailed appraisal report with final valuation.',
    icon: FileText,
    timeline: '24 Hours',
    iconClass: 'bg-green-100',
    iconTextClass: 'text-green-600',
    badgeClass: 'bg-green-50 text-green-700'
  }
];

export default function Process() {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50 py-24 sm:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
      
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-blue-50 rounded-full shadow-sm">
              <Clock className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-primary font-semibold">24-48 Hour Turnaround</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Fast & Efficient Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our streamlined process ensures accurate and timely appraisals within 24-48 hours
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative mt-16 mx-auto max-w-5xl">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 transform -translate-x-1/2 rounded-full" />
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={step.title} className="relative group">
                  {/* Center dot */}
                  <div className="absolute top-12 left-1/2 w-6 h-6 rounded-full bg-white shadow-md border-2 border-primary transform -translate-x-1/2 z-10 
                                group-hover:scale-110 transition-transform duration-300" />
                  
                  <div className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100
                                    group-hover:transform group-hover:-translate-y-1 group-hover:border-primary/20">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.iconClass}`}>
                              <step.icon className={`h-6 w-6 ${step.iconTextClass}`} />
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                              Step {index + 1}
                            </span>
                            <span className={`mt-1 inline-flex items-center rounded-full ${step.badgeClass} px-2.5 py-1 text-xs font-medium`}>
                              {step.timeline}
                            </span>
                          </div>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">{step.title}</h3>
                        <p className="mt-2 text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Process Steps */}
          <div className="lg:hidden mt-16">
            <div className="relative">
              {/* Vertical line for mobile */}
              <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-300 via-indigo-300 to-purple-300" />
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={step.title} className="relative pl-16 pr-2">
                    {/* Left dot with step-specific color */}
                    <div className={`absolute left-4 top-6 w-4 h-4 rounded-full ${step.iconClass} border-2 ${step.iconTextClass.replace('text-', 'border-')} transform -translate-x-1/2 z-10`} />
                    
                    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${step.iconClass}`}>
                            <step.icon className={`h-5 w-5 ${step.iconTextClass}`} />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                              Step {index + 1}
                            </span>
                            <span className={`inline-flex items-center rounded-full ${step.badgeClass} px-2.5 py-1 text-xs font-medium`}>
                              {step.timeline}
                            </span>
                          </div>
                          <h3 className="mt-2 text-lg font-semibold text-gray-900">{step.title}</h3>
                          <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center">
            <a
              href="https://appraisily.com/start"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
            >
              Start Your Appraisal Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}