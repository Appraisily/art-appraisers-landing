import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "I needed an appraisal for insurance purposes, and Appraisily exceeded my expectations. Their attention to detail and knowledge of contemporary art made me confident in their valuation.",
    author: {
      name: "Sarah Johnson",
      role: "Art Collector",
      avatar: "/images/testimonial-1.jpg"
    },
    rating: 5
  },
  {
    id: 2,
    content: "As an executor of an estate with significant art assets, I was impressed by Appraisily's professionalism and thorough approach. Their valuation helped us navigate a complex situation with confidence.",
    author: {
      name: "Michael Chen",
      role: "Estate Administrator",
      avatar: "/images/testimonial-2.jpg"
    },
    rating: 5
  },
  {
    id: 3,
    content: "The team at Appraisily provided exactly what our institution needed for our donation appraisals. Their reports are comprehensive, compliant, and delivered ahead of schedule.",
    author: {
      name: "Dr. Emily Williams",
      role: "Museum Director",
      avatar: "/images/testimonial-3.jpg"
    },
    rating: 5
  },
  {
    id: 4,
    content: "I've worked with multiple appraisers over the years, but Appraisily stands out for their expertise and customer service. They communicated clearly throughout the process and delivered an excellent report.",
    author: {
      name: "Robert Martinez",
      role: "Gallery Owner",
      avatar: "/images/testimonial-4.jpg"
    },
    rating: 5
  },
];

// Preload testimonial images for smoother transitions
const preloadImages = () => {
  testimonials.forEach(testimonial => {
    const img = new Image();
    img.src = testimonial.author.avatar;
  });
};

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Preload testimonial images when component mounts
  useEffect(() => {
    preloadImages();
  }, []);
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  const goToPrevious = () => {
    setAutoplay(false);
    setActiveIndex(current => (current - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToNext = () => {
    setAutoplay(false);
    setActiveIndex(current => (current + 1) % testimonials.length);
  };
  
  const goToSpecific = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-blue-50 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-30" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-flex items-center justify-center gap-1.5 rounded-md bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 mb-4">
            <Star className="h-4 w-4" />
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don't just take our word for it — hear from collectors, institutions, and art professionals
            who've experienced our appraisal services.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Desktop carousel (larger screens) */}
          <div className="hidden lg:block">
            <div className="relative h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-5 gap-6 h-full"
                >
                  {/* Main testimonial (large) */}
                  <div className="col-span-3 bg-white rounded-2xl shadow-xl p-8 flex flex-col">
                    <div className="mb-6 text-primary">
                      <Quote className="h-10 w-10 opacity-20" />
                    </div>
                    
                    <p className="text-xl text-gray-700 leading-relaxed flex-grow">
                      "{testimonials[activeIndex].content}"
                    </p>
                    
                    <div className="mt-8 flex items-center">
                      <div className="mr-4">
                        <img
                          src={testimonials[activeIndex].author.avatar} 
                          alt={testimonials[activeIndex].author.name}
                          width="56"
                          height="56"
                          className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-sm"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {testimonials[activeIndex].author.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonials[activeIndex].author.role}
                        </div>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < testimonials[activeIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Preview of next testimonials (smaller) */}
                  <div className="col-span-2 grid grid-rows-2 gap-6">
                    {[1, 2].map((offset) => {
                      const index = (activeIndex + offset) % testimonials.length;
                      return (
                        <div 
                          key={testimonials[index].id}
                          className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 flex flex-col hover:bg-white transition-colors duration-300 cursor-pointer"
                          onClick={() => goToSpecific(index)}
                        >
                          <p className="text-gray-700 line-clamp-3 text-sm flex-grow">
                            "{testimonials[index].content}"
                          </p>
                          
                          <div className="mt-4 flex items-center">
                            <div className="mr-3">
                              <img
                                src={testimonials[index].author.avatar}
                                alt={testimonials[index].author.name}
                                width="40"
                                height="40"
                                className="h-10 w-10 rounded-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 text-sm">
                                {testimonials[index].author.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {testimonials[index].author.role}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Mobile carousel (smaller screens) */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="mb-4 text-primary">
                  <Quote className="h-8 w-8 opacity-20" />
                </div>
                
                <p className="text-gray-700">
                  "{testimonials[activeIndex].content}"
                </p>
                
                <div className="mt-6 flex items-center">
                  <div className="mr-4">
                    <img
                      src={testimonials[activeIndex].author.avatar}
                      alt={testimonials[activeIndex].author.name}
                      width="40"
                      height="40"
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {testimonials[activeIndex].author.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonials[activeIndex].author.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation controls */}
          <div className="mt-8 flex items-center justify-center lg:justify-end gap-4">
            <button
              type="button"
              onClick={goToPrevious}
              className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSpecific(index)}
                  className={`h-2.5 w-2.5 rounded-full ${
                    index === activeIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              type="button"
              onClick={goToNext}
              className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 