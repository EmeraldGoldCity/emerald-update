import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function RedmondPage() {
  const areas = [
    { name: 'Downtown Redmond', desc: 'Historic downtown with parks, restaurants, and Saturday Market.', landmarks: 'Redmond Town Center, Redmond Central Connector, Anderson Park' },
    { name: 'Overlake', desc: 'Home to Microsoft headquarters and tech corridor.', landmarks: 'Microsoft Campus, Overlake Village, Redmond Technology Center' },
    { name: 'Education Hill', desc: 'Residential hilltop with schools and parks.', landmarks: 'Hartman Park, Grass Lawn Park, Redmond High School' },
    { name: 'SE Redmond', desc: 'Diverse residential neighborhoods near Marymoor Park.', landmarks: 'Marymoor Park, Sammamish River Trail, dog park' },
  ];

  return (
    <>
      <Helmet>
        <title>Limo Service Redmond WA | Microsoft Campus Transportation | Redmond Limousine</title>
        <meta name="description" content="Premium limo service in Redmond, WA. Microsoft campus, downtown, all neighborhoods. Corporate transportation, airport transfers. Call (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/redmond/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1715985748944-466d5ce17648?w=1920&h=1080&fit=crop&q=80" alt="Redmond" className="w-full h-full object-cover" loading="eager" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/75 to-black/60"></div>
          <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
            <span className="inline-block bg-emerald-600 px-4 py-1 rounded-full mb-4 text-sm font-semibold uppercase">Redmond, WA</span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Redmond Limo Service<br /><span className="text-[#d4af37]">Tech Corridor Transportation</span></h1>
            <p className="text-xl text-gray-200 mb-8">Executive limo service for Microsoft, tech campuses, and Redmond neighborhoods.</p>
            <div className="flex gap-4 justify-center">
              <Link to="/book-now" className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-bold">BOOK NOW</Link>
              <a href="tel:+12065959675" className="border-2 border-white px-8 py-4 rounded-lg font-bold">Call Us</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">All Redmond Areas Covered</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {areas.map((a, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-lg mb-2">{a.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{a.desc}</p>
                  <p className="text-xs text-gray-500">{a.landmarks}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-emerald-700 text-center text-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Executive Redmond Transportation</h2>
            <p className="text-lg mb-8">Sea-Tac ↔ Microsoft Campus from $110 | Daily corporate accounts available</p>
            <Link to="/book-now" className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-10 py-4 rounded-lg font-bold inline-block">BOOK YOUR RIDE</Link>
          </div>
        </section>
      </div>
    </>
  );
}
