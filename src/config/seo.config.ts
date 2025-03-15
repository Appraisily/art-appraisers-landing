// Base URL of the application
export const BASE_URL = 'https://appraisily.com';

// Base path for images
export const IMG_BASE = 'https://ik.imagekit.io/appraisily/WebPage';

// Basic site information
export const DEFAULT_SITE_NAME = 'Appraisily';
export const DEFAULT_DESCRIPTION = 'Professional art appraisal services for insurance, donations, estate planning and more. Get accurate valuations from certified experts.';

// Organization structured data (JSON-LD)
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Appraisily',
  url: BASE_URL,
  logo: `${IMG_BASE}/logo_new.png`,
  sameAs: [
    'https://www.facebook.com/appraisily',
    'https://www.instagram.com/appraisily_official',
    'https://twitter.com/appraisily'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-800-555-1234',
    contactType: 'customer service',
    availableLanguage: ['English']
  }
};

// Import structured data schemas from our schema file
import { getArtAppraiserSchema } from '../schemas';

// Art Appraiser page
export const ART_APPRAISER_SEO = {
  title: 'Professional Art Appraisers | Expert Artwork Valuation',
  description: 'Get accurate appraisals for your artwork from our certified experts. Professional reports for insurance, donations, and estates. Over 15,000 pieces evaluated.',
  keywords: 'art appraisal, artwork valuation, professional appraiser, art, authentication, market price, certificate of authenticity, art market value',
  canonical: '/',
  ogType: 'website',
  ogImage: `${IMG_BASE}/art_appraiser_og.jpg`,
  ogUrl: '/',
  langAlternates: [
    { lang: 'en', url: '/' }
  ],
  // Using the complete schema array
  structuredData: getArtAppraiserSchema()
}; 