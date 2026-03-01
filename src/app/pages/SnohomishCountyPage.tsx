import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function SnohomishCountyPage() {
  const cities = [
    { name: 'Everett', icon: '✈️', areas: 'Downtown, Bayside, Port Gardner, Boulevard Bluffs, Riverside, Lowell, Silver Lake, Pinehurst', slug: 'everett' },
    { name: 'Lynnwood', icon: '🏢', areas: 'City Center, Alderwood, Meadowdale, Convention Center area', slug: 'lynnwood' },
    { name: 'Edmonds', icon: '⛴️', areas: 'Downtown, Bowl, Westgate, Esperance, Ferry Terminal', slug: 'edmonds' },
    { name: 'Bothell', icon: '🎓', areas: 'Downtown, Canyon Park, North Creek, UW Bothell', slug: 'bothell' },
    { name: 'Marysville', icon: '🎰', areas: 'Downtown, Smokey Point, Tulalip Casino & Resort', slug: 'marysville' },
    { name: 'Mukilteo', icon: '🏖️', areas: 'Old Town, Harbour Pointe, Paine Field, Ferry Terminal', slug: 'mukilteo' },
    { name: 'Lake Stevens', icon: '🏞️', areas: 'Downtown, Frontier Village, Hartford, Lakeshore', slug: 'lake-stevens' },
    { name: 'Snohomish', icon: '🏛️', areas: 'Historic Downtown, Pilchuck, Cathcart, Wedding Venues', slug: 'snohomish' },
    { name: 'Mountlake Terrace', icon: '🚇', areas: 'Town Center, Ballinger, Light Rail Station', slug: 'mountlake-terrace' },
    { name: 'Mill Creek', icon: '🌿', areas: 'Town Center, North Creek, Thomas Lake', slug: 'mill-creek' },
    { name: 'Arlington', icon: '🛩️', areas: 'Downtown, Smokey Point, Arlington Airport', slug: 'arlington' },
    { name: 'Monroe', icon: '⛰️', areas: 'Downtown, Lake Tye, Evergreen Fairgrounds', slug: 'monroe' },
    { name: 'Stanwood', icon: '🦅', areas: 'Downtown, Warm Beach, Camano Island', slug: 'stanwood' },
    { name: 'Granite Falls', icon: '🌊', areas: 'Downtown, Mountain Loop Highway Gateway', slug: 'granite-falls' },
    { name: 'Sultan', icon: '🏔️', areas: 'Downtown, Startup, Gold Bar, Stevens Pass Corridor', slug: 'sultan' },
  ];

  const routes = [
    { icon: '✈️', title: 'Sea-Tac ↔ Everett', distance: '38 miles · 40-75 min', price: 'From $145', desc: 'Most-requested Snohomish County airport route. I-5 or I-405 based on real-time traffic.' },
    { icon: '🏢', title: 'Sea-Tac ↔ Lynnwood', distance: '26 miles · 30-55 min', price: 'From $115', desc: 'Convention Center, Alderwood Mall, City Center. New light rail access.' },
    { icon: '🛩️', title: 'Paine Field (PAE) ↔ Anywhere', distance: 'Variable', price: 'From $75', desc: 'Snohomish County\'s commercial airport. Alaska Airlines service. Terminal door pickup.' },
    { icon: '🏙️', title: 'Snohomish County ↔ Downtown Seattle', distance: '15-45 miles', price: 'From $95', desc: 'All cities to Seattle. I-5 corridor expertise. Real-time route optimization.' },
    { icon: '⛴️', title: 'Mukilteo Ferry Connections', distance: 'Variable', price: 'From $85', desc: 'Drop-off and pickup coordinated with ferry schedule to Whidbey Island.' },
    { icon: '🎰', title: 'Seattle ↔ Tulalip Casino', distance: '35 miles · 35-60 min', price: 'From $135', desc: 'Premier entertainment destination. Concert venue, gaming, dining.' },
  ];

  const faqs = [
    {
      question: 'How much does a limo from Everett to Sea-Tac Airport cost?',
      answer: 'Our flat-rate limo service from Everett to Sea-Tac Airport starts at $145 for a luxury sedan. SUVs start at $175 and stretch limousines at $275. All rates include flight monitoring, 45 minutes of free waiting time for arrivals, and no hidden fees.'
    },
    {
      question: 'Do you provide limo service to Paine Field airport?',
      answer: 'Yes! We provide full limo service to and from Paine Field (Snohomish County Airport / PAE) in Everett/Mukilteo. We cover all Alaska Airlines arrivals and departures. Pickups start at $75 depending on your destination.'
    },
    {
      question: 'Is there a surcharge for Snohomish County pickups?',
      answer: 'No. Unlike many Seattle limo companies, we do not add surcharges for Snohomish County pickups. Whether your pickup is in downtown Seattle or downtown Arlington, you get flat-rate pricing with no hidden fees.'
    },
    {
      question: 'Do you serve the Snohomish wedding venues?',
      answer: 'Yes! The town of Snohomish is one of our most active wedding service areas. We serve Hidden Meadows, Swans Trail Farms, Thomas Family Farm, Lord Hill Farms, Meadow Creek Farm, and every other venue in the Snohomish Valley.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Limo Service Snohomish County WA | Everett, Lynnwood, Edmonds Limousine</title>
        <meta name="description" content="Premium limo service across Snohomish County, Washington. Luxury transportation covering Everett, Lynnwood, Edmonds, Bothell, Mukilteo, Marysville & all cities. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1689303109353-951f3ff8a129?w=1920&h=1080&fit=crop&q=80&auto=format" alt="Snohomish County Washington aerial view" className="w-full h-full object-cover" loading="eager" fetchpriority="high" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/80"></div>
          
          <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
            <span className="inline-block bg-emerald-600 px-4 py-1 rounded-full mb-4 text-sm font-semibold uppercase">Snohomish County, Washington</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Premium Limo Service<br /><span className="text-[#d4af37]">Across Snohomish County</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              From Everett's waterfront to Mukilteo's ferry terminal, Lynnwood's Convention Center to historic Snohomish — luxury limousine transportation across every mile of Snohomish County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-now" className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all">BOOK YOUR RIDE</Link>
              <a href="tel:+12065959675" className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all">(206) 595-9675</a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Snohomish County's Trusted Limousine Service</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-5">
                <p>Snohomish County sits directly north of Seattle, and for too long its residents have been underserved by luxury transportation. The big limo companies treat Snohomish County as an afterthought — charging extra fees, limiting availability, or refusing rides north of King County. We do the opposite. Emerald City Limos treats Snohomish County as a core service area.</p>
                <p>From the bustling aerospace corridors of Everett where Boeing's massive factory draws worldwide visitors, to the suburban growth centers of Lynnwood and Mill Creek, the waterfront charm of Edmonds and Mukilteo, and the rural beauty of Snohomish, Arlington, and Stanwood — we've mastered every transportation challenge this diverse county presents.</p>
                <p>With Paine Field now serving commercial flights, Snohomish County has its own airport connection. Whether you're connecting through Sea-Tac or Paine Field, attending conferences at Lynnwood Convention Center, catching the Mukilteo ferry to Whidbey Island, or celebrating at a Snohomish wedding venue, our Seattle limo service extends seamlessly across every corner of Snohomish County.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Limo Service to Every Snohomish County City</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">Click any city for detailed neighborhood coverage, routes, and direct booking.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cities.map((city) => (
                <Link key={city.slug} to={`/locations/snohomish-county/${city.slug}/`} className="group bg-white border-2 border-gray-200 hover:border-emerald-500 hover:shadow-lg rounded-xl p-6 text-center transition-all">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{city.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{city.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{city.areas}</p>
                  <span className="text-emerald-700 font-semibold text-sm">View {city.name} Coverage →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Routes */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Popular Snohomish County Limo Routes</h2>
            <p className="text-lg text-gray-600 text-center mb-12">Flat-rate pricing on all routes. Our chauffeurs know every I-5 exit and Highway 2 shortcut.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {routes.map((route, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">{route.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{route.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{route.distance}</p>
                      <p className="text-gray-700 text-sm mb-3">{route.desc}</p>
                      <p className="text-emerald-700 font-semibold text-sm">{route.price} · <Link to="/book-now" className="underline">Book Now</Link></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Snohomish County Trusts Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#d4af37]">No North County Surcharges</h3>
                <p className="text-gray-400">Many Seattle limo companies add $50-100+ surcharges for Snohomish County. We don't. Flat-rate pricing from any address.</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🕐</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#d4af37]">24/7 Coverage</h3>
                <p className="text-gray-400">Dedicated vehicles positioned in Snohomish County around the clock. 2 AM Paine Field pickup? We're there.</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🗺️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#d4af37]">Local Route Expertise</h3>
                <p className="text-gray-400">Our chauffeurs know every I-5 backup, every SR-9 shortcut, every Everett flood zone. Local knowledge matters.</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#d4af37]">Real-Time Flight Monitoring</h3>
                <p className="text-gray-400">Whether Sea-Tac or Paine Field, we track your flight live. Delayed 2 hours? We adjust automatically.</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#d4af37]">Full Luxury Fleet</h3>
                <p className="text-gray-400">Escalade, Navigator, S-Class, stretch limos, Sprinter vans. Same fleet Seattle clients get.</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#d4af37]">5-Star Rated</h3>
                <p className="text-gray-400">Snohomish County clients consistently rate us 5 stars. One perfect ride at a time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-emerald-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Snohomish County Limo Today</h2>
            <p className="text-xl text-emerald-100 mb-8">Flat-rate pricing from any address. Instant confirmation. Professional chauffeurs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-now" className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-10 py-4 rounded-lg font-bold text-lg transition-all">BOOK NOW</Link>
              <a href="tel:+12065959675" className="bg-white hover:bg-gray-100 text-emerald-700 px-10 py-4 rounded-lg font-bold text-lg transition-all">Call (206) 595-9675</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Snohomish County Limo Service FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <details key={i} className="border border-gray-200 rounded-lg p-6 group" open={i === 0}>
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