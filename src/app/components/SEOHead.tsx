import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  schema?: object | object[];
  preloadImages?: string[];
}

export function SEOHead({ 
  title, 
  description, 
  canonical, 
  keywords,
  ogImage = '/og-image.jpg',
  schema,
  preloadImages = []
}: SEOHeadProps) {
  const fullTitle = title.includes('Emerald City Limos') ? title : `${title} | Emerald City Limos`;
  const siteUrl = 'https://emeraldcitylimos.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Critical Performance Optimizations */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* DNS Prefetch for external origins - REMOVED self-preconnect (useless) */}
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Preload hero image - Cadillac Escalade WebP for mobile */}
      <link
        rel="preload"
        as="image"
        href="https://images.unsplash.com/photo-1768024175218-5878b8880eab?w=480&h=320&fit=crop&q=70&fm=webp"
        type="image/webp"
        // @ts-ignore - fetchpriority is valid
        fetchpriority="high"
        media="(max-width: 768px)"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.unsplash.com/photo-1768024175218-5878b8880eab?w=1920&h=1080&fit=crop&q=85&fm=webp"
        type="image/webp"
        // @ts-ignore - fetchpriority is valid
        fetchpriority="high"
        media="(min-width: 769px)"
      />
      
      {/* Comprehensive Critical CSS - Inlined for FCP/LCP optimization */}
      <style>{`
        *,*::before,*::after{box-sizing:border-box;border:0 solid #e5e7eb}
        html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}
        body{margin:0;line-height:inherit;background-color:#fff;color:#111827}
        img,video{max-width:100%;height:auto;display:block;image-rendering:-webkit-optimize-contrast}
        a{color:inherit;text-decoration:inherit}
        h1,h2,h3,p{margin:0}
        
        .relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}
        .inset-0{inset:0}.z-50{z-index:50}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}
        .flex{display:flex}.hidden{display:none}.grid{display:grid}.block{display:block}.inline-flex{display:inline-flex}
        .w-full{width:100%}.h-full{height:100%}.max-w-7xl{max-width:80rem}.max-w-4xl{max-width:56rem}
        .mx-auto{margin-left:auto;margin-right:auto}.min-h-screen{min-height:100vh}
        .items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}
        .gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-8{gap:2rem}
        .space-x-2>:not([hidden])~:not([hidden]){margin-left:.5rem}
        .space-x-4>:not([hidden])~:not([hidden]){margin-left:1rem}
        .space-x-8>:not([hidden])~:not([hidden]){margin-left:2rem}
        
        .p-4{padding:1rem}.p-6{padding:1.5rem}.px-4{padding-left:1rem;padding-right:1rem}
        .px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}
        .px-12{padding-left:3rem;padding-right:3rem}
        .py-2{padding-top:.5rem;padding-bottom:.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}
        .py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-16{padding-top:4rem;padding-bottom:4rem}
        .py-20{padding-top:5rem;padding-bottom:5rem}
        .mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.mt-4{margin-top:1rem}
        
        .text-sm{font-size:.875rem;line-height:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}
        .text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}
        .text-2xl{font-size:1.5rem;line-height:2rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}
        .text-5xl{font-size:3rem;line-height:1}.text-6xl{font-size:3.75rem;line-height:1}
        .font-bold{font-weight:700}.font-semibold{font-weight:600}.font-medium{font-weight:500}
        .text-white{color:#fff}.text-black{color:#000}.text-gray-200{color:#e5e7eb}
        .text-gray-300{color:#d1d5db}.text-gray-600{color:#4b5563}.text-gray-700{color:#374151}
        .text-gray-900{color:#111827}.text-emerald-700{color:#047857}.text-emerald-800{color:#065f46}
        .text-center{text-align:center}
        
        .bg-black{background-color:#000}.bg-white{background-color:#fff}.bg-gray-50{background-color:#f9fafb}
        .bg-\[\\#d4af37\]{background-color:#d4af37}.bg-emerald-100{background-color:#d1fae5}
        .bg-black\\/60{background-color:rgb(0 0 0/.6)}.bg-black\\/80{background-color:rgb(0 0 0/.8)}
        
        .rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.rounded-full{border-radius:9999px}
        .border{border-width:1px}.border-2{border-width:2px}.border-gray-200{border-color:#e5e7eb}
        
        .object-cover{object-fit:cover}.object-center{object-position:center}
        .overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}
        
        .shadow-2xl{box-shadow:0 25px 50px -12px rgb(0 0 0/.25)}
        .shadow-3xl{box-shadow:0 35px 60px -15px rgb(0 0 0/.3)}
        
        .hover\\:scale-105:hover{transform:scale(1.05)}
        
        /* CRITICAL: Optimize transitions for PageSpeed */
        *{transition-property:none;transition-duration:0s}
        .transition-all{transition-property:background-color,color,opacity,transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms}
        .transition-colors{transition-property:color,background-color;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms}
        
        /* Hero section optimized */
        .h-\\[600px\\]{height:600px}
        .bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}
        .from-emerald-950\\/80{--tw-gradient-from:rgb(2 44 34/.8);--tw-gradient-to:rgb(2 44 34/0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
        .via-emerald-900\\/60{--tw-gradient-to:rgb(6 78 59/0);--tw-gradient-stops:var(--tw-gradient-from),rgb(6 78 59/.6),var(--tw-gradient-to)}
        .to-transparent{--tw-gradient-to:transparent}
        
        .bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}
        .from-emerald-50{--tw-gradient-from:#ecfdf5;--tw-gradient-to:rgb(236 253 245/0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
        .to-yellow-50{--tw-gradient-to:#fefce8}
        
        /* Navigation */
        .sticky{position:sticky}.top-0{top:0}
        .bg-gradient-to-r.from-emerald-900{--tw-gradient-from:#064e3b;--tw-gradient-to:rgb(6 78 59/0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
        .to-emerald-800{--tw-gradient-to:#065f46}
        
        /* Responsive */
        @media(min-width:768px){
          .md\\:flex{display:flex}.md\\:hidden{display:none}
          .md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
          .md\\:text-2xl{font-size:1.5rem;line-height:2rem}
          .md\\:text-5xl{font-size:3rem;line-height:1}
          .md\\:text-6xl{font-size:3.75rem;line-height:1}
        }
        @media(min-width:1024px){
          .lg\\:flex{display:flex}.lg\\:hidden{display:none}
          .lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
          .lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}
          .lg\\:px-8{padding-left:2rem;padding-right:2rem}
        }
      `}</style>
      
      {/* Preload critical images with high priority - AVIF/WebP support */}
      {preloadImages.map((imageUrl, index) => (
        <link
          key={index}
          rel="preload"
          as="image"
          href={imageUrl}
          // @ts-ignore - fetchpriority is valid
          fetchpriority="high"
          type="image/png"
        />
      ))}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* AI / LLM Discovery Meta Tags */}
      {/* Helps AI assistants find and reference our business accurately */}
      <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Information" />
      <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="LLM Detailed Information" />
      <link rel="alternate" type="application/json" href="/.well-known/ai-plugin.json" title="AI Plugin Manifest" />
      
      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
}

