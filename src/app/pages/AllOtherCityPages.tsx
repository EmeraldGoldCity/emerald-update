// Auburn, Federal Way, Issaquah, Sammamish, Woodinville, Mercer Island, SeaTac, Tukwila, Burien, Shoreline, Maple Valley, Covington

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function AuburnPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Auburn WA | Muckleshoot Casino Transportation | Auburn Limousine</title>
        <meta name="description" content="Auburn limo service - Downtown, Lea Hill, Muckleshoot Casino. Airport transfers. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/auburn/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-emerald-950 to-emerald-800 text-white">
          <div className="text-center px-4">
            <h1 className="text-5xl font-extrabold mb-4">Auburn Limo Service<br /><span className="text-[#d4af37]">Casino & Airport Transportation</span></h1>
            <p className="text-xl mb-8">Muckleshoot Casino, Downtown Auburn, Lea Hill & all neighborhoods</p>
            <Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold inline-block">BOOK NOW</Link>
          </div>
        </section>
        <section className="py-16 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Auburn Limo Routes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg"><h3 className="font-bold mb-2">Auburn ↔ Sea-Tac</h3><p className="text-emerald-700 font-bold">From $90</p></div>
              <div className="bg-gray-50 p-6 rounded-lg"><h3 className="font-bold mb-2">Auburn ↔ Muckleshoot Casino</h3><p className="text-emerald-700 font-bold">From $65</p></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export function FederalWayPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Federal Way WA | South King County Airport Limo | Federal Way Limousine</title>
        <meta name="description" content="Federal Way limo service - Commons, Twin Lakes, all areas. Sea-Tac airport transfers. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/federal-way/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-emerald-900 to-emerald-700 text-white">
          <div className="text-center px-4">
            <h1 className="text-5xl font-extrabold mb-4">Federal Way Limo Service</h1>
            <p className="text-xl mb-8">Federal Way Commons, Twin Lakes, Steel Lake & all neighborhoods</p>
            <Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link>
          </div>
        </section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Sea-Tac Airport ↔ Federal Way</h2><p className="text-xl text-gray-700 mb-6">16 miles | 20-35 minutes | From $85</p><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function IssaquahPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Issaquah WA | Issaquah Highlands Transportation | Mountain Limo</title>
        <meta name="description" content="Issaquah limo service - Highlands, Gilman Village, downtown. Airport, corporate, events. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/issaquah/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-emerald-950 to-black text-white">
          <div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Issaquah Limo Service<br /><span className="text-[#d4af37]">Mountain Foothills Transportation</span></h1><p className="text-xl mb-8">Issaquah Highlands, Gilman Village, Historic Issaquah & beyond</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div>
        </section>
        <section className="py-16 bg-white"><div className="max-w-5xl mx-auto px-4"><div className="grid md:grid-cols-3 gap-6">{['Issaquah Highlands', 'Gilman Village', 'Talus', 'Providence Point', 'Historic Downtown', 'Squak Mountain'].map(a => <div key={a} className="bg-gray-50 p-6 rounded-lg"><h3 className="font-bold">{a}</h3></div>)}</div></div></section>
      </div>
    </>
  );
}

export function SammamishPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Sammamish WA | Klahanie Transportation | Sammamish Limousine</title>
        <meta name="description" content="Sammamish limo service - Klahanie, Pine Lake, Sahalee. Airport transfers, corporate. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/sammamish/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-emerald-900 to-emerald-700 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Sammamish Limo Service</h1><p className="text-xl mb-8">Klahanie, Pine Lake, Sahalee, Beaver Lake & all Sammamish neighborhoods</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-6">Premium Sammamish Transportation</h2><p className="text-lg text-gray-700 mb-8">Serving Sammamish's upscale communities with luxury limo service to Sea-Tac, Bellevue, Seattle & beyond.</p><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold">Book Your Ride</Link></div></section>
      </div>
    </>
  );
}

export function WoodinvillePage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Woodinville WA | Wine Tour Limousine | Winery Transportation</title>
        <meta name="description" content="Woodinville limo service - Wine country tours, corporate, airport. 100+ wineries. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/woodinville/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-purple-900 to-emerald-900 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Woodinville Wine Country Limo<br /><span className="text-[#d4af37]">Premier Winery Tours</span></h1><p className="text-xl mb-8">100+ wineries | Chateau Ste. Michelle | Columbia Winery | DeLille Cellars</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK WINE TOUR</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-5xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-6">Woodinville Winery Tours</h2><p className="text-xl text-gray-700 mb-8">4-8 hour private wine tours | From $85/hour | Professional chauffeur included</p><div className="bg-purple-50 p-8 rounded-xl"><h3 className="text-2xl font-bold mb-4">Most Popular Tour: 6-Hour Woodinville Experience</h3><p className="text-lg mb-4">Visit 4-6 wineries | Lunch stop included | $510 total</p><Link to="/book-now" className="bg-purple-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Wine Tour</Link></div></div></section>
      </div>
    </>
  );
}

