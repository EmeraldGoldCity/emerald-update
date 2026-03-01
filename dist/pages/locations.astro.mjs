import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../chunks/MainLayout_CyR9wpzv.mjs';
export { renderers } from '../renderers.mjs';

const $$Locations = createComponent(($$result, $$props, $$slots) => {
  const locations = [
    {
      title: "King County",
      slug: "king-county",
      description: "Seattle, Bellevue, Redmond, Kirkland, Renton, and more",
      image: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=600&h=400&fit=crop&q=75&fm=webp&auto=format"
    },
    {
      title: "Snohomish County",
      slug: "snohomish-county",
      description: "Everett, Lynnwood, Edmonds, Bothell, and surrounding areas",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&q=75&fm=webp&auto=format"
    },
    {
      title: "Pierce County",
      slug: "pierce-county",
      description: "Tacoma, Lakewood, Puyallup, University Place, and more",
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&h=400&fit=crop&q=75&fm=webp&auto=format"
    },
    {
      title: "Spokane",
      slug: "spokane",
      description: "Eastern Washington's largest city and surrounding areas",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop&q=75&fm=webp&auto=format"
    },
    {
      title: "Wenatchee",
      slug: "wenatchee",
      description: "Central Washington wine country and outdoor recreation",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&q=75&fm=webp&auto=format"
    },
    {
      title: "Seattle",
      slug: "seattle",
      description: "Downtown, Capitol Hill, Queen Anne, Ballard, and all neighborhoods",
      image: "https://images.unsplash.com/photo-1518093661910-c9fd25c8a4de?w=600&h=400&fit=crop&q=75&fm=webp&auto=format"
    },
    {
      title: "Bellevue",
      slug: "bellevue",
      description: "Bellevue downtown, Crossroads, Factoria, and Eastside",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop&q=75&fm=webp&auto=format"
    },
    {
      title: "Tacoma",
      slug: "tacoma",
      description: "Tacoma downtown, Stadium District, Point Defiance, and surrounding areas",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop&q=75&fm=webp&auto=format"
    },
    {
      title: "Everett",
      slug: "everett",
      description: "Everett, Mukilteo, Marysville, and North Sound region",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&q=75&fm=webp&auto=format"
    },
    {
      title: "Redmond",
      slug: "redmond",
      description: "Microsoft campus, downtown Redmond, and Eastside tech corridor",
      image: "https://images.unsplash.com/photo-1518050774789-23e0f3c8d611?w=600&h=400&fit=crop&q=75&fm=webp&auto=format"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Service Locations - Emerald City Limos Seattle Area Coverage", "description": "Emerald City Limos provides luxury limousine and black car service throughout King, Snohomish, and Pierce counties, plus Spokane and Wenatchee. Professional transportation covering 300+ miles.", "keywords": "seattle limo service locations, king county car service, snohomish county limo, pierce county transportation, spokane limo service, emerald city limos" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="relative h-[400px] flex items-center justify-center overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-emerald-900/80 z-10"></div> <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200" alt="Pacific Northwest Landscape" class="absolute inset-0 w-full h-full object-cover" loading="eager"> <div class="relative z-20 text-center text-white max-w-4xl mx-auto px-4"> <h1 class="text-5xl md:text-6xl font-bold mb-4">
Service <span class="text-[#d4af37]">Locations</span> </h1> <p class="text-xl text-gray-200">
Serving the Greater Seattle area and beyond - 300+ miles of luxury transportation coverage
</p> </div> </section> <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-4xl font-bold text-gray-900 mb-4">
Comprehensive <span class="text-emerald-700">Regional Coverage</span> </h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
From downtown Seattle to Spokane, we provide premium transportation throughout Washington State
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${locations.map((location) => renderTemplate`<a${addAttribute(`/location/${location.slug}`, "href")} class="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-emerald-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"> <div class="relative h-48 overflow-hidden"> <img${addAttribute(location.image, "src")}${addAttribute(location.title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> <div class="absolute bottom-0 left-0 right-0 p-4"> <h3 class="text-2xl font-bold text-white">${location.title}</h3> </div> </div> <div class="p-6"> <p class="text-gray-600 mb-4">${location.description}</p> <div class="flex items-center text-emerald-700 font-semibold group-hover:text-emerald-800 transition-colors"> <span>View Details</span> <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </div> </div> </a>`)} </div> </div> </section> <section class="py-20 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-4xl font-bold mb-4">Available Throughout Our Service Area</h2> <p class="text-xl text-gray-200">Premium services no matter where you're headed</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <div class="text-center"> <div class="text-5xl mb-4">✈️</div> <h3 class="text-xl font-bold mb-2">Airport Transfers</h3> <p class="text-gray-300">Sea-Tac, Boeing Field, Paine Field</p> </div> <div class="text-center"> <div class="text-5xl mb-4">🏢</div> <h3 class="text-xl font-bold mb-2">Corporate Events</h3> <p class="text-gray-300">Executive transportation across all regions</p> </div> <div class="text-center"> <div class="text-5xl mb-4">💍</div> <h3 class="text-xl font-bold mb-2">Special Occasions</h3> <p class="text-gray-300">Weddings, proms, and celebrations</p> </div> <div class="text-center"> <div class="text-5xl mb-4">🏈</div> <h3 class="text-xl font-bold mb-2">Game Day Transport</h3> <p class="text-gray-300">Sports venues and entertainment</p> </div> </div> </div> </section> <section class="py-20 bg-white"> <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"> <h2 class="text-4xl font-bold text-gray-900 mb-6">Ready to Book Your Ride?</h2> <p class="text-xl text-gray-600 mb-8">
Available 24/7 for all your transportation needs
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/book-now" class="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold transition-all">
BOOK NOW
</a> <a href="tel:+12065959675" class="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold transition-all">
Call (206) 595-9675
</a> </div> </div> </section> ` })}`;
}, "/workspaces/Emctryout2/src/pages/locations.astro", void 0);

const $$file = "/workspaces/Emctryout2/src/pages/locations.astro";
const $$url = "/locations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Locations,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
