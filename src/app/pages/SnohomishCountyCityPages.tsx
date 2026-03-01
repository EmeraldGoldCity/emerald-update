import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// ========== EVERETT ==========
export function EverettPage() {
  const neighborhoods = [
    { name: 'Downtown Everett', desc: 'Waterfront district with marina, hotels, restaurants. Boeing employment center.', landmarks: 'Port Gardner Bay, Marina Village, Everett Performing Arts Center' },
    { name: 'Bayside', desc: 'North Everett waterfront neighborhood with views across Puget Sound.', landmarks: 'Forest Park, Pigeon Creek, waterfront parks' },
    { name: 'Riverside', desc: 'Historic neighborhood along Snohomish River. Family-friendly community.', landmarks: 'Langus Riverfront Park, golf courses, trails' },
    { name: 'Silver Lake', desc: 'East Everett residential area surrounding Silver Lake.', landmarks: 'Silver Lake, parks, local shopping' },
    { name: 'Casino Road', desc: 'Commercial corridor connecting to Mukilteo and Paine Field.', landmarks: 'Boeing facilities, retail corridors' },
    { name: 'Lowell', desc: 'South Everett neighborhood near Boeing facilities.', landmarks: 'Boeing factory, local parks' },
  ];

  return (
    <>
      <Helmet>
        <title>Limo Service Everett WA | Paine Field Airport Limo | Boeing Transportation</title>
        <meta name="description" content="Everett limo service - Downtown, Paine Field, Boeing, all neighborhoods. Airport transfers, corporate. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/everett/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1734106188965-31b6354039d5?w=1920&h=1080&fit=crop&q=80" alt="Everett Washington" className="w-full h-full object-cover" loading="eager" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-black/60"></div>
          <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
            <span className="inline-block bg-emerald-600 px-4 py-1 rounded-full mb-4 text-sm font-semibold">Everett, WA</span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Everett Limo Service<br /><span className="text-[#d4af37]">Boeing & Paine Field Transportation</span></h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Premium limousine service for Everett's waterfront, Boeing facilities, Paine Field airport & all neighborhoods.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/book-now" className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-bold">BOOK EVERETT LIMO</Link>
              <a href="tel:+12065959675" className="border-2 border-white px-8 py-4 rounded-lg font-bold">(206) 595-9675</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Everett Neighborhoods We Serve</h2>
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
                <h3 className="text-2xl font-bold mb-4">Sea-Tac ↔ Everett</h3>
                <p className="text-lg mb-6">38 miles | 40-75 minutes | From $145</p>
                <Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Paine Field (PAE) ↔ Anywhere</h3>
                <p className="text-lg mb-6">Everett's commercial airport | From $75</p>
                <Link to="/book-now" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Paine Field Limo</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Boeing Factory Transportation</h2>
            <p className="text-xl mb-8">We service all Boeing Everett facilities including the Future of Flight tour center. Corporate accounts available.</p>
            <a href="tel:+12065959675" className="bg-white text-emerald-700 px-10 py-4 rounded-lg font-bold inline-block">Call (206) 595-9675</a>
          </div>
        </section>
      </div>
    </>
  );
}

// ========== LYNNWOOD ==========
export function LynnwoodPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Lynnwood WA | Convention Center Transportation | Alderwood Mall Limo</title>
        <meta name="description" content="Lynnwood limo service - City Center, Alderwood Mall, Convention Center. Airport transfers, corporate. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/lynnwood/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-emerald-900 to-emerald-700 text-white">
          <div className="text-center px-4">
            <h1 className="text-5xl font-extrabold mb-4">Lynnwood Limo Service<br /><span className="text-[#d4af37]">Convention Center Hub</span></h1>
            <p className="text-xl mb-8">City Center, Alderwood Mall, Meadowdale & all Lynnwood neighborhoods</p>
            <Link to="/book-now" className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-10 py-4 rounded-lg font-bold inline-block">BOOK LYNNWOOD LIMO</Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {['City Center', 'Alderwood', 'Meadowdale', 'North Lynnwood', 'Convention Center District', 'Scriber Lake'].map(area => (
                <div key={area} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg">{area}</h3>
                  <p className="text-sm text-gray-600 mt-2">Professional limo service to all Lynnwood areas</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-emerald-50 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Sea-Tac ↔ Lynnwood: From $115</h3>
              <p className="text-lg mb-6">26 miles | 30-55 minutes | Light rail adjacent</p>
              <Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold inline-block">Book Airport Ride</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// ========== EDMONDS ==========
