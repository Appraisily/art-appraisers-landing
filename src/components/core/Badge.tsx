import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Badge variant:
   * - primary: Blue badge with light blue background (default)
   * - outline: White badge with border
   * - accent: Amber badge for highlighting important elements
   */
  variant?: 'primary' | 'outline' | 'accent';
  
  /**
   * Optional icon to display before the badge text
   */
  icon?: React.ReactNode;
  
  /**
   * Children elements (typically text)
   */
  children: React.ReactNode;
}

/**
 * Badge component with variants matching the design system
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  icon,
  children,
  className,
  ...props
}) => {
  // Variant-specific classes
  const variantClasses = {
    primary: 'bg-blue-100 text-blue-800',
    outline: 'border border-gray-200 bg-white text-gray-700',
    accent: 'bg-amber-100 text-amber-800',
  };
  
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {icon && (
        <span className="mr-1.5 h-3.5 w-3.5">{icon}</span>
      )}
      {children}
    </span>
  );
};

export default Badge; 