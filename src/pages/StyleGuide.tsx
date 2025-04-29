import React from 'react';
import { Box } from '../components/core/layout';
import { containerClasses, spacingClasses, backgroundClasses, borderClasses } from '../components/core/layout';
import { cn } from '../utils/cn';

export default function StyleGuide() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <Box variant="content">
        <h1 className="text-3xl font-bold mb-6">Style Guide: Standard Components</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Box Container Variants</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Box with Card Variant</h3>
              <Box variant="card" padding="md">
                <p>This is a card-style box with medium padding</p>
              </Box>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Box with Section Background</h3>
              <Box background="primary" padding="lg" rounded="md">
                <p>This is a box with primary background and large padding</p>
              </Box>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Box with Spacing</h3>
              <Box variant="card" padding="md" spacing="md">
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
              </Box>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Box with Shadow</h3>
              <Box padding="md" shadow="lg" rounded="lg" className="bg-white">
                <p>This is a box with large shadow</p>
              </Box>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Box with Border</h3>
              <Box padding="md" border="accent" rounded="md" className="bg-white">
                <p>This is a box with accent border</p>
              </Box>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Flex Row with Spacing</h3>
              <Box variant="flex" direction="row" spacing="md" padding="md" className="bg-white border rounded-md">
                <div className="bg-blue-100 p-4 rounded">Item 1</div>
                <div className="bg-blue-100 p-4 rounded">Item 2</div>
                <div className="bg-blue-100 p-4 rounded">Item 3</div>
              </Box>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Grid Layout</h3>
              <Box variant="grid" padding="md" className="bg-white border rounded-md">
                <div className="bg-blue-100 p-4 rounded">Grid Item 1</div>
                <div className="bg-blue-100 p-4 rounded">Grid Item 2</div>
                <div className="bg-blue-100 p-4 rounded">Grid Item 3</div>
                <div className="bg-blue-100 p-4 rounded">Grid Item 4</div>
                <div className="bg-blue-100 p-4 rounded">Grid Item 5</div>
                <div className="bg-blue-100 p-4 rounded">Grid Item 6</div>
              </Box>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Direct Class Usage Examples</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Container Classes</h3>
              <div className={cn(containerClasses.card, spacingClasses.paddingMd)}>
                <p>Using container classes directly</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Background Classes</h3>
              <div className={cn(backgroundClasses.gradient, spacingClasses.paddingMd, borderClasses.roundedMd)}>
                <p>Using background gradient class directly</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Spacing Classes</h3>
              <div className={cn(spacingClasses.verticalMd, borderClasses.standard, borderClasses.roundedMd, spacingClasses.paddingMd, "bg-white")}>
                <p>Item with vertical spacing 1</p>
                <p>Item with vertical spacing 2</p>
                <p>Item with vertical spacing 3</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Border & Shadow Classes</h3>
              <div className={cn(borderClasses.shadowLg, borderClasses.roundedLg, spacingClasses.paddingMd, "bg-white")}>
                <p>Using border and shadow classes directly</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common UI Patterns</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Feature Card Pattern</h3>
              <Box variant="card" padding="md" shadow="md">
                <div className={cn(containerClasses.flex, spacingClasses.horizontalMd, "mb-3")}>
                  <div className="rounded-lg bg-blue-600 p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Feature Title</h3>
                </div>
                <p className="text-gray-600">This is a standardized feature card pattern that can be reused throughout the site.</p>
              </Box>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Stat Group Pattern</h3>
              <Box variant="card" padding="md">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">15K+</div>
                    <div className="mt-1 text-sm text-gray-600">Artworks Appraised</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="mt-1 text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </Box>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">CTA Section Pattern</h3>
              <Box background="primary" padding="lg" rounded="lg">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Find My Expert Appraiser
                  </button>
                </div>
              </Box>
            </div>
          </div>
        </section>
      </Box>
    </div>
  );
} 