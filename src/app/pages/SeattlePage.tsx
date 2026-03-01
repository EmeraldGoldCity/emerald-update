import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function SeattlePage() {
  const neighborhoods = {
    downtown: [
      {
        name: 'Downtown / Central Business District',
        description: 'The heart of Seattle. We service every block from Pioneer Square to Westlake Center.',
        landmarks: 'Pike Place Market, Seattle Art Museum, Columbia Center, Westlake Center, Pioneer Square, CenturyLink Field',
        hotels: 'Four Seasons, Fairmont Olympic, The Edgewater, Thompson Seattle, Hotel 1000, Lotte Hotel, W Seattle, Hyatt Regency',
        zipCodes: '98101, 98104, 98154',
      },
      {
        name: 'Capitol Hill',
        description: 'Seattle\'s vibrant cultural hub. Busy nightlife means high demand for our ride Seattle limo service.',
        landmarks: 'Volunteer Park, Cal Anderson Park, Broadway, Seattle Asian Art Museum, St. Mark\'s Cathedral',
        hotels: 'Silver Cloud Hotel, Hotel Sorrento, Gaslight Inn',
        zipCodes: '98102, 98122',
      },
      {
        name: 'First Hill',
        description: 'Known as "Pill Hill" for its medical centers. Popular pickup for medical professionals and patients.',
        landmarks: 'Swedish Medical Center, Virginia Mason, Frye Art Museum, Town Hall Seattle',
        hotels: 'Sorrento Hotel, Courtyard by Marriott',
        zipCodes: '98104, 98122',
      },
      {
        name: 'Pioneer Square',
        description: 'Seattle\'s oldest neighborhood. Game day central for Seahawks and Mariners fans heading to the stadiums.',
        landmarks: 'Smith Tower, Underground Tour, Occidental Park, Lumen Field, T-Mobile Park',
        hotels: 'Best Western Plus Pioneer Square, Embassy Suites Pioneer Square',
        zipCodes: '98104',
      },
      {
        name: 'International District / Chinatown',
        description: 'Rich cultural district adjacent to the stadiums. A popular pre-game dinner spot.',
        landmarks: 'Uwajimaya, Wing Luke Museum, Hing Hay Park, King Street Station',
        hotels: '',
        zipCodes: '98104',
      },
      {
        name: 'Belltown',
        description: 'The nightlife and dining corridor between downtown and Seattle Center. Heavy weekend demand for evening transportation.',
        landmarks: 'Olympic Sculpture Park, Crocodile Café, Belltown restaurants, waterfront piers',
        hotels: 'Hotel Ändra, Ace Hotel, Palihotel, The Palladian, Kimpton Palladian',
        zipCodes: '98121',
      },
    ],
    seattleCenter: [
      {
        name: 'South Lake Union',
        description: 'Amazon\'s headquarters campus. Our Seattle executive limo service runs daily to SLU for tech executives and visiting investors.',
        landmarks: 'Amazon Spheres, MOHAI, Center for Wooden Boats, Lake Union, REI Flagship',
        hotels: 'Pan Pacific, Courtyard Marriott SLU, Residence Inn SLU, Hyatt House',
        zipCodes: '98109',
      },
      {
        name: 'Lower Queen Anne / Uptown',
        description: 'Adjacent to Seattle Center. Major event venue area with concerts, sports, and cultural events year-round.',
        landmarks: 'Space Needle, Climate Pledge Arena, MoPOP, Chihuly Garden, Pacific Science Center, Seattle Rep',
        hotels: 'MarQueen Hotel, Hampton Inn & Suites Seattle Center, Staypineapple The Maxwell',
        zipCodes: '98109',
      },
      {
        name: 'Upper Queen Anne',
        description: 'Beautiful residential hilltop with stunning city views. A popular wedding venue area.',
        landmarks: 'Kerry Park (iconic Seattle viewpoint), Marshall Park, Queen Anne Ave shops',
        hotels: '',
        zipCodes: '98109, 98119',
      },
    ],
    northSeattle: [
      {
        name: 'Ballard',
        description: 'Historic fishing village turned trendy dining and brewery destination. Weekend limo rental Seattle bookings are heavy here for pub crawls and restaurant hopping.',
        landmarks: 'Ballard Locks (Hiram M. Chittenden Locks), Nordic Museum, Golden Gardens Park, Ballard Farmers Market',
        hotels: 'Hotel Ballard, Ballard Inn',
        zipCodes: '98107, 98117',
      },
      {
        name: 'Fremont',
        description: 'Self-proclaimed "Center of the Universe." Quirky, creative neighborhood popular for corporate events and Google\'s Seattle campus.',
        landmarks: 'Fremont Troll, Fremont Rocket, Lenin Statue, Google Seattle, Theo Chocolate, Fremont Sunday Market',
        hotels: '',
        zipCodes: '98103',
      },
      {
        name: 'Wallingford',
        description: 'Family-friendly residential neighborhood with excellent restaurants along N 45th Street.',
        landmarks: 'Gas Works Park, Dick\'s Drive-In, Wallingford Center, Meridian Park',
        hotels: '',
        zipCodes: '98103, 98105',
      },
      {
        name: 'University District (U-District)',
        description: 'Home to the University of Washington. High demand for graduation day Seattle limousine service, visiting parents, and Husky game days.',
        landmarks: 'University of Washington, Husky Stadium, University Village, Burke Museum, Henry Art Gallery, The Ave',
        hotels: 'Watertown Hotel, Graduate Seattle, Silver Cloud Hotel U-District, University Inn',
        zipCodes: '98105',
      },
      {
        name: 'Green Lake',
        description: 'Popular recreational neighborhood centered around Green Lake Park. Outdoor enthusiasts and active families.',
        landmarks: 'Green Lake Park, Woodland Park Zoo (nearby), Evans Pool, Green Lake Community Center',
        hotels: '',
        zipCodes: '98103, 98115',
      },
      {
        name: 'Ravenna',
        description: 'Tree-lined streets between U-District and Green Lake. Quiet residential area with charming local businesses.',
        landmarks: 'Ravenna Park, Cowen Park, Burke-Gilman Trail access',
        hotels: '',
        zipCodes: '98105, 98115',
      },
    ],
    westSeattle: [
      {
        name: 'West Seattle / Alki Beach',
        description: 'Peninsula community with beach access and stunning downtown views. Popular for summer events and weddings.',
        landmarks: 'Alki Beach, Lincoln Park, West Seattle Junction, Birthplace of Seattle Monument',
        hotels: '',
        zipCodes: '98116, 98126',
      },
      {
        name: 'Georgetown',
        description: 'Historic industrial neighborhood turned arts district. Craft breweries and vintage shops attract weekend visitors.',
        landmarks: 'Georgetown Brewery, Oxbow Park, Hat n\' Boots, Aviation High School',
        hotels: '',
        zipCodes: '98108',
      },
      {
        name: 'Delridge',
        description: 'Diverse residential corridor in West Seattle with easy highway access.',
        landmarks: 'Longfellow Creek, Delridge Community Center, Westwood Village',
        hotels: '',
        zipCodes: '98106',
      },
    ],
    eastSeattle: [
      {
        name: 'Madison Park',
        description: 'Upscale waterfront neighborhood on Lake Washington. High-end dining and boutique shopping.',
        landmarks: 'Madison Park Beach, Washington Park Arboretum, Madison Park shops',
        hotels: '',
        zipCodes: '98112',
      },
      {
        name: 'Madrona',
        description: 'Lakefront neighborhood with tree-lined streets. Mix of historic homes and modern condos.',
        landmarks: 'Madrona Park Beach, Madrona Playfield, Spectrum Dance Theater',
        hotels: '',
        zipCodes: '98112',
      },
      {
        name: 'Leschi',
        description: 'Lake Washington waterfront community with marina access. Popular for waterfront dining.',
        landmarks: 'Leschi Park, Leschi Marina, Frink Park',
        hotels: '',
        zipCodes: '98122',
      },
      {
        name: 'Mount Baker',
        description: 'Affluent hilltop neighborhood overlooking Lake Washington. Beautiful historic homes and parks.',
        landmarks: 'Mount Baker Park, Colman Park, Lake Washington waterfront',
        hotels: '',
        zipCodes: '98144',
      },
      {
        name: 'Columbia City',
        description: 'Diverse, historic neighborhood along the light rail line. Growing restaurant and arts scene.',
        landmarks: 'Columbia City Theater, Rainier Arts Center, Columbia Park, farmers market',
        hotels: '',
        zipCodes: '98118',
      },
      {
        name: 'Rainier Valley',
        description: 'Culturally diverse neighborhood served by light rail. Mix of residential and commercial areas.',
        landmarks: 'Othello Park, Rainier Beach, light rail stations',
        hotels: '',
        zipCodes: '98118, 98178',
      },
    ],
    northeastSeattle: [
      {
        name: 'Laurelhurst',
        description: 'Quiet residential enclave on Lake Washington. Beautiful homes and waterfront access.',
        landmarks: 'Laurelhurst Park, Laurelhurst Community Center, Lake Washington views',
        hotels: '',
        zipCodes: '98105',
      },
      {
        name: 'Sand Point',
        description: 'Northeast Seattle neighborhood adjacent to Magnuson Park. Former naval air station turned park.',
        landmarks: 'Magnuson Park, NOAA Western Regional Center, lakefront trails',
        hotels: '',
        zipCodes: '98115',
      },
      {
        name: 'Wedgwood',
        description: 'Family-friendly neighborhood with parks and schools. Quiet streets and local businesses.',
        landmarks: 'Wedgwood Rock, Matthews Beach Park (nearby), local shops along 35th Ave NE',
        hotels: '',
        zipCodes: '98115',
      },
      {
        name: 'View Ridge',
        description: 'Residential neighborhood between U-District and Lake Washington. Excellent schools and parks.',
        landmarks: 'Burke-Gilman Trail, View Ridge Playfield',
        hotels: '',
        zipCodes: '98105, 98115',
      },
    ],
    otherNeighborhoods: [
      {
        name: 'Northgate',
        description: 'North Seattle hub with major shopping center and light rail access. Transit-oriented development.',
        landmarks: 'Northgate Station, Northgate Mall, North Seattle College',
        hotels: '',
        zipCodes: '98125',
      },
      {
        name: 'Lake City',
        description: 'Northeast Seattle neighborhood with diverse community and local businesses.',
        landmarks: 'Lake City Community Center, Lake City Farmers Market',
        hotels: '',
        zipCodes: '98125, 98155',
      },
      {
        name: 'Magnolia',
        description: 'Peninsula neighborhood west of downtown. Quiet residential area with parks and viewpoints.',
        landmarks: 'Discovery Park, Magnolia Village, Fishermen\'s Terminal',
        hotels: '',
        zipCodes: '98199',
      },
      {
        name: 'Eastlake',
        description: 'Narrow neighborhood between Capitol Hill and Lake Union. Houseboats and water access.',
        landmarks: 'Lake Union, Eastlake Ave shops, houseboats',
        hotels: '',
        zipCodes: '98102',
      },
      {
        name: 'Beacon Hill',
        description: 'Hilltop neighborhood south of downtown with diverse community. Light rail access.',
        landmarks: 'Jefferson Park, El Centro de la Raza, Beacon Hill light rail station',
        hotels: '',
        zipCodes: '98144, 98108',
      },
      {
        name: 'Seward Park',
        description: 'Southeast Seattle neighborhood surrounding Seward Park on Lake Washington.',
        landmarks: 'Seward Park (old-growth forest), Lake Washington beach, swimming area',
        hotels: '',
        zipCodes: '98118',
      },
    ],
  };

  const popularSeattleRoutes = [
    {
      icon: '✈️',
      title: 'Sea-Tac Airport ↔ Downtown Seattle',
      distance: '14 miles · 20-35 min',
      price: 'From $85',
    },
    {
      icon: '🏙️',
      title: 'Downtown ↔ Capitol Hill',
      distance: '2 miles · 10-15 min',
      price: 'From $45',
    },
    {
      icon: '🌊',
      title: 'Downtown ↔ West Seattle / Alki Beach',
      distance: '5 miles · 15-25 min',
      price: 'From $65',
    },
    {
      icon: '🏟️',
      title: 'Any Seattle Neighborhood ↔ Stadiums',
      distance: 'Variable',
      price: 'From $50',
    },
    {
      icon: '🎓',
      title: 'Sea-Tac ↔ University District',
      distance: '18 miles · 25-40 min',
      price: 'From $95',
    },
    {
      icon: '🍺',
      title: 'Ballard Brewery Tour (4-hour charter)',
      distance: 'Multiple stops',
      price: 'From $340',
    },
  ];

  const faqs = [
    {
      question: 'Do you service all Seattle neighborhoods?',
      answer: 'Yes! Our Seattle limo service covers every single neighborhood in the city — from downtown to Ballard, Capitol Hill to West Seattle, University District to Georgetown. We know every route, shortcut, and traffic pattern. No surge zones, no "outside service area" messages.',
    },
    {
      question: 'How much is a limo from Sea-Tac to downtown Seattle?',
      answer: 'Our flat-rate limo service from Sea-Tac Airport to downtown Seattle starts at $85 for a luxury sedan, $110 for an SUV, and $175 for a stretch limousine. All rates include flight tracking, meet-and-greet service, and 45 minutes of free waiting time. No hidden fees.',
    },
    {
      question: 'Can you pick me up from Pike Place Market?',
      answer: 'Absolutely. Pike Place Market is in the heart of downtown Seattle, and we service it daily. We\'ll coordinate the exact pickup location with you (street level or parking area) to make it as convenient as possible. Downtown Seattle pickups are one of our specialties.',
    },
    {
      question: 'Do you provide limo service for UW graduation?',
      answer: 'Yes! University of Washington graduation is one of our busiest times. We provide limo service to and from the University District, Husky Stadium, and all UW campus venues. Book early — graduation weekends fill up months in advance.',
    },
    {
      question: 'What\'s the best limo service in Seattle?',
      answer: 'Emerald City Limos is consistently rated the best limo service in Seattle based on customer reviews, punctuality, fleet quality, and chauffeur professionalism. Since 2010, we\'ve served thousands of Seattle clients with 5-star service. Check our Google reviews to see why Seattle trusts us.',
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LimousineBroker",
    "name": "Emerald City Limos - Seattle",
    "description": "Premium limo service in Seattle, Washington covering all 50+ neighborhoods, landmarks, hotels, and venues.",
    "url": "https://emeraldcitylimos.com/locations/king-county/seattle/",
    "telephone": "+12065959675",
    "email": "client@emeraldcitylimos.com",
    "areaServed": {
      "@type": "City",
      "name": "Seattle",
      "containedInPlace": {
        "@type": "County",
        "name": "King County",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      }
    },
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "347",
      "bestRating": "5"
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
        <title>Limo Seattle WA | Seattle Limousine Service | All 50+ Neighborhoods | Emerald City Limos</title>
        <meta
          name="description"
          content="Seattle's #1 limo service covering all 50+ neighborhoods. Downtown, Capitol Hill, Ballard, Queen Anne, Fremont, Georgetown & more. Airport transfers, weddings, corporate. Best limo service Seattle. Call (206) 595-9675."
        />
        <meta
          name="keywords"
          content="limo seattle, seattle limo service, limo service seattle wa, seattle limousine, black limo seattle, airport limo seattle, best limo service seattle"
        />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/seattle/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Seattle Limo Service - All Neighborhoods | Emerald City Limos" />
        <meta property="og:description" content="Premium limo service covering all 50+ Seattle neighborhoods. Downtown, Capitol Hill, Ballard, U-District & more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emeraldcitylimos.com/locations/king-county/seattle/" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <picture>
              <source
                type="image/webp"
                srcSet="https://images.unsplash.com/photo-1540321204207-b9a76c3a5829?w=480&h=320&fit=crop&q=70&fm=webp 480w,
                        https://images.unsplash.com/photo-1540321204207-b9a76c3a5829?w=768&h=512&fit=crop&q=75&fm=webp 768w,
                        https://images.unsplash.com/photo-1540321204207-b9a76c3a5829?w=1280&h=720&fit=crop&q=80&fm=webp 1280w,
                        https://images.unsplash.com/photo-1540321204207-b9a76c3a5829?w=1920&h=1080&fit=crop&q=85&fm=webp 1920w"
                sizes="100vw"
              />
              <img
                src="https://images.unsplash.com/photo-1540321204207-b9a76c3a5829?w=1920&h=1080&fit=crop&q=80&auto=format"
                alt="Seattle skyline with Space Needle - Emerald City Limos luxury limousine service"
                className="absolute inset-0 w-full h-full object-cover"
                width="1920"
                height="1080"
                loading="eager"
                fetchpriority="high"
              />
            </picture>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/75 to-black/60"></div>
          
          <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
            <span className="inline-block bg-emerald-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wider">
              Seattle, Washington
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Limo Seattle WA<br />
              <span className="text-[#d4af37]">Every Neighborhood. Every Occasion.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg">
              The most trusted Seattle limousine service covering all 50+ neighborhoods, every major hotel, landmark, and venue. Professional chauffeurs who know this city inside and out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-now"
                className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold text-lg inline-block transition-all"
              >
                BOOK YOUR SEATTLE RIDE
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
                Seattle's Premier Limousine Service Since 2010
              </h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Finding a reliable <strong>limo in Seattle</strong> used to mean calling around, comparing quotes, and hoping your driver actually showed up on time. We built Emerald City Limos to change that. As a <strong>limo company Seattle</strong> trusts completely, we've spent over a decade perfecting every aspect of luxury ground transportation in the Emerald City — from the technology that powers our booking system to the training our chauffeurs receive before they ever turn a key.
                </p>
                <p>
                  Seattle is a city of neighborhoods, each with its own personality, traffic patterns, and hidden gems. Our drivers don't just know the fastest route from Capitol Hill to Sea-Tac — they know that the Mercer Street mess clears at 7:15 PM, that the Ballard Bridge opens for boats on a schedule, that the best approach to the cruise terminal changes based on construction season, and that the back roads through Magnolia can save 20 minutes during Seahawks game traffic. This kind of granular, neighborhood-level expertise is what separates a <strong>premium Seattle limo</strong> experience from a generic ride.
                </p>
                <p>
                  Whether you need a <strong>black limo Seattle</strong> sedan for a quiet executive transfer, a stretch limousine for your wedding party, an <strong>airport limo Seattle</strong> service for your red-eye arrival, or an SUV for a family vacation pickup — we match the right vehicle, the right chauffeur, and the right level of service to your specific needs. That's what makes us the <strong>top rated limo service Seattle</strong> residents and visitors consistently choose.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Limo Service to Every Seattle Neighborhood
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Our <strong>Seattle limo service</strong> covers every single neighborhood in the city. No surge zones, no "outside service area" messages — just reliable luxury transportation wherever you need to go.
            </p>

            {/* Downtown & Central Seattle */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-lg">🏙️</span>
                Downtown & Central Seattle
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {neighborhoods.downtown.map((neighborhood, index) => (
                  <div key={index} className="bg-white rounded-lg p-5 border border-gray-200 hover:border-emerald-500 transition-colors">
                    <h4 className="font-bold text-gray-900 mb-2">{neighborhood.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{neighborhood.description}</p>
                    <p className="text-xs text-gray-500 mb-1"><strong>Key Landmarks:</strong> {neighborhood.landmarks}</p>
                    {neighborhood.hotels && (
                      <p className="text-xs text-gray-500 mb-1"><strong>Hotels:</strong> {neighborhood.hotels}</p>
                    )}
                    <p className="text-xs text-emerald-700 font-semibold"><strong>Zip Codes:</strong> {neighborhood.zipCodes}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Seattle Center & Queen Anne */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-lg">🗼</span>
                Seattle Center & Queen Anne
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {neighborhoods.seattleCenter.map((neighborhood, index) => (
                  <div key={index} className="bg-white rounded-lg p-5 border border-gray-200 hover:border-emerald-500 transition-colors">
                    <h4 className="font-bold text-gray-900 mb-2">{neighborhood.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{neighborhood.description}</p>
                    <p className="text-xs text-gray-500 mb-1"><strong>Key Landmarks:</strong> {neighborhood.landmarks}</p>
                    {neighborhood.hotels && (
                      <p className="text-xs text-gray-500 mb-1"><strong>Hotels:</strong> {neighborhood.hotels}</p>
                    )}
                    <p className="text-xs text-emerald-700 font-semibold"><strong>Zip Codes:</strong> {neighborhood.zipCodes}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* North Seattle */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-lg">🌲</span>
                North Seattle
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {neighborhoods.northSeattle.map((neighborhood, index) => (
                  <div key={index} className="bg-white rounded-lg p-5 border border-gray-200 hover:border-emerald-500 transition-colors">
                    <h4 className="font-bold text-gray-900 mb-2">{neighborhood.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{neighborhood.description}</p>
                    <p className="text-xs text-gray-500 mb-1"><strong>Key Landmarks:</strong> {neighborhood.landmarks}</p>
                    {neighborhood.hotels && (
                      <p className="text-xs text-gray-500 mb-1"><strong>Hotels:</strong> {neighborhood.hotels}</p>
                    )}
                    <p className="text-xs text-emerald-700 font-semibold"><strong>Zip Codes:</strong> {neighborhood.zipCodes}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* West Seattle */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-lg">🌊</span>
                West Seattle
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {neighborhoods.westSeattle.map((neighborhood, index) => (
                  <div key={index} className="bg-white rounded-lg p-5 border border-gray-200 hover:border-emerald-500 transition-colors">
                    <h4 className="font-bold text-gray-900 mb-2">{neighborhood.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{neighborhood.description}</p>
                    <p className="text-xs text-gray-500 mb-1"><strong>Key Landmarks:</strong> {neighborhood.landmarks}</p>
                    {neighborhood.hotels && (
                      <p className="text-xs text-gray-500 mb-1"><strong>Hotels:</strong> {neighborhood.hotels}</p>
                    )}
                    <p className="text-xs text-emerald-700 font-semibold"><strong>Zip Codes:</strong> {neighborhood.zipCodes}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* East Seattle */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-lg">🏖️</span>
                East Seattle & Lake Washington
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {neighborhoods.eastSeattle.map((neighborhood, index) => (
                  <div key={index} className="bg-white rounded-lg p-5 border border-gray-200 hover:border-emerald-500 transition-colors">
                    <h4 className="font-bold text-gray-900 mb-2">{neighborhood.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{neighborhood.description}</p>
                    <p className="text-xs text-gray-500 mb-1"><strong>Key Landmarks:</strong> {neighborhood.landmarks}</p>
                    {neighborhood.hotels && (
                      <p className="text-xs text-gray-500 mb-1"><strong>Hotels:</strong> {neighborhood.hotels}</p>
                    )}
                    <p className="text-xs text-emerald-700 font-semibold"><strong>Zip Codes:</strong> {neighborhood.zipCodes}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Northeast Seattle */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-lg">🏡</span>
                Northeast Seattle
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {neighborhoods.northeastSeattle.map((neighborhood, index) => (
                  <div key={index} className="bg-white rounded-lg p-5 border border-gray-200 hover:border-emerald-500 transition-colors">
                    <h4 className="font-bold text-gray-900 mb-2">{neighborhood.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{neighborhood.description}</p>
                    <p className="text-xs text-gray-500 mb-1"><strong>Key Landmarks:</strong> {neighborhood.landmarks}</p>
                    {neighborhood.hotels && (
                      <p className="text-xs text-gray-500 mb-1"><strong>Hotels:</strong> {neighborhood.hotels}</p>
                    )}
                    <p className="text-xs text-emerald-700 font-semibold"><strong>Zip Codes:</strong> {neighborhood.zipCodes}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Neighborhoods */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-lg">📍</span>
                Additional Seattle Neighborhoods
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {neighborhoods.otherNeighborhoods.map((neighborhood, index) => (
                  <div key={index} className="bg-white rounded-lg p-5 border border-gray-200 hover:border-emerald-500 transition-colors">
                    <h4 className="font-bold text-gray-900 mb-2">{neighborhood.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{neighborhood.description}</p>
                    <p className="text-xs text-gray-500 mb-1"><strong>Key Landmarks:</strong> {neighborhood.landmarks}</p>
                    {neighborhood.hotels && (
                      <p className="text-xs text-gray-500 mb-1"><strong>Hotels:</strong> {neighborhood.hotels}</p>
                    )}
                    <p className="text-xs text-emerald-700 font-semibold"><strong>Zip Codes:</strong> {neighborhood.zipCodes}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Seattle Routes */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Popular Seattle Limo Routes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Flat-rate pricing, no surge charges, no surprises. Our chauffeurs drive these routes daily.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularSeattleRoutes.map((route, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">{route.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{route.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{route.distance}</p>
                      <p className="text-emerald-700 font-semibold text-sm">
                        {route.price} · <Link to="/book-now" className="underline">Book Now</Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Ride in Seattle?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Book your <strong className="text-white">limo Seattle WA</strong> ride in 60 seconds. Instant confirmation, flat-rate pricing, professional chauffeurs who know every Seattle neighborhood.
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
              Seattle Limo Service FAQ
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