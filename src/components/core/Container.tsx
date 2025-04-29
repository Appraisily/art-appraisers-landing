import React from 'react';
import { cn } from '../../utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Container size
   * - sm: Small container (max-width: 640px)
   * - md: Medium container (max-width: 768px)
   * - lg: Large container (max-width: 1024px)
   * - xl: Extra large container (max-width: 1280px)
   * - full: Full width container (max-width: 1536px)
   * - default: Standard size (max-width: 1280px)
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'default';
  
  /**
   * Whether to center the container
   */
  center?: boolean;

  /**
   * Children elements
   */
  children: React.ReactNode;
}

/**
 * Container component for consistent layout across the site
 */
export const Container: React.FC<ContainerProps> = ({
  size = 'default',
  center = true,
  children,
  className,
  ...props
}) => {
  // Container size classes
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-7xl',
    default: 'max-w-7xl',
  };

  return (
    <div
      className={cn(
        'px-4 sm:px-6 lg:px-8',
        center && 'mx-auto',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Section component for consistent vertical spacing
 */
export const Section: React.FC<React.HTMLAttributes<HTMLElement> & { 
  /**
   * Background color
   */
  bgColor?: string;
}> = ({
  bgColor,
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(
        'py-24',
        bgColor,
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Container; 