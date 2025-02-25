import React from 'react';
import { Award } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'light', size = 'md' }: LogoProps) {
  // Size mapping
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };
  
  // Icon size mapping
  const iconSizes = {
    sm: 18,
    md: 22,
    lg: 24,
  };
  
  // Color variants
  const colorClasses = {
    light: 'text-white',
    dark: 'text-gray-900',
  };
  
  // Accent color is consistent across variants
  const accentColor = 'text-primary';
  
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Award 
          size={iconSizes[size]} 
          className={`${accentColor}`} 
          strokeWidth={2.5}
        />
      </div>
      <div className={`font-bold ${sizeClasses[size]} ${colorClasses[variant]} leading-none`}>
        Apprais<span className={accentColor}>ily</span>
      </div>
    </div>
  );
}