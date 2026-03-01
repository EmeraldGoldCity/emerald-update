import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function BellevuePage() {
  const neighborhoods = [
    {
      name: 'Downtown Bellevue',
      description: 'High-rise business district with luxury shopping, dining, and corporate headquarters. Home to the Bellevue Collection.',
      landmarks: 'Bellevue Square, Lincoln Square, Bellevue Arts Museum, Meydenbauer Center, City Hall',
      hotels: 'The Westin Bellevue, Hyatt Regency Bellevue, W Bellevue, Hotel 116, Residence Inn Bellevue Downtown',
    },
    {
      name: 'Crossroads',
      description: 'Diverse international community with global restaurants and shopping. Cultural hub of the Eastside.',
      landmarks: 'Crossroads Shopping Center, Crossroads Park, Lake Hills Greenbelt',
      hotels: 'Extended Stay America Crossroads',
    },
    {
      name: 'Factoria',
      description: 'Commercial and residential district on I-90 corridor. Easy freeway access to Seattle and the mountains.',
      landmarks: 'Factoria Mall, Mercer Slough Nature Park, Newport Hills',
      hotels: 'Silver Cloud Hotel Bellevue Eastgate',
    },
    {
      name: 'Eastgate',
      description: 'Transit hub and growing residential area near I-90. Major park-and-ride and light rail access.',
      landmarks: 'Eastgate Park & Ride, Richards Creek Trail, Eastgate Plaza',
      hotels: 'Extended Stay America Eastgate',
    },
    {
      name: 'Somerset',
      description: 'Upscale hilltop neighborhood with panoramic views. Family-oriented community with excellent schools.',
      landmarks: 'Somerset Park, Lake Sammamish State Park (nearby), Coal Creek Trail',
      hotels: '',
    },
    {
      name: 'Newport / Newport Hills',
      description: 'Residential hillside community south of downtown. Quiet streets with convenient access to I-405.',
      landmarks: 'Newport Way, Coal Creek Parkway, Lake Boren Park',
      hotels: '',
    },
    {
      name: 'Wilburton',
      description: 'Central Bellevue neighborhood undergoing major redevelopment. Future light rail hub.',
      landmarks: 'Wilburton Hill Park, Kelsey Creek Park, Bellevue Botanical Garden',
      hotels: '',
    },
    {
      name: 'Bridle Trails',
      description: 'Equestrian-friendly neighborhood with large wooded lots. Named for its extensive riding trails.',
      landmarks: 'Bridle Trails State Park, riding stables, wooded residential areas',
      hotels: '',
    },
  ];

  const routes = [
    {
      icon: '✈️',
      title: 'Sea-Tac Airport ↔ Downtown Bellevue',
      distance: '18 miles · 25-45 min',
      price: 'From $95',
    },
    {
      icon: '🌆',
      title: 'Bellevue ↔ Downtown Seattle',
      distance: '10 miles · 15-30 min',
      price: 'From $75',
    },
    {
      icon: '💼',
      title: 'Bellevue Hotels ↔ Microsoft Campus',
      distance: '5-8 miles · 10-20 min',
      price: 'From $65',
    },
    {
      icon: '🛍️',
      title: 'Bellevue Square ↔ Cruise Terminals',
      distance: '15 miles · 25-40 min',
      price: 'From $95',
    },
  ];

  const faqs = [
    {
      question: 'How much is a limo from Sea-Tac to Bellevue?',
      answer: 'Our flat-rate limo service from Sea-Tac Airport to Bellevue starts at $95 for a luxury sedan, $120 for an SUV, and $195 for a stretch limousine. All rates include flight tracking, meet-and-greet service, and 45 minutes of free waiting time.',
    },
    {
      question: 'Do you service all Bellevue neighborhoods?',
      answer: 'Yes! We provide limo service to every Bellevue neighborhood including Downtown, Crossroads, Factoria, Eastgate, Somerset, Newport, Wilburton, and Bridle Trails. We also service all major Bellevue hotels, office buildings, and the Bellevue Collection shopping district.',
    },
    {
      question: 'Can you pick me up from the Westin Bellevue?',
      answer: 'Absolutely. The Westin Bellevue is one of our most frequent pickup locations. We service all major Bellevue hotels including the Westin, Hyatt Regency, W Bellevue, and Hotel 116. Our chauffeurs know the best pickup spots at each property.',
    },
    {
      question: 'Do you provide corporate limo service in Bellevue?',
      answer: 'Yes. We specialize in executive transportation for Bellevue\'s corporate community. Daily service to Microsoft, Meta, T-Mobile, Amazon Bellevue offices, and all Eastside tech campuses. Flat rates, professional chauffeurs, and account billing available.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Limo Service Bellevue WA | Bellevue Limousine | Eastside Airport Transfers</title>
        <meta
          name="description"
          content="Premium limo service in Bellevue, WA. Downtown, Crossroads, Factoria, all neighborhoods. Airport transfers, corporate transportation, Bellevue Square shopping. Call (206) 595-9675."
        />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/bellevue/" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <picture>
              <source
                type="image/webp"
                srcSet="https://images.unsplash.com/photo-1759092912772-6c1186859eaf?w=480&h=320&fit=crop&q=70&fm=webp 480w,
                        https://images.unsplash.com/photo-1759092912772-6c1186859eaf?w=1920&h=1080&fit=crop&q=85&fm=webp 1920w"
                sizes="100vw"
              />
              <img
                src="https://images.unsplash.com/photo-1759092912772-6c1186859eaf?w=1920&h=1080&fit=crop&q=80&auto=format"
                alt="Bellevue Washington skyline - Premium limo service"
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
              Bellevue, Washington
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Bellevue Limo Service<br />
              <span className="text-[#d4af37]">Eastside's Premier Transportation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg">
              Professional limousine service for Bellevue's corporate community, luxury shoppers, and airport travelers. From downtown high-rises to every Eastside neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-now" className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                BOOK BELLEVUE LIMO
              </Link>
              <a href="tel:+12065959675" className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                (206) 595-9675
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Bellevue's Most Trusted Limousine Service
              </h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Bellevue has transformed from a quiet suburb into the economic powerhouse of the Eastside — home to Fortune 500 headquarters, luxury shopping destinations, and some of the Pacific Northwest's finest hotels and restaurants. Our <strong>Bellevue limo service</strong> has grown alongside this transformation, providing the executive-level transportation that this sophisticated city demands.
                </p>
                <p>
                  Whether you're a Microsoft executive needing daily transportation between your hotel and Redmond campus, a visitor shopping at Bellevue Square who needs a ride back to Sea-Tac with shopping bags, or a local resident heading to a special event downtown Seattle, our <strong>Bellevue limousine service</strong> delivers punctuality, professionalism, and the comfort you expect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              All Bellevue Neighborhoods Covered
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-white rounded-lg p-5 border border-gray-200 hover:border-emerald-500 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-2">{neighborhood.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{neighborhood.description}</p>
                  <p className="text-xs text-gray-500 mb-1"><strong>Landmarks:</strong> {neighborhood.landmarks}</p>
                  {neighborhood.hotels && (
                    <p className="text-xs text-gray-500"><strong>Hotels:</strong> {neighborhood.hotels}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Routes */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Popular Bellevue Limo Routes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {routes.map((route, index) => (
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

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Bellevue Limo Today</h2>
            <p className="text-xl text-emerald-100 mb-8">Flat-rate pricing. Professional chauffeurs. Luxury fleet.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-now" className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-10 py-4 rounded-lg font-bold text-lg transition-all">BOOK NOW</Link>
              <a href="tel:+12065959675" className="bg-white hover:bg-gray-100 text-emerald-700 px-10 py-4 rounded-lg font-bold text-lg transition-all">Call (206) 595-9675</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bellevue Limo Service FAQ</h2>
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