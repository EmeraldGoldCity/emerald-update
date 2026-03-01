import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C5ewKNw0.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../../chunks/MainLayout_CyR9wpzv.mjs';
export { renderers } from '../../renderers.mjs';

const $$SpecialOccasions = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Special Occasions Limo Service - Emerald City Limos Seattle", "description": "Luxury limousine service for birthdays, anniversaries, proms, quincea\xF1eras, and all special celebrations in Seattle.", "keywords": "prom limo seattle, birthday limo seattle, anniversary transportation, quincea\xF1era limo, party limo seattle" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative h-[500px] flex items-center justify-center overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-emerald-900/80 z-10"></div> <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&h=1080&fit=crop&q=80" alt="Special Occasions" class="absolute inset-0 w-full h-full object-cover" loading="eager"> <div class="relative z-20 text-center text-white max-w-4xl mx-auto px-4"> <div class="text-6xl mb-4">⭐</div> <h1 class="text-5xl md:text-6xl font-bold mb-4">Special Occasions</h1> <p class="text-2xl text-gray-200 mb-8">Celebrate life's memorable moments in luxury</p> <a href="/book-now" class="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-bold text-xl transition-all">
Book For Your Special Event
</a> </div> </section> <section class="py-16 bg-white"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <p class="text-xl text-gray-700 leading-relaxed">
Every special occasion deserves to be celebrated in style. Whether it's a milestone birthday, anniversary, prom night, quinceañera, or any celebration, our luxury limousines add elegance and excitement to your special day.
</p> </div> </section> <section class="py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white"> <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"> <h2 class="text-4xl font-bold mb-6">Ready to Book Your Special Occasion?</h2> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/book-now" class="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold transition-all">BOOK NOW</a> <a href="tel:+12065959675" class="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-900 text-white px-8 py-4 rounded-lg font-semibold transition-all">Call: (206) 595-9675</a> </div> </div> </section> ` })}`;
}, "/workspaces/Emctryout2/src/pages/service/special-occasions.astro", void 0);

const $$file = "/workspaces/Emctryout2/src/pages/service/special-occasions.astro";
const $$url = "/service/special-occasions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SpecialOccasions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
