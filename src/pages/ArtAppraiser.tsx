import React, { useEffect } from 'react';
// Componente SEO
import SEO from '../components/SEO';
import { ART_APPRAISER_SEO } from '../config/seo.config';

// Componentes críticos por encima del pliegue (eager loading)
import Hero from '../components/sections/Hero';
import LeadCapture from '../components/LeadCapture';
import TrustBar from '../components/TrustBar';
import Features from '../components/sections/Features';
import LazyComponent from '../components/LazyComponent';

// Importaciones regulares para componentes por debajo del pliegue
// Usamos importaciones regulares ya que LazyComponent manejará la visibilidad
import Process from '../components/sections/Process';
import ValueProposition from '../components/ValueProposition';
import RecentAppraisals from '../components/sections/RecentAppraisals';
import SuccessStories from '../components/sections/SuccessStories';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Experts from '../components/Experts';
import TrustFooter from '../components/TrustFooter';

export default function ArtAppraiser() {
  useEffect(() => {
    // Push page view to GTM
    window.dataLayer?.push({
      event: 'pageview',
      page: {
        title: ART_APPRAISER_SEO.title,
        path: '/art-appraiser'
      }
    });
    
    // Prefetch componentes críticos cuando la página está inactiva
    // Esto mejora la percepción de velocidad para componentes que pronto serán visibles
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        // Importación dinámica para prefetch durante tiempo de inactividad
        import('../components/sections/Process');
        import('../components/ValueProposition');
      }, { timeout: 2000 });
    }
  }, []);

  return (
    <>
      {/* Componente SEO con metadatos optimizados */}
      <SEO
        title={ART_APPRAISER_SEO.title}
        description={ART_APPRAISER_SEO.description}
        canonical={ART_APPRAISER_SEO.canonical}
        ogType={ART_APPRAISER_SEO.ogType}
        ogImage={ART_APPRAISER_SEO.ogImage}
        ogUrl={ART_APPRAISER_SEO.ogUrl}
        structuredData={ART_APPRAISER_SEO.structuredData}
        keywords={ART_APPRAISER_SEO.keywords}
        langAlternates={ART_APPRAISER_SEO.langAlternates}
      />
    
      <div className="bg-white">
        {/* Componentes críticos por encima del pliegue (eager loading) */}
        <Hero />
        <LeadCapture />
        <TrustBar />
        <Features />
        
        {/* Componentes por debajo del pliegue cargados con LazyComponent */}
        <LazyComponent rootMargin="200px">
          <Process />
        </LazyComponent>
        
        <LazyComponent rootMargin="200px">
          <ValueProposition />
        </LazyComponent>
        
        <LazyComponent rootMargin="200px">
          <RecentAppraisals />
        </LazyComponent>
        
        <LazyComponent rootMargin="200px">
          <SuccessStories />
        </LazyComponent>
        
        <LazyComponent rootMargin="150px">
          <WhyChooseUs />
        </LazyComponent>
        
        <LazyComponent rootMargin="150px">
          <Services />
        </LazyComponent>
        
        <LazyComponent rootMargin="150px">
          <Experts />
        </LazyComponent>
        
        <LazyComponent rootMargin="100px">
          <TrustFooter />
        </LazyComponent>
      </div>
    </>
  );
}