import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function PierceCountyPage() {
  const cities = [
    { name: 'Tacoma', icon: '🌉', areas: 'Downtown, Stadium District, Hilltop, North End, Proctor, Point Defiance, 6th Ave', slug: 'tacoma' },
    { name: 'Lakewood', icon: '🎖️', areas: 'Towne Center, Tillicum, JBLM Main Gate, American Lake', slug: 'lakewood' },
    { name: 'Puyallup', icon: '🎡', areas: 'Downtown, South Hill, WA State Fair, Sounder Station', slug: 'puyallup' },
    { name: 'University Place', icon: '🏡', areas: 'Chambers Bay, Bridgeport, Sunset Beach, Fircrest', slug: 'university-place' },
    { name: 'Gig Harbor', icon: '⛵', areas: 'Downtown Waterfront, Purdy, Fox Island, Artondale', slug: 'gig-harbor' },
    { name: 'Bonney Lake', icon: '🏔️', areas: 'Town Center, Lake Tapps, Prairie Ridge, Sky Island', slug: 'bonney-lake' },
    { name: 'Spanaway', icon: '🛩️', areas: 'Spanaway Lake, Elk Plain, JBLM South Gate', slug: 'spanaway' },
    { name: 'Fife', icon: '🎰', areas: 'Emerald Queen Casino, I-5 Corridor, Outlet Shopping', slug: 'fife' },
    { name: 'Steilacoom', icon: '🏛️', areas: 'Historic Downtown, Anderson Island Ferry, Fort Steilacoom', slug: 'steilacoom' },
    { name: 'DuPont', icon: '🏘️', areas: 'DuPont Village, Northwest Landing, Eagle Pride Golf', slug: 'dupont' },
    { name: 'Sumner', icon: '🌻', areas: 'Historic Main Street, Sounder Station, Daffodil Festival', slug: 'sumner' },
    { name: 'Orting', icon: '🌾', areas: 'Downtown, Wedding Venues, Mount Rainier Gateway', slug: 'orting' },
    { name: 'Graham', icon: '🌲', areas: 'Town Center, Kapowsin, Frontier Park', slug: 'graham' },
    { name: 'Edgewood', icon: '🏞️', areas: 'Community Center, Surprise Lake, North Tapps', slug: 'edgewood' },
    { name: 'Eatonville', icon: '🦌', areas: 'Downtown, Northwest Trek, Mount Rainier Gateway', slug: 'eatonville' },
    { name: 'Buckley', icon: '⛰️', areas: 'Downtown, Foothills Trail, Crystal Mountain Access', slug: 'buckley' },
    { name: 'Milton', icon: '🏠', areas: 'Town Center, Surprise Lake, King-Pierce Border', slug: 'milton' },
    { name: 'Ruston', icon: '🌊', areas: 'Point Ruston Waterfront, Point Defiance Entrance', slug: 'ruston' },
  ];

  const routes = [
    { icon: '✈️', title: 'Sea-Tac ↔ Downtown Tacoma', distance: '32 miles · 30-50 min', price: 'From $125', desc: 'Most-requested Pierce County airport route. I-5 corridor expertise.' },
    { icon: '🎖️', title: 'Sea-Tac ↔ JBLM', distance: '42 miles · 40-65 min', price: 'From $145', desc: 'Military families trust us. PCS arrivals, deployments, dignitary visits.' },
    { icon: '🚢', title: 'Pierce County ↔ Seattle Cruise Terminals', distance: '35-60 miles', price: 'From $135', desc: 'Alaska cruise connections from Pier 91 & Smith Cove.' },
    { icon: '🌉', title: 'Sea-Tac ↔ Gig Harbor', distance: '55 miles · 55-80 min', price: 'From $165', desc: 'Via Narrows Bridge. Toll included. Waterfront elegance.' },
    { icon: '🏟️', title: 'Pierce County ↔ Tacoma Dome', distance: 'Variable', price: 'From $85', desc: 'Concerts, events, conventions. Door-to-door service.' },
    { icon: '🎡', title: 'Seattle ↔ WA State Fair', distance: '35-50 miles', price: 'From $125', desc: 'Puyallup Fairgrounds. Skip the parking nightmare.' },
  ];

  const faqs = [
    {
      question: 'How much does a limo from Tacoma to Sea-Tac Airport cost?',
      answer: 'Our flat-rate limo service from downtown Tacoma to Sea-Tac Airport starts at $125 for a luxury sedan. SUVs start at $155 and stretch limousines at $250. All rates include flight monitoring, 45 minutes of free waiting time, and no hidden fees.'
    },
    {
      question: 'Do you offer a military discount for JBLM families?',
      answer: 'Yes, we offer a standing military discount for all active duty service members, veterans, and military families connected to Joint Base Lewis-McChord. We\'ve proudly served the JBLM community since 2010.'
    },
    {
      question: 'Is there a surcharge for Pierce County limo pickups?',
      answer: 'No. Emerald City Limos does not charge surcharges for Pierce County pickups. Whether your pickup is in downtown Seattle or Eatonville, you get honest flat-rate pricing. Pierce County is a core service area.'
    },
    {
      question: 'How much does a limo from Gig Harbor to Sea-Tac cost?',
      answer: 'Our flat-rate limo service from Gig Harbor to Sea-Tac Airport starts at $165 for a luxury sedan. This includes the Tacoma Narrows Bridge toll, flight tracking, and 45 minutes of free waiting time. No surcharges.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Limo Service Pierce County WA | Tacoma, Puyallup, Gig Harbor Limousine</title>
        <meta name="description" content="Premium limo service across Pierce County, Washington. Luxury transportation covering Tacoma, Lakewood, Puyallup, Gig Harbor, JBLM & all cities. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1714793982247-deed602f7d57?w=1920&h=1080&fit=crop&q=80&auto=format" alt="Tacoma Washington waterfront with Mount Rainier" className="w-full h-full object-cover" loading="eager" fetchpriority="high" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/80"></div>
          
          <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
            <span className="inline-block bg-emerald-600 px-4 py-1 rounded-full mb-4 text-sm font-semibold uppercase">Pierce County, Washington</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Premium Limo Service<br /><span className="text-[#d4af37]">Across Pierce County</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              From Tacoma's revitalized waterfront to the rolling hills of Puyallup, the shores of Gig Harbor to the gates of Joint Base Lewis-McChord — luxury limousine transportation for every destination in Pierce County.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Pierce County Deserves World-Class Limousine Service</h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-5">
                <p>Pierce County is Washington's second most populous county, home to nearly 1 million residents, yet historically underserved by luxury ground transportation. Most limo companies either refuse Pierce County rides or add outrageous surcharges. We think that's wrong. Emerald City Limos treats Pierce County as a first-class service area — same fleet, same professionalism, same flat-rate pricing, zero surcharges.</p>
                <p>From Tacoma's renaissance (Museum District, Point Defiance, UW Tacoma) to the suburban growth of Puyallup and Bonney Lake, the waterfront elegance of Gig Harbor, the military community of JBLM, and the agricultural heritage of the Orting Valley with Mount Rainier as the backdrop — each community has distinct transportation needs, and our Seattle limo service has been meeting them since 2010.</p>
                <p>Military families needing reliable airport transfers. Corporate executives traveling between Tacoma and Sea-Tac. Wedding parties heading to Orting's rustic venues. Cruise passengers connecting to Seattle terminals. Fair-goers to the Washington State Fair in Puyallup. Whatever brings you to Pierce County, we deliver the experience you deserve.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Limo Service to Every Pierce County City</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">Click any city for detailed neighborhood coverage, routes, and direct booking.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cities.map((city) => (
                <Link key={city.slug} to={`/locations/pierce-county/${city.slug}/`} className="group bg-white border-2 border-gray-200 hover:border-emerald-500 hover:shadow-lg rounded-xl p-6 text-center transition-all">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Popular Pierce County Limo Routes</h2>
            <p className="text-lg text-gray-600 text-center mb-12">Flat-rate pricing on all routes. No surprises.</p>
            
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Pierce County Chooses Emerald City Limos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#d4af37]">Zero Pierce County Surcharges</h3>
                <p className="text-gray-400">Other Seattle limo companies add $75-150 for Pierce County. We don't. Flat-rate from Gig Harbor, Tacoma, Puyallup, or Eatonville.</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎖️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#d4af37]">Military Family Discount</h3>
                <p className="text-gray-400">Proudly serving JBLM with a standing military discount. Active duty, veterans, and military families get preferred pricing.</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🕐</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#d4af37]">24/7 Pierce County Coverage</h3>
                <p className="text-gray-400">Vehicles positioned around the clock. 3 AM airport run from Bonney Lake? Midnight Emerald Queen Casino exit? We're there.</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🗺️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#d4af37]">Pierce County Route Masters</h3>
                <p className="text-gray-400">Our chauffeurs know every I-5 backup, Highway 512 shortcut, and Narrows Bridge traffic pattern. Local expertise matters.</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#d4af37]">Real-Time Flight Monitoring</h3>
                <p className="text-gray-400">Sea-Tac or Paine Field — we track your flight live. Delayed 3 hours? We adjust automatically. No charge, no hassle.</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#d4af37]">5-Star Rated</h3>
                <p className="text-gray-400">Pierce County clients consistently rate us 5 stars. From Gig Harbor weddings to JBLM family trips to Tacoma corporate transfers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-emerald-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Pierce County Limo Today</h2>
            <p className="text-xl text-emerald-100 mb-8">From Tacoma to Gig Harbor, JBLM to Mount Rainier — flat-rate luxury transportation with zero surcharges.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-now" className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-10 py-4 rounded-lg font-bold text-lg transition-all">BOOK NOW</Link>
              <a href="tel:+12065959675" className="bg-white hover:bg-gray-100 text-emerald-700 px-10 py-4 rounded-lg font-bold text-lg transition-all">Call (206) 595-9675</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pierce County Limo Service FAQ</h2>
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