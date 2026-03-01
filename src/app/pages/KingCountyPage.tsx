import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Star, Shield, Phone, Mail } from 'lucide-react';
import { SEOHead } from '@/app/components/SEOHead';
import { Helmet } from 'react-helmet-async';

export function KingCountyPage() {
  const cities = [
    {
      name: 'Seattle',
      slug: 'seattle',
      icon: '🏙️',
      description: 'Downtown, Capitol Hill, Ballard, Fremont, Queen Anne, Georgetown + 45 more neighborhoods',
    },
    {
      name: 'Bellevue',
      slug: 'bellevue',
      icon: '🌆',
      description: 'Downtown Bellevue, Crossroads, Factoria, Eastgate, Somerset, Newport + more',
    },
    {
      name: 'Kirkland',
      slug: 'kirkland',
      icon: '⛵',
      description: 'Downtown Kirkland, Juanita, Totem Lake, Finn Hill, Houghton, Kingsgate',
    },
    {
      name: 'Redmond',
      slug: 'redmond',
      icon: '💻',
      description: 'Downtown Redmond, Overlake, Education Hill, Idylwood, SE Redmond, Bear Creek',
    },
    {
      name: 'Renton',
      slug: 'renton',
      icon: '✈️',
      description: 'Downtown Renton, The Landing, Highlands, Kennydale, Benson Hill, Fairwood',
    },
    {
      name: 'Kent',
      slug: 'kent',
      icon: '🏭',
      description: 'Downtown Kent, East Hill, West Hill, Kent Station, Meridian, Panther Lake',
    },
    {
      name: 'Auburn',
      slug: 'auburn',
      icon: '🎰',
      description: 'Downtown Auburn, Lea Hill, Lakeland Hills, West Auburn, Muckleshoot Casino area',
    },
    {
      name: 'Federal Way',
      slug: 'federal-way',
      icon: '🌊',
      description: 'Federal Way Commons, Twin Lakes, Steel Lake, Celebration Park, Redondo Beach',
    },
    {
      name: 'Issaquah',
      slug: 'issaquah',
      icon: '⛰️',
      description: 'Historic Issaquah, Issaquah Highlands, Gilman Village, Talus, Providence Point',
    },
    {
      name: 'Sammamish',
      slug: 'sammamish',
      icon: '🏡',
      description: 'Beaver Lake, Pine Lake, Klahanie, Sahalee, Inglewood, Town Center',
    },
    {
      name: 'Woodinville',
      slug: 'woodinville',
      icon: '🍷',
      description: 'Wine Country, Warehouse District, Hollywood Hill, Cottage Lake, Bear Creek',
    },
    {
      name: 'Mercer Island',
      slug: 'mercer-island',
      icon: '🏝️',
      description: 'Town Center, North End, South End, First Hill, Mercerdale, Island Crest',
    },
    {
      name: 'SeaTac',
      slug: 'seatac',
      icon: '🛫',
      description: 'Sea-Tac Airport, Angle Lake, McMicken Heights, Bow Lake, Airport hotels',
    },
    {
      name: 'Tukwila',
      slug: 'tukwila',
      icon: '🛍️',
      description: 'Westfield Southcenter, Tukwila International Blvd, Foster, Riverton Heights',
    },
    {
      name: 'Burien',
      slug: 'burien',
      icon: '🌳',
      description: 'Downtown Burien, Boulevard Park, White Center, Seahurst, Gregory Heights',
    },
    {
      name: 'Shoreline',
      slug: 'shoreline',
      icon: '🌊',
      description: 'Richmond Beach, Ridgecrest, Echo Lake, Meridian Park, Ballinger, Briarcrest',
    },
    {
      name: 'Maple Valley',
      slug: 'maple-valley',
      icon: '🍁',
      description: 'Maple Valley Town Center, Lake Wilderness, Summit, Ravensdale, Black Diamond',
    },
    {
      name: 'Covington',
      slug: 'covington',
      icon: '🏘️',
      description: 'Covington Town Center, Jenkins Creek, Timberlane, Wilderness Village',
    },
  ];

  const popularRoutes = [
    {
      icon: '✈️',
      title: 'Sea-Tac Airport ↔ Downtown Seattle',
      distance: '14 miles · 20-35 min · Via I-5 or SR 99',
      description: 'The most popular limo to Seattle airport route. Our chauffeurs monitor your flight in real-time. Pickups at the 3rd floor arrivals island, all terminals covered. Skip the rideshare chaos — step into a waiting black car.',
      price: 'From $85',
    },
    {
      icon: '🌆',
      title: 'Sea-Tac Airport ↔ Bellevue',
      distance: '18 miles · 25-45 min · Via I-405',
      description: 'Direct Seattle airport limo service to Bellevue hotels and corporate offices. Ideal for Microsoft, Meta, and T-Mobile executives. We know every Eastside route to avoid the I-405 backups.',
      price: 'From $95',
    },
    {
      icon: '🚢',
      title: 'Seattle Cruise Terminals ↔ King County',
      distance: 'Pier 91 & Smith Cove · Variable distances',
      description: 'Seamless cruise terminal transfers from anywhere in King County. We handle luggage and get you to the terminal ahead of embarkation. This Seattle limo service is built for cruise travelers.',
      price: 'From $75',
    },
    {
      icon: '🏟️',
      title: 'King County ↔ Stadium District',
      distance: 'Lumen Field · T-Mobile Park · Climate Pledge Arena',
      description: 'Game day limo Seattle service from any King County city. Drop-off right at the venue, pickup when the game ends. No parking hassles, no DUI risks. Seahawks, Mariners, Sounders, Kraken — we cover every event.',
      price: 'From $95',
    },
    {
      icon: '🍷',
      title: 'Woodinville Wine Country Tours',
      distance: '100+ wineries · 4-8 hour charters',
      description: 'Our signature Seattle limo tour takes you through Woodinville\'s world-class wineries. Chateau Ste. Michelle, Columbia Winery, DeLille Cellars — we plan the route, you enjoy the wine. All-inclusive hourly charters.',
      price: 'From $85/hr',
    },
    {
      icon: '💼',
      title: 'Seattle ↔ Eastside Corporate Shuttle',
      distance: 'Bellevue · Redmond · Kirkland · 20-40 min',
      description: 'Daily Seattle executive limo service between downtown Seattle hotels and Eastside offices. Microsoft, Nintendo, Google, Meta — our corporate clients trust us with their most important meetings. Flat rate, no meter anxiety.',
      price: 'From $95',
    },
  ];

  const whyChooseUs = [
    {
      icon: '🕐',
      title: '24/7 Availability',
      description: 'Red-eye flights, late-night events, early morning meetings — our Seattle limo service runs around the clock, 365 days a year.',
    },
    {
      icon: '📱',
      title: 'Real-Time Flight Tracking',
      description: 'For every limo from Seattle airport pickup, we track your flight live. Delayed? We adjust automatically. No waiting charges for flight delays.',
    },
    {
      icon: '💰',
      title: 'Flat Rate Pricing',
      description: 'No surge pricing, no hidden fees. Our limo service Seattle WA quotes include everything — tolls, fuel, gratuity guidance upfront.',
    },
    {
      icon: '🚗',
      title: 'Luxury Fleet',
      description: 'Cadillac Escalade, Lincoln Navigator, Mercedes-Benz Sprinter, Stretch Limousines — choose the vehicle that fits your occasion and group size.',
    },
    {
      icon: '⭐',
      title: '5-Star Rated',
      description: 'Consistently rated the best limo service in Seattle by hundreds of verified clients. Read our Seattle limo service reviews online.',
    },
    {
      icon: '👶',
      title: 'Child Safety Seats',
      description: 'Traveling with little ones? We provide pre-installed infant car seats and booster seats on request. The only Seattle limousine service that thinks of everything.',
    },
  ];

  const faqs = [
    {
      question: 'How much does a limo from Sea-Tac Airport to downtown Seattle cost?',
      answer: 'Our flat-rate limo service from Sea-Tac Airport to downtown Seattle starts at $85 for a luxury sedan. Prices vary by vehicle type — an SUV starts at $110 and a stretch limousine at $175. All rates include flight monitoring, 45 minutes of free waiting time, and meet-and-greet service. No surge pricing, no hidden fees.',
    },
    {
      question: 'What areas in King County do you serve?',
      answer: 'We provide limo service to every city and neighborhood in King County including Seattle, Bellevue, Kirkland, Redmond, Renton, Kent, Auburn, Federal Way, Issaquah, Sammamish, Woodinville, Mercer Island, SeaTac, Tukwila, Burien, Shoreline, Maple Valley, Covington, and all unincorporated King County areas. Anywhere in King County — we\'ll be there.',
    },
    {
      question: 'Can I book a limo for a Woodinville wine tour?',
      answer: 'Yes! Our Woodinville wine country limo tours are one of our most popular services. We offer 4-8 hour charters starting at $85/hour with a knowledgeable chauffeur. Chateau Ste. Michelle, Columbia Winery, DeLille Cellars, Novelty Hill — we plan the route, you enjoy the wine.',
    },
    {
      question: 'Do you provide limo service for Seahawks and Mariners games?',
      answer: 'Absolutely. Our game day limo Seattle service covers pickups from anywhere in King County to Lumen Field, T-Mobile Park, and Climate Pledge Arena. Drop-off near the entrance, pickup when it\'s over. No parking hassles, no DUI risk, and your chauffeur tracks the game so they\'re ready when you walk out.',
    },
    {
      question: 'What is the best limo service in Seattle?',
      answer: 'Emerald City Limos is consistently rated the best limo service in Seattle based on Google reviews and customer satisfaction. Since 2010, we\'ve served thousands of clients with our luxury fleet and professionally trained chauffeurs. Check our Seattle limo service reviews online — our track record speaks for itself.',
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LimousineBroker",
    "name": "Emerald City Limos - King County",
    "description": "Premium limo service in King County, Washington covering Seattle, Bellevue, Kirkland, Redmond, and all surrounding cities.",
    "url": "https://emeraldcitylimos.com/locations/king-county/",
    "telephone": "+12065959675",
    "email": "client@emeraldcitylimos.com",
    "areaServed": cities.map(city => ({
      "@type": "City",
      "name": city.name
    })),
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "postalCode": "98101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.6062,
      "longitude": -122.3321
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Limo Service King County WA | Seattle Limousine Service | Emerald City Limos</title>
        <meta
          name="description"
          content="Premium limo service across King County, Washington. Seattle limousine transportation covering Bellevue, Kirkland, Redmond, Renton, and all King County cities. Best limo service Seattle & surrounding areas. Call (206) 595-9675."
        />
        <meta
          name="keywords"
          content="limo service seattle wa, seattle limo service, king county limo, limo seattle, limousine service seattle wa, best limo service seattle"
        />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="King County Limo Service | Emerald City Limos" />
        <meta property="og:description" content="Luxury limousine service across all King County cities. Airport transfers, weddings, corporate events." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emeraldcitylimos.com/locations/king-county/" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1548089396-8554dc0a3f4f?w=1920&h=1080&fit=crop&q=80&auto=format" alt="Seattle skyline" className="w-full h-full object-cover" loading="eager" fetchpriority="high" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/80"></div>
          
          <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
            <span className="inline-block bg-emerald-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wider">
              King County, Washington
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Premium Limo Service<br />
              <span className="text-[#d4af37]">Across King County</span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg">
              Seattle's most trusted limousine service covering every city, neighborhood, and destination in King County. From Sea-Tac Airport to downtown Bellevue — arrive in luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-now"
                className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold text-lg inline-block transition-all"
              >
                BOOK YOUR RIDE
              </Link>
              <a
                href="tel:+12065959675"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg inline-block transition-all"
              >
                (206) 595-9675
              </a>
            </div>
          </div>
        </section>

        {/* Intro Content */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                The Best Limo Service in King County, Washington
              </h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  When you need a <strong>limo in Seattle</strong> or anywhere across King County, Emerald City Limos delivers the premium transportation experience you deserve. As the region's top-rated <strong>Seattle limousine service</strong>, we provide luxury ground transportation to every corner of Washington's most populous county — from the urban core of downtown Seattle to the tech corridors of Bellevue and Redmond, the waterfront communities of Kirkland and Mercer Island, and the family neighborhoods of Renton, Kent, and Auburn.
                </p>
                <p>
                  King County spans over 2,300 square miles and is home to 2.3 million residents, world-class attractions, Fortune 500 headquarters, and Sea-Tac International Airport — the 8th busiest airport in the United States. Whether you're arriving on a late-night flight, heading to a corporate meeting on the Eastside, celebrating a wedding at a waterfront venue, or catching a Seahawks game at Lumen Field, our professional chauffeurs know every route, shortcut, and traffic pattern across the county.
                </p>
                <p>
                  As a <strong>limo company in Seattle</strong> with over a decade of experience, we've built our reputation on punctuality, professionalism, and an obsessive attention to detail. Every ride includes complimentary bottled water, phone charging, WiFi, and a chauffeur who treats your schedule like their own. That's why we're consistently rated the <strong>best limo service in Seattle</strong> by our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Limo Service to Every King County City
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Click any city below for detailed neighborhood coverage, routes, landmarks, and booking information.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/locations/king-county/${city.slug}`}
                  className="group bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-emerald-500 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{city.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{city.description}</p>
                  <span className="text-emerald-700 font-semibold text-sm inline-flex items-center">
                    View {city.name} Coverage <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Popular King County Limo Routes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Our chauffeurs drive these routes daily. Flat-rate pricing, no surge charges, no surprises.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularRoutes.map((route, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">{route.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{route.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{route.distance}</p>
                      <p className="text-gray-700 text-sm mb-2">{route.description}</p>
                      <p className="text-emerald-700 font-semibold text-sm">
                        {route.price} · <Link to="/book-now" className="underline">Book This Route</Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Why King County Chooses Emerald City Limos
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
              We're not just another <strong className="text-white">limo rental in Seattle</strong> — we're your dedicated luxury transportation partner.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#d4af37] text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-emerald-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Ride in King County?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Book your <strong className="text-white">luxury limo Seattle</strong> ride in 60 seconds. Instant confirmation, flat-rate pricing, professional chauffeurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-now"
                className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-10 py-4 rounded-lg font-bold text-lg transition-all"
              >
                BOOK NOW
              </Link>
              <a
                href="tel:+12065959675"
                className="bg-white hover:bg-gray-100 text-emerald-700 px-10 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Call (206) 595-9675
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              King County Limo Service FAQ
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="border border-gray-200 rounded-lg p-6 group" open={index === 0}>
                  <summary className="flex items-start justify-between cursor-pointer font-bold text-gray-900 text-lg list-none">
                    <span className="flex-1 pr-4">{faq.question}</span>
                    <span className="text-emerald-600 text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}