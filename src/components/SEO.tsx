import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogUrl?: string;
  structuredData?: Record<string, any> | Array<Record<string, any>>; 
  keywords?: string;
  noIndex?: boolean;
  langAlternates?: Array<{ lang: string; url: string }>;
  children?: React.ReactNode;
}

// URL base de la aplicación
const BASE_URL = 'https://appraisily.com';

// Ruta base de las imágenes
const IMG_BASE = 'https://ik.imagekit.io/appraisily/WebPage';

export default function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = `${IMG_BASE}/og_default.jpg`,
  ogUrl,
  structuredData,
  keywords,
  noIndex = false,
  langAlternates = [],
  children
}: SEOProps) {
  // Asegurar que el título tenga el nombre del sitio
  const formattedTitle = title.includes('Appraisily') ? title : `${title} | Appraisily`;
  
  // Construir URL canónica
  const canonicalUrl = canonical 
    ? `${BASE_URL}${canonical.startsWith('/') ? '' : '/'}${canonical}` 
    : undefined;
  
  // Construir URL para Open Graph
  const ogFullUrl = ogUrl 
    ? `${BASE_URL}${ogUrl.startsWith('/') ? '' : '/'}${ogUrl}` 
    : canonicalUrl;

  // Convertir structuredData a array si no lo es
  const structuredDataArray = structuredData 
    ? Array.isArray(structuredData) 
      ? structuredData 
      : [structuredData]
    : [];

  return (
    <Helmet>
      {/* Metadatos básicos */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      {ogFullUrl && <meta property="og:url" content={ogFullUrl} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Appraisily" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Alternativas de idioma */}
      {langAlternates.map(({ lang, url }) => (
        <link 
          key={lang} 
          rel="alternate" 
          hrefLang={lang} 
          href={`${BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`} 
        />
      ))}
      
      {/* JSON-LD Structured Data - Múltiples schemas */}
      {structuredDataArray.map((data, index) => (
        <script key={`structured-data-${index}`} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
      
      {/* Contenido adicional si existe */}
      {children}
    </Helmet>
  );
} 