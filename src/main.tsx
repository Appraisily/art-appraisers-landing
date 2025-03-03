import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import ArtAppraiser from './pages/ArtAppraiser';

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter basename='/landing'>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<Navigate to="/art-appraiser" replace />} />
            <Route path="/art-appraiser" element={<ArtAppraiser />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);