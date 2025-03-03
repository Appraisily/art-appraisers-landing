import { useState, useCallback } from 'react';

interface ImageOnLoadType {
  handleImageOnLoad: () => void;
  handleImageOnError: () => void;
  isLoaded: boolean;
  isError: boolean;
  css: {
    skeleton: string;
    img: {
      loading: string;
      loaded: string;
      error: string;
    };
  };
}

/**
 * Hook para gestionar el estado de carga de imágenes
 * Ayuda a prevenir Cumulative Layout Shift (CLS) proporcionando un esqueleto
 * durante la carga y estados visuales apropiados
 */
export const useImageOnLoad = (): ImageOnLoadType => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  // Callbacks para eventos de imágenes
  const handleImageOnLoad = useCallback((): void => {
    setIsLoaded(true);
  }, []);

  const handleImageOnError = useCallback((): void => {
    setIsError(true);
  }, []);

  // Clases CSS predefinidas para diferentes estados
  const css = {
    // Estilo para el esqueleto de carga
    skeleton: 'bg-gray-200 animate-pulse',
    img: {
      // Imagen durante la carga (invisible)
      loading: 'opacity-0 transition-opacity duration-300',
      // Imagen después de cargar (visible con transición)
      loaded: 'opacity-100 transition-opacity duration-300',
      // Imagen con error
      error: 'opacity-0',
    },
  };

  return {
    handleImageOnLoad,
    handleImageOnError,
    isLoaded,
    isError,
    css,
  };
}; 