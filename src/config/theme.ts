/**
 * Design token system for Appraisily landing page
 * This file contains standardized values for colors, typography, and spacing
 * that should be used across the landing page components.
 */

export const colors = {
  // Blues - Primary Brand Colors
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
  },
  
  // Neutral Colors
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // Accent Colors - For Conversion Points
  amber: {
    500: '#f59e0b',
    600: '#d97706',
  },
  
  // Functional Colors
  functional: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  }
};

export const gradients = {
  hero: `linear-gradient(to bottom, ${colors.blue[50]}, white)`,
  cardBlue: `linear-gradient(to right, ${colors.blue[600]}, ${colors.blue[700]})`,
  cardAmber: `linear-gradient(to right, ${colors.amber[500]}, ${colors.amber[600]})`,
};

export const typography = {
  // Font Family - using system fonts with Inter as primary
  fontFamily: 'Inter, system-ui, sans-serif',
  
  // Font Weights
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Font Sizes
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  
  // Line Heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
};

export const spacing = {
  // Base spacing unit is 0.25rem (4px)
  1: '0.25rem',  // 4px
  2: '0.5rem',   // 8px
  3: '0.75rem',  // 12px
  4: '1rem',     // 16px
  6: '1.5rem',   // 24px
  8: '2rem',     // 32px
  12: '3rem',    // 48px
  16: '4rem',    // 64px
  24: '6rem',    // 96px
};

export const borders = {
  radius: {
    sm: '0.25rem',   // 4px
    md: '0.375rem',  // 6px
    lg: '0.5rem',    // 8px
    xl: '0.75rem',   // 12px
    '2xl': '1rem',   // 16px
    full: '9999px',  // Fully rounded (circles)
  }
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Section spacing for consistent layouts
export const sectionSpacing = {
  verticalPadding: spacing[24], // 6rem, 96px
  betweenSections: spacing[24], // 6rem, 96px
  betweenComponents: spacing[8], // 2rem, 32px
  insideComponents: spacing[4],  // 1rem, 16px
};

// Transition durations
export const transitions = {
  fast: '150ms',
  default: '200ms',
  slow: '300ms',
};

// CSS class utilities for commonly used patterns
export const classes = {
  // Button classes
  buttons: {
    primary: "bg-blue-600 text-white font-medium rounded-md px-4 py-2 hover:bg-blue-700 shadow-sm transition-colors duration-200",
    highConversion: "bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg px-6 py-3 shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200",
    secondary: "bg-white text-gray-800 font-medium rounded-md border border-gray-200 px-4 py-2 hover:bg-gray-50 shadow-sm transition-colors duration-200",
    text: "text-blue-600 hover:text-blue-800 inline-flex items-center gap-2 font-medium transition-colors",
    icon: "p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-colors",
  },
  
  // Badge classes
  badges: {
    primary: "rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-xs font-medium",
    outline: "rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium",
    accent: "rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-medium",
  },
  
  // Card classes
  cards: {
    primary: "bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden",
    feature: "bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200",
    featureBlueAccent: "bg-white rounded-lg border border-gray-200 border-l-4 border-l-blue-600 p-6 hover:shadow-md transition-shadow duration-200",
    featureAmberAccent: "bg-white rounded-lg border border-gray-200 border-l-4 border-l-amber-500 p-6 hover:shadow-md transition-shadow duration-200",
  },
  
  // Container classes
  containers: {
    section: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  },
};

export default {
  colors,
  gradients,
  typography,
  spacing,
  borders,
  shadows,
  breakpoints,
  sectionSpacing,
  transitions,
  classes,
}; 