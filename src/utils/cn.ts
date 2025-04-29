import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge tailwind classes and handle conflicts efficiently
 * Uses clsx to merge classes and tailwind-merge to handle tailwind-specific conflicts
 * 
 * @param inputs Multiple class values to be merged
 * @returns Merged class string with conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 