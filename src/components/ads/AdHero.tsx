"use client";

import React from 'react';
import { ArrowRight, Camera, Star, CheckCircle2 } from 'lucide-react';
import Logo from '../Logo';

const benefits = [
  "Professional valuations in 24-48 hours",
  "Certified appraisers with 20+ years experience",
  "Starting at just $59",
  "Insurance, estate & market valuations"
];

export default function AdHero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 sm:block">
        <img
          src="https://ik.imagekit.io/appraisily/WebPage/appraisal-image.jpg"
          alt="Art appraisal in progress"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
      </div>

      <div className="relative px-6 py-8 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl lg:mr-auto lg:ml-0 lg:max-w-xl">
          <div className="flex items-center gap-x-3">
            <Logo variant="dark" size="md" />
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              Limited Time: 10% Off Your First Appraisal
            </span>
          </div>
          
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get Your Artwork <span className="text-primary">Professionally Appraised</span> Online
          </h1>
          
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Accurate, certified appraisals for insurance, estate planning, and sales. 
            Upload photos of your artwork and receive a detailed valuation in 24-48 hours.
          </p>
          
          <div className="mt-6 space-y-6">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="h-5 w-5 flex-none text-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="https://appraisily.com/start"
                className="flex-auto rounded-lg bg-primary px-4 py-3.5 text-center text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 flex items-center justify-center gap-2"
              >
                Start Your Appraisal Now
                <ArrowRight className="h-4 w-4" />
              </a>
              
              <a
                href="#service-details"
                className="flex-auto rounded-lg bg-gray-100 px-4 py-3.5 text-center text-base font-semibold text-gray-900 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all duration-200"
              >
                View Sample Report
              </a>
            </div>

            <div className="mt-2 flex items-center gap-3">
              <div className="flex -space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    style={{
                      backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`,
                      backgroundSize: 'cover'
                    }}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-gray-900">300+</span> appraisals completed this month
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">Trusted by collectors worldwide</span>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex-shrink-0 rounded-full p-1.5 bg-blue-50">
              <Camera className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-gray-500">
              Simply upload photos of your artwork and our experts will handle the rest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 