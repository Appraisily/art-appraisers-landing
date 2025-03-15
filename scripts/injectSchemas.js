#!/usr/bin/env node

/**
 * Este script inyecta los esquemas de datos estructurados (JSON-LD)
 * directamente en el archivo HTML generado durante la compilación.
 * Esto garantiza que los motores de búsqueda puedan encontrar estos datos
 * estructurados sin depender de JavaScript.
 * 
 * Ejecutar después de npm run build: node scripts/injectSchemas.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para cargar los esquemas
const loadSchemas = () => {
  // Importamos solo los esquemas que necesitamos para el HTML estático
  try {
    // Nota: Esta es una aproximación simple. En un entorno real,
    // necesitarías transpiler o importar de archivos JS precompilados.
    const BASE_URL = process.env.VITE_APP_BASE_URL || 'https://appraisily.com';
    const IMG_BASE = 'https://ik.imagekit.io/appraisily/WebPage';

    // Información de la organización
    const ORGANIZATION_SCHEMA = {
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

    // Para páginas específicas (aquí usamos solo ArtAppraiser como ejemplo)
    // Esquema del servicio
    const SERVICE_SCHEMA = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Professional Art Appraisal Services',
      serviceType: 'Art Appraisal',
      provider: {
        '@type': 'Organization',
        name: 'Appraisily',
        url: BASE_URL,
        logo: `${IMG_BASE}/logo_new.png`
      },
      description: 'Expert art appraisal services for insurance, donations, estate planning, and market valuation.',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '59',
        highPrice: '299',
        offerCount: '4'
      },
      termsOfService: `${BASE_URL}/terms-of-service`,
      areaServed: {
        '@type': 'Country',
        name: 'United States'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Art Appraisal Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Insurance Appraisal',
              description: 'Professional appraisal reports for insuring your artwork at its proper value.'
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '99',
              priceCurrency: 'USD'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Estate Appraisal',
              description: 'Comprehensive valuation services for estate planning and inheritance purposes.'
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '149',
              priceCurrency: 'USD'
            }
          }
        ]
      },
      review: {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '4.9',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Satisfied Customer'
        },
        reviewBody: 'Exceptional service. The appraisal of my artwork was accurate and completely professional.'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '753',
        bestRating: '5'
      }
    };

    // Esquema de FAQ
    const FAQ_SCHEMA = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a professional art appraisal cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our appraisal services start from $59 for basic evaluations and can go up to $299 for complete reports with insurance and tax certification. The price depends on the type of report, number of artworks, and urgency.'
          }
        },
        {
          '@type': 'Question',
          name: 'How long does it take to receive an art appraisal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The standard delivery time is 48-72 hours for basic reports. For comprehensive appraisals with thorough research, the time can be 5-7 business days. We offer urgent services with 24-hour delivery at an additional cost.'
          }
        }
      ]
    };

    // Retornamos todos los esquemas
    return [ORGANIZATION_SCHEMA, SERVICE_SCHEMA, FAQ_SCHEMA];
  } catch (error) {
    console.error('Error al cargar los esquemas:', error);
    return [];
  }
};

// Función para insertar los esquemas en el HTML
const injectSchemas = () => {
  try {
    // Ruta al HTML generado
    const htmlPath = path.join(__dirname, '../dist/index.html');
    
    // Leer el contenido HTML
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Cargar los esquemas
    const schemas = loadSchemas();
    
    // Crear las etiquetas script para los esquemas
    const schemaScripts = schemas.map(schema => 
      `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
    ).join('\n    ');
    
    // Insertar los scripts en el HTML (antes de </head>)
    htmlContent = htmlContent.replace('</head>', `    ${schemaScripts}\n  </head>`);
    
    // Guardar el HTML modificado
    fs.writeFileSync(htmlPath, htmlContent);
    
    console.log('✅ Structured data schemas successfully inserted into HTML');
  } catch (error) {
    console.error('Error inserting schemas:', error);
  }
};

// Ejecutar la inyección de esquemas
injectSchemas(); 