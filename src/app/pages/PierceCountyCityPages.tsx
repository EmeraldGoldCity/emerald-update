import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// ========== TACOMA ==========
export function TacomaPage() {
  const neighborhoods = [
    { name: 'Downtown Tacoma', desc: 'Museum District, waterfront, UW Tacoma, hotels, restaurants.', landmarks: 'Museum of Glass, Convention Center, Union Station' },
    { name: 'Stadium District', desc: 'Historic residential area with Stadium High School and Tacoma Dome nearby.', landmarks: 'Stadium Bowl, Wright Park, historic homes' },
    { name: 'Proctor District', desc: 'North End shopping and dining hub. Family-friendly community.', landmarks: 'Proctor Street, Blue Mouse Theatre, local shops' },
    { name: 'Point Defiance', desc: 'Zoo, aquarium, park, and waterfront trails. Tacoma\'s natural crown jewel.', landmarks: 'Point Defiance Zoo, Owen Beach, Fort Nisqually' },
    { name: 'Hilltop', desc: 'Diverse neighborhood south of downtown with cultural history.', landmarks: 'MLK Jr Community Center, Hilltop businesses' },
    { name: 'Old Town', desc: 'Historic waterfront neighborhood with charming homes and shops.', landmarks: 'Old Town Dock, Ruston Way Waterfront, Point Ruston' },
  ];

  return (
    <>
      <Helmet>
        <title>Limo Service Tacoma WA | Downtown Tacoma Limousine | Tacoma Dome Transportation</title>
        <meta name="description" content="Tacoma limo service - Downtown, Stadium District, Point Defiance, all neighborhoods. Airport, Tacoma Dome, corporate. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/tacoma/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1714793982247-deed602f7d57?w=1920&h=1080&fit=crop&q=80" alt="Tacoma Washington" className="w-full h-full object-cover" loading="eager" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-black/60"></div>
          <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
            <span className="inline-block bg-emerald-600 px-4 py-1 rounded-full mb-4 text-sm font-semibold">Tacoma, WA</span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Tacoma Limo Service<br /><span className="text-[#d4af37]">City of Destiny Transportation</span></h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Premium limousine service for Tacoma's revitalized waterfront, Museum District, Tacoma Dome & all neighborhoods.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/book-now" className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-bold">BOOK TACOMA LIMO</Link>
              <a href="tel:+12065959675" className="border-2 border-white px-8 py-4 rounded-lg font-bold">(206) 595-9675</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Tacoma Neighborhoods We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {neighborhoods.map((n, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-lg mb-2">{n.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{n.desc}</p>
                  <p className="text-xs text-gray-500">{n.landmarks}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Sea-Tac ↔ Downtown Tacoma</h3>
                <p className="text-lg mb-6">32 miles | 30-50 minutes | From $125</p>
                <Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link>
              </div>
              
              <div className="bg-purple-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Tacoma Dome Events</h3>
                <p className="text-lg mb-6">Concerts, conventions, sports | From $85</p>
                <Link to="/book-now" className="bg-purple-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Event Limo</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Tacoma Museum District & Waterfront</h2>
            <p className="text-xl mb-8">Museum of Glass, Chihuly Bridge, UW Tacoma campus, waterfront restaurants. We service all downtown Tacoma landmarks.</p>
            <a href="tel:+12065959675" className="bg-white text-emerald-700 px-10 py-4 rounded-lg font-bold inline-block">Call (206) 595-9675</a>
          </div>
        </section>
      </div>
    </>
  );
}

// ========== LAKEWOOD ==========
export function LakewoodPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Lakewood WA | JBLM Transportation | Military Base Limousine</title>
        <meta name="description" content="Lakewood limo service - Towne Center, JBLM main gate, Tillicum, all areas. Military discount. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/lakewood/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-900 to-emerald-800 text-white">
          <div className="text-center px-4">
            <h1 className="text-5xl font-extrabold mb-4">Lakewood Limo Service<br /><span className="text-[#d4af37]">JBLM & Military Family Hub</span></h1>
            <p className="text-xl mb-8">Towne Center, JBLM Main Gate, Tillicum, American Lake & all Lakewood neighborhoods</p>
            <Link to="/book-now" className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-10 py-4 rounded-lg font-bold inline-block">BOOK LAKEWOOD LIMO</Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {['Lakewood Towne Center', 'Tillicum', 'JBLM Main Gate Area', 'American Lake', 'Springbrook', 'Woodbrook'].map(area => (
                <div key={area} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg">{area}</h3>
                  <p className="text-sm text-gray-600 mt-2">Professional limo service to all Lakewood areas</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">🎖️ Military Discount Available</h3>
              <p className="text-lg mb-6">Proudly serving JBLM families | Sea-Tac ↔ Lakewood: From $135</p>
              <Link to="/book-now" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-block">Book Military Limo</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// ========== PUYALLUP ==========
export function PuyallupPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Puyallup WA | Washington State Fair Transportation | Puyallup Limousine</title>
        <meta name="description" content="Puyallup limo service - Downtown, South Hill, WA State Fair, Sounder station. Airport transfers. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/puyallup/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-purple-900 to-emerald-800 text-white">
          <div className="text-center px-4">
            <h1 className="text-5xl font-extrabold mb-4">Puyallup Limo Service<br /><span className="text-[#d4af37]">Fair City Transportation</span></h1>
            <p className="text-xl mb-8">Downtown, South Hill, WA State Fair, Sounder Station & all Puyallup neighborhoods</p>
            <Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Washington State Fair Transportation</h2>
            <p className="text-lg text-gray-700 mb-8">Skip the $20 parking fee and 45-minute walk. We drop you at the gate and pick you up when you're done. Perfect for families and groups.</p>
            <div className="bg-purple-50 p-8 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">🎡 Fair Season Special</h3>
              <p className="text-lg mb-4">Seattle / King County ↔ WA State Fair: From $125</p>
              <Link to="/book-now" className="bg-purple-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Fair Limo</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// ========== UNIVERSITY PLACE ==========
export function UniversityPlacePage() {
  return (
    <>
      <Helmet>
        <title>Limo Service University Place WA | Chambers Bay Transportation | Fircrest Limousine</title>
        <meta name="description" content="University Place limo service - Chambers Bay, Bridgeport, Fircrest, Sunset Beach. Golf, waterfront. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/university-place/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-green-900 to-emerald-700 text-white">
          <div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">University Place Limo Service</h1><p className="text-xl mb-8">Chambers Bay, Bridgeport, Fircrest, Sunset Beach & all University Place neighborhoods</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">⛳ Chambers Bay Golf Course</h3>
                <p className="text-lg mb-4">2015 U.S. Open venue. Championship golf course with Puget Sound views.</p>
                <Link to="/book-now" className="bg-emerald-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Book Golf Limo</Link>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">University Place ↔ Sea-Tac</h3>
                <p className="text-lg mb-4">30 miles | 35-55 minutes | From $125</p>
                <Link to="/book-now" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// ========== GIG HARBOR ==========
export function GigHarborPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Gig Harbor WA | Waterfront Limousine | Narrows Bridge Transportation</title>
        <meta name="description" content="Gig Harbor limo service - Downtown waterfront, Purdy, Fox Island, Artondale. Narrows Bridge toll included. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/gig-harbor/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-800 to-emerald-700 text-white">
          <div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Gig Harbor Limo Service<br /><span className="text-[#d4af37]">Waterfront Elegance</span></h1><p className="text-xl mb-8">Downtown Waterfront, Purdy, Fox Island, Artondale & all Gig Harbor areas</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Gig Harbor ↔ Sea-Tac Airport</h2>
            <p className="text-xl mb-6">55 miles | 55-80 minutes | Via Tacoma Narrows Bridge | From $165</p>
            <p className="text-lg text-gray-700 mb-8">Narrows Bridge toll included. No surcharges. Flat-rate luxury transportation.</p>
            <Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Gig Harbor Limo</Link>
          </div>
        </section>
      </div>
    </>
  );
}

// ========== BONNEY LAKE ==========
export function BonneyLakePage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Bonney Lake WA | Lake Tapps Transportation | East Pierce County Limo</title>
        <meta name="description" content="Bonney Lake limo service - Town Center, Lake Tapps, Prairie Ridge, all areas. Airport transfers. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/bonney-lake/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-teal-900 to-emerald-800 text-white">
          <div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Bonney Lake Limo Service</h1><p className="text-xl mb-8">Town Center, Lake Tapps, Sky Island, Prairie Ridge & all Bonney Lake neighborhoods</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-6">Bonney Lake ↔ Sea-Tac Airport</h2><p className="text-xl mb-6">40 miles | 45-70 minutes | From $155</p><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div>
        </section>
      </div>
    </>
  );
}

// Compact versions for remaining cities
export function SpanawayPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Spanaway WA | JBLM South Gate Transportation | Elk Plain Limousine</title>
        <meta name="description" content="Spanaway limo service - Spanaway Lake, Elk Plain, JBLM South Gate, Frederickson. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/spanaway/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-emerald-900 to-gray-800 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Spanaway Limo Service</h1><p className="text-xl mb-8">Spanaway Lake, Elk Plain, JBLM South Gate, Frederickson & all areas</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Spanaway ↔ Sea-Tac: From $145</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function FifePage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Fife WA | Emerald Queen Casino Transportation | I-5 Corridor Limo</title>
        <meta name="description" content="Fife limo service - Emerald Queen Casino, I-5 corridor hotels, outlet shopping. Casino night limos. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/fife/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-purple-900 to-emerald-800 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Fife Limo Service<br /><span className="text-[#d4af37]">Emerald Queen Casino Hub</span></h1><p className="text-xl mb-8">Emerald Queen Casino, I-5 Corridor Hotels, Fife Commercial District</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK CASINO LIMO</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">🎰 Emerald Queen Casino Transportation</h2><p className="text-lg mb-6">Safe rides home guaranteed | Round-trip casino limo service from anywhere</p><Link to="/book-now" className="bg-purple-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Casino Ride</Link></div></section>
      </div>
    </>
  );
}

