import React, { useEffect, useState } from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion after critical resources are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Handle actual page load completion
    const handleLoad = () => {
      clearTimeout(timer);
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Don't render anything if loading is complete
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-gray-900 to-primary/70"
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2 
          }}
          className="flex justify-center mb-6"
        >
          <Award className="h-16 w-16 text-white" />
        </motion.div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Apprais<span className="text-blue-300">ily</span>
        </h1>
        
        <div className="flex justify-center items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-300 animate-[bounce_1s_infinite_0ms]"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-blue-300 animate-[bounce_1s_infinite_200ms]"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-blue-300 animate-[bounce_1s_infinite_400ms]"></div>
        </div>
      </div>
    </motion.div>
  );
} 