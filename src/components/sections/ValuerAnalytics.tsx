import React, { useState, useRef, useEffect } from 'react';
import { Container, Section } from '../core/Container';
import { Card, CardTitle, CardContent } from '../core/Card';
import Badge from '../core/Badge';
import Button from '../core/Button';
import LazyImage from '../core/media/LazyImage';
import { 
  Search, Database, Brain, BarChart3, Clock, Sparkles, 
  LineChart, ArrowRight, ChevronDown, ChevronUp 
} from 'lucide-react';
import { cn } from '../../utils/cn';

const analyticsSteps = [
  {
    title: 'Intelligent Keyword Extraction',
    description: 'Our AI system automatically extracts the most effective search terms used by major auction houses, generating 25+ specialized queries.',
    icon: Search,
    iconClass: 'bg-blue-100',
    iconTextClass: 'text-blue-600',
  },
  {
    title: 'Progressive Market Data Gathering',
    description: 'Our system navigates auction databases through a multi-tiered approach, from specific to broader terms to find the most relevant matches.',
    icon: Database,
    iconClass: 'bg-indigo-100',
    iconTextClass: 'text-indigo-600',
  },
  {
    title: 'AI-Powered Quality Assessment',
    description: 'Each potential comparable item undergoes sophisticated AI evaluation, scored for relevance to your specific piece.',
    icon: Brain,
    iconClass: 'bg-purple-100',
    iconTextClass: 'text-purple-600',
  },
  {
    title: 'Advanced Statistical Analysis',
    description: 'We process market data using sophisticated statistical methods to calculate price distributions and position your item in the market.',
    icon: BarChart3,
    iconClass: 'bg-cyan-100',
    iconTextClass: 'text-cyan-600',
  },
  {
    title: 'Historical Trend Analysis',
    description: 'Unique to Valuer Agent, we perform temporal market analysis to identify price movements and calculate market changes over time.',
    icon: LineChart,
    iconClass: 'bg-teal-100',
    iconTextClass: 'text-teal-600',
  },
  {
    title: 'Investment Metric Calculation',
    description: 'Our system generates specialized metrics like Historical Significance Score and Investment Potential Rating.',
    icon: Sparkles,
    iconClass: 'bg-amber-100',
    iconTextClass: 'text-amber-600',
  },
  {
    title: 'Comprehensive Reporting',
    description: 'The final analytics package delivers clear, actionable insights with detailed comparable sales and high-quality visualizations.',
    icon: Clock,
    iconClass: 'bg-green-100',
    iconTextClass: 'text-green-600',
  },
];

// Example comparable sales data for the Dali example
const daliComparables = [
  { score: 70, title: "SALVADOR DALI OIL ON CANVAS..." },
  { score: 50, title: "SALVADOR DALI, OIL ON CANVAS. ATTRIBUTED..." },
  { score: 50, title: "Benjamin Benno, Untitled, Oil on Canvas, 1938..." },
  { score: 50, title: "Original In the Manner of Dali Canvas COA..." },
  { score: 50, title: "ANDRÉ COTTAVOZ (1922-2012) Nature morte noire, 197..." }
];

// Example search queries by specificity
const searchQueries = {
  verySpecific: [
    "Salvador Dali oil on canvas", 
    "Dali landscape painting", 
    "Salvador Dali village scene", 
    "Dali canvas art", 
    "Salvador Dali 1930s painting"
  ],
  specific: [
    "Salvador Dali", 
    "Dali oil painting", 
    "Salvador Dali artwork", 
    "Dali plein-air", 
    "Spanish landscape painting"
  ],
  moderate: [
    "Oil painting", 
    "Canvas art", 
    "Landscape", 
    "Spanish artist", 
    "Plein-air"
  ]
};

