/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Static HTML export for Netlify
  distDir: 'dist', // Match publish directory in netlify.toml
  images: {
    unoptimized: true, // Since we're using static export
  },
  experimental: {
    optimizeCss: true, // Optimize CSS
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console in production
  },
};

module.exports = nextConfig; 