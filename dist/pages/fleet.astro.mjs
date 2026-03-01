import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { c as createLucideIcon, $ as $$MainLayout } from '../chunks/MainLayout_CyR9wpzv.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import imgSprinterExterior from 'https://images.unsplash.com/photo-1549064233-945d7063292f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
import imgSprinterInterior1 from 'https://unsplash.com/photos/the-interior-of-a-car-vyvYqNO81CM';
import imgInfantSeat from 'https://images.pexels.com/photos/193997/pexels-photo-193997.jpeg';
export { renderers } from '../renderers.mjs';

/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);

/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);

function VehicleCarousel({ images, alt = "Vehicle" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  };
  if (images.length === 0) return null;
  return /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-48 mb-4 overflow-hidden", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: images[currentIndex],
        alt: `${alt} view ${currentIndex + 1}`,
        className: "max-w-full max-h-full object-contain transition-opacity duration-300"
      }
    ) }),
    images.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: goToPrevious,
          className: "absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity",
          "aria-label": "Previous image",
          children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: goToNext,
          className: "absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity",
          "aria-label": "Next image",
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-2", children: images.map((_, index) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setCurrentIndex(index),
          className: `w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-[#d4af37] w-6" : "bg-gray-300"}`,
          "aria-label": `Go to image ${index + 1}`
        },
        index
      )) })
    ] })
  ] });
}

