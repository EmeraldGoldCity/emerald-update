import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function KentPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Kent WA | Kent Airport Transportation | South King County Limo</title>
        <meta name="description" content="Kent limo service - Downtown, East Hill, Kent Station. Airport transfers, corporate transportation. Call (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/kent/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-emerald-800/80"><img src="https://images.unsplash.com/photo-1662371257318-c34d1831e57d?w=1920&h=1080&fit=crop&q=80" alt="Kent WA" className="w-full h-full object-cover mix-blend-overlay" loading="eager" /></div>
          <div className="relative z-20 text-white text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-extrabold mb-4">Kent Limo Service<br /><span className="text-[#d4af37]">South King County Transportation</span></h1>
            <p className="text-xl mb-8">Downtown Kent, East Hill, West Hill, Kent Station & beyond</p>
            <Link to="/book-now" className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-10 py-4 rounded-lg font-bold inline-block">BOOK KENT LIMO</Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Downtown Kent', 'East Hill', 'West Hill', 'Kent Station', 'Panther Lake', 'Meridian'].map((area) => (
                <div key={area} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-lg text-gray-900">{area}</h3>
                  <p className="text-sm text-gray-600 mt-2">Professional limo service to all Kent neighborhoods</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center bg-emerald-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Kent ↔ Sea-Tac Airport: From $85</h3>
              <Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold inline-block">Book Airport Ride</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
