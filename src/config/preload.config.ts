/**
 * Configuración de recursos críticos a precargar
 * Para mejorar el First Contentful Paint (FCP) y Largest Contentful Paint (LCP)
 */

export interface PreloadResource {
  url: string;
  type: 'image' | 'font' | 'script' | 'style' | 'fetch';
  as?: string;
  crossOrigin?: string;
  media?: string;
  importance?: 'auto' | 'high' | 'low';
}

/**
 * Recursos críticos globales (que deben cargarse en todas las páginas)
 */
export const globalResources: PreloadResource[] = [
  // Fuentes
  {
    url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    type: 'style',
    importance: 'high'
  },
  
  // Dominios para optimizar la conexión
  {
    url: 'https://ik.imagekit.io',
    type: 'fetch',
    importance: 'high'
  },
  
  // Logos y recursos críticos comunes
  {
    url: '/logo.svg',
    type: 'image',
    importance: 'high'
  }
];

/**
 * Recursos críticos específicos para la página de Art Appraiser
 */
export const artAppraiserResources: PreloadResource[] = [
  // Imágenes hero
  {
    url: 'https://ik.imagekit.io/appraisily/Appraisers/andres.png?tr=w-400,h-400,q-75',
    type: 'image',
    importance: 'high'
  },
  {
    url: 'https://placehold.co/1920x1080/333/fff?text=Art+Appraisal+Video',
    type: 'image',
    importance: 'high'
  },
  
  // Hero video (para carga anticipada)
  {
    url: 'https://ik.imagekit.io/appraisily/Videos/hero4.mp4?updatedAt=1731840454419',
    type: 'fetch',
    importance: 'low'
  }
];

/**
 * Helper para combinar recursos
 */
export const combineResources = (...resourceArrays: PreloadResource[][]): PreloadResource[] => {
  return resourceArrays.flat();
}; 