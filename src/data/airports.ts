/**
 * Airport data — single source of truth for /airport and /airport/[slug].
 *
 * Editing rules:
 *  - `slug` is the URL segment (kebab-case). Detail page lives at
 *    /airport/<slug>; the index lives at /airport.
 *  - `code` is the IATA / FAA code (SEA, BFI, PAE) — used for badges and
 *    Airport JSON-LD.
 *  - All copy (lead, faqs, etc.) should be airport-specific. Generic copy
 *    triggers thin-content signals on Google and AI search engines.
 *  - `meta.title` ≤ 60 chars, `meta.description` 140–160 chars.
 *  - Pricing in `popularRoutes` is treated as "starting from" — fine print
 *    is rendered automatically.
 */
import type { ImageMetadata } from 'astro';
import seaTacAirport from "@/assets/images/airports/seatac-airport.webp";
import boeingFieldAirport from "@/assets/images/airports/boeing-field.jpg";
import paineFieldAirport from "@/assets/images/airports/paine-field.jpg";
import tacomaAirport from "@/assets/images/airports/tacoma.jpg";

export interface AirportRoute {
  from: string;
  driveTime: string;
  distanceMiles: number;
  /** Starting price in USD. Omit if not advertised for this route. */
  startingPriceUSD?: number;
}

export interface AirportPickupDetail {
  label: string;
  value: string;
}

export interface AirportPickupBlock {
  heading: string;
  description: string;
  details: AirportPickupDetail[];
}

export interface AirportFeature {
  title: string;
  description: string;
  iconPath: string;
}

export interface AirportFAQ {
  question: string;
  answer: string;
}

export interface AirportQuickStat {
  value: string;
  label: string;
}

export interface AirportMeta {
  title: string;
  description: string;
  keywords: string[];
}

export interface AirportHeroImage {
  src: ImageMetadata;
  alt: string;
  srcMobile?: ImageMetadata;
}

export interface Airport {
  /** URL slug (kebab-case). */
  slug: string;
  /** IATA / FAA code. */
  code: 'SEA' | 'BFI' | 'PAE' | 'TIW';
  /** Short display name ("SeaTac"). */
  name: string;
  /** Long display name ("Seattle-Tacoma International Airport"). */
  fullName: string;
  /** ~80-character positioning line shown on the index card. */
  tagline: string;
  /** Distance from downtown Seattle (miles). */
  distanceFromDowntownMiles: number;
  /** Postal address for schema and pickup info. */
  address: string;
  /** Geo coordinates for Airport JSON-LD. */
  coordinates: { lat: number; lng: number };

  /* Hero */
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  heroSupporting: string;
  heroImage: AirportHeroImage;

  /* Body */
  /** Lead paragraph (~80–120 words). */
  lead: string;
  /** Optional second paragraph (~60–100 words). */
  leadExtended?: string;
  /** Quick stat strip — 4 items. */
  quickStats: AirportQuickStat[];
  /** Service features (4–6 ideal). */
  features: AirportFeature[];

  /** Popular city-to-airport routes. */
  popularRoutes: AirportRoute[];

  /** Arrivals & departures pickup info. */
  pickupInfo: {
    arrivals: AirportPickupBlock;
    departures: AirportPickupBlock;
  };

  /** Airport-specific FAQs (4–6 ideal). */
  faqs: AirportFAQ[];

  /* Index-card metadata */
  cardIconPath: string;

  /** SEO. */
  meta: AirportMeta;

  /** Resolved URL (computed below). */
  href: string;
}