export function EdmondsPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Edmonds WA | Ferry Terminal Transportation | Waterfront Limousine</title>
        <meta name="description" content="Edmonds limo service - Downtown waterfront, ferry terminal, all neighborhoods. Elegant transportation. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/edmonds/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1698601628728-eaceac1888a3?w=1920&h=1080&fit=crop&q=80" alt="Washington waterfront" className="w-full h-full object-cover" loading="eager" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-emerald-900/75"></div>
          <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-extrabold mb-4">Edmonds Limo Service<br /><span className="text-[#d4af37]">Waterfront Elegance</span></h1>
            <p className="text-xl mb-8">Downtown waterfront, ferry terminal, Bowl, Westgate & all Edmonds neighborhoods</p>
            <Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Edmonds Waterfront Transportation</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">From the charming downtown waterfront to the Kingston ferry terminal, we provide elegant limo service throughout Edmonds and connections to Seattle, Sea-Tac, and beyond.</p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg"><h3 className="font-bold mb-2">Sea-Tac ↔ Edmonds</h3><p className="text-emerald-700 font-bold">From $110</p></div>
              <div className="bg-gray-50 p-6 rounded-lg"><h3 className="font-bold mb-2">Edmonds Ferry Connections</h3><p className="text-emerald-700 font-bold">From $85</p></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// ========== BOTHELL ==========
export function BothellPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Bothell WA | UW Bothell Transportation | Canyon Park Limousine</title>
        <meta name="description" content="Bothell limo service - Downtown, Canyon Park, UW Bothell, North Creek. Airport transfers. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/bothell/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-emerald-800 to-blue-900 text-white">
          <div className="text-center px-4">
            <h1 className="text-5xl font-extrabold mb-4">Bothell Limo Service</h1>
            <p className="text-xl mb-8">Downtown Bothell, Canyon Park, UW Bothell, North Creek & all areas</p>
            <Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Downtown Bothell', 'Canyon Park', 'North Creek', 'UW Bothell', 'Queensborough', 'Brickyard'].map(area => (
                <div key={area} className="bg-gray-50 p-6 rounded-lg"><h3 className="font-bold">{area}</h3></div>
              ))}
            </div>
            <div className="mt-12 text-center bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Bothell ↔ Sea-Tac: From $105</h3>
              <Link to="/book-now" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// ========== MARYSVILLE ==========
export function MarysvillePage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Marysville WA | Tulalip Casino Transportation | Quil Ceda Village Limo</title>
        <meta name="description" content="Marysville limo service - Downtown, Tulalip Casino, Smokey Point. Concert transportation, gaming. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/marysville/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-purple-900 to-emerald-800 text-white">
          <div className="text-center px-4">
            <h1 className="text-5xl font-extrabold mb-4">Marysville Limo Service<br /><span className="text-[#d4af37]">Tulalip Casino Hub</span></h1>
            <p className="text-xl mb-8">Downtown, Tulalip Resort Casino, Smokey Point, Quil Ceda Village & all Marysville areas</p>
            <Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK CASINO LIMO</Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Tulalip Casino Transportation</h2>
            <p className="text-lg text-gray-700 mb-8">Premium limo service to Tulalip Resort Casino for concerts, gaming, dining and events. Safe, luxurious, reliable.</p>
            <div className="bg-purple-50 p-8 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Seattle ↔ Tulalip Casino</h3>
              <p className="text-lg mb-4">35 miles | 35-60 minutes | From $135</p>
              <Link to="/book-now" className="bg-purple-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Casino Ride</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// ========== MUKILTEO ==========
