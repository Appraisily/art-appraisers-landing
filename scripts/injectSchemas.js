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
        availableLanguage: ['English', 'Spanish']
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
        priceCurrency: 'EUR',
        lowPrice: '59',
        highPrice: '299',
        offerCount: '4'
      },
      termsOfService: `${BASE_URL}/terms-of-service`,
      areaServed: {
        '@type': 'Country',
        name: 'Spain'
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
              priceCurrency: 'EUR'
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
              priceCurrency: 'EUR'
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
          name: 'Cliente satisfecho'
        },
        reviewBody: 'Un servicio excepcional. La tasación de mis obras fue precisa y completamente profesional.'
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
          name: '¿Cuánto cuesta una tasación profesional de arte?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nuestros servicios de tasación comienzan desde €59 para evaluaciones básicas y pueden llegar hasta €299 para informes completos con certificación para seguros e impuestos. El precio depende del tipo de informe, número de obras y urgencia.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo toma recibir una tasación de arte?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El tiempo estándar de entrega es de 48-72 horas para informes básicos. Para tasaciones completas con investigación exhaustiva, el tiempo puede ser de 5-7 días hábiles. Ofrecemos servicios urgentes con entrega en 24 horas con un costo adicional.'
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
    
    console.log('✅ Esquemas de datos estructurados insertados correctamente en el HTML');
  } catch (error) {
    console.error('Error al insertar los esquemas:', error);
  }
};

// Ejecutar la inyección de esquemas
injectSchemas(); 