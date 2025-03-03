import { useEffect } from 'react';

interface ResourceToPreload {
  url: string;
  type: 'image' | 'font' | 'script' | 'style' | 'fetch';
  as?: string;
  crossOrigin?: string;
  media?: string;
  importance?: 'auto' | 'high' | 'low';
}

/**
 * Hook para precargar recursos críticos
 * 
 * @param resources - Array de recursos a precargar
 * @param dependencies - Dependencias para controlar cuando se ejecuta la precarga
 */
export default function usePreloadResources(
  resources: ResourceToPreload[],
  dependencies: any[] = []
) {
  useEffect(() => {
    // No hacer nada si no hay recursos
    if (!resources.length) return;
    
    // Crear enlaces de precarga
    const links: HTMLLinkElement[] = [];
    
    resources.forEach((resource) => {
      // Si es un script, podemos precargarlo o preprocesarlo
      if (resource.type === 'script') {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'script';
        link.href = resource.url;
        
        if (resource.crossOrigin) {
          link.crossOrigin = resource.crossOrigin;
        }
        
        if (resource.importance) {
          link.importance = resource.importance;
        }
        
        document.head.appendChild(link);
        links.push(link);
        return;
      }
      
      // Si es una imagen, podemos utilizar Image API para precargar
      if (resource.type === 'image') {
        const img = new Image();
        img.src = resource.url;
        return;
      }
      
      // Si es un recurso para fetch, usamos preconnect o dns-prefetch
      if (resource.type === 'fetch') {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = new URL(resource.url).origin;
        
        document.head.appendChild(link);
        links.push(link);
        
        // También agregar dns-prefetch como fallback
        const dnsPrefetch = document.createElement('link');
        dnsPrefetch.rel = 'dns-prefetch';
        dnsPrefetch.href = new URL(resource.url).origin;
        
        document.head.appendChild(dnsPrefetch);
        links.push(dnsPrefetch);
        return;
      }
      
      // Para fuentes y estilos, usamos el elemento link estándar
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.url;
      link.as = resource.as || resource.type;
      
      if (resource.crossOrigin) {
        link.crossOrigin = resource.crossOrigin;
      }
      
      if (resource.media) {
        link.media = resource.media;
      }
      
      if (resource.importance) {
        link.importance = resource.importance;
      }
      
      document.head.appendChild(link);
      links.push(link);
    });
    
    // Limpiar cuando se desmonte el componente
    return () => {
      links.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, dependencies);
}

/**
 * Precargar recursos mediante JavaScript
 * Esta función se puede llamar en cualquier parte para precargar recursos específicos
 */
export const preloadResources = (resources: ResourceToPreload[]) => {
  resources.forEach((resource) => {
    if (resource.type === 'image') {
      const img = new Image();
      img.src = resource.url;
    } else {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.url;
      link.as = resource.as || resource.type;
      
      if (resource.crossOrigin) {
        link.crossOrigin = resource.crossOrigin;
      }
      
      document.head.appendChild(link);
    }
  });
}; 