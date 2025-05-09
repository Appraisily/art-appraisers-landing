import { cn } from '../../../utils/cn';

/**
 * Standard classes for layout containers
 */
export const containerClasses = {
  section: cn("w-full relative overflow-hidden py-12 sm:py-16 md:py-24"),
  content: cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"),
  card: cn("bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"),
  flex: cn("flex items-center"),
  grid: cn("grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"),
};

/**
 * Standard spacing classes
 */
export const spacingClasses = {
  verticalSm: cn("space-y-2"),
  verticalMd: cn("space-y-4"),
  verticalLg: cn("space-y-6"),
  verticalXl: cn("space-y-8"),
  horizontalSm: cn("space-x-2"),
  horizontalMd: cn("space-x-4"),
  horizontalLg: cn("space-x-6"),
  horizontalXl: cn("space-x-8"),
  paddingSm: cn("p-2"),
  paddingMd: cn("p-4"),
  paddingLg: cn("p-6"),
  paddingXl: cn("p-8"),
};

/**
 * Standard background classes
 */
export const backgroundClasses = {
  primary: cn("bg-gradient-to-b from-blue-100 to-white"),
  secondary: cn("bg-white"),
  accent: cn("bg-amber-50"),
  pattern: cn("relative"),
  gradient: cn("bg-gradient-to-r from-blue-600/10 to-blue-500/10"),
  overlay: cn("bg-gradient-to-r from-gray-900/70 to-gray-800/60"),
  imageBg: cn("bg-cover bg-center bg-no-repeat"),
};

/**
 * Standard border and shadow classes
 */
export const borderClasses = {
  standard: cn("border border-gray-200"),
  accent: cn("border border-amber-200"),
  shadowSm: cn("shadow-sm"),
  shadowMd: cn("shadow-md"),
  shadowLg: cn("shadow-lg"),
  roundedSm: cn("rounded-md"),
  roundedMd: cn("rounded-xl"),
  roundedLg: cn("rounded-2xl"),
};

/**
 * Standard responsive classes
 */
export const responsiveClasses = {
  hideOnMobile: cn("hidden sm:block"),
  hideOnDesktop: cn("sm:hidden"),
  visibleOnlyMobile: cn("block sm:hidden"),
  visibleOnlyTablet: cn("hidden sm:block md:hidden"),
  visibleOnlyDesktop: cn("hidden md:block"),
};

/**
 * Standard layout classes for desktop and mobile
 */
export const layoutClasses = {
  // Top bar container
  topBar: cn("w-full bg-white py-3 border-b border-gray-200 shadow-sm mb-8 md:mb-12"),

  // Two column layout with text on left, visual on right
  twoColumnStandard: cn("grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-12 lg:gap-16"),
  
  // Hero layout with ~55/45 text to visual ratio, centered items on desktop
  heroLayout: cn("grid grid-cols-1 md:grid-cols-[1.2fr,1fr] lg:grid-cols-[1.3fr,1fr] items-start md:items-center gap-8 md:gap-12 lg:gap-16"),
  
  // Centered content layout
  centeredContent: cn("flex flex-col items-center text-center max-w-2xl mx-auto"),
  
  // Staggered grid layout
  staggeredGrid: cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6"),
  
  // Feature list layout
  featureList: cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"),
  
  // Feature card grid layout
  featureCardGrid: cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mt-12"),
  
  // Testimonial row layout
  testimonialRow: cn("flex flex-wrap justify-center gap-4 md:gap-6 my-6 md:my-8"),
};

/**
 * Typography classes for consistent text styling
 */
export const typographyClasses = {
  // Hero headings
  heroHeading: cn("text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight"),
  
  // Section headings
  sectionHeading: cn("text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4"),
  
  // Large centered heading
  centeredHeading: cn("text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-4"),
  
  // Descriptive text
  bodyLarge: cn("text-lg md:text-xl text-gray-700"),
  bodyStandard: cn("text-base text-gray-700"),
  bodySmall: cn("text-sm text-gray-600"),
  
  // Feature/section subtitles
  subtitle: cn("text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto mb-6 md:mb-8"),
  
  // Quote/testimonial text
  quoteText: cn("text-sm italic text-gray-600"),
  
  // Feature card title
  featureTitle: cn("text-lg font-semibold text-gray-900 mb-2"),
};

/**
 * Card and feature component classes
 */
export const componentClasses = {
  // Feature card styles
  featureCard: cn("bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col relative hover:shadow-md transition-shadow"),
  
  // Testimonial card
  testimonialCard: cn("bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200 flex items-center gap-2"),
  
  // Icon container (for featured icons)
  iconContainer: cn("w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4"),
  
  // CTA button styles
  ctaButton: cn("bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md flex items-center justify-center gap-2 font-medium transition-colors"),
  
  // Learn more link
  learnMoreLink: cn("text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium mt-2"),
}; 