export function SteilacoomPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Steilacoom WA | Anderson Island Ferry | Historic Town Limousine</title>
        <meta name="description" content="Steilacoom limo service - Historic downtown, Anderson Island ferry, Sunnyside Beach. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/steilacoom/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-900 to-emerald-800 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Steilacoom Limo Service</h1><p className="text-xl mb-8">Historic Downtown, Anderson Island Ferry, Fort Steilacoom Park & all areas</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Steilacoom ↔ Sea-Tac: From $140</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function DuPontPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service DuPont WA | Northwest Landing Transportation | JBLM North Gate Limo</title>
        <meta name="description" content="DuPont limo service - DuPont Village, Northwest Landing, Eagle Pride Golf. Near JBLM. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/dupont/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-green-900 to-emerald-700 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">DuPont Limo Service</h1><p className="text-xl mb-8">DuPont Village, Northwest Landing, The Landing, Eagle Pride Golf & all DuPont areas</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">DuPont ↔ Sea-Tac: From $150</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function SumnerPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Sumner WA | Daffodil Festival Transportation | Sounder Station Limo</title>
        <meta name="description" content="Sumner limo service - Historic Main Street, Sounder Station, Daffodil Festival. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/sumner/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-yellow-900 to-emerald-800 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Sumner Limo Service</h1><p className="text-xl mb-8">Historic Main Street, Sounder Rail Station, Daffodil Festival & all Sumner neighborhoods</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Sumner ↔ Sea-Tac: From $130</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function OrtingPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Orting WA | Wedding Venue Transportation | Mount Rainier Gateway Limo</title>
        <meta name="description" content="Orting limo service - Wedding venues, downtown, Carbon River Trail, Mount Rainier gateway. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/orting/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-amber-900 to-emerald-800 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Orting Limo Service<br /><span className="text-[#d4af37]">Wedding Venue Capital</span></h1><p className="text-xl mb-8">Downtown Orting, Wedding Barns, Olallie Farm, Carbon River Trail & Mount Rainier Gateway</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK WEDDING LIMO</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">💍 Orting Wedding Venues</h2><p className="text-lg mb-6">Olallie Farm, Mountain View Manor, rustic barn venues with Mount Rainier views</p><Link to="/book-now" className="bg-amber-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Wedding Transportation</Link></div></section>
      </div>
    </>
  );
}

