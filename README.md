# Art Appraisers Landing Page

A modern React application showcasing a professional landing page for art appraisal services, optimized for SEO and performance.

## Overview

This repository contains a standalone landing page designed for art appraisal services. It's configured for deployment as a subdomain on Netlify, with automated sitemap generation for SEO optimization.

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- Lucide React for icons
- React Router for navigation
- Lottie for animations
- ImageKit.io for image optimization and delivery

## Features

- Responsive design optimized for all devices
- Performance optimized with code splitting and lazy loading
- Beautiful animations and transitions
- SEO friendly with proper meta tags and structured data
- Automated sitemap generation for Google indexing
- Optimized image loading with ImageKit.io
- Google Tag Manager integration

## Project Structure

```
├── dist/           # Production build output
├── public/         # Static assets
├── scripts/        # Build automation scripts
│   ├── generate-sitemap.js   # Sitemap generator
│   └── injectSchemas.js      # SEO schema injection script
├── src/
│   ├── components/           # Reusable UI components 
│   │   ├── core/             # Core UI building blocks
│   │   ├── features/         # Feature-specific components
│   │   ├── forms/            # Form-related components
│   │   ├── sections/         # Page section components
│   │   ├── utility/          # Utility components
│   │   └── video/            # Video-related components
│   ├── config/               # Application configuration
│   ├── hooks/                # Custom React hooks
│   ├── images/               # Image assets
│   ├── pages/                # Page components
│   │   ├── ArtAppraiser.tsx  # Main art appraiser page
│   │   └── StyleGuide.tsx    # Style guide page
│   ├── schemas/              # Structured data schema definitions
│   ├── utils/                # Utility functions
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles
├── netlify.toml    # Netlify deployment configuration
└── vite.config.ts  # Vite build configuration
```

## Component Architecture

### Page Components

- **ArtAppraiser.tsx**: Main landing page component that orchestrates all sections
- **StyleGuide.tsx**: Internal style guide page for design reference

### Section Components

- **MainHero.tsx**: Hero section with primary call-to-action and expert profiles
- **Features.tsx**: Highlights the key features of the art appraisal service
- **Process.tsx**: Step-by-step explanation of the appraisal process
- **ValuerAnalytics.tsx**: Explains the data analytics capabilities
- **RecentAppraisals.tsx**: Showcases recent appraisal examples
- **SuccessStories.tsx**: Client testimonials and success stories
- **Services.tsx**: Service offerings and pricing information
- **Experts.tsx**: Team presentation with credentials
- **TrustFooter.tsx**: Trust badges and final call-to-action

### Core Components

- **Button.tsx**: Reusable button component with multiple variants
- **Card.tsx**: Card component for displaying content in boxes
- **Badge.tsx**: Badge component for labels and tags
- **Container.tsx**: Layout container component for consistent spacing
- **SEO.tsx**: Component for meta tags and SEO optimization
- **LazyComponent.tsx**: Higher-order component for lazy loading
- **LazyImage.tsx**: Image component with lazy loading capabilities

## Utility Functions

- **cn.ts**: Utility for conditional class name generation
- **usePreloadResources.ts**: Hook for preloading critical resources
- **validateSchema.js**: Tool for validating structured data schemas

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Build with SEO schema markup injection
npm run build:seo

# Build with sitemap generation
npm run build:sitemap

# Complete build with schemas and sitemap
npm run build:full

# Preview production build
npm run preview
```

## SEO Optimizations

### Structured Data
The application includes structured data (JSON-LD) for rich search results including:
- Service information
- Organization details
- Professional services offered
- Pricing information

### Sitemap Generation
Automatic sitemap generation is included in the build process:
- Creates a standards-compliant sitemap.xml
- Updates the lastmod date automatically
- Configurable via environment variables

## Performance Optimizations

- Code splitting with dynamic imports
- Image optimization with ImageKit.io
- Critical CSS inlining
- Resource hints (preconnect, dns-prefetch)
- Lazy loading of non-critical components
- Efficient bundle chunking strategy
- Strategic component loading based on viewport visibility

## Netlify Deployment

### Subdomain Setup

This repository is configured for deployment as a subdomain on Netlify. To deploy:

1. Connect your GitHub repository to Netlify
2. Configure the following settings:
   - Build command: `npm run build:full`
   - Publish directory: `dist`

3. Set up environment variables:
   - `SITE_DOMAIN`: Your custom subdomain (e.g., https://art-appraisers.yourdomain.com)

4. Add your custom domain in the Netlify site settings

### Sitemap Configuration

The sitemap is generated at build time and will be available at `https://your-subdomain.com/sitemap.xml`.

To combine sitemaps from multiple subdomains, create a sitemap index on your main domain:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://art-appraisers.yourdomain.com/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://other-service.yourdomain.com/sitemap.xml</loc>
  </sitemap>
</sitemapindex>
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design works on all screen sizes
- Progressive enhancement for older browsers