export function MukilteoPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Mukilteo WA | Ferry Terminal Limo | Paine Field Transportation</title>
        <meta name="description" content="Mukilteo limo service - Old Town, ferry terminal, Harbour Pointe, Paine Field. Whidbey Island connections. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/mukilteo/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-800 to-emerald-700 text-white">
          <div className="text-center px-4">
            <h1 className="text-5xl font-extrabold mb-4">Mukilteo Limo Service<br /><span className="text-[#d4af37]">Ferry & Airport Hub</span></h1>
            <p className="text-xl mb-8">Old Town, Ferry Terminal, Harbour Pointe, Paine Field & all Mukilteo areas</p>
            <Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Mukilteo Ferry Connections</h3>
                <p className="text-lg mb-4">Drop-off and pickup coordinated with Whidbey Island ferry schedule</p>
                <Link to="/book-now" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Book Ferry Transfer</Link>
              </div>
              <div className="bg-emerald-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Paine Field Airport Limo</h3>
                <p className="text-lg mb-4">Commercial terminal service for Alaska Airlines flights</p>
                <Link to="/book-now" className="bg-emerald-700 text-white px-6 py-3 rounded-lg font-bold inline-block">Book Airport Limo</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// ========== LAKE STEVENS ==========
export function LakeStevensPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Lake Stevens WA | Lakefront Transportation | Chapel Hill Limousine</title>
        <meta name="description" content="Lake Stevens limo service - Downtown, Frontier Village, Hartford, all lakefront areas. Airport transfers. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/lake-stevens/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-teal-900 to-emerald-800 text-white">
          <div className="text-center px-4">
            <h1 className="text-5xl font-extrabold mb-4">Lake Stevens Limo Service</h1>
            <p className="text-xl mb-8">Downtown, Frontier Village, Hartford, Chapel Hill & all lakefront neighborhoods</p>
            <Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Lake Stevens ↔ Sea-Tac Airport</h2>
            <p className="text-xl mb-6">45 miles | 50-80 minutes | From $155</p>
            <Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link>
          </div>
        </section>
      </div>
    </>
  );
}

// ========== SNOHOMISH ==========
export function SnohomishCityPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Snohomish WA | Wedding Venue Transportation | Historic Downtown Limo</title>
        <meta name="description" content="Snohomish limo service - Historic downtown, wedding venues, all areas. Hidden Meadows, Swans Trail Farms. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/snohomish/" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-amber-900 to-emerald-800 text-white">
          <div className="text-center px-4">
            <h1 className="text-5xl font-extrabold mb-4">Snohomish Limo Service<br /><span className="text-[#d4af37]">Wedding Capital Transportation</span></h1>
            <p className="text-xl mb-8">Historic Downtown, Hidden Meadows, Swans Trail Farms, Thomas Family Farm & all wedding venues</p>
            <Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK WEDDING LIMO</Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Snohomish Wedding Venue Transportation</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {['Hidden Meadows', 'Swans Trail Farms', 'Thomas Family Farm', 'Lord Hill Farms', 'Meadow Creek Farm', 'Historic Downtown Snohomish'].map(venue => (
                <div key={venue} className="bg-amber-50 p-6 rounded-lg text-center">
                  <h3 className="font-bold text-lg">{venue}</h3>
                  <p className="text-sm text-gray-600 mt-2">Premium wedding limo service</p>
                </div>
              ))}
            </div>
            <div className="text-center bg-emerald-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Wedding Limo Packages</h3>
              <p className="text-lg mb-6">Stretch limousines, luxury SUVs, party buses available</p>
              <Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Wedding Transportation</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Compact versions for remaining cities
