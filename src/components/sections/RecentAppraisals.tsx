import React from 'react';
import { DollarSign, ArrowRight, TrendingUp, History, User } from 'lucide-react';
import { cn } from '../../utils/cn';
import Button from '../core/Button';

// CSS to ensure text is selectable - strengthened selectors for better text selection
const selectableTextStyles = `
  .recent-appraisals-section,
  .recent-appraisals-section *,
  .recent-appraisals-section h2,
  .recent-appraisals-section p,
  .recent-appraisals-section a,
  .recent-appraisals-section span,
  .recent-appraisals-section div {
    user-select: text !important;
    -webkit-user-select: text !important;
    -moz-user-select: text !important;
    -ms-user-select: text !important;
    cursor: auto !important;
  }
  
  .recent-appraisals-section a,
  .recent-appraisals-section a * {
    cursor: pointer !important;
  }
`;

const getImageUrl = (url: string) => {
  const isMobile = window.innerWidth <= 768;
  const width = isMobile ? 400 : 800;
  const height = Math.round(width * 0.75); // Maintain aspect ratio
  const quality = 100;
  return `${url}?tr=w-${width},h-${height},q-${quality}`;
};

const cases = [
  {
    id: 1,
    image: "https://ik.imagekit.io/appraisily/WebPage/gallery1.jpg",
    title: "Surrealist Abstract by Tom Kidd",
    description: "Original hand-made surrealist abstract painting by Tom Kidd (B.1955). Renowned for his fine quality work, Kidd's piece was directly purchased from the artist and was featured as a book cover.",
    initialEstimate: "$800",
    finalValue: "$2,200",
    url: "https://www.appraisily.com/appraisals/1-9/",
    appraiser: "Andrés Gómez"
  },
  {
    id: 2,
    image: "https://ik.imagekit.io/appraisily/WebPage/gallery2.jpg",
    title: "17th Century Dutch Portrait",
    description: "Early to mid 17th-century painting attributed to Dutch Golden Age painter Frans Hals the Elder. Features a dignified individual seated with a possible string instrument, adorned in period clothing.",
    initialEstimate: "Unknown",
    finalValue: "$85,000",
    url: "https://www.appraisily.com/appraisals/1-8/",
    appraiser: "Charlotte Smith"
  },
  {
    id: 3,
    image: "https://ik.imagekit.io/appraisily/WebPage/gallery3.jpg",
    title: "Adriaen Brouwer Tavern Scene",
    description: "17th century Dutch tavern interior by Flemish master Adriaen Brouwer (c. 1605 – 1638). Known for his unique style and mastery of chiaroscuro.",
    initialEstimate: "$2,000",
    finalValue: "$6,000",
    url: "https://www.appraisily.com/appraisals/1-7/",
    appraiser: "Adrian Dupont"
  },
  {
    id: 4,
    image: "https://ik.imagekit.io/appraisily/WebPage/gallery4.jpg",
    title: "Forest Scene by Himmy",
    description: "Mid to late 20th century oil painting by German artist Himmy, depicting a serene forest path with two figures. Features tranquil earthy tones and masterful composition.",
    initialEstimate: "$300",
    finalValue: "$800",
    url: "https://www.appraisily.com/appraisals/1-6/",
    appraiser: "Elena Petrova"
  },
  {
    id: 5,
    image: "https://ik.imagekit.io/appraisily/WebPage/gallery5.jpg",
    title: "Sunrise Dancers Holbein",
    description: "Contemporary piece by Patrice Le Pera depicting traditional dancers at dawn. Women in traditional attire carry green plants through a vibrant landscape.",
    initialEstimate: "$3,500",
    finalValue: "$7,000",
    url: "https://www.appraisily.com/appraisals/1-4/",
    appraiser: "James Chen"
  },
  {
    id: 6,
    image: "https://ik.imagekit.io/appraisily/WebPage/gallery6.jpg",
    title: "Designer Life by Wiley Ross",
    description: "36×24 oil on glass painting with back light illumination by Springfield artist Wiley Ross. Modern portrait with abstract elements against vibrant red and orange background.",
    initialEstimate: "$2,500",
    finalValue: "$5,800",
    url: "https://www.appraisily.com/appraisals/1-3/",
    appraiser: "Andrés Gómez"
  }
];

export default function RecentAppraisals() {
  return (
    <>
      {/* Add style tag for text selection fix */}
      <style>{selectableTextStyles}</style>
      
      <div className="recent-appraisals-section relative bg-white py-16 sm:py-24 overflow-hidden">
        {/* Removed blue background gradient and dot pattern */}
        
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Recent Appraisals
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                See how our expert appraisers provide detailed analysis and valuation for a variety of artworks
              </p>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {cases.map((case_) => (
                <a
                  key={case_.id}
                  href={case_.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-all duration-200"
                >
                  <div className="relative flex-shrink-0 overflow-hidden">
                    <img
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src={getImageUrl(case_.image)}
                      alt={case_.title}
                      loading="lazy"
                      width={window.innerWidth <= 768 ? "400" : "800"}
                      height={window.innerWidth <= 768 ? "300" : "600"}
                    />
                  </div>
                  
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-3">
                      <div className="flex items-center gap-1.5">
                        <History className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700 text-sm sm:text-base">Initial: <span className="font-medium">{case_.initialEstimate}</span></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="h-4 w-4 text-gray-800" />
                        <span className="text-gray-900 font-semibold text-sm sm:text-base">Final: <span className="text-gray-800">{case_.finalValue}</span></span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                          {case_.title}
                        </h3>
                        <ArrowRight className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="mt-2 flex items-center">
                        <User className="h-4 w-4 text-gray-600 mr-1.5" />
                        <span className="text-sm sm:text-base font-medium text-gray-700">
                          Appraiser: <span className="text-gray-900">{case_.appraiser}</span>
                        </span>
                      </div>
                      <p className="mt-3 text-sm sm:text-base text-gray-600 line-clamp-3">{case_.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <Button 
                as="a"
                href="https://appraisily.com/start"
                className="bg-black hover:bg-gray-800 text-white px-6 py-3.5 text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center font-semibold"
              >
                Get Your Artwork Appraised
                <DollarSign className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}