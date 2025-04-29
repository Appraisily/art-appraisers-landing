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
  pattern: cn("bg-[radial-gradient(#3b82f6_1px,transparent_1px)] opacity-[0.05] [background-size:20px_20px]"),
  gradient: cn("bg-gradient-to-r from-blue-600/10 to-blue-500/10"),
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