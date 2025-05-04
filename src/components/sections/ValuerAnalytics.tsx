import React, { useState, useRef, useEffect } from 'react';
import { Container, Section } from '../core/Container';
import { Card, CardTitle, CardContent } from '../core/Card';
import Badge from '../core/Badge';
import Button from '../core/Button';
import LazyImage from '../core/media/LazyImage';
import { 
  Search, Database, Brain, BarChart3, Clock, Sparkles, 
  LineChart, ArrowRight, ChevronDown, ChevronUp, FileSearch, 
  BadgeCheck, TrendingUp, Coffee, FileText, Globe, Award,
  CheckCircle, ChevronRight, AlertCircle, ChevronsDown, ChevronsUp
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

// Four-step process explanation
const howItWorksSteps = [
  {
    title: 'We Turn Your Photos Into Smart Search Terms',
    description: 'Our system reads your description and auto-builds 25+ laser-targeted keywords.',
    icon: Search,
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
  },
  {
    title: 'We Scan the Global Market—Top-Down',
    description: 'From exact matches to broader look-alikes, every relevant sale is captured.',
    icon: Globe,
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
  },
  {
    title: 'We Hand-Pick the Best Comparables',
    description: 'AI ranks each result for closeness to your piece; only the strongest make the cut.',
    icon: Award,
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
  },
  {
    title: 'You Receive a Crystal-Clear Price Window',
    description: 'See where your artwork lands on today's market curve—complete with confidence scores.',
    icon: FileText,
    iconClass: 'bg-gray-100',
    iconTextClass: 'text-gray-700',
  },
];

// Value snapshots data
const valueSnapshots = [
  {
    title: '3 M+',
    subtitle: 'Records Searched Every Time',
    description: 'We sift through global auction houses so you don't have to.',
    icon: Database,
  },
  {
    title: '153',
    subtitle: 'Closest Comparables Found in <60 sec',
    description: 'No guesswork—just hard evidence.',
    icon: Clock,
  },
  {
    title: '98 %',
    subtitle: 'Report Acceptance Rate',
    description: 'Insurers, courts, and the IRS take our data at face value.',
    icon: BadgeCheck,
  },
];

// Why this matters benefits
const keyBenefits = [
  'Save Days of Manual Research',
  'Know the Real-World Sale Price Before You List or Insure',
  'Feel Secure—Data Accepted by All Major Institutions',
  'Make Faster, Better-Informed Decisions',
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
  const [showDaliDetails, setShowDaliDetails] = useState(false);
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
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white" 
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
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-5 z-0" />
      
      <Container className="relative z-10">
        {/* Main headline and subheadline */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Millions of Auction Results—Analyzed for You in Minutes
          </h2>
          
          <p className="text-xl leading-8 text-gray-300 font-medium">
            Skip the endless research. Our Valuer Agent™ pinpoints market-true prices while you finish your coffee.
          </p>
        </div>

        {/* 3-Column Value Snapshot */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {valueSnapshots.map((snapshot, index) => (
            <Card 
              key={index} 
              variant="feature" 
              className="border-gray-700 bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-800 transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700">
                  <snapshot.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <h3 className="text-2xl font-bold text-white">{snapshot.title}</h3>
                    <p className="text-sm text-gray-400">{snapshot.subtitle}</p>
                  </div>
                  <p className="mt-2 text-gray-300">{snapshot.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-white mb-10">How It Works</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step, index) => (
              <Card 
                key={step.title} 
                variant="feature" 
                className="border-gray-700 bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-800 transition-colors duration-200"
              >
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white font-bold">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              as="a"
              href="#dali-case-study"
              className="border-gray-600 text-white hover:bg-gray-700 inline-flex items-center gap-2"
            >
              See a Sample Analysis
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Dalí Case Study */}
        <div id="dali-case-study" className="mb-20">
          <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white mb-2">Example: Salvador Dalí Landscape</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">15 hyper-specific search phrases generated in seconds</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">153 sales reviewed; top item matched at 70 / 100 relevance</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">Final valuation delivered: $2,200 (vs. owner's $800 expectation)</p>
                </div>
              </div>
              
              <button 
                onClick={() => setShowDaliDetails(!showDaliDetails)}
                className="mt-4 text-blue-300 hover:text-blue-200 flex items-center gap-1 text-sm font-medium"
              >
                {showDaliDetails ? "Hide full data set" : "Expand to view the full data set"}
                {showDaliDetails ? <ChevronsUp className="h-4 w-4" /> : <ChevronsDown className="h-4 w-4" />}
              </button>
            </div>
            
            {showDaliDetails && (
              <div className="p-6 bg-gray-800/70 border-t border-gray-700">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Extracted Search Queries by Specificity</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <div className="h-2 w-2 rounded-full bg-blue-400 mr-2"></div>
                          <h5 className="font-medium text-white">Very Specific (5)</h5>
                        </div>
                        <ul className="pl-4 text-sm text-gray-300 space-y-1">
                          {searchQueries.verySpecific.map((query, i) => (
                            <li key={i} className="list-disc">{query}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <div className="h-2 w-2 rounded-full bg-blue-300 mr-2"></div>
                          <h5 className="font-medium text-white">Specific (10)</h5>
                        </div>
                        <ul className="pl-4 text-sm text-gray-300 space-y-1">
                          {searchQueries.specific.map((query, i) => (
                            <li key={i} className="list-disc">{query}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <div className="h-2 w-2 rounded-full bg-blue-200 mr-2"></div>
                          <h5 className="font-medium text-white">Moderate (5)</h5>
                        </div>
                        <ul className="pl-4 text-sm text-gray-300 space-y-1">
                          {searchQueries.moderate.map((query, i) => (
                            <li key={i} className="list-disc">{query}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Top Comparable Sales with Relevance Scores</h4>
                    <div className="space-y-3">
                      {daliComparables.map((item, i) => (
                        <div 
                          key={i} 
                          className="flex items-center p-3 rounded-lg border border-gray-700 bg-gray-800/80 hover:bg-gray-700 transition-colors"
                        >
                          <div 
                            className={cn(
                              "h-10 w-10 rounded-full flex items-center justify-center mr-3 font-semibold text-white",
                              item.score >= 70 ? "bg-blue-600" : "bg-blue-900"
                            )}
                          >
                            {item.score}
                          </div>
                          <div className="overflow-hidden">
                            <p className="truncate text-white">{item.title}</p>
                            <p className="text-sm text-gray-400">Relevance Score: {item.score}/100</p>
                          </div>
                        </div>
                      ))}
                      <div className="text-center text-sm text-gray-400 mt-4">
                        From a total of 153 analyzed items
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Why This Matters For You */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Why This Matters For You</h3>
          
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {keyBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="text-lg text-white">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button
              variant="primary"
              as="a"
              href="https://appraisily.com/start"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 font-semibold text-lg"
            >
              Start My Appraisal—Takes 5 Min
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
} 