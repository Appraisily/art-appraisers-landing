import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card variant:
   * - primary: Standard white card with shadow (default)
   * - feature: Card for feature highlights
   * - featureBlueAccent: Feature card with blue left border
   * - featureAmberAccent: Feature card with amber left border
   */
  variant?: 'primary' | 'feature' | 'featureBlueAccent' | 'featureAmberAccent';
  
  /**
   * Whether the card should have hover effects
   */
  hover?: boolean;
  
  /**
   * Children elements
   */
  children: React.ReactNode;
}

/**
 * Card component with variants matching the design system
 */
export const Card: React.FC<CardProps> = ({
  variant = 'primary',
  hover = true,
  children,
  className,
  ...props
}) => {
  // Variant-specific classes
  const variantClasses = {
    primary: 'bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden',
    feature: 'bg-white rounded-lg border border-gray-200 p-6',
    featureBlueAccent: 'bg-white rounded-lg border border-gray-200 border-l-4 border-l-blue-600 p-6',
    featureAmberAccent: 'bg-white rounded-lg border border-gray-200 border-l-4 border-l-amber-500 p-6',
  };
  
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';
  
  return (
    <div
      className={cn(
        variantClasses[variant],
        hoverClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card header component
 */
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn('p-6', className)}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card title component
 */
export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h3
      className={cn('text-xl font-semibold text-gray-900', className)}
      {...props}
    >
      {children}
    </h3>
  );
};

/**
 * Card content component
 */
export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn('p-6 pt-0', className)}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card footer component
 */
export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn('p-6 bg-gray-50 border-t border-gray-200', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 