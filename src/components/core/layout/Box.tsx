import React from 'react';
import { cn } from '../../../utils/cn';
import { containerClasses, spacingClasses, backgroundClasses, borderClasses } from './DesignSystem';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Container variant type
   */
  variant?: 'section' | 'content' | 'card' | 'flex' | 'grid';
  
  /**
   * Spacing between child elements
   */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * Main flex direction
   */
  direction?: 'row' | 'col'; 
  
  /**
   * Background style
   */
  background?: 'primary' | 'secondary' | 'accent' | 'pattern' | 'gradient';
  
  /**
   * Whether to apply border
   */
  border?: boolean | 'accent';
  
  /**
   * Shadow size
   */
  shadow?: 'sm' | 'md' | 'lg' | 'none';
  
  /**
   * Border radius size
   */
  rounded?: 'sm' | 'md' | 'lg' | 'none';
  
  /**
   * Padding size
   */
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  
  /**
   * Width mode
   */
  width?: 'full' | 'auto';

  /**
   * Children elements
   */
  children: React.ReactNode;
}

/**
 * Box component that utilizes standardized styles
 */
export const Box: React.FC<BoxProps> = ({
  variant = 'content',
  spacing,
  direction = 'col',
  background,
  border = false,
  shadow = 'none',
  rounded = 'none',
  padding = 'none',
  width = 'auto',
  className,
  children,
  ...props
}) => {
  const variantClass = containerClasses[variant];
  
  const spacingClass = spacing ? 
    (direction === 'col' ? spacingClasses[`vertical${spacing.charAt(0).toUpperCase() + spacing.slice(1)}`] : 
                         spacingClasses[`horizontal${spacing.charAt(0).toUpperCase() + spacing.slice(1)}`]) : 
    '';
                         
  const backgroundClass = background ? backgroundClasses[background] : '';
  
  const borderClass = border ? 
    (border === 'accent' ? borderClasses.accent : borderClasses.standard) : 
    '';
    
  const shadowClass = shadow !== 'none' ? 
    borderClasses[`shadow${shadow.charAt(0).toUpperCase() + shadow.slice(1)}`] : 
    '';
    
  const roundedClass = rounded !== 'none' ? 
    borderClasses[`rounded${rounded.charAt(0).toUpperCase() + rounded.slice(1)}`] : 
    '';
    
  const paddingClass = padding !== 'none' ? 
    spacingClasses[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`] : 
    '';
    
  const widthClass = width === 'full' ? 'w-full' : '';
  
  return (
    <div
      className={cn(
        variantClass,
        spacingClass,
        backgroundClass,
        borderClass,
        shadowClass,
        roundedClass,
        paddingClass,
        widthClass,
        direction === 'col' ? 'flex flex-col' : direction === 'row' ? 'flex flex-row' : '',
        background === 'pattern' ? 'pattern-bg' : '',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Box; 