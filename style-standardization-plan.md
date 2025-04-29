# Style Standardization Plan for Art Appraisers Landing Page

This document outlines our comprehensive plan to standardize styles across the entire landing page, ensuring a consistent visual language and improved user experience.

## Table of Contents
1. [Color System](#color-system)
2. [Typography](#typography)
3. [Button System](#button-system)
4. [Card & Container Styles](#card--container-styles)
5. [Spacing System](#spacing-system)
6. [Component-Specific Standards](#component-specific-standards)
7. [Responsive Behavior](#responsive-behavior)
8. [Implementation Plan](#implementation-plan)

## Color System

### Primary Colors
```css
--color-slate-950: #0f172a; /* Dark background */
--color-slate-900: #1e293b; /* Secondary background */
--color-slate-800: #334155; /* Tertiary background */
--color-slate-200: #e2e8f0; /* Light text on dark backgrounds */
--color-slate-100: #f1f5f9; /* Lightest text on dark backgrounds */

--color-amber-600: #d97706; /* Primary CTA hover */
--color-amber-500: #f59e0b; /* Primary CTA */
--color-amber-400: #fbbf24; /* Accent/highlights */
--color-amber-100: #fef3c7; /* Badges & light components */

--color-indigo-500: #6366f1; /* Secondary accents */
```

### Functional Colors
```css
--color-success: #10b981; /* Success messages/states */
--color-warning: #f59e0b; /* Warning messages/states (same as amber-500) */
--color-error: #ef4444; /* Error messages/states */
--color-info: #3b82f6; /* Info messages/states */
```

### Background & Surface Colors
```css
--bg-gradient-hero: linear-gradient(to bottom, var(--color-slate-950), var(--color-slate-900), var(--color-slate-800)/0.9);
--bg-gradient-card: linear-gradient(to right, var(--color-slate-800)/0.7, var(--color-slate-900)/0.7);
--bg-gradient-cta: linear-gradient(to right, var(--color-amber-500), var(--color-amber-600));
```

## Typography

### Font Family
```css
--font-sans: Inter, system-ui, sans-serif;
```

### Font Weights
```css
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Font Sizes
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
```

### Line Heights
```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

## Button System

### Primary Button
- **Style**: Amber gradient background with white text
- **Classes**: `bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl px-6 py-3.5 shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200`
- **Hover State**: Darker amber gradient, subtle scale effect
- **Focus State**: Outline with offset

### Secondary Button
- **Style**: Slate background with white text and border
- **Classes**: `bg-slate-800/80 backdrop-blur-sm text-white font-semibold rounded-xl px-6 py-3.5 border border-slate-600/30 hover:bg-slate-700/80 hover:border-slate-500/50 shadow-md transition-all duration-200`
- **Hover State**: Lighter background, higher opacity border

### Text Button / Link
- **Style**: No background, text with optional icon
- **Classes**: `text-slate-200 hover:text-white inline-flex items-center gap-2 font-medium transition-colors`
- **Hover State**: Text color change, optional underline, icon movement

### Icon Button
- **Style**: Rounded background with icon
- **Classes**: `p-2 rounded-full bg-slate-700/70 text-slate-300 hover:bg-slate-600/70 hover:text-white transition-colors`

### CTA Badge
- **Style**: Small pill-shaped badge
- **Classes**: `rounded-full bg-amber-500 px-2 py-0.5 text-xs font-semibold text-white shadow-md`

## Card & Container Styles

### Primary Card
- **Style**: Slate background with subtle border
- **Classes**: `relative rounded-2xl bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 shadow-lg overflow-hidden`
- **Hover State**: Optional subtle scale or background lightening

### Feature Card
- **Style**: Slightly transparent with backdrop blur
- **Classes**: `relative rounded-xl bg-slate-900/50 border border-slate-700/50 hover:bg-slate-800/80 transition-colors duration-200 p-6`

### Modal
- **Style**: White background for contrast with dark theme
- **Classes**: `bg-white rounded-2xl shadow-2xl p-6`

### Section Container
- **Style**: Max width container with responsive padding
- **Classes**: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`

## Spacing System

### Base Unit: 4px (0.25rem)

### Common Spacing Values
```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-24: 6rem;    /* 96px */
```

### Section Spacing
- **Vertical Padding**: `py-24` (6rem, 96px)
- **Between Sections**: `mt-24` or `mb-24` (6rem, 96px)
- **Between Components**: `gap-8` (2rem, 32px)
- **Inside Components**: `gap-4` (1rem, 16px)

## Component-Specific Standards

### Hero Section
- **Background**: Slate gradient with subtle pattern
- **Typography**: Large heading with gradient text, regular text in slate-100/200
- **CTA**: Primary amber button with turnaround badge
- **Orbs**: Limited to 2-3 subtle orbs with low opacity
- **Expert Cards**: Standardized card design with consistent spacing

### Features Section
- **Icons**: Standard size and style (h-5 w-5)
- **Cards**: Uniform size and padding
- **Hover Effects**: Consistent transitions (duration-200)

### Process Section
- **Timeline**: Consistent connector style
- **Images**: Same aspect ratio and hover effects
- **Icons**: Same size and color patterns as feature icons

### Success Stories
- **Testimonials**: Standard card design
- **Quotation Style**: Consistent styling for quotes
- **Modal Interactions**: Uniform modal design and animations

## Responsive Behavior

### Breakpoints
```css
--screen-sm: 640px;
--screen-md: 768px;
--screen-lg: 1024px;
--screen-xl: 1280px;
--screen-2xl: 1536px;
```

### Mobile Adjustments
- **Typography**: Reduced sizes (e.g., text-4xl → text-3xl)
- **Spacing**: Condensed (e.g., py-24 → py-16)
- **Layout**: Stack elements vertically
- **CTAs**: Full width on small screens

### Tablet Adjustments
- **Grid Layouts**: 2 columns instead of 3-4
- **Images**: Maintain aspect ratios but adjust dimensions

### Desktop Enhancements
- **Layout**: Multi-column grids
- **CTAs**: Standard width, side-by-side
- **Animations**: More subtle enhancements

## Implementation Plan

### Phase 1: Create Design Token System
1. Create a new `theme.ts` file in `/src/config/` folder
2. Define all color, typography, and spacing tokens
3. Update Tailwind config to use these design tokens

### Phase 2: Component Standardization
1. Create reusable Button components:
   - `Button.tsx` with variants (primary, secondary, text)
   - `IconButton.tsx` for icon-only buttons
   - `Badge.tsx` for small status/info pills
  
2. Create Card components:
   - `Card.tsx` with variants (primary, feature)
   - `Modal.tsx` for consistent modals

3. Update utility components:
   - Standardize `LazyImage`, `LazyVideo` props
   - Create consistent animation components

### Phase 3: Section Refactoring
1. Update Hero.tsx (already done)
2. Update Features.tsx to use standardized components
3. Update Process.tsx to use standardized components
4. Update SuccessStories.tsx to use standardized components

### Phase 4: Testing & QA
1. Responsive testing across all breakpoints
2. A11y verification for all interactive elements
3. Performance optimization

### Timeline
- **Phase 1**: 1 day
- **Phase 2**: 2 days
- **Phase 3**: 3 days
- **Phase 4**: 1 day
- **Total**: 7 days

## How This Improves Conversion

1. **Visual Consistency**: Creates a professional, polished appearance that builds trust
2. **Focused CTAs**: The amber buttons clearly stand out as action points
3. **Information Hierarchy**: Consistent styling creates clear visual hierarchy
4. **Reduced Cognitive Load**: Users don't need to decipher different button styles
5. **Mobile Optimization**: Ensures critical CTAs remain accessible on all devices

By implementing this plan, all buttons, cards, typography, and colors will be standardized across the entire application, creating a cohesive and professional user experience that enhances brand perception and improves conversion rates. 