import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { preloadResources } from './hooks/usePreloadResources';
import { globalResources, artAppraiserResources, combineResources } from './config/preload.config';

// Lazy import for the ArtAppraiser page
const ArtAppraiser = React.lazy(() => import('./pages/ArtAppraiser'));

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-pulse space-y-4 flex flex-col items-center">
      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800"></div>
      <div className="h-2 w-24 bg-gray-300 rounded"></div>
      <p className="text-sm text-gray-500">Loading...</p>
    </div>
  </div>
);

// Component for analytics and resource management
const RouteObserver = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Preload specific resources based on route
    if (location.pathname === '/' || location.pathname === '/art-appraiser') {
      preloadResources(combineResources(globalResources, artAppraiserResources));
    } else {
      preloadResources(globalResources);
    }
    
    // Page analytics (example)
    const currentPath = location.pathname;
    console.log(`Page viewed: ${currentPath}`);
    
    // Here we could integrate with Google Analytics, etc.
    
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
                    <p className="mt-2 text-lg text-gray-600">Page not found</p>
                    <a 
                      href="/" 
                      className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                      Back to Home
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

// Preload global resources immediately
preloadResources(globalResources);

// Disable logging in production
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