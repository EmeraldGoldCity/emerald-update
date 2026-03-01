import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function RentonPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Renton WA | Airport Limo Renton | Boeing Transportation</title>
        <meta name="description" content="Renton limo service near Sea-Tac Airport. Boeing facilities, The Landing, all Renton neighborhoods. Flat-rate airport transfers. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/renton/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1662371257318-c34d1831e57d?w=1920&h=1080&fit=crop&q=80" alt="Renton" className="w-full h-full object-cover" loading="eager" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-black/60"></div>
          <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
            <span className="inline-block bg-emerald-600 px-4 py-1 rounded-full mb-4 text-sm font-semibold">Renton, WA</span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Renton Limo Service<br /><span className="text-[#d4af37]">Near Sea-Tac Airport</span></h1>
            <p className="text-xl text-gray-200 mb-8">Premium transportation for Renton, Boeing, The Landing & all neighborhoods. Just 8 miles from Sea-Tac.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/book-now" className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-bold">BOOK RENTON LIMO</Link>
              <a href="tel:+12065959675" className="border-2 border-white px-8 py-4 rounded-lg font-bold">(206) 595-9675</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Renton Neighborhoods We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Downtown Renton</h3>
                <p className="text-gray-600">Historic downtown, City Hall, Renton Municipal Airport, waterfront parks</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">The Landing</h3>
                <p className="text-gray-600">Shopping, dining, entertainment complex on Lake Washington</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Highlands</h3>
                <p className="text-gray-600">Residential hilltop community with parks and schools</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Kennydale</h3>
                <p className="text-gray-600">Lakefront neighborhood with beach access and parks</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Benson Hill</h3>
                <p className="text-gray-600">Diverse residential area with local shopping</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Fairwood</h3>
                <p className="text-gray-600">Family-friendly neighborhood bordering Maple Valley</p>
              </div>
            </div>

            <div className="bg-emerald-50 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Renton ↔ Sea-Tac Airport</h3>
              <p className="text-lg text-gray-700 mb-6">Just 8 miles | 12-20 minutes | From $75</p>
              <Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block hover:bg-emerald-800">Book Airport Transfer</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Boeing & Corporate Renton Transportation</h2>
            <p className="text-xl mb-8">We service all Boeing Renton facilities, corporate offices, and industrial areas. Account billing available.</p>
            <a href="tel:+12065959675" className="bg-white text-emerald-700 px-10 py-4 rounded-lg font-bold inline-block">Call (206) 595-9675</a>
          </div>
        </section>
      </div>
    </>
  );
}
