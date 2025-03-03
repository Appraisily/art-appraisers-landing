#!/usr/bin/env node

/**
 * Sitemap Generator for Art Appraiser Landing Page
 * Automatically creates sitemap.xml during build for SEO
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_FOLDER = path.resolve(__dirname, '../dist');
const outputFile = path.join(DIST_FOLDER, 'sitemap.xml');

// Configure your site's domain - should be customized in your deployment
const SITE_DOMAIN = process.env.SITE_DOMAIN || 'https://art-appraisers.example.com';
const ROUTES = [
  '/',
  '/art-appraiser'
];

/**
 * Generate sitemap.xml content
 * @returns {string} XML content for sitemap
 */
function generateSitemapContent() {
  const today = new Date().toISOString().split('T')[0];
  
  // XML header
  let content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  // Add each route
  ROUTES.forEach(route => {
    content += `  <url>
    <loc>${SITE_DOMAIN}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>
`;
  });

  // Close XML
  content += `</urlset>`;
  
  return content;
}

/**
 * Main function to generate and save sitemap
 */
function generateSitemap() {
  try {
    // Ensure dist directory exists
    if (!fs.existsSync(DIST_FOLDER)) {
      console.error(`Error: Build directory (${DIST_FOLDER}) does not exist!`);
      console.log('Make sure to run this script after the build process.');
      process.exit(1);
    }
    
    // Generate sitemap content
    const sitemapContent = generateSitemapContent();
    
    // Write to file
    fs.writeFileSync(outputFile, sitemapContent);
    
    console.log(`✅ Sitemap generated successfully at: ${outputFile}`);
    console.log(`Routes included: ${ROUTES.join(', ')}`);
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
    process.exit(1);
  }
}

// Execute
generateSitemap(); 