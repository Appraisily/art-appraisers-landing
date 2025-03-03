import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-transform-remove-console', { exclude: ['error', 'warn'] }]
        ]
      }
    }),
    splitVendorChunkPlugin()
  ],
  build: {
    cssCodeSplit: false,
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react', 
            'react-dom', 
            'react-router-dom',
            'react-helmet-async'
          ],
          icons: [
            'lucide-react'
          ],
          critical: [
            './src/components/sections/Hero.tsx',
            './src/components/TrustBar.tsx', 
            './src/components/LeadCapture.tsx'
          ],
          deferred: [
            './src/components/LazyComponent.tsx',
            './src/components/LazyImage.tsx'
          ]
        }
      }
    },
    assetsInlineLimit: 0
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react']
  },
  server: {
    open: true,
    port: 5173
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.VITE_APP_BASE_URL': JSON.stringify(process.env.VITE_APP_BASE_URL || 'https://appraisily.com')
  }
});