export function MountlakeTerracePage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Mountlake Terrace WA | Light Rail Station Transportation</title>
        <meta name="description" content="Mountlake Terrace limo service - Town Center, light rail station, all areas. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/mountlake-terrace/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-emerald-900 to-blue-800 text-white">
          <div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Mountlake Terrace Limo Service</h1><p className="text-xl mb-8">Town Center, Ballinger, Light Rail Station & all neighborhoods</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div>
        </section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Mountlake Terrace ↔ Sea-Tac: From $105</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function MillCreekPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Mill Creek WA | Town Center Transportation | North Creek Limousine</title>
        <meta name="description" content="Mill Creek limo service - Town Center, North Creek, Thomas Lake. Airport transfers. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/mill-creek/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-green-900 to-emerald-700 text-white">
          <div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Mill Creek Limo Service</h1><p className="text-xl mb-8">Town Center, North Creek, Thomas Lake, Country Club & all Mill Creek neighborhoods</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div>
        </section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Mill Creek ↔ Sea-Tac: From $110</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function ArlingtonPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Arlington WA | Angel of the Winds Casino | Arlington Airport Limo</title>
        <meta name="description" content="Arlington limo service - Downtown, Smokey Point, Angel of the Winds Casino, airport. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/arlington/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-red-900 to-emerald-800 text-white">
          <div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Arlington Limo Service<br /><span className="text-[#d4af37]">Casino & Airport Hub</span></h1><p className="text-xl mb-8">Downtown, Angel of the Winds Casino, Smokey Point, Arlington Airport</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div>
        </section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Arlington ↔ Sea-Tac: From $165</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function MonroePage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Monroe WA | Evergreen Fairgrounds Transportation | Highway 2 Limo</title>
        <meta name="description" content="Monroe limo service - Downtown, Lake Tye, Evergreen State Fairgrounds. Highway 2 corridor. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/monroe/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-emerald-900 to-green-800 text-white">
          <div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Monroe Limo Service</h1><p className="text-xl mb-8">Downtown, Lake Tye, Evergreen State Fairgrounds, Highway 2 gateway to the mountains</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div>
        </section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Monroe ↔ Sea-Tac: From $170</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function StanwoodPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Stanwood WA | Camano Island Transportation | Warm Beach Limo</title>
        <meta name="description" content="Stanwood and Camano Island limo service - Downtown, Warm Beach, all areas. Airport transfers. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/stanwood/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-900 to-emerald-800 text-white">
          <div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Stanwood & Camano Island Limo Service</h1><p className="text-xl mb-8">Downtown Stanwood, Warm Beach, Camano Island, Kayak Point & surrounding areas</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div>
        </section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Stanwood ↔ Sea-Tac: From $185</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function GraniteFallsPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Granite Falls WA | Mountain Loop Highway Transportation</title>
        <meta name="description" content="Granite Falls limo service - Downtown, Mountain Loop Highway gateway. Cascade foothills. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/granite-falls/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-gray-900 to-emerald-900 text-white">
          <div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Granite Falls Limo Service</h1><p className="text-xl mb-8">Downtown, Mountain Loop Highway gateway, Verlot, Robe Valley & Cascade foothills</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div>
        </section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Granite Falls ↔ Sea-Tac: From $180</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}

export function SultanPage() {
  return (
    <>
      <Helmet>
        <title>Limo Service Sultan WA | Stevens Pass Corridor | Sky Valley Transportation</title>
        <meta name="description" content="Sultan limo service - Downtown, Startup, Gold Bar, Index, Stevens Pass corridor. Mountain gateway. (206) 595-9675." />
        <link rel="canonical" href="https://emeraldcitylimos.com/locations/snohomish-county/sultan/" />
      </Helmet>
      <div className="min-h-screen">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-indigo-900 to-emerald-800 text-white">
          <div className="text-center px-4"><h1 className="text-5xl font-extrabold mb-4">Sultan & Sky Valley Limo Service</h1><p className="text-xl mb-8">Downtown Sultan, Startup, Gold Bar, Index, Stevens Pass corridor & Sky Valley communities</p><Link to="/book-now" className="bg-[#d4af37] text-black px-10 py-4 rounded-lg font-bold">BOOK NOW</Link></div>
        </section>
        <section className="py-16 bg-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl font-bold mb-4">Sultan ↔ Sea-Tac: From $195</h2><Link to="/book-now" className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold inline-block">Book Airport Transfer</Link></div></section>
      </div>
    </>
  );
}
