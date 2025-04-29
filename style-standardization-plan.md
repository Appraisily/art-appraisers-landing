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

### Phase 3: Refactor Existing Components

To successfully refactor existing components to use the new standardized classes, follow these guidelines:

#### Step 1: Component Inventory

Create an inventory of div patterns found in existing components:

| Pattern | Current Implementation | Standardized Implementation |
|---------|------------------------|----------------------------|
| Section containers | `<section className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100 to-white pt-6 pb-0">` | `<Box variant="section" background="primary">` |
| Card containers | `<div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md border border-gray-200">` | `<Box variant="card" spacing="md" padding="md">` |
| Feature items | `<div className="rounded-lg bg-blue-600 p-3 flex-shrink-0 shadow-md">` | `<div className="rounded-lg bg-blue-600 p-3 flex-shrink-0 shadow-md">` (continue using for icons) |
| Content wrappers | `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">` | `<Box variant="content">` |
| Grids | `<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">` | `<Box variant="grid">` |
| Flex containers | `<div className="flex items-center gap-3">` | `<Box variant="flex" spacing="md">` or `<div className={cn(containerClasses.flex, spacingClasses.horizontalMd)}>` |

#### Step 2: Refactoring Priority Components

Start with these high-impact components that appear frequently:

1. **Hero.tsx**: Refactor the section, content containers, and card elements
2. **Features.tsx**: Refactor the feature cards and grid layouts
3. **Process.tsx**: Refactor the process steps and containers
4. **Container.tsx**: Update base Container component to use our standardized classes

#### Step 3: Refactoring Approach for Hero Component

Example refactoring of a Hero section (representative of the approach for other components):

```tsx
// Before
<section 
  className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100 to-white pt-6 pb-0 sm:pt-8 sm:pb-0"
  aria-labelledby="hero-heading"
>
  {/* Background Pattern */}
  <div 
    className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] opacity-[0.05] [background-size:20px_20px]" 
    aria-hidden="true"
  />
  
  {/* Content */}
  <Container className="px-4 sm:px-6">
    {/* Component content... */}
  </Container>
</section>

// After
<Box 
  variant="section" 
  background="primary"
  className="pt-6 pb-0 sm:pt-8 sm:pb-0"
  aria-labelledby="hero-heading"
>
  {/* Background Pattern */}
  <div 
    className={cn(backgroundClasses.pattern, "absolute inset-0")}
    aria-hidden="true"
  />
  
  {/* Content */}
  <Box variant="content">
    {/* Component content... */}
  </Box>
</Box>
```

For deeper nested components like feature cards:

```tsx
// Before
<div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md border border-gray-200">
  <div className="flex items-center gap-3">
    <div className="rounded-lg bg-blue-600 p-3">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-lg font-semibold">Feature Title</h3>
  </div>
  <p className="text-gray-600">Content goes here</p>
</div>

// After
<Box variant="card" spacing="md" padding="md">
  <div className={cn(containerClasses.flex, spacingClasses.horizontalMd)}>
    <div className="rounded-lg bg-blue-600 p-3">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-lg font-semibold">Feature Title</h3>
  </div>
  <p className="text-gray-600">Content goes here</p>
</Box>
```

#### Step 4: Testing Methodology

For each component refactored:

1. **Visual Comparison**: Compare before/after renderings to ensure visual consistency
2. **Responsive Testing**: Test at mobile, tablet, and desktop breakpoints
3. **Interactive Testing**: Ensure any interactive elements continue to work
4. **Performance Check**: Monitor bundle size and rendering performance metrics

#### Step 5: Documentation Updates

For each refactored component:

1. Add a comment at the top of the file documenting the standardization pattern
2. Create example usage in the StyleGuide component
3. Update any existing documentation to reference the new standardized classes

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

# Style Standardization Plan: Div Classes

## Overview
This document outlines a plan to standardize div classes across the art-appraisers-landing website. The goal is to create a consistent system of reusable classes for div containers, reducing redundancy and making it easier to maintain a consistent UI.

## Current Analysis
Based on examination of the codebase, we're currently using:
- Tailwind CSS for styling
- Custom components in `/src/components/core` for some common elements
- The `cn()` utility function that uses `clsx` and `tailwind-merge` for class composition
- Inconsistent div class patterns across different components

## Class Standardization Strategy

### 1. Container Classes

#### Layout Containers
```tsx
<div className="container-section"> // Full-width section containers
<div className="container-content"> // Content-width containers (follows Container component max-width)
<div className="container-card">    // Card-style containers with box shadow and rounded corners
<div className="container-flex">    // Flex container with common alignment properties
<div className="container-grid">    // Grid container with responsive columns
```

#### Spacing Classes
```tsx
<div className="space-y-sm">  // Small vertical spacing (0.5rem/8px)
<div className="space-y-md">  // Medium vertical spacing (1rem/16px)
<div className="space-y-lg">  // Large vertical spacing (1.5rem/24px)
<div className="space-y-xl">  // Extra large vertical spacing (2rem/32px)

<div className="space-x-sm">  // Small horizontal spacing
<div className="space-x-md">  // Medium horizontal spacing
<div className="space-x-lg">  // Large horizontal spacing
<div className="space-x-xl">  // Extra large horizontal spacing

<div className="padding-sm">  // Small padding (all sides)
<div className="padding-md">  // Medium padding (all sides)
<div className="padding-lg">  // Large padding (all sides)
<div className="padding-xl">  // Extra large padding (all sides)
```

