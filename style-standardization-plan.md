# Style Standardization Plan for Art Appraisers Landing Page

This document outlines our comprehensive plan to standardize styles across the entire landing page, ensuring visual consistency with the main Appraisily website while maintaining conversion optimization.

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
/* Blues - Primary Brand Colors */
--color-blue-50: #eff6ff;   /* Light background */
--color-blue-100: #dbeafe;  /* Secondary light background */
--color-blue-200: #bfdbfe;  /* Tertiary light background */
--color-blue-600: #2563eb;  /* Primary blue */
--color-blue-700: #1d4ed8;  /* Darker blue */
--color-blue-800: #1e40af;  /* Darkest blue */

/* Neutral Colors */
--color-gray-50: #f9fafb;   /* Background alternate */
--color-gray-100: #f3f4f6;  /* Light background */
--color-gray-200: #e5e7eb;  /* Border light */
--color-gray-700: #374151;  /* Secondary text */
--color-gray-800: #1f2937;  /* Primary text */
--color-gray-900: #111827;  /* Headings */

/* Accent Colors - For Conversion Points */
--color-amber-500: #f59e0b; /* Accents and high-priority CTAs */
--color-amber-600: #d97706; /* Accent hover */
```

### Functional Colors
```css
--color-success: #10b981; /* Success messages/states */
--color-warning: #f59e0b; /* Warning messages/states */
--color-error: #ef4444; /* Error messages/states */
--color-info: #3b82f6; /* Info messages/states (matches blue-600) */
```

### Background & Surface Colors
```css
--bg-gradient-hero: linear-gradient(to bottom, var(--color-blue-50), white);
--bg-gradient-card-blue: linear-gradient(to right, var(--color-blue-600), var(--color-blue-700));
--bg-gradient-card-amber: linear-gradient(to right, var(--color-amber-500), var(--color-amber-600));
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

### Primary Button (Blue - Default)
- **Style**: Blue background with white text
- **Classes**: `bg-blue-600 text-white font-medium rounded-md px-4 py-2 hover:bg-blue-700 shadow-sm transition-colors duration-200`
- **Hover State**: Darker blue
- **Focus State**: Ring outline

### High-Conversion Button (Amber - For Important CTAs)
- **Style**: Amber gradient background with white text
- **Classes**: `bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg px-6 py-3 shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200`
- **Hover State**: Darker amber gradient, subtle scale effect
- **Usage**: Primary call-to-action buttons (Start Appraisal, Find Expert)

### Secondary Button
- **Style**: White background with border and dark text
- **Classes**: `bg-white text-gray-800 font-medium rounded-md border border-gray-200 px-4 py-2 hover:bg-gray-50 shadow-sm transition-colors duration-200`
- **Hover State**: Light gray background

### Text Button / Link
- **Style**: No background, blue text
- **Classes**: `text-blue-600 hover:text-blue-800 inline-flex items-center gap-2 font-medium transition-colors`
- **Hover State**: Darker blue, optional underline

### Icon Button
- **Style**: Rounded background with icon
- **Classes**: `p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-colors`

### Badge
- **Style**: Small pill-shaped badge
- **Classes**: `rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-xs font-medium`
- **Variants**: 
  - Outline: `border border-gray-200 bg-white`
  - Amber Accent: `bg-amber-100 text-amber-800`

## Card & Container Styles

### Primary Card
- **Style**: White background with subtle shadow
- **Classes**: `bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden`
- **Hover State**: Larger shadow

### Feature Card
- **Style**: White or light blue background
- **Classes**: `bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200`
- **Variants**:
  - Blue accent: `border-l-4 border-l-blue-600`
  - Amber accent: `border-l-4 border-l-amber-500`

### Modal
- **Style**: White background with shadow
- **Classes**: `bg-white rounded-xl shadow-2xl p-6 border border-gray-200`

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
- **Background**: Light blue gradient to white with subtle pattern
- **Typography**: Large heading with dark blue/black text
- **CTA**: Mix of blue (primary) and amber (high-conversion) buttons
- **Upload Area**: Clean white card with clear border and shadow
- **Trust Indicators**: Blue-themed badges with icons

### Features Section
- **Background**: White or very light blue
- **Cards**: White with consistent border radius and optional blue accents
- **Icons**: Blue-themed, standard size (h-5 w-5)
- **Hover Effects**: Subtle shadow or scale changes (transform: scale(1.02))

### Process Section
- **Timeline**: Blue connector lines
- **Steps**: Clearly numbered with blue accent elements
- **Images**: Consistent aspect ratio with subtle hover effects

### Success Stories
- **Testimonials**: Clean white cards with subtle shadows
- **Ratings**: Gold/amber stars for ratings
- **Expert Photos**: Consistent circular cropping with border

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
- **Cards**: Full width on mobile

### Tablet Adjustments
- **Grid Layouts**: 2 columns instead of 3-4
- **Images**: Maintain aspect ratios but adjust dimensions

### Desktop Enhancements
- **Layout**: Multi-column grids
- **Animations**: Subtle motion effects for visual interest
- **Hover States**: Enhanced interaction feedback

## Implementation Plan

### Phase 1: ShadCN UI Integration
1. Integrate ShadCN UI components
2. Update Tailwind config to match the main website's theme
3. Create a theme.ts file with shared color tokens

### Phase 2: Component Standardization
1. Adapt Button components to match the main website:
   - Use ShadCN Button with customized variants
   - Add amber "high-conversion" variant for key CTAs
  
2. Standardize Card components:
   - Use ShadCN Card with appropriate styling
   - Add feature card variants

3. Create consistent Badge and Icon components:
   - Standardize trust indicators and badges
   - Ensure icon sizing and coloring is consistent

### Phase 3: Section Refactoring
1. Update Hero.tsx to harmonize with main site while keeping conversion elements
2. Update Features.tsx to use standardized card components
3. Update Process.tsx to use consistent coloring and styling
4. Update SuccessStories.tsx with harmonized testimonial cards

### Phase 4: Testing & QA
1. A/B testing of blue vs. amber CTAs for conversion
2. Responsive testing across all breakpoints
3. Performance optimization
4. Cross-browser compatibility verification

### Timeline
- **Phase 1**: 2 days
- **Phase 2**: 3 days
- **Phase 3**: 4 days
- **Phase 4**: 2 days
- **Total**: 11 days

## Balance of Brand Consistency & Conversion

This plan achieves a balance between matching the main Appraisily site's brand identity and maintaining high conversion rates:

1. **Primary Brand Colors**: Uses the blue color scheme from the main site for most UI elements
2. **Conversion-Focused Elements**: Strategically applies amber/gold for high-priority CTAs and important highlights
3. **Clean, Modern Aesthetic**: Maintains the light, professional feel of the main site
4. **Visual Hierarchy**: Ensures the most important actions stand out while fitting the overall brand
5. **Component Consistency**: Standardizes all UI elements to create a cohesive cross-site experience

By implementing this plan, users will experience a seamless transition between the landing page and the main application, while still benefiting from conversion-optimized elements where they matter most. 