/* ── Reusable icon path snippets ─────────────────────────── */
const ICON = {
  plane:
    'M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5',
  clock: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  user:
    'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',
  badgeCheck:
    'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  shieldCheck:
    'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z',
  briefcase:
    'M20.25 14.15v4.073a2.121 2.121 0 0 1-.659 1.591 2.121 2.121 0 0 1-1.591.659H6a2.121 2.121 0 0 1-2.25-2.25V14.15M16.5 18.75h-9m9-7.5h-9m12 0V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 2.25 9.75v8.625c0 1.243 1.007 2.25 2.25 2.25h15c1.243 0 2.25-1.007 2.25-2.25V9.75a6.003 6.003 0 0 0-.084-1 47.94 47.94 0 0 0-2.916-.52m-12.5 0V3.75A2.25 2.25 0 0 1 7.5 1.5h6a2.25 2.25 0 0 1 2.25 2.25v.486',
  carSeat:
    'M5.25 6.75A2.25 2.25 0 0 1 7.5 4.5h9a2.25 2.25 0 0 1 2.25 2.25v6.75a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25V6.75ZM5.25 15.75v3.75M18.75 15.75v3.75M8.25 19.5h7.5',
  receipt:
    'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H4.5A2.25 2.25 0 0 0 2.25 6.75v10.5A2.25 2.25 0 0 0 4.5 19.5Z',
  building:
    'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  navigation:
    'M3.75 19.5h16.5m-16.5 0a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5h16.5A1.5 1.5 0 0 1 21.75 6v12a1.5 1.5 0 0 1-1.5 1.5m-16.5 0h16.5M7.5 8.25v8.25m9-8.25v8.25m-4.5-8.25v8.25',
  globe:
    'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418',
};

