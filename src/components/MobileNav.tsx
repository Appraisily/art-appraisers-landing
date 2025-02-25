import React, { useState } from 'react';
import { Menu, X, Award, Shield, Clock, FileText, Phone } from 'lucide-react';
import Logo from './Logo';

interface NavItem {
  name: string;
  href: string;
  icon: React.FC<{ className?: string }>;
}

const navigation: NavItem[] = [
  { name: 'Our Services', href: '#services', icon: Award },
  { name: 'Our Process', href: '#process', icon: Clock },
  { name: 'Why Choose Us', href: '#why-choose-us', icon: Shield },
  { name: 'Expert Appraisers', href: '#experts', icon: FileText },
  { name: 'Contact Us', href: '#contact', icon: Phone },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Fixed Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 lg:hidden">
        <div className="px-4 py-2 flex items-center justify-between">
          <Logo variant="light" size="md" />
          
          <button
            type="button"
            className="rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-gray-900/95 pt-16">
          <nav className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 text-white text-base font-medium transition-colors duration-200"
                onClick={toggleMenu}
              >
                <div className="flex-shrink-0 rounded-md bg-white/10 p-2">
                  <item.icon className="h-5 w-5 text-blue-300" />
                </div>
                {item.name}
              </a>
            ))}
            
            <div className="pt-4 mt-6 border-t border-white/10">
              <a
                href="https://appraisily.com/start"
                onClick={toggleMenu}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-primary"
              >
                Start Your Appraisal
                <Award className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
      
      {/* Spacer for Fixed Header */}
      <div className="h-12 lg:hidden" />
    </>
  );
} 