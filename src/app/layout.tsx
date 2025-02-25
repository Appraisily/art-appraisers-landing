import React from 'react';
import { Inter } from 'next/font/google';

// Si estás usando Tailwind, incluye los estilos
import '../index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Art Appraisers',
  description: 'Professional Art Appraisal Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 