/* ── Airports ────────────────────────────────────────────── */
export const airports: Airport[] = [
  {
    slug: 'sea-tac',
    code: 'SEA',
    name: 'SeaTac',
    fullName: 'Seattle-Tacoma International Airport',
    tagline:
      'The Pacific Northwest’s busiest airport — flight-tracked transfers across King, Snohomish, and Pierce counties.',
    distanceFromDowntownMiles: 14,
    address: '17801 International Blvd, SeaTac, WA 98158',
    coordinates: { lat: 47.4502, lng: -122.3088 },
    eyebrow: 'SEA Airport',
    headline: 'Seattle-Tacoma Airport',
    headlineAccent: 'Limo Service',
    heroSupporting:
      'Flat-rate transfers to and from SEA, 24/7 flight tracking, and meet-and-greet at baggage claim. Sedan, SUV, and Sprinter options for solo travelers, families, or executive teams.',
    heroImage: {
      src: seaTacAirport,
      alt: 'Seattle-Tacoma International Airport at dusk with luxury chauffeur transfer awaiting',
    },
    lead:
      'Seattle-Tacoma International Airport (SEA) is the Pacific Northwest’s busiest airport, handling over 50 million passengers annually. Whether you are arriving for business or departing on vacation, navigating SeaTac can be stressful — especially during peak travel hours. Our chauffeurs track flights on the live ADS-B feed, stage in the cell lot before wheels-down, and run a 60-minute domestic / 90-minute international grace period on every arrival.',
    leadExtended:
      'For arrivals, your chauffeur meets you at baggage claim with a discreet name placard, assists with luggage, and walks you to the vehicle in the ground transportation area. No taxi line, no surge pricing, no surprises — we hold a Washington UTC permit and carry $1.5M in commercial liability on every ride.',
    quickStats: [
      { value: '24/7', label: 'Available' },
      { value: '$89+', label: 'Starting price' },
      { value: '30+', label: 'Cities served' },
      { value: '4.9', label: 'Star rating' },
    ],
    features: [
      {
        title: 'Real-Time Flight Tracking',
        description: 'Live ADS-B monitoring — chauffeur staging reflows automatically when your arrival time shifts.',
        iconPath: ICON.plane,
      },
      {
        title: 'Baggage Claim Meet & Greet',
        description: 'Chauffeur waits inside the terminal with a discreet name placard; international: post-customs.',
        iconPath: ICON.user,
      },
      {
        title: '60-Minute Grace Period',
        description: 'One hour of complimentary wait time after landing (90 min international) — no extra charge.',
        iconPath: ICON.clock,
      },
      {
        title: 'Flat-Rate Pricing',
        description: 'No surge, no hidden tolls — price is locked at booking and on the receipt.',
        iconPath: ICON.receipt,
      },
      {
        title: 'Luxury Fleet',
        description: 'Cadillac Escalade ESV, Mercedes-Benz S-Class, Sprinter — matched to your headcount and luggage.',
        iconPath: ICON.briefcase,
      },
      {
        title: 'Infant Car Seats',
        description: 'Pre-installed infant, convertible, or booster seats — complimentary on every request.',
        iconPath: ICON.carSeat,
      },
    ],
    popularRoutes: [
      { from: 'Seattle', driveTime: '20–35 min', distanceMiles: 14, startingPriceUSD: 89 },
      { from: 'Bellevue', driveTime: '25–40 min', distanceMiles: 16, startingPriceUSD: 99 },
      { from: 'Redmond', driveTime: '30–45 min', distanceMiles: 22, startingPriceUSD: 109 },
      { from: 'Kirkland', driveTime: '30–45 min', distanceMiles: 20, startingPriceUSD: 109 },
      { from: 'Everett', driveTime: '40–55 min', distanceMiles: 35, startingPriceUSD: 129 },
      { from: 'Tacoma', driveTime: '30–45 min', distanceMiles: 27, startingPriceUSD: 99 },
    ],
    pickupInfo: {
      arrivals: {
        heading: 'Arrivals Pickup',
        description:
          'Your chauffeur meets you inside the terminal at baggage claim with a discreet name placard. After collecting your luggage, they escort you to the designated pickup area on the ground transportation level.',
        details: [
          { label: 'Terminal A/B', value: 'Ground level, Door 1' },
          { label: 'International Arrivals', value: 'Level 1, baggage claim area' },
          { label: 'Wait time', value: '60 minutes complimentary after landing' },
        ],
      },
      departures: {
        heading: 'Departures Pickup',
        description:
          'Your chauffeur arrives at your location 15 minutes early. We assist with luggage to the departure level at SEA and time the staging backward from your boarding pass so you arrive with comfortable margin.',
        details: [
          { label: 'Recommended lead time', value: '2.5 hours domestic, 3.5 hours international' },
          { label: 'Drop-off', value: 'Departure level at your airline terminal' },
          { label: 'Luggage assistance', value: 'Always included' },
        ],
      },
    },
    faqs: [
      {
        question: 'How much does a limo from SeaTac to Seattle cost?',
        answer:
          'Our flat-rate SeaTac to Seattle limo service starts from $89. The exact price depends on pickup location and vehicle type. You get a locked-in price at booking with no surge.',
      },
      {
        question: 'What happens if my flight is delayed?',
        answer:
          'We monitor every airport pickup against the live ADS-B feed. If your flight is delayed, the chauffeur’s staging time reflows automatically — no change fee, no extra charge for the delay itself.',
      },
      {
        question: 'Where does my chauffeur meet me at SeaTac?',
        answer:
          'For domestic arrivals, your chauffeur waits at baggage claim with a name placard. For international arrivals, they meet you post-customs in the international arrivals hall. You never need to find the vehicle yourself.',
      },
      {
        question: 'Do you offer SeaTac airport service 24 hours?',
        answer:
          'Yes — 24 hours a day, 7 days a week, 365 days a year including holidays. Early-morning and late-night flights are routine; dispatch is staffed continuously.',
      },
      {
        question: 'Can I request an infant car seat?',
        answer:
          'Yes. Infant, convertible, and booster seats are complimentary and pre-installed before pickup. Request the seat type and the child’s age/weight at booking.',
      },
    ],
    cardIconPath: ICON.plane,
    meta: {
      title: 'SeaTac Airport Limo | SEA Transfers | Emerald City Limos',
      description:
        'Professional SeaTac (SEA) airport limo service — flat-rate transfers, 24/7 flight tracking, meet-and-greet at baggage claim. Book your SEA airport car service.',
      keywords: [
        'seatac airport limo',
        'sea-tac airport car service',
        'seattle airport transportation',
        'seatac limo service',
      ],
    },
    href: '/airport/sea-tac',
  },

  {
    slug: 'boeing-field',
    code: 'BFI',
    name: 'Boeing Field',
    fullName: 'King County International Airport (Boeing Field)',
    tagline:
      'Three miles south of downtown — the executive choice for private aviation, charter, and corporate jets.',
    distanceFromDowntownMiles: 3,
    address: '7277 Perimeter Rd S, Seattle, WA 98108',
    coordinates: { lat: 47.5298, lng: -122.3019 },
    eyebrow: 'BFI Airport',
    headline: 'Boeing Field',
    headlineAccent: 'Limo Service',
    heroSupporting:
      'Premium private jet and charter flight transportation to King County International Airport (BFI). Discreet FBO access, executive sedans and SUVs, dispatcher reachable 24/7.',
    heroImage: {
      src: boeingFieldAirport,
      alt: 'Private jet at Boeing Field with luxury chauffeur SUV ready for FBO transfer',
    },
    lead:
      'Boeing Field / King County International Airport (BFI) sits just three miles south of downtown Seattle, making it the most convenient airport for the city center. It serves private jets, charter flights, cargo operations, and Boeing aircraft test flights. For executives, corporate travelers, and private jet passengers, we run discreet, white-glove transportation that coordinates directly with FBO operators and private terminals for seamless pickups and drop-offs.',
    leadExtended:
      'Our Boeing Field chauffeurs are vetted for high-profile travel: business attire, sign-on-request protocol, and dispatcher-direct contact for last-minute schedule changes. We carry a Washington UTC permit and $1.5M in commercial liability on every ride.',
    quickStats: [
      { value: '24/7', label: 'Available' },
      { value: '3 mi', label: 'From downtown' },
      { value: 'FBO', label: 'Direct access' },
      { value: '4.9', label: 'Star rating' },
    ],
    features: [
      {
        title: 'FBO Coordination',
        description: 'We coordinate directly with Clay Lacy Aviation, Galvin Flying, and other FBOs for seamless ramp access.',
        iconPath: ICON.plane,
      },
      {
        title: 'Private Terminal Access',
        description: 'Direct entry to private jet terminals and ramps — no commercial-terminal staging.',
        iconPath: ICON.shieldCheck,
      },
      {
        title: 'Executive Fleet',
        description: 'Cadillac Escalade ESV, Mercedes-Benz S-Class, and luxury sedans matched to your party.',
        iconPath: ICON.briefcase,
      },
      {
        title: 'Discreet & Professional',
        description: 'Chauffeurs trained for high-profile and confidential corporate-client expectations.',
        iconPath: ICON.user,
      },
      {
        title: 'Corporate Accounts',
        description: 'Monthly billing, account management, and named-chauffeur assignment available.',
        iconPath: ICON.receipt,
      },
      {
        title: 'Charter Flight Tracking',
        description: 'Real-time monitoring for charter and private flights with dispatcher reflow on schedule shifts.',
        iconPath: ICON.badgeCheck,
      },
    ],
    popularRoutes: [
      { from: 'Downtown Seattle', driveTime: '10–15 min', distanceMiles: 3 },
      { from: 'South Seattle', driveTime: '5–10 min', distanceMiles: 2 },
      { from: 'Renton (Boeing)', driveTime: '15–20 min', distanceMiles: 7 },
      { from: 'Bellevue', driveTime: '20–30 min', distanceMiles: 10 },
      { from: 'SeaTac Airport', driveTime: '15–20 min', distanceMiles: 8 },
      { from: 'Tacoma', driveTime: '35–45 min', distanceMiles: 30 },
    ],
    pickupInfo: {
      arrivals: {
        heading: 'FBO & Ramp Pickup',
        description:
          'Your chauffeur stages at the FBO of record before arrival and meets you on the ramp or in the private terminal. Dispatch coordinates with the FBO desk so your party walks straight from aircraft to vehicle.',
        details: [
          { label: 'FBO operators served', value: 'Clay Lacy, Galvin Flying, others on request' },
          { label: 'Ramp access', value: 'Direct, no commercial-terminal routing' },
          { label: 'Flight tracking', value: 'Real-time for charter and private aircraft' },
        ],
      },
      departures: {
        heading: 'Departure Pickup',
        description:
          'For departures, your chauffeur arrives early at your residence, hotel, or office, assists with luggage, and drops at the FBO entrance — never the public airport lanes. The trip is timed against the wheels-up window your operator provides.',
        details: [
          { label: 'Recommended lead time', value: '60–90 minutes before wheels-up' },
          { label: 'Drop-off', value: 'FBO of record — direct ramp side' },
          { label: 'Luggage assistance', value: 'Always included' },
        ],
      },
    },
    faqs: [
      {
        question: 'Do you service private jet terminals at Boeing Field?',
        answer:
          'Yes. We coordinate with all FBO operators at Boeing Field including Clay Lacy Aviation, Galvin Flying, and others to arrange direct ramp access or private-terminal pickup.',
      },
      {
        question: 'Is Boeing Field closer to downtown Seattle than SeaTac?',
        answer:
          'Yes. Boeing Field is just three miles from downtown Seattle — significantly closer than SeaTac at fourteen miles. For private flights, BFI is often the preferred choice for Seattle city access.',
      },
      {
        question: 'Do you offer corporate accounts for Boeing Field service?',
        answer:
          'Yes. Corporate accounts include consolidated monthly billing, priority booking, dispatcher-direct contact, and named-chauffeur assignment for executives who travel from BFI on a recurring basis.',
      },
      {
        question: 'Can you transport groups arriving on charter flights?',
        answer:
          'Yes. We can coordinate multiple SUVs or a Mercedes Sprinter for charter-arrival groups of up to fourteen, staged on the ramp side for a single coordinated departure from the FBO.',
      },
    ],
    cardIconPath: ICON.shieldCheck,
    meta: {
      title: 'Boeing Field Limo | BFI Car Service | Emerald City Limos',
      description:
        'Premium Boeing Field (BFI) limo service for private jet and charter flight passengers. FBO coordination, executive fleet, 24/7 dispatch.',
      keywords: [
        'boeing field limo service',
        'bfi airport car service',
        'king county international airport',
        'private jet limo seattle',
      ],
    },
    href: '/airport/boeing-field',
  },

  {
    slug: 'paine-field',
    code: 'PAE',
    name: 'Paine Field',
    fullName: 'Paine Field / Snohomish County Airport',
    tagline:
      'A faster commercial option for the North Sound — Alaska Airlines departures with the calm of a small terminal.',
    distanceFromDowntownMiles: 30,
    address: '3220 100th St SW, Everett, WA 98204',
    coordinates: { lat: 47.9063, lng: -122.2816 },
    eyebrow: 'PAE Airport',
    headline: 'Paine Field',
    headlineAccent: 'Limo Service',
    heroSupporting:
      'Professional airport transfers to Snohomish County Airport in Everett, WA. Alaska Airlines departures and arrivals, 24/7 availability, and meet-and-greet at the terminal.',
    heroImage: {
      src: paineFieldAirport,
      alt: 'Paine Field / Snohomish County Airport runway with luxury chauffeur transfer in Everett, WA',
    },
    lead:
      'Paine Field / Snohomish County Airport (PAE) in Everett, Washington offers a refreshing alternative to the crowds of Seattle-Tacoma International. Alaska Airlines operates commercial flights from Paine Field, making it a popular choice for travelers in Snohomish County, north Seattle, and the Eastside. The terminal is modern, compact, and stress-free: no long walks, no massive security lines, and easy parking.',
    leadExtended:
      'Our PAE chauffeurs run flight tracking against the Alaska Airlines schedule, time the staging from your boarding-pass window, and meet you at arrivals with a name placard. From Snohomish County we are typically thirty minutes faster than running you to SEA.',
    quickStats: [
      { value: '24/7', label: 'Available' },
      { value: '30 mi', label: 'From Seattle' },
      { value: 'Alaska', label: 'Airlines hub' },
      { value: '4.9', label: 'Star rating' },
    ],
    features: [
      {
        title: 'Alaska Airlines Flight Tracking',
        description: 'Real-time monitoring with chauffeur staging reflowed against live arrival data.',
        iconPath: ICON.plane,
      },
      {
        title: 'Meet & Greet',
        description: 'Chauffeur waits at arrivals with a name placard; the compact terminal makes it easy to find each other.',
        iconPath: ICON.user,
      },
      {
        title: 'Flat-Rate Pricing',
        description: 'No surge, no hidden tolls — price locked at booking, on the receipt unchanged.',
        iconPath: ICON.receipt,
      },
      {
        title: 'All Snohomish County',
        description: 'Everett, Lynnwood, Edmonds, Marysville, Mukilteo, Mill Creek, Bothell, Mountlake Terrace.',
        iconPath: ICON.navigation,
      },
      {
        title: 'Seattle & Eastside',
        description: 'Service from all of King County to PAE — common for travelers north of Lake Washington.',
        iconPath: ICON.globe,
      },
      {
        title: 'Infant Car Seats',
        description: 'Pre-installed infant, convertible, or booster seats — complimentary on every request.',
        iconPath: ICON.carSeat,
      },
    ],
    popularRoutes: [
      { from: 'Everett', driveTime: '10–15 min', distanceMiles: 5, startingPriceUSD: 69 },
      { from: 'Lynnwood', driveTime: '15–25 min', distanceMiles: 12, startingPriceUSD: 79 },
      { from: 'Seattle', driveTime: '40–55 min', distanceMiles: 30, startingPriceUSD: 129 },
      { from: 'Bellevue', driveTime: '45–60 min', distanceMiles: 35, startingPriceUSD: 139 },
      { from: 'Kirkland', driveTime: '35–50 min', distanceMiles: 25, startingPriceUSD: 129 },
      { from: 'Bothell', driveTime: '25–35 min', distanceMiles: 18, startingPriceUSD: 99 },
    ],
    pickupInfo: {
      arrivals: {
        heading: 'Arrivals Pickup',
        description:
          'Your chauffeur waits at the compact PAE terminal arrivals area with a discreet name placard. The terminal is small enough that you’ll spot each other within seconds of stepping past the gate.',
        details: [
          { label: 'Pickup zone', value: 'Arrivals curb, terminal front' },
          { label: 'Wait time', value: '60 minutes complimentary after landing' },
          { label: 'Flight tracking', value: 'Live Alaska Airlines schedule monitoring' },
        ],
      },
      departures: {
        heading: 'Departures Pickup',
        description:
          'For departures, your chauffeur arrives early at your location, assists with luggage, and drops at the PAE departure curb. The terminal is fast: security lines are typically a fraction of SEA, so the lead time is shorter.',
        details: [
          { label: 'Recommended lead time', value: '90 minutes before departure (faster than SEA)' },
          { label: 'Drop-off', value: 'Departure curb, terminal entrance' },
          { label: 'Luggage assistance', value: 'Always included' },
        ],
      },
    },
    faqs: [
      {
        question: 'Which airlines fly out of Paine Field?',
        answer:
          'Alaska Airlines operates commercial flights from Paine Field (PAE) to various destinations. The airport also hosts private, charter, and cargo operations.',
      },
      {
        question: 'How far is Paine Field from Seattle?',
        answer:
          'Paine Field is approximately thirty miles north of downtown Seattle — typically a forty to fifty-five minute drive depending on I-5 traffic. For Snohomish County travelers, PAE is usually faster than driving to SEA.',
      },
      {
        question: 'Is Paine Field limo service available 24 hours?',
        answer:
          'Yes. We provide 24/7 limo service to and from Paine Field including early-morning departures and late-night arrivals. Dispatch is staffed continuously.',
      },
      {
        question: 'Do you serve all of Snohomish County to Paine Field?',
        answer:
          'Yes. We pick up from every Snohomish County city — Everett, Lynnwood, Edmonds, Marysville, Mukilteo, Mill Creek, Bothell, Mountlake Terrace, and the rest.',
      },
      {
        question: 'How early should I arrive at Paine Field?',
        answer:
          'Paine Field recommends arriving ninety minutes before domestic departures. The terminal is compact so security is much faster than SeaTac — we factor your recommended arrival time into the pickup schedule.',
      },
    ],
    cardIconPath: ICON.plane,
    meta: {
      title: 'Paine Field Limo | PAE Car Service | Emerald City Limos',
      description:
        'Professional Paine Field (PAE) limo service in Everett, WA. Alaska Airlines transfers, 24/7 availability, meet & greet at the terminal.',
      keywords: [
        'paine field limo service',
        'pae airport car service',
        'everett airport transportation',
        'snohomish county airport',
      ],
    },
    href: '/airport/paine-field',
  },

  {
    slug: 'tacoma-narrows-airport',
    code: 'TIW',
    name: 'Tacoma Narrows',
    fullName: 'Tacoma Narrows Airport',
    tagline:
      'Private aviation chauffeur service for Tacoma Narrows Airport with executive pickups, charter transfers, and seamless Gig Harbor transportation.',
    distanceFromDowntownMiles: 7,
    address: '1202 26th Ave NW, Gig Harbor, WA 98335',
    coordinates: { lat: 47.2679, lng: -122.5781 },
    eyebrow: 'TIW Airport',
    headline: 'Tacoma Narrows Airport',
    headlineAccent: 'Chauffeur Service',
    heroSupporting:
      'Luxury airport transportation to and from Tacoma Narrows Airport for private jet travelers, charter passengers, flight crews, and executive teams. Flat-rate transfers, ramp coordination, and 24/7 dispatch.',
    heroImage: {
      src: tacomaAirport,
      alt: 'Luxury executive SUV awaiting private aviation passengers at Tacoma Narrows Airport',
    },
    lead:
      'Tacoma Narrows Airport (TIW) is one of the South Puget Sound’s most important general aviation airports, serving private jet operators, charter flights, corporate aviation, and regional business travelers. Unlike large commercial airports, TIW clients expect speed, discretion, and direct access — not terminal congestion or rideshare uncertainty. Our chauffeurs coordinate directly with flight departments, FBO staff, and dispatch teams to ensure precise pickup timing and smooth curbside or ramp-adjacent transfers.',
    leadExtended:
      'Whether you are flying private into Gig Harbor, departing for a business trip, or arranging executive ground transportation for arriving guests, our chauffeurs provide a polished door-to-door experience. We monitor flight schedules, adjust staging windows when departure or arrival times shift, and position vehicles for efficient transitions from aircraft to vehicle. Every booking is operated under Washington UTC authority with fully insured commercial vehicles and professionally vetted chauffeurs.',
    quickStats: [
      { value: '24/7', label: 'Dispatch' },
      { value: '$95+', label: 'Starting price' },
      { value: 'Private', label: 'Aviation focus' },
      { value: '4.9', label: 'Star rating' },
    ],
    features: [
      {
        title: 'Private Aviation Coordination',
        description:
          'Pickup timing aligned with charter operators, flight departments, and FBO scheduling changes.',
        iconPath: ICON.plane,
      },
      {
        title: 'Executive Meet & Assist',
        description:
          'Professional chauffeur greeting for principals, executives, guests, and private aviation passengers.',
        iconPath: ICON.user,
      },
      {
        title: 'Flat-Rate Airport Transfers',
        description:
          'Locked pricing with no surge rates, hidden fees, or unpredictable airport transportation costs.',
        iconPath: ICON.receipt,
      },
      {
        title: 'Luxury Fleet Access',
        description:
          'Cadillac Escalade ESV, Mercedes executive sedans, and Sprinter vans for groups, luggage, and aviation crews.',
        iconPath: ICON.briefcase,
      },
      {
        title: 'Flexible Wait Windows',
        description:
          'Flight schedule changes accommodated with staging adjustments for arrivals and departures.',
        iconPath: ICON.clock,
      },
      {
        title: 'Confidential Executive Service',
        description:
          'Discreet transportation designed for corporate leaders, VIP travelers, and private clients.',
        iconPath: ICON.carSeat,
      },
    ],
    popularRoutes: [
      { from: 'Gig Harbor', driveTime: '10–15 min', distanceMiles: 7, startingPriceUSD: 95 },
      { from: 'Tacoma', driveTime: '20–30 min', distanceMiles: 12, startingPriceUSD: 105 },
      { from: 'University Place', driveTime: '18–25 min', distanceMiles: 10, startingPriceUSD: 99 },
      { from: 'Seattle', driveTime: '50–70 min', distanceMiles: 42, startingPriceUSD: 165 },
      { from: 'Bellevue', driveTime: '55–75 min', distanceMiles: 46, startingPriceUSD: 175 },
      { from: 'SeaTac Airport', driveTime: '40–55 min', distanceMiles: 33, startingPriceUSD: 145 },
    ],
    pickupInfo: {
      arrivals: {
        heading: 'Private Arrival Pickup',
        description:
          'Your chauffeur coordinates arrival timing with flight operations and stages near the designated FBO or pickup area. Upon landing, passengers are escorted directly to the vehicle for immediate departure.',
        details: [
          { label: 'Primary pickup zone', value: 'FBO / private aviation area' },
          { label: 'Meet point', value: 'Operator-designated passenger handoff location' },
          { label: 'Wait time', value: 'Flexible staging aligned with flight activity' },
        ],
      },
      departures: {
        heading: 'Private Departure Drop-Off',
        description:
          'Your chauffeur arrives early for scheduled pickup, assists with luggage, and provides direct transfer to your departure terminal, hangar, or FBO at Tacoma Narrows Airport.',
        details: [
          { label: 'Recommended lead time', value: '30–45 minutes before private departure' },
          { label: 'Drop-off zone', value: 'FBO or operator-designated entrance' },
          { label: 'Luggage assistance', value: 'Always included' },
        ],
      },
    },
    faqs: [
      {
        question: 'Do you provide transportation for private jet passengers at Tacoma Narrows Airport?',
        answer:
          'Yes. Our Tacoma Narrows chauffeur service is specifically designed for private aviation clients, charter passengers, executives, and flight crews requiring reliable airport transfers.',
      },
      {
        question: 'Can you coordinate with my charter operator or FBO?',
        answer:
          'Absolutely. We routinely coordinate with charter operators, dispatch teams, and airport staff to align pickup timing with live flight schedules and operational changes.',
      },
      {
        question: 'How much does Tacoma Narrows Airport transportation cost?',
        answer:
          'Luxury sedan transfers from Tacoma Narrows Airport start at $95, with pricing based on destination, vehicle type, and service requirements.',
      },
      {
        question: 'Do you provide service from Tacoma Narrows Airport to Seattle?',
        answer:
          'Yes. Private transfers from Tacoma Narrows Airport to Seattle, Bellevue, and surrounding cities are available 24/7 with flat-rate pricing.',
      },
      {
        question: 'Is your Tacoma Narrows service available late at night or early morning?',
        answer:
          'Yes — our dispatch team operates 24/7 to support private departures, red-eye arrivals, and early-morning executive travel.',
      },
    ],
    cardIconPath: ICON.plane,
    meta: {
      title: 'Tacoma Narrows Airport Chauffeur Service | TIW Airport Car Service | Emerald City Limos',
      description:
        'Luxury Tacoma Narrows Airport (TIW) chauffeur service for private aviation, executive airport transfers, charter pickups, and Gig Harbor transportation.',
      keywords: [
        'tacoma narrows airport chauffeur',
        'tiw airport car service',
        'tacoma narrows limo service',
        'private aviation transportation tacoma',
      ],
    },
    href: '/airport/tacoma-narrows-airport',
  },
];

/** Look up an airport by slug. Returns `undefined` if not found. */
export function getAirport(slug: string): Airport | undefined {
  return airports.find((a) => a.slug === slug);
}
