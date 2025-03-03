import React, { useState, useEffect } from 'react';
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
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Fallback para navegadores que no soportan autoreproducción o videos
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!videoLoaded) {
        const videoElement = document.getElementById('features-background-video');
        if (videoElement) {
          videoElement.style.display = 'none';
        }
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [videoLoaded]);

  return (
    <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
      {/* Video Background con Fallback */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900" />
        <video
          id="features-background-video"
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
          className="h-full w-full object-cover opacity-30"
          poster="https://ik.imagekit.io/appraisily/WebPage/video_poster.jpg?tr=w-1920,h-1080,q-50"
        >
          <source src="https://ik.imagekit.io/appraisily/Videos/hero4.mp4?updatedAt=1731840454419" type="video/mp4" />
          <source src="https://ik.imagekit.io/appraisily/Videos/hero4.webm" type="video/webm" />
          {/* Fallback para navegadores que no soportan video */}
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="absolute -inset-x-4 -inset-y-2 bg-primary/20 blur-2xl rounded-3xl" />
          <h2 className="relative text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 sm:text-5xl">
            Why Choose Our Appraisers
          </h2>
          <p className="relative mt-6 text-lg leading-8 text-blue-100 font-medium">
            Professional expertise you can trust for all your appraisal needs
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-200 shadow-lg"
              >
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-white/10 p-2 sm:p-3 flex-shrink-0">
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}