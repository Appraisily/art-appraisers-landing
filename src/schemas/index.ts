import { BASE_URL, IMG_BASE } from '../config/seo.config';

// Schema para Profesional de tasación de arte (Person)
export const createAppraiserSchema = (appraiser: {
  name: string;
  image: string;
  jobTitle: string;
  description: string;
  certifications: string[];
  specialties?: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: appraiser.name,
  image: appraiser.image,
  jobTitle: appraiser.jobTitle,
  description: appraiser.description,
  knowsAbout: appraiser.specialties || ['Art Appraisal', 'Fine Art', 'Art Authentication'],
  hasCredential: appraiser.certifications.map(cert => ({
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'certification',
    name: cert
  })),
  worksFor: {
    '@type': 'Organization',
    name: 'Appraisily',
    url: BASE_URL
  }
});

// Schema para Servicio de Tasación (completo y detallado)
export const createAppraisalServiceSchema = () => ({
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
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Donation Appraisal',
          description: 'Accurate appraisals for tax deduction purposes when donating artwork.'
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '199',
          priceCurrency: 'EUR'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Market Value Appraisal',
          description: 'Expert assessment of current market value for sale or acquisition.'
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '129',
          priceCurrency: 'EUR'
        }
      }
    ]
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: 'María García'
      },
      datePublished: '2023-06-15',
      reviewBody: 'Su tasación me ayudó a vender mi colección por un 40% más de lo que esperaba. Profesionales excepcionales.'
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: 'Javier Rodríguez'
      },
      datePublished: '2023-08-22',
      reviewBody: 'Descubrí que tenía una obra mucho más valiosa de lo que pensaba. El informe fue detallado y muy profesional.'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '753',
    bestRating: '5'
  }
});

// Schema para FAQ (Preguntas Frecuentes)
export const createFAQSchema = () => ({
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
    },
    {
      '@type': 'Question',
      name: '¿Qué información necesito proporcionar para tasar mi obra de arte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Necesitamos fotografías de alta calidad de la obra (frente, reverso, firma, detalles), medidas, técnica, cualquier documentación existente (certificados previos, facturas de compra, procedencia) y, si es posible, información sobre el artista y fecha de creación.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Sus tasaciones son válidas para seguros e impuestos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, nuestros informes completos cumplen con los estándares USPAP (Uniform Standards of Professional Appraisal Practice) y son aceptados por compañías de seguros, entidades fiscales y autoridades legales para trámites oficiales.'
      }
    }
  ]
});

// Schema para Proceso de tasación (HowTo)
export const createAppraisalProcessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo obtener una tasación profesional de arte',
  description: 'Guía paso a paso para conseguir una valoración precisa y profesional de tus obras de arte.',
  totalTime: 'P3D',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: '99'
  },
  image: `${IMG_BASE}/appraisal_process.jpg`,
  step: [
    {
      '@type': 'HowToStep',
      name: 'Envío de información',
      text: 'Completa nuestro formulario online con detalles sobre tu obra y sube fotografías de alta calidad.',
      image: `${IMG_BASE}/process_step1.jpg`,
      url: `${BASE_URL}/art-appraiser#step1`
    },
    {
      '@type': 'HowToStep',
      name: 'Análisis preliminar',
      text: 'Nuestros expertos realizarán un primer análisis para determinar el tipo de tasación necesaria.',
      image: `${IMG_BASE}/process_step2.jpg`,
      url: `${BASE_URL}/art-appraiser#step2`
    },
    {
      '@type': 'HowToStep',
      name: 'Investigación y valoración',
      text: 'Realizamos un estudio detallado del mercado, comparables, procedencia y autenticidad.',
      image: `${IMG_BASE}/process_step3.jpg`,
      url: `${BASE_URL}/art-appraiser#step3`
    },
    {
      '@type': 'HowToStep',
      name: 'Elaboración del informe',
      text: 'Creamos un informe profesional con todos los detalles de la valoración y certificación.',
      image: `${IMG_BASE}/process_step4.jpg`,
      url: `${BASE_URL}/art-appraiser#step4`
    },
    {
      '@type': 'HowToStep',
      name: 'Entrega y asesoramiento',
      text: 'Recibes tu informe de tasación y asesoramiento personalizado sobre cómo proceder.',
      image: `${IMG_BASE}/process_step5.jpg`,
      url: `${BASE_URL}/art-appraiser#step5`
    }
  ]
});

// Schema para producto de tasación (Product)
export const createAppraisalProductSchema = (product: {
  name: string;
  description: string;
  price: string;
  image: string;
  sku: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image,
  sku: product.sku,
  mpn: `APPRSL-${product.sku}`,
  brand: {
    '@type': 'Brand',
    name: 'Appraisily'
  },
  offers: {
    '@type': 'Offer',
    url: `${BASE_URL}/services/${product.sku}`,
    priceCurrency: 'EUR',
    price: product.price,
    priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'Appraisily'
    }
  }
});

// Schema completo para la página de tasadores de arte
export const getArtAppraiserSchema = () => [
  createAppraisalServiceSchema(),
  createFAQSchema(),
  createAppraisalProcessSchema(),
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Art Appraisal Services',
        item: `${BASE_URL}/art-appraiser`
      }
    ]
  }
]; 