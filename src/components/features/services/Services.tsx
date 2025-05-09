import React, { useState, useRef, useEffect } from 'react';
import { Scale, Shield, FileCheck, Search, DollarSign, History, FileText, Clock, Camera, Award, X, Play, Receipt, FileSpreadsheet, Landmark, Grid, ArrowRight } from 'lucide-react';
import LazyImage from './LazyImage';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title: string;
}

const useVideoState = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  const minimize = () => {
    if (videoRef.current) {
      // Pause video using postMessage
      videoRef.current.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
    setIsMinimized(true);
  };

  const maximize = () => {
    setIsMinimized(false);
    setIsClosing(false);
  };

  const close = () => {
    setIsClosing(true);
    if (videoRef.current) {
      videoRef.current.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  };

  return { isMinimized, minimize, maximize, close, isClosing, videoRef };
};

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoId, title }) => {
  if (!isOpen) return null;

  const { isMinimized, minimize, maximize, close, isClosing, videoRef } = useVideoState();

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(onClose, 300); // Wait for fade out animation
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  return (
    <div 
      className={`fixed inset-0 z-50 overflow-y-auto transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`} 
      aria-labelledby="modal-title" 
      role="dialog" 
      aria-modal="true"
    >
      <div 
        className={`flex min-h-screen items-center justify-center p-4 text-center sm:p-0 ${
          isMinimized ? 'items-end pb-20' : ''
        }`}
      >
        <div 
          className="fixed inset-0 bg-gray-900/75 transition-opacity" 
          aria-hidden="true"
          onClick={minimize}
        ></div>

        <div 
          className={`relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-300 sm:my-8 sm:w-full ${
            isMinimized ? 'w-64 h-36 fixed bottom-4 right-4' : 'sm:max-w-4xl'
          }`}
        >
          <div className="absolute right-4 top-4 z-10">
            <button
              type="button"
              className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={isMinimized ? close : minimize}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div 
            className={`aspect-video ${isMinimized ? 'cursor-pointer' : ''}`}
            onClick={isMinimized ? maximize : undefined}
          >
            <iframe
              ref={videoRef}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: 'Regular Appraisal',
    description: 'Our certified appraisers provide comprehensive evaluation of your art or antique pieces with detailed market analysis.',
    icon: Scale,
    features: [
      { text: 'Expert Analysis', icon: Search },
      { text: 'Market Valuation', icon: DollarSign },
      { text: 'Historical Research', icon: History },
      { text: 'Documentation', icon: FileText }
    ],
    action: {
      type: 'video',
      videoId: 'mHxD5DzRKM8',
      title: 'Regular Appraisal Process'
    }
  },
  {
    title: 'Insurance Appraisal',
    description: 'Our expert appraisers prepare detailed reports specifically designed for insurance purposes and coverage.',
    icon: Shield,
    features: [
      { text: 'Replacement Value', icon: Receipt },
      { text: 'Risk Assessment', icon: FileSpreadsheet },
      { text: 'Digital Documentation', icon: FileCheck },
      { text: 'Insurance Standards', icon: Award }
    ],
    action: {
      type: 'video',
      videoId: 'OM_zTNac890',
      title: 'Insurance Appraisal Process'
    }
  },
  {
    title: 'Tax Deduction Appraisal',
    description: 'Our certified appraisers prepare IRS-compliant appraisals for charitable donations and tax purposes.',
    icon: FileCheck,
    features: [
      { text: 'IRS Compliance', icon: Landmark },
      { text: 'Fair Market Value', icon: DollarSign },
      { text: 'Detailed Documentation', icon: FileText },
      { text: 'Expert Testimony', icon: Award }
    ],
    action: {
      type: 'video',
      videoId: 'polLX9YL6uo',
      title: 'Tax Deduction Appraisal Process'
    }
  }
];

const Services: React.FC = () => {
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoId: string;
    title: string;
  }>({
    isOpen: false,
    videoId: '',
    title: ''
  });

  const [chatModalOpen, setChatModalOpen] = useState(false);

  return (
    <div className="bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl drop-shadow-sm relative">
            <span className="relative z-10">Choose Your Appraisal Service</span>
            <span className="absolute inset-0 bg-gradient-to-r from-gray-900/5 via-gray-900/10 to-gray-900/5 blur-lg -z-10 scale-110 rounded-full opacity-50"></span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our certified appraisers tailor each report to your needs. Select the service that best fits your requirements.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => {
            // Different subtle border color for each card
            const borderColors = [
              "before:border-blue-200/40", 
              "before:border-emerald-200/40", 
              "before:border-amber-200/40"
            ];
            
            // Different subtle glow colors for each card
            const glowColors = [
              "after:shadow-[0_0_30px_rgba(59,130,246,0.1)]", 
              "after:shadow-[0_0_30px_rgba(16,185,129,0.1)]", 
              "after:shadow-[0_0_30px_rgba(245,158,11,0.1)]"
            ];
            
            return (
              <div 
                key={service.title} 
                className={`
                  relative flex flex-col rounded-2xl p-8 bg-white shadow-sm 
                  hover:shadow-lg transition-all duration-300
                  before:absolute before:inset-0 before:rounded-2xl before:border before:border-gray-100 
                  before:transition-all before:duration-300 before:z-10 
                  after:absolute after:inset-0 after:rounded-2xl after:z-0 after:opacity-0 
                  hover:before:border-2 hover:after:opacity-100
                  ${borderColors[index % 3]} ${glowColors[index % 3]}
                `}
              >
                <div className="mb-6 relative z-20">
                  <service.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 relative z-20">{service.title}</h3>
                <p className="mt-4 text-gray-600 flex-grow relative z-20">{service.description}</p>
                <ul className="mt-6 space-y-3 relative z-20">
                  {service.features && service.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2">
                      <feature.icon className="h-5 w-5 text-gray-700 mt-1" />
                      <span className="text-gray-700">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 relative z-20">
                  {service.action && service.action.videoId && (
                    <button
                      onClick={() => setVideoModal({
                        isOpen: true,
                        videoId: service.action.videoId,
                        title: service.action.title
                      })}
                      className="group rounded-md bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 transition-all duration-200"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Play className="h-4 w-4" />
                        Watch Service Overview
                      </span>
                    </button>
                  )}
                  <a
                    href="https://appraisily.com/start"
                    className="rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all duration-200 text-center"
                  >
                    Select This Service
                  </a>
                  <button
                    onClick={() => setChatModalOpen(true)}
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium mt-2 transition-colors"
                  >
                    Not sure? Talk to an Appraiser
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal({ ...videoModal, isOpen: false })}
        videoId={videoModal.videoId}
        title={videoModal.title}
      />

      {chatModalOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setChatModalOpen(false)}
        >
          <div 
            className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Talk to an Appraiser</h3>
              <button 
                onClick={() => setChatModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Not sure which service you need? Our expert appraisers are ready to help. Enter your contact information and we'll connect you with a specialist.
            </p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setChatModalOpen(false); }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 text-gray-900 p-2 border"
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 text-gray-900 p-2 border"
                  placeholder="Your email" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  rows={3} 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 text-gray-900 p-2 border"
                  placeholder="Tell us briefly about your artwork or question" 
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Connect with an Appraiser
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;