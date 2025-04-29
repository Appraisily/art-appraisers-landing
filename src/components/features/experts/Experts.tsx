import React, { useState } from 'react';
import { Award, Star, Globe2, X } from 'lucide-react';
import LazyImage from '../../core/media/LazyImage';

const experts = [
  {
    name: 'Andrés Gómez',
    title: 'Lead Art Appraiser',
    specialties: ['European Paintings', 'Old Masters'],
    image: 'https://ik.imagekit.io/appraisily/Appraisers/andres.png?tr=w-400,h-400,q-75',
    credentials: ['BSc, MSc', 'Certified Art Appraiser'],
    quote: 'Expertly valuing your treasures to safeguard your investment.',
    stats: [
      { icon: Award, text: 'Certified Expert' },
      { icon: Star, text: '15+ Years Experience' },
      { icon: Globe2, text: 'International Recognition' }
    ],
    bio: 'With over 15 years of experience in art appraisal, Andrés has worked with major museums and private collectors throughout Europe and North America. His specialty lies in European paintings from the 17th-19th centuries and Old Masters.',
  },
  {
    name: 'Charlotte Smith',
    title: 'Senior Antique Specialist',
    specialties: ['Antique Furniture', 'Decorative Arts'],
    image: 'https://ik.imagekit.io/appraisily/Appraisers/charlotte.png?tr=w-400,h-400,q-75',
    credentials: ['BSc in Art History'],
    quote: 'Delivering detailed, accurate appraisals with ease and efficiency.',
    stats: [
      { icon: Award, text: 'Certified Expert' },
      { icon: Star, text: '10+ Years Experience' },
      { icon: Globe2, text: 'European Specialist' }
    ],
    bio: 'Charlotte is our resident expert in antique furniture and decorative arts. With a keen eye for detail and authentication, she has helped countless clients with insurance, estate, and donation appraisals. Her expertise in European antiques is particularly sought after.',
  },
  {
    name: 'Adrian Dupont',
    title: 'Fine Art Expert',
    specialties: ['Modern Art', 'Contemporary Paintings'],
    image: 'https://ik.imagekit.io/appraisily/Appraisers/adrian.png?tr=w-400,h-400,q-75',
    credentials: ['MA in Art History'],
    quote: 'Every piece tells a story - we help uncover its true value.',
    stats: [
      { icon: Award, text: 'Certified Expert' },
      { icon: Star, text: '12+ Years Experience' },
      { icon: Globe2, text: 'Modern Art Specialist' }
    ],
    bio: 'Adrian specializes in 20th and 21st century artwork, with particular expertise in modern and contemporary paintings. His background includes curatorial work at major contemporary art museums before joining our team of expert appraisers.',
  }
];

export default function Experts() {
  const [selectedExpert, setSelectedExpert] = useState(null);
  
  return (
    <div className="bg-white py-24 sm:py-32" id="experts">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Expert Appraisers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our team of certified professionals brings decades of combined experience across all art categories and collectibles.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="mt-12 mb-16">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-xl">
            <LazyImage
              src="https://ik.imagekit.io/appraisily/WebPage/escene_appraiser.png?updatedAt=1741034482307"
              alt="Professional Art Appraiser at Work"
              className="w-full h-auto object-cover"
              width={1456}
              height={816}
              placeholderColor="#f9fafb"
              blurAmount={10}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-lg font-medium">Expert appraisers providing detailed analysis of your valuable pieces</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {experts.map((expert) => (
            <article key={expert.name} className="flex flex-col items-start">
              <div className="relative w-full cursor-pointer" onClick={() => setSelectedExpert(expert)}>
                <div className="aspect-[3/3] w-full rounded-2xl bg-gray-100 object-cover">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="aspect-[3/3] w-full rounded-2xl object-cover"
                    width="400"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-2xl">
                  <div className="flex flex-wrap gap-2">
                    {expert.stats.map((stat, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-medium text-gray-900"
                      >
                        <stat.icon className="h-4 w-4 text-primary mr-1" />
                        {stat.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="max-w-xl mt-8">
                <div className="flex items-center gap-x-4 text-xs">
                  {expert.credentials.map((credential, index) => (
                    <span
                      key={index}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    <button 
                      onClick={() => setSelectedExpert(expert)}
                      className="hover:text-primary transition-colors focus:outline-none"
                    >
                      {expert.name}
                    </button>
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-primary font-medium">
                    {expert.title}
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {expert.specialties.map((specialty, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  {expert.quote}
                </p>
                <button
                  onClick={() => setSelectedExpert(expert)}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  View profile
                  <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://appraisily.com/start"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary/90 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
          >
            Get Expert Appraisal
            <Award className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Expert Profile Modal */}
      {selectedExpert && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto"
          aria-labelledby="expert-profile-modal" 
          role="dialog" 
          aria-modal="true"
        >
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-gray-900/75 transition-opacity" onClick={() => setSelectedExpert(null)}></div>
            
            <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all max-w-6xl w-full">
              <div className="absolute right-4 top-4 z-10">
                <button
                  type="button"
                  className="rounded-full bg-white/10 p-2 text-gray-400 hover:text-gray-500"
                  onClick={() => setSelectedExpert(null)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-square">
                  <img
                    src={selectedExpert.image}
                    alt={selectedExpert.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedExpert.credentials.map((credential, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
                      >
                        {credential}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900">{selectedExpert.name}</h2>
                  <p className="text-lg text-primary font-medium mt-1">{selectedExpert.title}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedExpert.specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    {selectedExpert.stats.map((stat, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800"
                      >
                        <stat.icon className="h-5 w-5 text-primary mr-2" />
                        {stat.text}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">About {selectedExpert.name}</h3>
                    <p className="text-gray-600">{selectedExpert.bio}</p>
                    <blockquote className="italic text-gray-600 border-l-4 border-primary pl-4 py-2">
                      "{selectedExpert.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="mt-10">
                    <a
                      href={`https://appraisily.com/start?expert=${selectedExpert.name.toLowerCase().replace(' ', '-')}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
                    >
                      Request an Appraisal from {selectedExpert.name.split(' ')[0]}
                      <Award className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}