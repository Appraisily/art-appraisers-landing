// URL base de la aplicación
export const BASE_URL = 'https://appraisily.com';

// Ruta base de las imágenes
export const IMG_BASE = 'https://ik.imagekit.io/appraisily/WebPage';

// Datos básicos del sitio
export const DEFAULT_SITE_NAME = 'Appraisily';
export const DEFAULT_DESCRIPTION = 'Professional art appraisal services for insurance, donations, estate planning and more. Get accurate valuations from certified experts.';

// Información estructurada de la organización (JSON-LD)
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
    availableLanguage: ['English', 'Spanish']
  }
};

// Importamos los esquemas estructurados desde nuestro nuevo archivo
import { getArtAppraiserSchema } from '../schemas';

// Página de tasadores de arte (ArtAppraiser)
export const ART_APPRAISER_SEO = {
  title: 'Expertos en Tasación de Arte | Valoración Profesional de Obras',
  description: 'Obtén tasaciones precisas de tu arte con nuestros expertos certificados. Informes profesionales para seguros, donaciones y herencias. Más de 15.000 obras evaluadas.',
  keywords: 'tasación de arte, valoración de obras, tasador profesional, arte, autenticación, precio de mercado, certificado de autenticidad, valor de mercado arte',
  canonical: '/art-appraiser',
  ogType: 'website',
  ogImage: `${IMG_BASE}/art_appraiser_og.jpg`,
  ogUrl: '/art-appraiser',
  langAlternates: [
    { lang: 'en', url: '/art-appraiser' },
    { lang: 'es', url: '/es/tasador-arte' }
  ],
  // Utilizamos ahora el array de esquemas completo
  structuredData: getArtAppraiserSchema()
}; 