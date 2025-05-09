import React, { useState } from 'react';
import { FileText, X, ArrowRight, Star, MessageCircle } from 'lucide-react';
import { Container, Section } from '../core/Container';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../core/Card';
import Button from '../core/Button';
import Badge from '../core/Badge';

interface PDFViewerProps {
  onClose: () => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ onClose }) => (
  <div className="fixed inset-0 z-50 bg-black/75 p-4 flex items-center justify-center animate-fade-in">
    <div className="relative w-full h-[90vh] max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl">
      <Button
        variant="secondary"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 p-3 rounded-full"
        aria-label="Close PDF viewer"
      >
        <X className="h-6 w-6" />
      </Button>
      <iframe
        src="https://drive.google.com/file/d/1n-JCAEZJaZDOzQ3mF4GRPmatRKrUsoUn/preview"
        className="w-full h-full"
        allow="autoplay"
      />
    </div>
  </div>
);

interface AskExpertModalProps {
  onClose: () => void;
  appraiser: string;
}

const AskExpertModal: React.FC<AskExpertModalProps> = ({ onClose, appraiser }) => (
  <div className="fixed inset-0 z-50 bg-black/75 p-4 flex items-center justify-center animate-fade-in">
    <Card className="relative w-full max-w-md">
      <CardHeader>
        <CardTitle>Ask {appraiser} About This Case</CardTitle>
          <button 
            onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-6">
          Interested in how {appraiser} handled this appraisal case? Send your question and they'll get back to you with insights.
        </p>
        
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 text-gray-900 p-2 border"
              placeholder="Your name" 
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 text-gray-900 p-2 border"
              placeholder="Your email" 
            />
          </div>
          
          <div>
            <label htmlFor="question" className="block text-sm font-medium text-gray-700">Your Question</label>
            <textarea 
              id="question" 
              rows={3} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 text-gray-900 p-2 border"
              placeholder={`What would you like to ask ${appraiser} about this case?`} 
            />
          </div>
          
          <Button
            type="submit"
            variant="primary"
            fullWidth
          >
            Send Question
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
);

export default function SuccessStories() {
  const [showPDF, setShowPDF] = useState(false);
  const [showAskModal, setShowAskModal] = useState(false);
  const appraiserName = "Andrés Gómez";

  return (
    <Section className="bg-white">
      {/* Removed dot pattern background */}
      
      <Container>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            {/* Content Column */}
            <div>
              <div className="relative">
              <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-gray-200/20 to-gray-100/20 blur-lg rounded-3xl" />
                <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                    Success Stories: Real Cases, Real Experts
                  </h2>
                  
                  {/* Featured Success Story */}
                <Card className="hover:shadow-lg transition-all duration-200">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-gray-600">Verified Review</span>
                      </div>
                      <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-200">
                        Appraiser: {appraiserName}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Tinus de Jongh Painting Discovery
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      Among Mark's cherished heirlooms was a striking original painting. With {appraiserName}'s expert analysis, the artist was identified as 'Tinus de Jongh (Dutch, 1885–1942)', and the artwork was appraised between $1,500 and $2,000. Ultimately, it was sold for $1,800.
                    </p>
                    
                    <blockquote className="mt-6 border-l-4 border-gray-800 pl-4 italic text-gray-600">
                      "Thanks to this incredible service. I had no idea the painting held such value. The $20 online art appraisal report was an absolute bargain, and I'll definitely use Appraisily again."
                    </blockquote>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">- Mark S.</p>
                      <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-200">Verified Purchase</Badge>
                    </div>
                    
                    <Button
                      variant="link"
                      onClick={() => setShowAskModal(true)}
                      startIcon={<MessageCircle className="h-5 w-5" />}
                      className="text-gray-600 hover:text-gray-800 hover:underline mt-6 text-sm"
                    >
                      Ask {appraiserName} How They Did It →
                    </Button>
                    
                    <Button
                      variant="link"
                      onClick={() => setShowPDF(true)}
                      startIcon={<FileText className="h-5 w-5" />}
                      endIcon={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
                      className="text-gray-600 hover:text-gray-800 hover:underline mt-4 text-sm group"
                    >
                      See what's included in our detailed reports
                    </Button>
                  </CardContent>
                </Card>
                </div>
              </div>
            </div>
            
            {/* Report Column */}
            <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200/20 to-gray-100/20 rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white p-4 shadow-lg ring-1 ring-gray-200">
                <img
                  src="https://ik.imagekit.io/appraisily/WebPage/report.jpg?updatedAt=1731365708557"
                  alt="Sample appraisal report preview"
                  className="h-full w-full object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-2xl" />
                <div className="absolute bottom-8 left-8 right-8">
                <p className="text-lg font-medium text-white mb-4">
                    Example of a professional appraisal report from our certified experts
                  </p>
                <Button
                  variant="secondary"
                    onClick={() => setShowPDF(true)}
                  className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 group"
                  startIcon={<FileText className="h-4 w-4" />}
                  endIcon={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                  >
                    View Sample Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* PDF Viewer Modal */}
      {showPDF && <PDFViewer onClose={() => setShowPDF(false)} />}
      
      {/* Ask Expert Modal */}
      {showAskModal && <AskExpertModal onClose={() => setShowAskModal(false)} appraiser={appraiserName} />}
    </Section>
  );
}