// Reusable schema templates
export const LocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LimousineBusiness',
  '@id': 'https://emeraldcitylimos.com/#organization',
  name: 'Emerald City Limos',
  alternateName: ['Emerald City Limousine', 'Emerald City Limos Seattle', 'ECL'],
  description: 'Seattle\'s premier luxury limousine service since 2010. Professional chauffeur-driven transportation for airport transfers, weddings, corporate events, and special occasions across the Greater Puget Sound region.',
  url: 'https://emeraldcitylimos.com',
  logo: 'https://emeraldcitylimos.com/logo.png',
  image: 'https://emeraldcitylimos.com/og-image.jpg',
  telephone: '+12065959675',
  email: 'client@emeraldcitylimos.com',
  foundingDate: '2010',
  priceRange: '$$$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Debit Card, Invoice',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Seattle',
    addressRegion: 'WA',
    postalCode: '98101',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.6062,
    longitude: -122.3321
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59'
  },
  areaServed: [
    { '@type': 'State', name: 'Washington', containedInPlace: { '@type': 'Country', name: 'United States' } },
    { '@type': 'City', name: 'Seattle' },
    { '@type': 'City', name: 'Bellevue' },
    { '@type': 'City', name: 'Tacoma' },
    { '@type': 'City', name: 'Everett' },
    { '@type': 'City', name: 'Kirkland' },
    { '@type': 'City', name: 'Redmond' },
    { '@type': 'City', name: 'Renton' },
    { '@type': 'City', name: 'Olympia' },
    { '@type': 'City', name: 'Bremerton' },
    { '@type': 'City', name: 'Bainbridge Island' }
  ],
  sameAs: [
    'https://www.facebook.com/emeraldcitylimos',
    'https://www.instagram.com/emeraldcitylimos',
    'https://www.youtube.com/emeraldcitylimos'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Limousine Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Airport Transfer - Sea-Tac to Downtown Seattle',
          description: 'Luxury sedan airport transfer with flight tracking and 45-minute free wait time'
        },
        price: '85.00',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '85.00',
          priceCurrency: 'USD',
          unitText: 'per trip'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hourly Charter',
          description: 'Flexible hourly limousine charter for tours, events, and custom itineraries'
        },
        price: '85.00',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '85.00',
          priceCurrency: 'USD',
          unitText: 'per hour'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wedding Transportation',
          description: 'Elegant wedding limousine service with stretch limos, luxury SUVs, and party buses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Corporate Executive Transportation',
          description: 'Professional chauffeur-driven executive car service for business travel'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '347',
    bestRating: '5',
    worstRating: '1'
  },
  potentialAction: [
    {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://emeraldcitylimos.com/book-now',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform'
        ]
      },
      result: {
        '@type': 'Reservation',
        name: 'Limousine Reservation'
      }
    },
    {
      '@type': 'CommunicateAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'tel:+12065959675'
      }
    }
  ]
};

export function createServiceSchema(serviceName: string, description: string, areaServed: string = 'Seattle') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'LimousineBusiness',
      name: 'Emerald City Limos',
      telephone: '+12065959675'
    },
    areaServed: {
      '@type': 'City',
      name: areaServed
    },
    description: description
  };
}

export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://emeraldcitylimos.com${item.url}`
    }))
  };
}