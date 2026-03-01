import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function KirklandPage() {
  const neighborhoods = [
    {
      name: 'Downtown Kirkland',
      description: 'Charming waterfront downtown with boutique shopping, galleries, and restaurants along Lake Washington.',
      landmarks: 'Marina Park, Heritage Hall, Kirkland Performance Center, waterfront parks',
      hotels: 'The Heathman Hotel Kirkland',
    },
    {
      name: 'Juanita',
      description: 'North Kirkland lakefront neighborhood with Juanita Beach Park and established residential community.',
      landmarks: 'Juanita Beach Park, Juanita Bay Park, Forbes Creek Trail',
    },
    {
      name: 'Totem Lake',
      description: 'Commercial hub with major shopping center undergoing massive redevelopment into mixed-use urban village.',
      landmarks: 'Totem Lake Mall, Evergreen Hospital, business district',
    },
    {
      name: 'Finn Hill',
      description: 'Residential hillside community with sweeping views and quiet streets.',
      landmarks: 'O.O. Denny Park, Saint Edward State Park',
    },
    {
      name: 'Houghton',
      description: 'Southern Kirkland neighborhood along Lake Washington with beach access and parks.',
      landmarks: 'Marsh Park, Houghton Beach Park, waterfront trails',
    },
    {
      name: 'Kingsgate',
      description: 'Northeast Kirkland neighborhood bordering Bothell with local shopping and parks.',
      landmarks: 'Kingsgate Park & Ride, community parks',
    },
  ];

  const routes = [
    { icon: '✈️', title: 'Sea-Tac ↔ Kirkland', distance: '22 miles · 30-50 min', price: 'From $105' },
    { icon: '🌆', title: 'Kirkland ↔ Downtown Seattle', distance: '12 miles · 20-35 min', price: 'From $85' },
    { icon: '💼', title: 'Kirkland ↔ Google Kirkland Campus', distance: 'Local · 5-15 min', price: 'From $55' },
    { icon: '⛵', title: 'Kirkland Waterfront Tour', distance: '2-hour charter', price: 'From $170' },
  ];

  return (
    <>
      <Helmet>
        <title>Limo Service Kirkland WA | Kirkland Limousine | Waterfront Transportation</title>
        <meta name="description" content="Premium limo service in Kirkland, WA. Downtown waterfront, Juanita, Totem Lake, all neighborhoods. Airport transfers, corporate, events. Call (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/kirkland/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1768288377325-85f6fa20907f?w=1920&h=1080&fit=crop&q=80&auto=format" alt="Kirkland waterfront" className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchpriority="high" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/75 to-black/60"></div>
          <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
            <span className="inline-block bg-emerald-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wider">Kirkland, Washington</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Kirkland Limo Service<br /><span className="text-[#d4af37]">Waterfront Luxury Transportation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">Premium limousine service for Kirkland's lakefront community. Downtown waterfront, Juanita, Totem Lake & beyond.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-now" className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all">BOOK KIRKLAND LIMO</Link>
              <a href="tel:+12065959675" className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all">(206) 595-9675</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Kirkland's Premier Limo Service</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">Our <strong>Kirkland limousine service</strong> provides luxury transportation throughout this beautiful waterfront city. From downtown's charming shops to Google's Kirkland campus to Juanita Beach, we know every Kirkland neighborhood.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {neighborhoods.map((n, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">{n.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{n.description}</p>
                  <p className="text-xs text-gray-500"><strong>Landmarks:</strong> {n.landmarks}</p>
                  {n.hotels && <p className="text-xs text-emerald-700 mt-1"><strong>Hotels:</strong> {n.hotels}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Kirkland Routes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {routes.map((r, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center"><span className="text-white text-xl">{r.icon}</span></div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{r.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{r.distance}</p>
                      <p className="text-emerald-700 font-semibold text-sm">{r.price} · <Link to="/book-now" className="underline">Book</Link></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-emerald-700 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Book Your Kirkland Limo</h2>
            <p className="text-xl mb-8">Professional chauffeurs. Luxury vehicles. Flat-rate pricing.</p>
            <Link to="/book-now" className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-10 py-4 rounded-lg font-bold text-lg inline-block transition-all">BOOK NOW</Link>
          </div>
        </section>
      </div>
    </>
  );
}
