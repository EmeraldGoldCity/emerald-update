import { d as createAstro, c as createComponent, b as addAttribute, e as renderScript, a as renderTemplate, f as renderSlot, g as renderHead, u as unescapeHTML, r as renderComponent, m as maybeRenderHead } from './astro/server_C5ewKNw0.mjs';
import 'piccolore';
/* empty css                                     */
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, createElement, useState } from 'react';

const $$Astro$2 = createAstro("https://emeraldcitylimos.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/workspaces/Emctryout2/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/Emctryout2/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://emeraldcitylimos.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    keywords = "luxury car service seattle, black car service seattle, limo service seattle, airport transportation seattle",
    ogImage = "/og-image.jpg",
    canonical
  } = Astro2.props;
  const siteUrl = "https://emeraldcitylimos.com";
  const fullTitle = title.includes("Emerald City Limos") ? title : `${title} | Emerald City Limos - Seattle Luxury Transportation`;
  const canonicalURL = canonical || new URL(Astro2.url.pathname, siteUrl).href;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="keywords"', '><link rel="canonical"', '><!-- Author & Copyright --><meta name="author" content="Emerald City Limos"><meta name="copyright" content="Emerald City Limos"><!-- Robots --><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"><!-- Geographic Targeting --><meta name="geo.region" content="US-WA"><meta name="geo.placename" content="Seattle"><meta name="geo.position" content="47.6062;-122.3321"><meta name="ICBM" content="47.6062, -122.3321"><!-- Language --><meta http-equiv="content-language" content="en-US"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:locale" content="en_US"><meta property="og:site_name" content="Emerald City Limos"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Alternate Languages --><link rel="alternate" hreflang="en-us"', '><link rel="alternate" hreflang="x-default"', `><!-- Favicon & App Icons --><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#d4af37"><!-- CRITICAL CSS - Inlined for Performance --><style>
      /* Critical CSS - Mobile-First Performance Optimized */
      :root{--emerald-50:#ecfdf5;--emerald-700:#047857;--emerald-800:#065f46;--emerald-900:#064e3b;--emerald-950:#022c22;--gold:#d4af37;--gold-dark:#b8941f;--white:#fff;--black:#000;--gray-50:#f9fafb;--gray-100:#f3f4f6;--gray-200:#e5e7eb;--gray-600:#4b5563;--gray-900:#111827}*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;scroll-behavior:smooth}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:var(--white);color:var(--gray-900);margin:0;overflow-x:hidden}.nav,nav{position:fixed;top:0;width:100%;background-color:rgba(2,44,34,.95);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);z-index:100;box-shadow:0 1px 3px 0 rgba(0,0,0,.1)}.nav-container{max-width:80rem;margin:0 auto;padding:1rem 1.5rem;display:flex;justify-content:space-between;align-items:center}.nav-logo{font-size:1.5rem;font-weight:700;color:var(--gold);text-decoration:none;letter-spacing:-.025em}.hero{position:relative;min-height:100vh;min-height:100svh;display:flex;align-items:center;justify-content:center;overflow:hidden;background-color:var(--emerald-950)}.hero-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.hero-overlay{position:absolute;inset:0;background:linear-gradient(to right,rgba(2,44,34,.8),rgba(6,78,59,.7));z-index:10}.hero-content{position:relative;z-index:20;text-align:center;color:var(--white);max-width:56rem;margin:0 auto;padding:0 1rem;min-height:280px;contain:layout style paint}.hero h1{font-size:clamp(2rem,8vw,3.75rem);font-weight:700;margin-bottom:1.5rem;line-height:1.1;text-shadow:2px 2px 8px rgba(0,0,0,.6)}.hero h1 .highlight{color:var(--gold)}.hero p{font-size:clamp(1rem,3vw,1.5rem);margin-bottom:1.5rem;color:var(--gray-200);line-height:1.6;opacity:.95}.cta-button,.btn-primary{display:inline-flex;align-items:center;justify-content:center;background-color:var(--gold);color:var(--black);padding:1rem 2rem;border-radius:.5rem;font-size:1.125rem;font-weight:700;text-decoration:none;transition:background-color .15s ease,transform .15s ease,box-shadow .15s ease;box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);border:2px solid transparent;cursor:pointer;min-height:48px;min-width:48px;-webkit-tap-highlight-color:rgba(255,215,0,.3);will-change:transform}.cta-button:hover,.btn-primary:hover{background-color:var(--gold-dark);transform:translateY(-2px);box-shadow:0 25px 50px -12px rgba(0,0,0,.25)}.btn-secondary{display:inline-flex;align-items:center;justify-content:center;background:transparent;color:var(--white);border:2px solid var(--white);padding:1rem 2rem;border-radius:.5rem;font-size:1.125rem;font-weight:600;text-decoration:none;transition:background-color .15s ease,color .15s ease;min-height:48px;min-width:48px;-webkit-tap-highlight-color:rgba(255,255,255,.3)}.btn-secondary:hover{background:var(--white);color:var(--black)}picture{display:contents}img{max-width:100%;height:auto;display:block;content-visibility:auto}a{color:inherit;text-decoration:none}a,button,input,select,textarea{-webkit-tap-highlight-color:rgba(255,215,0,.3)}button,a[role="button"],input[type="submit"],input[type="button"]{min-width:48px;min-height:48px}.loading{display:flex;align-items:center;justify-content:center;min-height:100vh}.spinner{width:3rem;height:3rem;border:3px solid rgba(212,175,55,.2);border-top-color:var(--gold);border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}section:not(:first-of-type){content-visibility:auto;contain-intrinsic-size:auto 500px}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.sr-only-focusable:focus{position:static;width:auto;height:auto;padding:inherit;margin:inherit;overflow:visible;clip:auto;white-space:normal}@media(max-width:768px){.hero{min-height:100svh}.hero-content{padding:1.5rem;min-height:280px}.hero h1{font-size:2rem;margin-bottom:.75rem}.hero p{font-size:1rem;margin-bottom:1rem}.cta-button,.btn-primary,.btn-secondary{padding:.875rem 1.5rem;font-size:.9rem}.nav-container{padding:.75rem 1rem}.shadow-2xl,.shadow-3xl{box-shadow:0 10px 15px -3px rgba(0,0,0,.1)!important}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}
    </style><!-- Preconnect to important origins --><link rel="preconnect" href="https://pnw.moovs.com"><link rel="dns-prefetch" href="https://pnw.moovs.com"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://images.unsplash.com"><link rel="dns-prefetch" href="https://images.unsplash.com"><!-- Preload Critical Resources --><link rel="preload" as="image" href="/images/hero-desktop.webp" type="image/webp" fetchpriority="high" media="(min-width: 769px)"><link rel="preload" as="image" href="/images/hero-mobile.webp" type="image/webp" fetchpriority="high" media="(max-width: 768px)"><!-- Preload critical Unsplash images (until replaced with local) --><link rel="preload" as="image" href="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=640&h=360&fit=crop&q=70&fm=webp" type="image/webp" fetchpriority="high" media="(max-width: 768px)"><link rel="preload" as="image" href="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&h=1080&fit=crop&q=75&fm=webp" type="image/webp" fetchpriority="high" media="(min-width: 769px)"><!-- View Transitions for instant navigation -->`, '<!-- Business Schema --><script type="application/ld+json">', "<\/script>", '</head> <body class="min-h-screen bg-white"> ', " <!-- Performance Optimization Script --> <script>\n      (function() {\n        'use strict';\n        \n        // Prefetch likely next pages after page is idle\n        if ('requestIdleCallback' in window) {\n          requestIdleCallback(function() {\n            var pages = ['/book-now', '/services', '/airport-transfers', '/fleet', '/locations'];\n            pages.forEach(function(page) {\n              var link = document.createElement('link');\n              link.rel = 'prefetch';\n              link.href = page;\n              link.as = 'document';\n              document.head.appendChild(link);\n            });\n          });\n        }\n        \n        // Resource hint for booking system\n        if ('requestIdleCallback' in window) {\n          requestIdleCallback(function() {\n            var bookingHint = document.createElement('link');\n            bookingHint.rel = 'dns-prefetch';\n            bookingHint.href = 'https://pnw.moovs.com';\n            document.head.appendChild(bookingHint);\n          });\n        }\n      })();\n    <\/script> </body> </html>"])), addAttribute(Astro2.generator, "content"), fullTitle, addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(keywords, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, siteUrl).href, "content"), addAttribute(canonicalURL, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, siteUrl).href, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "href"), renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LimousineBusiness",
    "name": "Emerald City Limos",
    "image": new URL(ogImage, siteUrl).href,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+1-206-595-9675",
    "email": "client@emeraldcitylimos.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "postalCode": "98101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.6062,
      "longitude": -122.3321
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/emeraldcitylimos",
      "https://www.instagram.com/emeraldcitylimos",
      "https://www.linkedin.com/company/emeraldcitylimos",
      "https://www.yelp.com/biz/emerald-city-limos-seattle"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Seattle",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        },
        "sameAs": "https://en.wikipedia.org/wiki/Seattle"
      },
      {
        "@type": "City",
        "name": "Bellevue",
        "sameAs": "https://en.wikipedia.org/wiki/Bellevue,_Washington"
      },
      {
        "@type": "City",
        "name": "Tacoma",
        "sameAs": "https://en.wikipedia.org/wiki/Tacoma,_Washington"
      },
      {
        "@type": "City",
        "name": "Kirkland"
      },
      {
        "@type": "City",
        "name": "Redmond"
      },
      {
        "@type": "City",
        "name": "Everett"
      }
    ],
    "serviceType": [
      "Airport Transportation",
      "Corporate Car Service",
      "Wedding Limo Service",
      "Black Car Service",
      "Luxury Transportation",
      "Executive Transportation"
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/book-now`,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Book Limo Service"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  })), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/workspaces/Emctryout2/src/layouts/BaseLayout.astro", void 0);

/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$6 = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$6);

/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$5 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$5);

/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$4 = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
];
const Mail = createLucideIcon("mail", __iconNode$4);

/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$3 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$3);

/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
];
const Menu = createLucideIcon("menu", __iconNode$2);

/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);

/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Airport Transfers", path: "/airport-transfers" },
    { name: "Our Fleet", path: "/fleet" },
    { name: "Locations", path: "/locations" },
    { name: "Blog", path: "/blog" }
  ];
  const isActive = (path) => {
    return currentPath === path;
  };
  return /* @__PURE__ */ jsx(
    "nav",
    {
      className: "bg-gradient-to-r from-emerald-900 to-emerald-800 text-white shadow-lg sticky top-0 z-50",
      role: "navigation",
      "aria-label": "Main navigation",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center h-20", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/",
              className: "flex items-center space-x-2",
              "aria-label": "Emerald City Limos - Return to homepage",
              children: /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold", children: [
                /* @__PURE__ */ jsx("span", { className: "text-white", children: "Emerald City" }),
                /* @__PURE__ */ jsx("span", { className: "text-[#d4af37]", children: " Limo" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center space-x-8", role: "list", children: navLinks.map((link) => /* @__PURE__ */ jsx(
            "a",
            {
              href: link.path,
              className: `text-sm font-medium transition-colors hover:text-[#d4af37] ${isActive(link.path) ? "text-[#d4af37] border-b-2 border-[#d4af37]" : "text-white"}`,
              "aria-current": isActive(link.path) ? "page" : void 0,
              children: link.name
            },
            link.path
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center space-x-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/book-now",
                className: "bg-[#d4af37] hover:bg-[#b8941f] text-black px-6 py-2 rounded-lg font-semibold transition-all",
                role: "button",
                "aria-label": "Book your limousine service now",
                children: "BOOK NOW"
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "mailto:client@emeraldcitylimos.com",
                className: "flex items-center space-x-2 text-sm hover:text-[#d4af37] transition-colors",
                "aria-label": "Email us at client@emeraldcitylimos.com",
                children: [
                  /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4", "aria-hidden": "true", focusable: "false" }),
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "client@emeraldcitylimos.com" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
              className: "md:hidden p-2 rounded-md hover:bg-emerald-700 transition-colors",
              "aria-label": mobileMenuOpen ? "Close navigation menu" : "Open navigation menu",
              "aria-expanded": mobileMenuOpen,
              "aria-controls": "mobile-navigation",
              children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6", "aria-hidden": "true", focusable: "false" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6", "aria-hidden": "true", focusable: "false" })
            }
          )
        ] }),
        mobileMenuOpen && /* @__PURE__ */ jsxs(
          "div",
          {
            id: "mobile-navigation",
            className: "md:hidden pb-4 space-y-2",
            role: "menu",
            "aria-label": "Mobile navigation menu",
            children: [
              navLinks.map((link) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: link.path,
                  onClick: () => setMobileMenuOpen(false),
                  className: `block px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.path) ? "bg-emerald-700 text-yellow-400" : "text-white hover:bg-emerald-700"}`,
                  role: "menuitem",
                  "aria-current": isActive(link.path) ? "page" : void 0,
                  children: link.name
                },
                link.path
              )),
              /* @__PURE__ */ jsxs("div", { className: "px-4 py-2 space-y-2 border-t border-emerald-700 mt-2 pt-4", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "/book-now",
                    className: "block w-full text-center bg-[#d4af37] hover:bg-[#b8941f] text-black px-6 py-2 rounded-lg font-semibold transition-all",
                    role: "button",
                    "aria-label": "Book your limousine service now",
                    children: "BOOK NOW"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "mailto:client@emeraldcitylimos.com",
                    className: "flex items-center space-x-2 text-sm hover:text-[#d4af37]",
                    "aria-label": "Email us at client@emeraldcitylimos.com",
                    children: [
                      /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4", "aria-hidden": "true", focusable: "false" }),
                      /* @__PURE__ */ jsx("span", { children: "client@emeraldcitylimos.com" })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ] })
    }
  );
}

