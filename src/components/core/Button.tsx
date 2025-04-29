import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant:
   * - primary: Blue button (default)
   * - highConversion: Amber gradient for high-priority CTAs
   * - secondary: White button with border
   * - text: Text-only button with no background
   */
  variant?: 'primary' | 'highConversion' | 'secondary' | 'text';
  
  /**
   * Button size:
   * - sm: Small
   * - md: Medium (default)
   * - lg: Large
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Optional leading icon
   */
  startIcon?: React.ReactNode;
  
  /**
   * Optional trailing icon
   */
  endIcon?: React.ReactNode;
  
  /**
   * Whether the button should take the full width of its container
   */
  fullWidth?: boolean;
  
  /**
   * Whether the button is in loading state
   */
  isLoading?: boolean;
  
  /**
   * Children elements
   */
  children: React.ReactNode;
}

/**
 * Button component with variants matching the design system
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  startIcon,
  endIcon,
  fullWidth = false,
  isLoading = false,
  children,
  className,
  disabled,
  ...props
}) => {
  // Base classes to be used for all button variants
  const baseClasses = cn(
    'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2',
    {
      'w-full': fullWidth,
      'opacity-70 cursor-not-allowed': disabled || isLoading,
      // Size classes
      'text-sm px-3 py-1.5 rounded': size === 'sm',
      'text-base px-4 py-2 rounded-md': size === 'md',
      'text-lg px-6 py-3 rounded-lg': size === 'lg',
    }
  );
  
  // Variant-specific classes
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600 shadow-sm',
    highConversion: 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 focus:ring-amber-500 shadow-lg hover:shadow-xl transform hover:scale-[1.02]',
    secondary: 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 focus:ring-gray-500 shadow-sm',
    text: 'bg-transparent text-blue-600 hover:text-blue-800 hover:underline',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      
      {!isLoading && startIcon && (
        <span className="mr-2">{startIcon}</span>
      )}
      
      {children}
      
      {!isLoading && endIcon && (
        <span className="ml-2 transition-transform group-hover:translate-x-0.5">{endIcon}</span>
      )}
    </button>
  );
};

export default Button; 