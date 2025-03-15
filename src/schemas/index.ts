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
        name: 'Mary Garcia'
      },
      datePublished: '2023-06-15',
      reviewBody: 'Their appraisal helped me sell my collection for 40% more than I expected. Exceptional professionals.'
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
        name: 'James Rodriguez'
      },
      datePublished: '2023-08-22',
      reviewBody: 'I discovered that I had a much more valuable artwork than I thought. The report was detailed and very professional.'
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
      name: 'How much does a professional art appraisal cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our appraisal services start from €59 for basic evaluations and can go up to €299 for complete reports with insurance and tax certification. The price depends on the type of report, number of artworks, and urgency.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does it take to receive an art appraisal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard delivery time is 48-72 hours for basic reports. For comprehensive appraisals with thorough research, the time can be 5-7 business days. We offer urgent services with 24-hour delivery at an additional cost.'
      }
    },
    {
      '@type': 'Question',
      name: 'What information do I need to provide to appraise my artwork?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We need high-quality photographs of the artwork (front, back, signature, details), measurements, technique, any existing documentation (previous certificates, purchase invoices, provenance), and, if possible, information about the artist and date of creation.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are your appraisals valid for insurance and taxes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our complete reports comply with USPAP (Uniform Standards of Professional Appraisal Practice) standards and are accepted by insurance companies, tax authorities, and legal entities for official procedures.'
      }
    }
  ]
});

// Schema para Proceso de tasación (HowTo)
export const createAppraisalProcessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Get a Professional Art Appraisal',
  description: 'Step-by-step guide to obtaining an accurate and professional valuation of your artwork.',
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
      name: 'Submit Information',
      text: 'Complete our online form with details about your artwork and upload high-quality photographs.',
      image: `${IMG_BASE}/process_step1.jpg`,
      url: `${BASE_URL}/art-appraiser#step1`
    },
    {
      '@type': 'HowToStep',
      name: 'Preliminary Analysis',
      text: 'Our experts will conduct an initial analysis to determine the type of appraisal needed.',
      image: `${IMG_BASE}/process_step2.jpg`,
      url: `${BASE_URL}/art-appraiser#step2`
    },
    {
      '@type': 'HowToStep',
      name: 'Research and Valuation',
      text: 'We conduct a detailed market study, comparables, provenance, and authenticity research.',
      image: `${IMG_BASE}/process_step3.jpg`,
      url: `${BASE_URL}/art-appraiser#step3`
    },
    {
      '@type': 'HowToStep',
      name: 'Report Creation',
      text: 'We create a professional report with all the valuation details and certification.',
      image: `${IMG_BASE}/process_step4.jpg`,
      url: `${BASE_URL}/art-appraiser#step4`
    },
    {
      '@type': 'HowToStep',
      name: 'Delivery and Consultation',
      text: 'You receive your appraisal report and personalized advice on how to proceed.',
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