const YouTubeIcon = () => /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }) });
function Footer() {
  return /* @__PURE__ */ jsx(
    "footer",
    {
      className: "bg-gradient-to-r from-emerald-950 to-emerald-900 text-white",
      role: "contentinfo",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold mb-4", "aria-label": "Emerald City Limos", children: [
              /* @__PURE__ */ jsx("div", { className: "text-emerald-400", children: "Emerald City" }),
              /* @__PURE__ */ jsx("div", { className: "text-[#d4af37]", children: "Limo" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-4", children: "Premier luxury transportation serving the Greater Seattle area and beyond." }),
            /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", role: "list", "aria-label": "Social media links", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://www.facebook.com/profile.php?id=61550876342830",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": "Follow us on Facebook - Opens in new window",
                  className: "text-gray-300 hover:text-[#d4af37] transition-colors",
                  children: /* @__PURE__ */ jsx(Facebook, { className: "w-5 h-5", "aria-hidden": "true", focusable: "false" })
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://www.instagram.com/a1charters_?igsh=MWRoa2wxMTdkdjNhMw%3D%3D",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": "Follow us on Instagram - Opens in new window",
                  className: "text-gray-300 hover:text-[#d4af37] transition-colors",
                  children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5", "aria-hidden": "true", focusable: "false" })
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://www.youtube.com/@A1ChartersUSA",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": "Subscribe to our YouTube channel - Opens in new window",
                  className: "text-gray-300 hover:text-[#d4af37] transition-colors",
                  children: /* @__PURE__ */ jsx(YouTubeIcon, {})
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("nav", { "aria-label": "Footer navigation - Quick links", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold mb-4 text-[#d4af37]", children: "Quick Links" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", role: "list", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-gray-300 hover:text-[#d4af37] transition-colors", children: "Home" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/services", className: "text-gray-300 hover:text-[#d4af37] transition-colors", children: "Services" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/airport-transfers", className: "text-gray-300 hover:text-[#d4af37] transition-colors", children: "Airport Transfers" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/locations", className: "text-gray-300 hover:text-[#d4af37] transition-colors", children: "Locations" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/affiliates", className: "text-gray-300 hover:text-[#d4af37] transition-colors", children: "Become an Affiliate" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("nav", { "aria-label": "Footer navigation - Our services", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold mb-4 text-[#d4af37]", children: "Our Services" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", role: "list", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/airport-transfers", className: "text-gray-300 hover:text-[#d4af37] transition-colors", children: "Airport Transfers" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/services/hourly-charters", className: "text-gray-300 hover:text-[#d4af37] transition-colors", children: "Hourly Charters" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/services/wedding-transportation", className: "text-gray-300 hover:text-[#d4af37] transition-colors", children: "Wedding Transportation" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/services/sports-events", className: "text-gray-300 hover:text-[#d4af37] transition-colors", children: "Game Day Transport" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/services/special-occasions", className: "text-gray-300 hover:text-[#d4af37] transition-colors", children: "Special Occasions" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/services/corporate-transportation", className: "text-gray-300 hover:text-[#d4af37] transition-colors", children: "Corporate Events" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/services/executive-transportation", className: "text-gray-300 hover:text-[#d4af37] transition-colors", children: "Executive Transportation" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/services/cruise-port-transfers", className: "text-gray-300 hover:text-[#d4af37] transition-colors", children: "Cruise Transportation" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold mb-4 text-[#d4af37]", children: "Contact Us" }),
            /* @__PURE__ */ jsx("address", { className: "not-italic", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm", role: "list", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2 text-gray-300", children: [
                /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 mt-1 flex-shrink-0", "aria-hidden": "true", focusable: "false" }),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "tel:+12065959675",
                    className: "hover:text-[#d4af37] transition-colors",
                    "aria-label": "Call us at (206) 595-9675",
                    children: "(206) 595-9675"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2 text-gray-300", children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 mt-1 flex-shrink-0", "aria-hidden": "true", focusable: "false" }),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "mailto:client@emeraldcitylimos.com",
                    className: "hover:text-[#d4af37] transition-colors break-all",
                    "aria-label": "Email us at client@emeraldcitylimos.com",
                    children: "client@emeraldcitylimos.com"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2 text-gray-300", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 mt-1 flex-shrink-0", "aria-hidden": "true", focusable: "false" }),
                /* @__PURE__ */ jsx("span", { children: "Seattle, WA" })
              ] })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "border-t border-emerald-800 mt-8 pt-8 text-center text-sm text-gray-400", children: /* @__PURE__ */ jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Emerald City Limos. All rights reserved."
        ] }) })
      ] })
    }
  );
}

const $$Astro = createAstro("https://emeraldcitylimos.com");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const props = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...props }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<a href="#main-content" class="skip-link sr-only-focusable">
Skip to main content
</a>  ${renderComponent($$result2, "Navigation", Navigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/react/Navigation", "client:component-export": "Navigation" })}  <main id="main-content" role="main"> ${renderSlot($$result2, $$slots["default"])} </main>  ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "/workspaces/Emctryout2/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, createLucideIcon as c };