export function GrahamPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Graham WA | Kapowsin Transportation | Rural Pierce County Limo</title>
        <meta name="description" content="Graham limo service - Town Center, Kapowsin, Frontier Park, Meridian corridor. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/graham/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-green-900 to-emerald-800 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Graham Limo Service</h1><p className="text-xl mb-8">Graham Town Center, Kapowsin, Frontier Park & rural Pierce County estates</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Graham ↔ Sea-Tac: From $160</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function EdgewoodPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Edgewood WA | Surprise Lake Transportation | Meridian Corridor Limo</title>
        <meta name="description" content="Edgewood limo service - Community center, Surprise Lake, North Tapps, Meridian Ave. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/edgewood/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-teal-900 to-emerald-800 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Edgewood Limo Service</h1><p className="text-xl mb-8">Edgewood Community, Surprise Lake, North Tapps, Meridian Avenue Corridor</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Edgewood ↔ Sea-Tac: From $135</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function EatonvillePage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Eatonville WA | Northwest Trek | Mount Rainier Gateway Transportation</title>
        <meta name="description" content="Eatonville limo service - Northwest Trek Wildlife Park, Mount Rainier gateway, downtown. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/eatonville/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1548356936-754daeef305f?w=1920&h=1080&fit=crop&q=80" alt="Mount Rainier" className="w-full h-full object-cover" loading="eager" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-emerald-900/75"></div>
          <div className="relative z-20 text-center text-white px-4"><h1 className="text-5xl font-extrabold mb-4">Eatonville Limo Service<br /><span className="text-[#d4af37]">Mount Rainier Gateway</span></h1><p className="text-xl mb-8">Downtown Eatonville, Northwest Trek Wildlife Park, Ashford, Elbe & Mount Rainier Access</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div>
        </section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">🏔️ Mount Rainier National Park Tours</h2><p className="text-lg mb-6">4-8 hour charters from $95/hour | Paradise, Sunrise, Nisqually entrance</p><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Mountain Tour</Link></div></section>
      </div>
    </>
  );
}