export default function ValuerAnalytics() {
  const [showAll, setShowAll] = useState(false);
  const visibleSteps = showAll ? analyticsSteps : analyticsSteps.slice(0, 4);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Function to check if element is in viewport
    const isElementInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    };
    
    // Function to handle scroll event
    const handleScroll = () => {
      if (sectionRef.current && videoRef.current) {
        if (isElementInViewport(sectionRef.current)) {
          if (videoRef.current.paused) {
            // Start playing when section is visible
            videoRef.current.play().catch(e => console.log("Video play failed:", e));
          }
        } else {
          // Pause when section is not visible
          if (!videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <Section className="bg-gradient-to-b from-blue-50 to-white overflow-hidden relative py-24" ref={sectionRef}>
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          playsInline
          muted
          loop
          preload="none"
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        >
          <source src="https://ik.imagekit.io/appraisily/Videos/hero1.mp4?updatedAt=1731837130060" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 z-0" />
      
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge 
            variant="accent"
            className="mb-6 py-2 px-4 inline-flex items-center justify-center gap-2"
            icon={<Database className="h-5 w-5" />}
          >
            <span className="font-semibold">3+ Million Auction Records</span>
          </Badge>
          
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
            Why Our Certified Appraisers Deliver Unmatched Value
          </h2>
          
          <p className="text-lg leading-8 text-gray-600">
            Museum-grade analysis, 24-48h turnaround, and reports accepted by top institutions
          </p>
        </div>

        {/* Analytics Process */}
        <div className="mt-16 space-y-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Market Intelligence</h3>
              <p className="text-gray-600 mb-6">
                Valuer Agent delivers comprehensive market analysis for art, antiques, and collectibles using advanced AI and sophisticated data processing technology. Our enhanced analytics service provides precise valuation insights based on real auction market data.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                <p className="font-medium text-blue-700">
                  What would take days of manual research is accomplished in minutes with our AI-powered system, delivering more accurate results.
                </p>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
              <LazyImage
                src="https://via.placeholder.com/800x400?text=Valuer+Agent+Analytics"
                alt="Valuer Agent Analytics"
                className="w-full h-full object-cover"
                width={800}
                height={400}
                placeholderColor="#f9fafb"
              />
            </div>
          </div>
          
          <div className="my-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Proprietary 7-Step Analytics Process</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {visibleSteps.map((step, index) => (
                <Card 
                  key={step.title} 
                  variant="feature" 
                  className="border-gray-200 hover:border-blue-200 transition-colors duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(`flex h-12 w-12 items-center justify-center rounded-full`, step.iconClass)}>
                      <step.icon className={cn(`h-6 w-6`, step.iconTextClass)} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="bg-white text-gray-600">
                          Step {index + 1}
                        </Badge>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {analyticsSteps.length > 4 && (
              <div className="mt-8 text-center">
                <Button
                  variant="text"
                  onClick={() => setShowAll(!showAll)}
                  endIcon={showAll ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                >
                  {showAll ? 'Show Less' : 'Show All 7 Steps'}
                </Button>
              </div>
            )}
          </div>
          
          {/* Example Output Section */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h3 className="text-xl font-bold mb-1">Valuer Agent in Action</h3>
              <p className="opacity-90">See how our system analyzed a Salvador Dali artwork</p>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Extracted Search Queries by Specificity</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="h-2 w-2 rounded-full bg-blue-600 mr-2"></div>
                        <h5 className="font-medium text-gray-900">Very Specific (5)</h5>
                      </div>
                      <ul className="pl-4 text-sm text-gray-600 space-y-1">
                        {searchQueries.verySpecific.map((query, i) => (
                          <li key={i} className="list-disc">{query}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="h-2 w-2 rounded-full bg-indigo-500 mr-2"></div>
                        <h5 className="font-medium text-gray-900">Specific (10)</h5>
                      </div>
                      <ul className="pl-4 text-sm text-gray-600 space-y-1">
                        {searchQueries.specific.map((query, i) => (
                          <li key={i} className="list-disc">{query}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                        <h5 className="font-medium text-gray-900">Moderate (5)</h5>
                      </div>
                      <ul className="pl-4 text-sm text-gray-600 space-y-1">
                        {searchQueries.moderate.map((query, i) => (
                          <li key={i} className="list-disc">{query}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Top Comparable Sales with AI Scores</h4>
                  <div className="space-y-3">
                    {daliComparables.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                      >
                        <div 
                          className={cn(
                            "h-10 w-10 rounded-full flex items-center justify-center mr-3 font-semibold text-white",
                            item.score >= 70 ? "bg-green-500" : "bg-amber-500"
                          )}
                        >
                          {item.score}
                        </div>
                        <div className="overflow-hidden">
                          <p className="truncate text-gray-800">{item.title}</p>
                          <p className="text-sm text-gray-500">Relevance Score: {item.score}/100</p>
                        </div>
                      </div>
                    ))}
                    <div className="text-center text-sm text-gray-500 mt-4">
                      From a total of 153 analyzed items
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Summary */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Why Our Analytics Process Stands Apart</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card variant="featureBlueAccent">
                <CardTitle>Real-Time Data</CardTitle>
                <CardContent className="pt-4">
                  <p className="text-gray-600">Analysis based on current auction market information, continuously updated for accuracy.</p>
                </CardContent>
              </Card>
              
              <Card variant="featureBlueAccent">
                <CardTitle>Precision Targeting</CardTitle>
                <CardContent className="pt-4">
                  <p className="text-gray-600">AI refinement ensures comparables are truly relevant to your specific item.</p>
                </CardContent>
              </Card>
              
              <Card variant="featureBlueAccent">
                <CardTitle>Transparent Methodology</CardTitle>
                <CardContent className="pt-4">
                  <p className="text-gray-600">Clear quality ratings for all market data used in your valuation.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button
              variant="highConversion"
              as="a"
              href="https://appraisily.com/start"
              size="lg"
              endIcon={<ArrowRight className="h-5 w-5" />}
              className="hover:scale-105"
            >
              Get Your AI-Powered Appraisal
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
} 