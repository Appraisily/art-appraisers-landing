import React, { useState, useEffect } from 'react';
import { Award, Shield, Clock, FileText, Phone, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface NavItem {
  name: string;
  href: string;
  icon: React.FC<{ className?: string }>;
}

const navigation: NavItem[] = [
  { name: 'Services', href: '#services', icon: Award },
  { name: 'Process', href: '#process', icon: Clock },
  { name: 'Why Choose Us', href: '#why-choose-us', icon: Shield },
  { name: 'Expert Team', href: '#experts', icon: FileText },
  { name: 'Contact', href: '#contact', icon: Phone },
];

export default function DesktopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll event to change nav appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine which section is currently in view
      const sections = navigation.map(item => item.href.replace('#', ''));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md text-gray-900 py-3' 
          : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Logo variant={isScrolled ? "dark" : "light"} size="lg" />
          
          <nav className="flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative group flex items-center gap-1.5 text-base font-medium transition-colors duration-200 ${
                  activeSection === item.href.replace('#', '') 
                    ? isScrolled ? 'text-primary' : 'text-blue-300' 
                    : isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                <item.icon className={`h-4 w-4 ${
                  activeSection === item.href.replace('#', '') 
                    ? 'text-primary' 
                    : isScrolled ? 'text-gray-500 group-hover:text-primary' : 'text-blue-300'
                }`} />
                
                {item.name}
                
                {/* Active indicator line */}
                <span 
                  className={`absolute -bottom-2 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                    activeSection === item.href.replace('#', '')
                      ? 'scale-x-100 bg-primary'
                      : 'scale-x-0 group-hover:scale-x-100 bg-current'
                  }`}
                />
              </a>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="#services"
            className={`inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            Learn More
            <ChevronDown className="h-4 w-4 mt-0.5" />
          </a>
          
          <a
            href="https://appraisily.com/start"
            className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
              isScrolled 
                ? 'bg-primary text-white shadow-md hover:bg-primary/90 hover:shadow-lg' 
                : 'bg-white text-primary hover:bg-white/90'
            }`}
          >
            <Award className="h-4 w-4" />
            Start Appraisal
          </a>
        </div>
      </div>
    </header>
  );
} 