export function BuckleyPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Buckley WA | Crystal Mountain Transportation | Foothills Trail Limo</title>
        <meta name="description" content="Buckley limo service - Downtown, Foothills Trail, Crystal Mountain access, White River. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/buckley/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-indigo-900 to-emerald-800 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Buckley Limo Service</h1><p className="text-xl mb-8">Downtown Buckley, Foothills Trail, Crystal Mountain Gateway, White River</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Buckley ↔ Sea-Tac: From $150</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function MiltonPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Milton WA | King-Pierce Border Transportation | Milton Limousine</title>
        <meta name="description" content="Milton limo service - Town Center, Surprise Lake, Milton Way, border area. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/milton/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-emerald-900 to-blue-800 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Milton Limo Service</h1><p className="text-xl mb-8">Milton Town Center, Surprise Lake, Milton Way, King-Pierce County Border Area</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Milton ↔ Sea-Tac: From $105</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function RustonPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Ruston WA | Point Ruston Waterfront | Point Defiance Transportation</title>
        <meta name="description" content="Ruston limo service - Point Ruston waterfront, shops, restaurants, Point Defiance entrance. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/pierce-county/ruston/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-900 to-emerald-800 text-white"><div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Ruston Limo Service</h1><p className="text-xl mb-8">Point Ruston Waterfront, Shops, Restaurants, Point Defiance Entrance, Ruston Way Trail</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div></section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Ruston ↔ Sea-Tac: From $130</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}
