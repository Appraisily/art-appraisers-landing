# Art Appraisers Landing Page

A professional landing page for art appraisal services, built with Next.js and optimized for performance.

## Features

- Modern, responsive design with mobile and desktop optimizations
- Smooth animations and transitions using Framer Motion
- Optimized image loading for better performance
- Preloader for smoother page initialization
- SEO-friendly structure

## Tech Stack

- **Next.js**: React framework for production
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Lightweight icon library

## Deployment to Netlify

### Automatic Deployment (Recommended)

1. Fork or clone this repository to your GitHub account
2. Log in to [Netlify](https://www.netlify.com/)
3. Click "New site from Git" 
4. Select GitHub and choose your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"
7. (Optional) Configure a custom domain in the Netlify site settings

### Manual Deployment

1. Install dependencies: `npm install`
2. Build the project: `npm run build`
3. Deploy using Netlify CLI:
   ```bash
   # Install Netlify CLI if not already installed
   npm install -g netlify-cli
   
   # Log in to your Netlify account
   netlify login
   
   # Deploy the site
   netlify deploy --prod
   ```

## Performance Optimizations

This site includes several optimizations for smooth loading and performance:

- Image preloading for key visuals
- Lazy loading for non-critical images
- Smooth animations with staggered loading
- Optimized asset caching through Netlify config
- Preloader component for initial page load

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Customization

- Update images in the `/public/images/` directory
- Modify content in each component
- Adjust color scheme in the TailwindCSS config