#### Background Classes
```tsx
<div className="bg-primary">     // Primary background (blue gradient)
<div className="bg-secondary">   // Secondary background (white/light)
<div className="bg-accent">      // Accent background (amber highlight)
<div className="bg-pattern">     // Background with pattern
<div className="bg-gradient">    // Default gradient background
```

#### Border & Shadow Classes
```tsx
<div className="border-standard">  // Standard border 
<div className="border-accent">    // Accent border (highlighted)
<div className="shadow-sm">        // Small shadow
<div className="shadow-md">        // Medium shadow
<div className="shadow-lg">        // Large shadow
<div className="rounded-sm">       // Small border radius
<div className="rounded-md">       // Medium border radius
<div className="rounded-lg">       // Large border radius
```

### 2. Implementation Approach

1. **Create a Design System Component File**
   - Create a new file `src/components/core/layout/DesignSystem.tsx` that defines these standard classes
   - Use the `cn()` utility to compose Tailwind classes into our standard classes

2. **Build CSS Utility Functions**
   - Extend `cn.ts` with helper functions for common class combinations
   - Create composable functions that make it easy to apply standardized styles

3. **Create Component Extensions**
   - Extend existing `Container`, `Card`, and other components to use our standardized classes
   - Add new layout components for common div patterns

4. **Documentation**
   - Create a style guide component that shows all standardized classes
   - Add comments to standard class definitions

## Implementation Plan

### Phase 1: Define Standard Classes

Create `src/components/core/layout/DesignSystem.tsx`:

```tsx
// Standard classes for layout containers
export const containerClasses = {
  section: cn("w-full relative overflow-hidden py-12 sm:py-16 md:py-24"),
  content: cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"),
  card: cn("bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"),
  flex: cn("flex items-center"),
  grid: cn("grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"),
};

// Standard spacing classes
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

// Standard background classes
export const backgroundClasses = {
  primary: cn("bg-gradient-to-b from-blue-100 to-white"),
  secondary: cn("bg-white"),
  accent: cn("bg-amber-50"),
  pattern: cn("bg-[radial-gradient(#3b82f6_1px,transparent_1px)] opacity-[0.05] [background-size:20px_20px]"),
  gradient: cn("bg-gradient-to-r from-blue-600/10 to-blue-500/10"),
};

// Standard border and shadow classes
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
```

### Phase 2: Create Helper Components

Create `src/components/core/layout/Box.tsx`:

```tsx
import React from 'react';
import { cn } from '../../../utils/cn';
import { containerClasses, spacingClasses, backgroundClasses, borderClasses } from './DesignSystem';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'section' | 'content' | 'card' | 'flex' | 'grid';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  direction?: 'row' | 'col'; 
  background?: 'primary' | 'secondary' | 'accent' | 'pattern' | 'gradient';
  border?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
  rounded?: 'sm' | 'md' | 'lg' | 'none';
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
}

export const Box: React.FC<BoxProps> = ({
  variant = 'content',
  spacing,
  direction = 'col',
  background,
  border = false,
  shadow = 'none',
  rounded = 'none',
  padding = 'none',
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
  const borderClass = border ? borderClasses.standard : '';
  const shadowClass = shadow !== 'none' ? borderClasses[`shadow${shadow.charAt(0).toUpperCase() + shadow.slice(1)}`] : '';
  const roundedClass = rounded !== 'none' ? borderClasses[`rounded${rounded.charAt(0).toUpperCase() + rounded.slice(1)}`] : '';
  const paddingClass = padding !== 'none' ? spacingClasses[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`] : '';
  
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
        direction === 'col' ? 'flex flex-col' : '',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
```

### Phase 3: Refactor Existing Components

Create a conversion plan for updating existing components:

1. Start with high-impact components like Hero and Features
2. Create a map of common div patterns and their standardized replacements
3. Update components to use the new standardized classes
4. Test to ensure visual consistency is maintained

### Phase 4: Documentation and Style Guide

Create a style guide page that demonstrates all standardized components and classes, showing:
- Standard container variations
- Spacing options
- Background options
- Border and shadow combinations

## Usage Examples

```tsx
// Before standardization
<div className="flex flex-col gap-4 p-4 rounded-xl bg-white shadow-md border border-gray-200">
  <div className="flex items-center gap-3">
    <div className="rounded-lg bg-blue-600 p-3">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-lg font-semibold">Title</h3>
  </div>
  <p className="text-gray-600">Content goes here</p>
</div>

// After standardization
<Box variant="card" spacing="md" padding="md" shadow="md" rounded="md">
  <div className={cn(containerClasses.flex, spacingClasses.horizontalMd)}>
    <div className="rounded-lg bg-blue-600 p-3">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-lg font-semibold">Title</h3>
  </div>
  <p className="text-gray-600">Content goes here</p>
</Box>
```

## Performance Considerations

The standardization process should:
- Not increase bundle size significantly
- Ensure responsive designs remain intact
- Keep CSS specificity in check
- Maintain backward compatibility where needed

## Timeline

1. **Week 1**: Define standard classes and create helper components
2. **Week 2**: Refactor high-impact components (Hero, Features)
3. **Week 3**: Refactor remaining components
4. **Week 4**: Testing, documentation, and style guide creation

By implementing this plan, we aim to create a more consistent and maintainable UI across the entire landing page, while ensuring that the design remains visually appealing and conversion-optimized. 