const $$Fleet = createComponent(($$result, $$props, $$slots) => {
  const fleetHeroBg = "https://images.unsplash.com/photo-1720828979857-10fc03d19cfe?w=1920&h=1080&fit=crop&q=85&fm=webp&auto=format";
  const imgCarCadillacEscalade1 = "https://images.unsplash.com/photo-1768024175218-5878b8880eab?w=800&h=533&fit=crop&q=75&fm=webp&auto=format";
  const imgCarCadillacEscalade2 = "https://images.unsplash.com/photo-1768024175218-5878b8880eab?w=800&h=533&fit=crop&q=75&fm=webp&auto=format";
  const imgCarCadillacEscalade3 = "https://images.unsplash.com/photo-1768024175218-5878b8880eab?w=800&h=533&fit=crop&q=75&fm=webp&auto=format";
  const imgMercedesSClass = "https://images.unsplash.com/photo-1763789381416-7b94c5f97560?w=800&h=533&fit=crop&q=75&fm=webp&auto=format";
  const imgCarCadillacXt6_1 = "https://images.unsplash.com/photo-1768024175218-5878b8880eab?w=800&h=533&fit=crop&q=75&fm=webp&auto=format";
  const imgCarCadillacXt6_2 = "https://images.unsplash.com/photo-1768024175218-5878b8880eab?w=800&h=533&fit=crop&q=75&fm=webp&auto=format";
  const imgCarCadillacXt6_3 = "https://images.unsplash.com/photo-1768024175218-5878b8880eab?w=800&h=533&fit=crop&q=75&fm=webp&auto=format";
  const imgFreightlinerMinibus = "https://images.unsplash.com/photo-1538391912490-304338a7f94c?w=800&h=533&fit=crop&q=75&fm=webp&auto=format";
  const imgPartyBus = "https://images.unsplash.com/photo-1720325835679-29fbefe864ba?w=800&h=533&fit=crop&q=75&fm=webp&auto=format";
  const imgMotorcoach = "https://images.unsplash.com/photo-1538391912490-304338a7f94c?w=800&h=533&fit=crop&q=75&fm=webp&auto=format";
  const vehicles = [
    {
      name: "Cadillac Escalade ESV",
      category: "Premium SUV",
      images: [imgCarCadillacEscalade1, imgCarCadillacEscalade2, imgCarCadillacEscalade3],
      passengers: "6"
    },
    {
      name: "Mercedes S-Class",
      category: "Premium Sedan",
      images: [imgMercedesSClass],
      passengers: "3"
    },
    {
      name: "Cadillac XT6",
      category: "Mid-Size SUV",
      images: [imgCarCadillacXt6_1, imgCarCadillacXt6_2, imgCarCadillacXt6_3],
      passengers: "3"
    },
    {
      name: "Mercedes Benz Sprinter",
      category: "Mercedes Benz 14 Seater Sprinter",
      images: [imgSprinterExterior, imgSprinterInterior1, imgSprinterInterior1],
      passengers: "14"
    },
    {
      name: "Mercedes Benz Sprinter",
      category: "Mercedes Benz 9 Seater Executive Van",
      images: [imgSprinterExterior, imgSprinterInterior1, imgSprinterInterior1],
      passengers: "9"
    },
    {
      name: "Freightliner Minibus",
      category: "Minibus",
      images: [imgFreightlinerMinibus],
      passengers: "24-38"
    },
    {
      name: "Party Bus",
      category: "Party Bus",
      images: [imgPartyBus],
      passengers: "30"
    },
    {
      name: "Motorcoach",
      category: "Executive Motor Coach",
      images: [imgMotorcoach],
      passengers: "57"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Our Fleet - Luxury Vehicles | Emerald City Limos Seattle", "description": "Explore Emerald City Limos' premium fleet: Cadillac Escalade, Mercedes S-Class, Sprinter vans, motorcoaches. Professional luxury vehicles for 3-57 passengers in Seattle.", "keywords": "luxury car fleet seattle, cadillac escalade limo, mercedes sprinter van, motorcoach rental seattle, party bus seattle, emerald city limos" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="relative bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-20 overflow-hidden">  <div class="absolute inset-0"> <img${addAttribute(fleetHeroBg, "src")} alt="Emerald City Limos Fleet" class="w-full h-full object-cover object-center"> </div>  <div class="absolute inset-0 bg-gradient-to-r from-emerald-900/50 to-emerald-800/50"></div>  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h1 class="text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
Our <span class="text-[#d4af37]">Fleet</span> </h1> <p class="text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-lg">
Premium luxury vehicles meticulously maintained to ensure your comfort, safety, and satisfaction
</p> </div> </section> <section class="py-20 bg-gradient-to-b from-white to-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${vehicles.map((vehicle, index) => renderTemplate`<a href="/book-now" class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"> <div class="bg-gradient-to-br from-gray-50 to-white p-4 text-center"> <p class="text-sm uppercase tracking-wider text-gray-500 mb-4"> ${vehicle.category} </p> ${renderComponent($$result2, "VehicleCarousel", VehicleCarousel, { "client:load": true, "images": vehicle.images, "alt": vehicle.name, "client:component-hydration": "load", "client:component-path": "@/components/react/VehicleCarousel", "client:component-export": "VehicleCarousel" })} <div class="border-t border-[#d4af37] w-20 mx-auto mb-4"></div> <h3 class="text-lg uppercase text-gray-700 mb-6"> ${vehicle.name} </h3> <div class="mb-6 text-gray-800"> <p> <span class="text-base">Passengers: </span> <span class="text-xl font-medium">${vehicle.passengers}</span> </p> </div> </div> <div class="bg-gray-100 py-4 text-center"> <span class="inline-block text-sm uppercase tracking-widest text-gray-700 hover:text-emerald-700 transition-colors">
Reserve Now
</span> </div> </a>`)} </div> </div> </section> <section class="py-20 bg-white overflow-hidden"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
Traveling with <span class="text-emerald-700">Little Ones?</span> </h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
We've got your family covered with premium child safety seats
</p> <div class="w-24 h-1 bg-[#d4af37] mx-auto mt-6"></div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">  <a href="/book-now" class="group"> <div class="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"> <div class="flex items-center justify-center h-64 mb-6 overflow-hidden"> <img${addAttribute(imgInfantSeat, "src")} alt="Infant Car Seat" class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"> </div> <div class="text-center"> <div class="inline-block bg-emerald-700 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
REAR-FACING
</div> <h3 class="text-2xl font-bold text-gray-900 mb-3">
Infant Seat
</h3> <p class="text-gray-600 mb-4">
For newborns and babies
</p> <div class="border-t border-[#d4af37] w-16 mx-auto mb-4"></div> <p class="text-sm text-gray-500">
4-35 lbs • Birth to 12 months
</p> </div> </div> </a>  <a href="/book-now" class="group"> <div class="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"> <div class="flex items-center justify-center h-64 mb-6 overflow-hidden"> <img${addAttribute(imgInfantSeat, "src")} alt="Toddler Car Seat" class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"> </div> <div class="text-center"> <div class="inline-block bg-[#d4af37] text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
FRONT-FACING
</div> <h3 class="text-2xl font-bold text-gray-900 mb-3">
Toddler Seat
</h3> <p class="text-gray-600 mb-4">
For growing toddlers
</p> <div class="border-t border-[#d4af37] w-16 mx-auto mb-4"></div> <p class="text-sm text-gray-500">
20-65 lbs • 1-4 years old
</p> </div> </div> </a>  <a href="/book-now" class="group"> <div class="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"> <div class="flex items-center justify-center h-64 mb-6 overflow-hidden"> <img${addAttribute(imgInfantSeat, "src")} alt="Booster Seat" class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"> </div> <div class="text-center"> <div class="inline-block bg-emerald-700 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
BOOSTER
</div> <h3 class="text-2xl font-bold text-gray-900 mb-3">
Booster Seat
</h3> <p class="text-gray-600 mb-4">
For older children
</p> <div class="border-t border-[#d4af37] w-16 mx-auto mb-4"></div> <p class="text-sm text-gray-500">
40-100 lbs • 4-8 years old
</p> </div> </div> </a> </div> <div class="mt-16 text-center bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-10 text-white"> <h3 class="text-2xl font-bold mb-4">
🎯 Request Your Child Seat at Booking
</h3> <p class="text-lg text-emerald-100 mb-6 max-w-2xl mx-auto">
All child safety seats are complimentary and professionally installed by our trained chauffeurs. 
          Simply let us know your needs when you book, and we'll have everything ready for your family's safe journey.
</p> <div class="flex flex-wrap justify-center gap-4 text-sm"> <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"> <span class="text-[#d4af37]">✓</span> <span>Safety Certified</span> </div> <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"> <span class="text-[#d4af37]">✓</span> <span>Professionally Installed</span> </div> <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"> <span class="text-[#d4af37]">✓</span> <span>Complimentary Service</span> </div> </div> </div> </div> </section> <section class="py-20 bg-gradient-to-br from-emerald-50 to-yellow-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-4xl font-bold text-gray-900 mb-4">All Vehicles Include</h2> <p class="text-xl text-gray-600">Premium amenities in every ride</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <div class="text-center"> <div class="text-5xl mb-4">✨</div> <h3 class="text-xl font-bold text-gray-900 mb-2">Immaculate Condition</h3> <p class="text-gray-700">Professionally detailed before every trip</p> </div> <div class="text-center"> <div class="text-5xl mb-4">🛡️</div> <h3 class="text-xl font-bold text-gray-900 mb-2">Fully Insured</h3> <p class="text-gray-700">Commercial insurance for your peace of mind</p> </div> <div class="text-center"> <div class="text-5xl mb-4">⚙️</div> <h3 class="text-xl font-bold text-gray-900 mb-2">Regular Maintenance</h3> <p class="text-gray-700">Strict maintenance schedule for reliability</p> </div> <div class="text-center"> <div class="text-5xl mb-4">👶</div> <h3 class="text-xl font-bold text-gray-900 mb-2">Child Safety Available</h3> <p class="text-gray-700">Car seats & booster seats for kids upon request</p> </div> </div> </div> </section> <section class="py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white"> <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"> <h2 class="text-4xl font-bold mb-6">Ready to Reserve Your Vehicle?</h2> <p class="text-xl mb-8 text-gray-200">
Contact us today to book the perfect vehicle for your needs
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/book-now" class="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold transition-all">
BOOK NOW
</a> <a href="tel:+12065959675" class="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-900 text-white px-8 py-4 rounded-lg font-semibold transition-all">
Call (206) 595-9675
</a> </div> </div> </section> ` })}`;
}, "/workspaces/Emctryout2/src/pages/fleet.astro", void 0);

const $$file = "/workspaces/Emctryout2/src/pages/fleet.astro";
const $$url = "/fleet";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Fleet,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
