import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { preloadResources } from './hooks/usePreloadResources';
import { globalResources, artAppraiserResources, combineResources } from './config/preload.config';

// Importación lazy para la página ArtAppraiser
const ArtAppraiser = React.lazy(() => import('./pages/ArtAppraiser'));

// Componente de carga para Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-pulse space-y-4 flex flex-col items-center">
      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800"></div>
      <div className="h-2 w-24 bg-gray-300 rounded"></div>
      <p className="text-sm text-gray-500">Cargando...</p>
    </div>
  </div>
);

// Componente para gestionar analíticas y recursos
const RouteObserver = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Precargar recursos específicos según la ruta
    if (location.pathname === '/' || location.pathname === '/art-appraiser') {
      preloadResources(combineResources(globalResources, artAppraiserResources));
    } else {
      preloadResources(globalResources);
    }
    
    // Analíticas de página (ejemplo)
    const currentPath = location.pathname;
    console.log(`Página vista: ${currentPath}`);
    
    // Aquí podríamos integrar con Google Analytics, etc.
    
  }, [location.pathname]);
  
  return null;
};

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter basename=''>
        <RouteObserver />
        <div className="min-h-screen bg-white">
          <Routes>
            <Route 
              path="/" 
              element={
                <React.Suspense fallback={<PageLoader />}>
                  <ArtAppraiser />
                </React.Suspense>
              } 
            />
            <Route 
              path="/art-appraiser" 
              element={<Navigate to="/" replace />} 
            />
            <Route 
              path="*" 
              element={
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900">404</h1>
                    <p className="mt-2 text-lg text-gray-600">Página no encontrada</p>
                    <a 
                      href="/" 
                      className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                      Volver a inicio
                    </a>
                  </div>
                </div>
              } 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

// Precargar recursos globales inmediatamente
preloadResources(globalResources);

// Desactivar el log en producción
if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);