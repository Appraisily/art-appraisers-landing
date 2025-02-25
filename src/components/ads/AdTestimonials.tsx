import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "The appraisal was detailed and comprehensive. I needed it for insurance purposes, and they completed it within 36 hours. Very impressed!",
    author: {
      name: "Sarah Mitchell",
      role: "Art Collector",
      location: "New York, NY",
      image: "https://i.pravatar.cc/150?img=32"
    },
    rating: 5
  },
  {
    content: "Professional service that saved me thousands on my insurance. The appraisers identified my painting's true value, which was much higher than I thought.",
    author: {
      name: "James Wilson",
      role: "Painting Owner",
      location: "Chicago, IL",
      image: "https://i.pravatar.cc/150?img=59"
    },
    rating: 5
  },
  {
    content: "I was skeptical about an online appraisal, but the process was seamless. The report included market comparisons that proved the value convincingly.",
    author: {
      name: "Emily Johnson",
      role: "Estate Executor",
      location: "Austin, TX",
      image: "https://i.pravatar.cc/150?img=10"
    },
    rating: 4
  }
];

export default function AdTestimonials() {
  return (
    <div className="bg-primary/5 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Over 10,000 satisfied clients have trusted our appraisal services
          </p>
        </div>
        
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all duration-200"
            >
              <div className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
              
              <div className="flex items-center gap-4 bg-gray-50 p-6 mt-auto">
                <img
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{testimonial.author.name}</h3>
                  <div className="text-sm text-gray-500">
                    {testimonial.author.role} • {testimonial.author.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="relative rounded-full px-6 py-4 bg-white shadow-sm ring-1 ring-gray-900/10">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-900">4.9/5</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 text-yellow-400 fill-yellow-400" 
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                Based on <span className="font-medium text-gray-700">1,248+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 