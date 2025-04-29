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
    description: 'Our system automatically extracts the most effective search terms used by major auction houses, generating 25+ specialized queries in seconds.',
    icon: Search,
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
  },
  {
    title: 'Progressive Market Data Gathering',
    description: 'Our algorithm navigates auction databases through a multi-tiered approach, processing millions of records in minutes what would take days manually.',
    icon: Database,
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
  },
  {
    title: 'Advanced Relevance Assessment',
    description: 'Each potential comparable item undergoes sophisticated evaluation, accurately identifying idioms and artistic styles for true relevance to your piece.',
    icon: Brain,
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
  },
  {
    title: 'Statistical Market Analysis',
    description: 'We process comprehensive market data using sophisticated statistical methods to calculate price distributions and position your item accurately.',
    icon: BarChart3,
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
  },
  {
    title: 'Historical Trend Analysis',
    description: 'Unique to our Valuer Agent, we perform temporal market analysis to identify price movements and calculate market changes over time.',
    icon: LineChart,
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
  },
  {
    title: 'Investment Metric Calculation',
    description: 'Our system generates specialized metrics like Historical Significance Score and Investment Potential Rating that provide actionable investment insights.',
    icon: Sparkles,
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
  },
  {
    title: 'Comprehensive Reporting',
    description: 'The final analytics package delivers clear, actionable insights with detailed comparable sales and high-quality visualizations in 24-48 hours, not weeks.',
    icon: Clock,
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
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
    const isElementInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    };
    
    const handleScroll = () => {
      if (sectionRef.current && videoRef.current) {
        if (isElementInViewport(sectionRef.current)) {
          if (videoRef.current.paused) {
            videoRef.current.play().catch(e => console.log("Video play failed:", e));
          }
        } else {
          if (!videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <Section 
      className="bg-white relative py-24 overflow-hidden" 
      ref={sectionRef}
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover opacity-10"
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
      
      {/* Background Pattern Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 z-0" />
      
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge 
            variant="outline"
            className="mb-6 py-2 px-4 inline-flex items-center justify-center gap-2 bg-white"
            icon={<Database className="h-5 w-5" />}
          >
            <span className="font-semibold">3+ Million Auction Records</span>
          </Badge>
          
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Valuation Algorithm</h3>
              <p className="text-gray-600 mb-6">
                Valuer Agent delivers comprehensive market analysis for art, antiques, and collectibles using our proprietary valuation algorithm and sophisticated data processing technology. Our enhanced analytics service provides precise valuation insights based on real auction market data.
              </p>
              <div className="bg-gray-100 rounded-lg p-4 border-l-4 border-gray-900">
                <p className="font-medium text-gray-700">
                  Our system accomplishes in minutes what would take days of manual research, saving you valuable time while delivering more accurate, comprehensive results.
                </p>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-md border border-gray-200">
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
                  className="border-gray-200 hover:border-gray-300 transition-colors duration-200"
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
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="p-6 bg-gray-900 text-white">
              <h3 className="text-xl font-bold mb-1">Valuer Agent in Action</h3>
              <p className="opacity-90">See how our algorithm analyzed a Salvador Dali artwork</p>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Extracted Search Queries by Specificity</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="h-2 w-2 rounded-full bg-gray-900 mr-2"></div>
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
                        <div className="h-2 w-2 rounded-full bg-gray-700 mr-2"></div>
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
                        <div className="h-2 w-2 rounded-full bg-gray-500 mr-2"></div>
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
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Top Comparable Sales with Relevance Scores</h4>
                  <div className="space-y-3">
                    {daliComparables.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                      >
                        <div 
                          className={cn(
                            "h-10 w-10 rounded-full flex items-center justify-center mr-3 font-semibold text-white",
                            item.score >= 70 ? "bg-gray-900" : "bg-gray-600"
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
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Customer Benefits Our Process Delivers</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card variant="feature" className="border-gray-200">
                <CardTitle>Time Efficiency</CardTitle>
                <CardContent className="pt-4">
                  <p className="text-gray-600">Our algorithm performs millions of searches in minutes, saving you days of research time while providing more comprehensive results.</p>
                </CardContent>
              </Card>
              
              <Card variant="feature" className="border-gray-200">
                <CardTitle>Accurate Identification</CardTitle>
                <CardContent className="pt-4">
                  <p className="text-gray-600">Advanced pattern recognition ensures your item's style, period, and artistic idioms are correctly identified for accurate valuation.</p>
                </CardContent>
              </Card>
              
              <Card variant="feature" className="border-gray-200">
                <CardTitle>Institutional Acceptance</CardTitle>
                <CardContent className="pt-4">
                  <p className="text-gray-600">Our reports are accepted by major institutions, insurance companies, and auction houses due to their thoroughness and accuracy.</p>
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
              Get Your Expert Appraisal
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
} 