export function MercerIslandPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Mercer Island WA | Island Limousine | Lake Washington Transportation</title>
        <meta name="description" content="Mercer Island limo service - Town Center, waterfront, all island areas. Airport transfers. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/mercer-island/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-900 to-emerald-800 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Mercer Island Limo Service</h1><p className="text-xl mb-8">Town Center, North End, South End & all island neighborhoods</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Mercer Island ↔ Sea-Tac Airport</h2><p className="text-xl mb-6">17 miles | 25-40 minutes | From $95</p><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function SeaTacPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service SeaTac WA | Airport Hotel Transportation | Sea-Tac Limousine</title>
        <meta name="description" content="SeaTac limo service - Airport hotels, Angle Lake. Instant airport pickups. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/seatac/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-sky-900 to-emerald-800 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">SeaTac Limo Service<br /><span className="text-[#d4af37]">Airport & Hotel Transportation</span></h1><p className="text-xl mb-8">Sea-Tac Airport, Angle Lake, McMicken Heights & all SeaTac hotels</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK AIRPORT LIMO</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-5xl mx-auto px-4"><h2 className="text-3xl font-bold text-center mb-8">SeaTac Airport Hotels We Service</h2><div className="grid md:grid-cols-3 gap-4">{['Hilton SeaTac', 'Marriott SeaTac', 'Radisson SeaTac', 'DoubleTree SeaTac', 'Courtyard SeaTac', 'Hampton Inn SeaTac', 'Holiday Inn SeaTac', 'Red Lion SeaTac', 'Cedarbrook Lodge'].map(h => <div key={h} className="bg-emerald-50 p-4 rounded-lg text-center font-semibold">{h}</div>)}</div></div></section>
      </div>
    </>
  );
}

export function TukwilaPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Tukwila WA | Southcenter Mall Transportation | Tukwila Limousine</title>
        <meta name="description" content="Tukwila limo service - Westfield Southcenter, hotels, airport. Shopping transportation. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/tukwila/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-emerald-900 to-gray-800 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Tukwila Limo Service</h1><p className="text-xl mb-8">Westfield Southcenter, Hotels, Foster & all Tukwila areas</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Southcenter Mall ↔ Sea-Tac Airport</h2><p className="text-xl mb-6">Just 6 miles | 10-18 minutes | From $70</p><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold">Book Shopping Transfer</Link></div></section>
      </div>
    </>
  );
}

export function BurienPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Burien WA | Burien Airport Transportation | South King County Limo</title>
        <meta name="description" content="Burien limo service - Downtown, White Center, Seahurst. Near Sea-Tac. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/burien/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-green-900 to-emerald-800 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Burien Limo Service</h1><p className="text-xl mb-8">Downtown Burien, White Center, Seahurst & all neighborhoods</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Burien ↔ Sea-Tac Airport: From $75</h2><p className="text-lg text-gray-700 mb-6">Just 5 miles from the airport | 10-15 minute drive</p><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold">Book Airport Ride</Link></div></section>
      </div>
    </>
  );
}

export function ShorelinePage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Shoreline WA | Richmond Beach Transportation | Shoreline Limousine</title>
        <meta name="description" content="Shoreline limo service - Richmond Beach, Ridgecrest, all areas. Airport, Seattle, corporate. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/shoreline/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-900 to-emerald-900 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Shoreline Limo Service</h1><p className="text-xl mb-8">Richmond Beach, Ridgecrest, Echo Lake & all Shoreline neighborhoods</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-6">North Seattle Transportation</h2><p className="text-lg text-gray-700 mb-6">Shoreline ↔ Sea-Tac: From $100 | Shoreline ↔ Downtown Seattle: From $70</p><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold">Book Your Ride</Link></div></section>
      </div>
    </>
  );
}

export function MapleValleyPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Maple Valley WA | Black Diamond Transportation | East King County Limo</title>
        <meta name="description" content="Maple Valley limo service - Town Center, Lake Wilderness, all areas. Airport transfers. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/maple-valley/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-green-900 to-emerald-700 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Maple Valley Limo Service</h1><p className="text-xl mb-8">Town Center, Lake Wilderness, Black Diamond & surrounding areas</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Maple Valley ↔ Sea-Tac Airport</h2><p className="text-xl mb-6">28 miles | 35-50 minutes | From $115</p><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function CovingtonPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Covington WA | Southeast King County Transportation | Covington Limousine</title>
        <meta name="description" content="Covington limo service - Town Center, Jenkins Creek, all areas. Airport, Seattle. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/king-county/covington/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-emerald-900 to-teal-800 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Covington Limo Service</h1><p className="text-xl mb-8">Town Center, Jenkins Creek, Timberlane & all Covington neighborhoods</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Covington ↔ Sea-Tac Airport: From $105</h2><p className="text-lg text-gray-700 mb-6">Professional limo service from southeast King County to Sea-Tac, Seattle & beyond.</p><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold">Book Your Ride</Link></div></section>
      </div>
    </>
  );
}
