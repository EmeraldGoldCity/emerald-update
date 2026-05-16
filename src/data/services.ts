/**
 * Service data — single source of truth for /services and /service/[slug].
 *
 * Editing rules:
 *  - `slug` is the URL segment under /service/ (kebab-case). The Airport
 *    Transfers entry uses `href: '/airport-transfers'` because it lives at
 *    the site root, not under /service/.
 *  - Keep `lead` and `leadExtended` unique per service to avoid thin/
 *    duplicate-content signals.
 *  - All FAQs should be service-specific; generic copy is a thin-content
 *    signal both Google and AI search engines penalize.
 *  - `meta.title` ≤ 60 chars, `meta.description` 140–160 chars.
 *
 * Icon paths are 24x24 Heroicons-style stroke paths (use stroke="currentColor"
 * + stroke-width="1.5" + fill="none" when rendering).
 */
import { fleet, type Vehicle } from './fleet';
import type { ImageMetadata } from 'astro';
import airportTransfer from "@/assets/images/services/airport/airport-transfer.png";
import executiveHero from "@/assets/images/services/corporate/executive.png";
import hourlyHero from "@/assets/images/services/personal-chauffeur/hourly.png";
import weddingHero from "@/assets/images/services/weddings/wedding.png";
import cruiseHero from "@/assets/images/services/cruise/cruise.jpg";
import boosterHero from "@/assets/images/services/booster-seat/booster-seats.png";
import eventsHero from "@/assets/images/services/special-events/events.png";
import gameDayHero from "@/assets/images/services/gameday/game-day.png";




export interface ServiceBenefit {
  title: string;
  description: string;
  iconPath: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceMeta {
  title: string;
  description: string;
  keywords: string[];
}

export interface ServiceHeroImage {
  src: ImageMetadata;
  srcMobile?: ImageMetadata;
  alt: string;
}

export interface Service {
  /** URL slug. Used as filename under /service/ and route segment. */
  slug: string;
  /** Display name. */
  name: string;

  /* ── Listing-grid card ───────────────────────────────── */
  /** Concise headline shown on the /services card. Often equals `name`. */
  cardHeadline: string;
  /** ~120-160 character card description. */
  cardDescription: string;
  /** 3–4 short bullet items for the card. */
  cardBullets: string[];
  /** Icon path used in the listing card. */
  cardIconPath: string;
  /** Card destination. Most route to `/service/<slug>`; airport transfers is special. */
  href: string;

  /* ── Detail page ─────────────────────────────────────── */
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  heroSupporting: string;
  heroImage: ServiceHeroImage;
  /** Lead paragraph (~70–110 words). Unique per service. */
  lead: string;
  /** Optional second paragraph for E-E-A-T depth (~50–90 words). */
  leadExtended?: string;
  /** 4–6 visualized benefit cards rendered inside ServiceIntro. */
  benefits: ServiceBenefit[];
  /** Fleet `id`s recommended for this service (1–3 ideal). */
  recommendedFleetIds: Vehicle['id'][];
  /** Service-specific FAQs (4–5 ideal). */
  faqs: ServiceFAQ[];
  /** SEO metadata. */
  meta: ServiceMeta;
}

/* ── Reusable icon path snippets ─────────────────────────── */
const ICON = {
  plane:
    'M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5',
  briefcase:
    'M20.25 14.15v4.073a2.121 2.121 0 0 1-.659 1.591 2.121 2.121 0 0 1-1.591.659H6a2.121 2.121 0 0 1-2.25-2.25V14.15M16.5 18.75h-9m9-7.5h-9m12 0V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 2.25 9.75v8.625c0 1.243 1.007 2.25 2.25 2.25h15c1.243 0 2.25-1.007 2.25-2.25V9.75a6.003 6.003 0 0 0-.084-1 47.94 47.94 0 0 0-2.916-.52m-12.5 0V3.75A2.25 2.25 0 0 1 7.5 1.5h6a2.25 2.25 0 0 1 2.25 2.25v.486',
  clock: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  heart:
    'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z',
  cruise:
    'M3 13.125C3 9.873 6.873 7.5 12 7.5s9 2.373 9 5.625m-18 0c0 3.252 4.03 6.375 9 6.375s9-3.123 9-6.375m-18 0V19.5m18-6.375V19.5M9 4.5h6m-3-3v3',
  trophy:
    'M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-1.5a3.75 3.75 0 0 0-7.5 0v1.5M12 3v2.25m0 0a4.5 4.5 0 0 0-4.5 4.5h9a4.5 4.5 0 0 0-4.5-4.5ZM4.5 9.75A2.25 2.25 0 0 1 6.75 7.5h.75M4.5 9.75v3.75A2.25 2.25 0 0 0 6.75 15.75M4.5 9.75H3M19.5 9.75A2.25 2.25 0 0 0 17.25 7.5h-.75M19.5 9.75v3.75a2.25 2.25 0 0 1-2.25 2.25M19.5 9.75H21',
  sparkles:
    'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z',
  user:
    'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',
  baby:
    'M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0M9 6.75c.621-.621 1.5-1.125 2.25-1.125h1.5C13.5 5.625 14.379 6.129 15 6.75',
  shieldCheck:
    'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z',
  badgeCheck:
    'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  globe:
    'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418',
  bolt: 'M3.75 13.5 13.5 3l-2.625 7.5h6.75L8.25 21l2.625-7.5H3.75Z',
  carSeat:
    'M5.25 6.75A2.25 2.25 0 0 1 7.5 4.5h9a2.25 2.25 0 0 1 2.25 2.25v6.75a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25V6.75ZM5.25 15.75v3.75M18.75 15.75v3.75M8.25 19.5h7.5',
  trafficCone:
    'M9 6 6.75 18m4.5-15 1.5 18m1.5-18 4.5 15M4.5 21h15',
  wifi:
    'M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z',
  receipt:
    'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H4.5A2.25 2.25 0 0 0 2.25 6.75v10.5A2.25 2.25 0 0 0 4.5 19.5Z',
  navigation:
    'M3.75 19.5h16.5m-16.5 0a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5h16.5A1.5 1.5 0 0 1 21.75 6v12a1.5 1.5 0 0 1-1.5 1.5m-16.5 0h16.5M7.5 8.25v8.25m9-8.25v8.25m-4.5-8.25v8.25',
  champagne:
    'M9 3.75v3a3 3 0 1 0 6 0v-3M9 3.75h6M12 9.75v9m-3 0h6M5.25 6.75 4.5 3h15l-.75 3.75',
};

/* ── Services ────────────────────────────────────────────── */
export const services: Service[] = [
  {
    slug: 'airport-transfers',
    name: 'Airport Transfers',
    cardHeadline: 'Airport Transfers',
    cardDescription:
      'Flight-tracked black-car service to and from SEA-TAC, Boeing Field, and Paine Field — staged in the cell lot before wheels-down.',
    cardBullets: [
      'Live ADS-B flight tracking',
      '60-min domestic / 90-min international grace',
      'Curb-to-curb or meet-and-greet',
      'SEA · BFI · PAE',
    ],
    cardIconPath: ICON.plane,
    href: '/service/airport-transfer',
    eyebrow: 'Airport Transfers',
    headline: 'Airport Transfers,',
    headlineAccent: 'on the clock you set',
    heroSupporting:
      'SEA-TAC, Boeing Field, and Paine Field — chauffeurs staged in the cell lot before wheels-down, with live flight tracking and a domestic 60-minute grace period.',
    heroImage: {
      src: airportTransfer,
      alt: 'Black luxury chauffeur sedan waiting curbside at SEA-TAC Airport arrivals',
    },
    lead:
      'Air travel runs on a clock you do not control. Our chauffeurs do — and we pad for it. Every airport pickup runs against the live ADS-B feed, not the airline-published time, so when wheels-down moves up by twenty minutes the chauffeur is already in the cell lot. Pickups carry a 60-minute domestic grace period (90 minutes international) and a meet-and-greet at baggage claim when requested. We hold a Washington Utilities and Transportation Commission permit and carry $1.5M in commercial liability for every ride.',
    leadExtended:
      'Drop-offs are timed backward from your boarding pass: TSA wait estimates, terminal door, and SEA-TAC traffic patterns all factor into the staging time. If your day shifts, dispatch reflows the ride; no change fees on a rebook initiated more than two hours before pickup.',
    benefits: [
      {
        title: 'Live Flight Tracking',
        description: 'ADS-B monitoring means we adjust to wheels-down, not the published arrival time.',
        iconPath: ICON.plane,
      },
      {
        title: '60-min Grace Period',
        description: 'One hour domestic, ninety minutes international — included on every airport pickup.',
        iconPath: ICON.clock,
      },
      {
        title: 'Meet & Greet',
        description: 'Chauffeur waits at baggage claim with your name on a discreet placard.',
        iconPath: ICON.user,
      },
      {
        title: 'Curb-to-Curb',
        description: 'Domestic departures: direct drop at your airline door — no parking shuffle.',
        iconPath: ICON.navigation,
      },
    ],
    recommendedFleetIds: ['s-class-s580', 'escalade-esv', 'navigator-l'],
    faqs: [
      {
        question: 'Which Seattle-area airports do you serve?',
        answer:
          'SEA-TAC International (SEA), Boeing Field / King County International (BFI), and Paine Field (PAE). We can also dispatch to nearby private FBOs on the same ramps.',
      },
      {
        question: 'How does flight tracking work?',
        answer:
          'When you book, dispatch attaches your flight number to the ride. Our system pulls live ADS-B data and reflows the chauffeur’s staging time as the arrival shifts, so the car is in the cell lot before you land.',
      },
      {
        question: 'What happens if my flight is delayed?',
        answer:
          'Nothing on your end. Pickups include a 60-minute domestic / 90-minute international grace period that begins at wheels-down. Beyond that, hourly wait time applies at standard chauffeur rates.',
      },
      {
        question: 'Do you offer meet-and-greet inside the terminal?',
        answer:
          'Yes — meet-and-greet is available on request. Your chauffeur greets you at baggage claim (international arrivals: post-customs) with a discreet placard and handles luggage to the vehicle.',
      },
      {
        question: 'Can you handle group arrivals from a single flight?',
        answer:
          'Yes. We dispatch SUV-class vehicles for up to 6 passengers or the Mercedes Sprinter for up to 12, with chauffeur-managed luggage staging at the curb.',
      },
    ],
    meta: {
      title: 'Seattle Airport Transfers | Emerald City Limos',
      description:
        'Flight-tracked SEA-TAC, BFI, and PAE airport chauffeur service. 60-minute domestic grace, meet & greet, and licensed Washington carriers — booked 24/7.',
      keywords: [
        'seattle airport car service',
        'sea-tac airport limo',
        'seattle airport transfer',
        'boeing field car service',
      ],
    },
  },

  {
    slug: 'executive-transportation',
    name: 'Executive Transportation',
    cardHeadline: 'Executive Transportation',
    cardDescription:
      'Discreet black-car service for Seattle business travel — Wi-Fi-equipped sedans and SUVs with chauffeurs in business attire and corporate accounts on file.',
    cardBullets: [
      'Wi-Fi-equipped sedans & SUVs',
      'Chauffeurs in business attire',
      'Consolidated corporate billing',
      'Dedicated dispatcher line',
    ],
    cardIconPath: ICON.briefcase,
    href: '/service/executive-transportation',
    eyebrow: 'Corporate Travel',
    headline: 'Executive',
    headlineAccent: 'Transportation',
    heroSupporting:
      'Black-car service built for the calendar that does not slip — Wi-Fi-equipped sedans and SUVs, business-attired chauffeurs, and corporate accounts on file for repeat travelers.',
    heroImage: {
      src: executiveHero,
      alt: 'Executive chauffeur opening luxury black sedan door for business traveler',
    },
    lead:
      'Time is the asset; the ride should protect it. Our executive chauffeurs are screened, business-attired, and trained on every loading-zone, FBO ramp, and hotel circle from South Lake Union to the Eastside tech corridor. Every executive vehicle carries in-cabin Wi-Fi, charging at each seat, and a chauffeur briefed on the day’s itinerary before you step in. We hold a Washington Utilities and Transportation Commission permit and $1.5M in commercial liability — the baseline corporate travel managers expect.',
    leadExtended:
      'Recurring riders move to a named account: consolidated monthly billing, a dispatcher-direct line, and the same chauffeur reassigned to standing rides on request. New accounts can be opened in under a business day; no setup fee, no monthly minimum.',
    benefits: [
      {
        title: 'In-Cabin Wi-Fi',
        description: 'Every executive sedan and SUV carries cellular Wi-Fi so you can work the ride, not lose it.',
        iconPath: ICON.wifi,
      },
      {
        title: 'Business-Attired Chauffeurs',
        description: 'Suit, tie, polished shoes, and a discretion-first posture every ride.',
        iconPath: ICON.user,
      },
      {
        title: 'Corporate Accounts',
        description: 'Consolidated invoicing, dispatcher-direct line, and a one-day setup window.',
        iconPath: ICON.receipt,
      },
      {
        title: 'On-Time, Backed',
        description: 'Chauffeurs depart staging early. If we are late, the ride is on us.',
        iconPath: ICON.shieldCheck,
      },
    ],
    recommendedFleetIds: ['s-class-s580', 'escalade-esv', 'navigator-l'],
    faqs: [
      {
        question: 'How do I open a corporate account?',
        answer:
          'Email client@emeraldcitylimos.com or call dispatch — we collect billing contact, authorized travelers, and preferred vehicle class. Setup typically completes within one business day; there is no setup fee and no monthly minimum.',
      },
      {
        question: 'Can the same chauffeur be assigned to my recurring rides?',
        answer:
          'Yes. Standing-ride accounts can request the same chauffeur for daily commute, recurring meetings, or executive transport. Subject to availability we honor the assignment; otherwise dispatch matches the closest available chauffeur of equal grade.',
      },
      {
        question: 'Do executive vehicles have Wi-Fi?',
        answer:
          'Every executive-tier vehicle (Mercedes S-Class, Cadillac Escalade ESV, Lincoln Navigator L) carries cellular Wi-Fi, charging at every seat, and bottled water. Wi-Fi credentials are provided on entry.',
      },
      {
        question: 'How is billing handled for corporate riders?',
        answer:
          'Accounts receive a single consolidated monthly invoice with per-ride detail, cost-center coding, and receipt PDFs ready for expense workflows. We can also integrate with Concur and Expensify on request.',
      },
      {
        question: 'Is the service available outside Seattle proper?',
        answer:
          'Yes — our executive service covers the entire Puget Sound metro: Bellevue, Redmond, Kirkland, Tacoma, Everett, and the I-5 / I-405 corridors. Rides outside that footprint are quoted per route.',
      },
    ],
    meta: {
      title: 'Seattle Executive Transportation | Emerald City Limos',
      description:
        'Discreet executive chauffeur service in Seattle. Wi-Fi sedans and SUVs, business-attired chauffeurs, and corporate accounts with consolidated billing.',
      keywords: [
        'seattle executive car service',
        'seattle corporate transportation',
        'seattle business chauffeur',
        'executive sedan seattle',
      ],
    },
  },

  {
    slug: 'hourly-charters',
    name: 'Hourly Charters',
    cardHeadline: 'Hourly Chauffeur',
    cardDescription:
      'On-demand chauffeur by the hour for multi-stop days — meetings, shopping, wine tours, photo shoots — with the same vehicle and chauffeur start to finish.',
    cardBullets: [
      '3-hour minimum',
      'Multi-stop, on your itinerary',
      'Wait time included',
      'Off-meter, flat hourly rate',
    ],
    cardIconPath: ICON.clock,
    href: '/service/hourly-charters',
    eyebrow: 'By the Hour',
    headline: 'Hourly',
    headlineAccent: 'Chauffeur Service',
    heroSupporting:
      'One chauffeur, one vehicle, and your day — booked by the hour for multi-stop business, wine tours, family days, and anything else that does not fit a single point-to-point ride.',
    heroImage: {
      src: hourlyHero,
      alt: 'Chauffeur waiting beside a luxury black SUV at a Seattle hotel entrance',
    },
    lead:
      'When the day has more than one stop, hourly is the right tool. You book the chauffeur and the vehicle for a block of time — three-hour minimum — and the meter does not run between stops. Wait time, idle, and short detours are included. The same chauffeur stays with you from the first stop to the last, so your bags, your route, and your timing carry across the whole day.',
    leadExtended:
      'Common use cases: a back-to-back day of meetings across Seattle and the Eastside, a Woodinville wine tour, a Pike Place / Chihuly / waterfront family day, a film or photo shoot, or a wedding-eve guest shuttle. Routing is yours; we recommend and refine.',
    benefits: [
      {
        title: '3-Hour Minimum',
        description: 'Hourly engagements start at three hours; extend on the fly in 30-minute increments.',
        iconPath: ICON.clock,
      },
      {
        title: 'Multi-Stop Built In',
        description: 'Itinerary changes mid-day are routine — dispatch and your chauffeur reflow in real time.',
        iconPath: ICON.navigation,
      },
      {
        title: 'Same Chauffeur, Whole Day',
        description: 'One driver from first stop to last keeps the day continuous and your luggage in place.',
        iconPath: ICON.user,
      },
      {
        title: 'Flat Hourly Rate',
        description: 'No surge, no per-mile surprises — wait time and idle minutes are inside the rate.',
        iconPath: ICON.receipt,
      },
    ],
    recommendedFleetIds: ['escalade-esv', 'sprinter', 'navigator-l'],
    faqs: [
      {
        question: 'What is the minimum booking length?',
        answer:
          'Three hours. The minimum reflects the chauffeur’s time block — once you are inside the window, you can use the hours flexibly across as many stops as you like.',
      },
      {
        question: 'Is wait time charged separately?',
        answer:
          'No. While you are on an hourly charter, the chauffeur stays with the vehicle and the clock runs continuously. There is no additional wait-time line item until you exceed the booked hours.',
      },
      {
        question: 'Can I extend the booking on the day?',
        answer:
          'Yes. If your day runs long, your chauffeur extends the booking through dispatch in 30-minute increments — subject to availability. Most extensions complete in under a minute.',
      },
      {
        question: 'Are there mileage limits?',
        answer:
          'Hourly charters within the Puget Sound metro have no soft cap. Long-distance days (Olympic Peninsula, Mt. Rainier, multi-county routes) are quoted to include any out-of-region surcharges before you book.',
      },
      {
        question: 'Do you provide wine-tour chauffeurs?',
        answer:
          'Yes — Woodinville, Yakima Valley, and Walla Walla are routine. We can stage an Escalade ESV or Sprinter, brief the chauffeur on your tasting list, and coordinate timing with each winery.',
      },
    ],
    meta: {
      title: 'Hourly Chauffeur Seattle | Emerald City Limos',
      description:
        'Hourly chauffeur service in Seattle — three-hour minimum, multi-stop days, and a flat rate. Wine tours, business days, and family events.',
      keywords: [
        'seattle hourly chauffeur',
        'seattle limo by the hour',
        'seattle wine tour chauffeur',
        'multi-stop limo seattle',
      ],
    },
  },

  {
    slug: 'wedding-transportation',
    name: 'Wedding Transportation',
    cardHeadline: 'Weddings',
    cardDescription:
      'White-glove chauffeur service for the day that has to be on time — couple, party, and guests, with a backup vehicle on call and a pre-rehearsed route.',
    cardBullets: [
      'Decorated luxury fleet',
      'Pre-rehearsed routes',
      'Backup vehicle on call',
      'Champagne service available',
    ],
    cardIconPath: ICON.heart,
    href: '/service/wedding-transportation',
    eyebrow: 'Wedding Day',
    headline: 'Wedding',
    headlineAccent: 'Transportation',
    heroSupporting:
      'White-glove chauffeur service for the day that has to be on time — pre-rehearsed routes, a backup vehicle on standby, and a chauffeur briefed on the photographer’s timeline.',
    heroImage: {
      src: weddingHero,
      alt: 'Bride stepping into a decorated luxury wedding limousine outside a venue',
    },
    lead:
      'A wedding day runs on a timeline that does not flex. We plan the route the week before, drive it once for traffic verification, and assign a backup vehicle on call within fifteen minutes of the lead car. The chauffeur arrives with white-glove service, a fitted suit, and the photographer’s shot list in hand. Decorations are coordinated with the planner; champagne service is available on request and complimentary for the couple’s first ride together.',
    leadExtended:
      'For wedding parties of twelve or more, we dispatch a Mercedes Sprinter alongside the lead vehicle. Multi-venue weddings (ceremony, photos, reception) are coordinated as a single itinerary so the chauffeur holds the day from getting-ready through final exit.',
    benefits: [
      {
        title: 'Pre-Rehearsed Route',
        description: 'We drive the route the week before to verify timing against current traffic.',
        iconPath: ICON.navigation,
      },
      {
        title: 'Backup Vehicle on Call',
        description: 'A second vehicle stages within 15 minutes of the lead car for every wedding booking.',
        iconPath: ICON.shieldCheck,
      },
      {
        title: 'Champagne Service',
        description: 'Complimentary for the couple’s first ride together; available for the party on request.',
        iconPath: ICON.champagne,
      },
      {
        title: 'Photographer-Aware Chauffeur',
        description: 'Chauffeur arrives with the shot list and the planner’s timeline already in hand.',
        iconPath: ICON.sparkles,
      },
    ],
    recommendedFleetIds: ['town-car-stretch', 'escalade-esv', 'sprinter'],
    faqs: [
      {
        question: 'Can the vehicle be decorated?',
        answer:
          'Yes. We coordinate with your planner or florist on exterior ribbons, a "Just Married" placard, or interior floral arrangements. Decorations are installed before the chauffeur arrives at the first pickup.',
      },
      {
        question: 'Do you handle multi-vehicle wedding parties?',
        answer:
          'Yes. For parties of twelve or more we dispatch a Mercedes Sprinter alongside the lead car; for larger weddings, multiple Sprinters and an Escalade lead vehicle. All vehicles run on a single coordinated itinerary.',
      },
      {
        question: 'What happens if the vehicle has an issue on the day?',
        answer:
          'Every wedding booking includes a backup vehicle staged within fifteen minutes of the lead car. If the lead vehicle is delayed by traffic or mechanical, the backup steps in with no change to your timeline.',
      },
      {
        question: 'How many hours should we book?',
        answer:
          'Most weddings book between five and eight hours for the couple plus a separate two-to-four-hour block for the wedding party. We map the timeline with your planner before quoting so the hour count matches the day.',
      },
      {
        question: 'Do you offer last-minute wedding bookings?',
        answer:
          'Yes — subject to fleet availability. Peak season (May–October) we recommend booking eight to twelve weeks ahead; off-season bookings can typically be confirmed inside of two weeks.',
      },
    ],
    meta: {
      title: 'Seattle Wedding Limousine | Emerald City Limos',
      description:
        'White-glove wedding chauffeur service in Seattle. Pre-rehearsed routes, backup vehicle on call, decorated luxury fleet, and complimentary champagne for the couple.',
      keywords: [
        'seattle wedding limo',
        'seattle wedding transportation',
        'wedding chauffeur seattle',
        'wedding sprinter seattle',
      ],
    },
  },

  {
    slug: 'cruise-transportation',
    name: 'Cruise Transportation',
    cardHeadline: 'Cruise Transportation',
    cardDescription:
      'Pier 91 and Pier 66 transfers timed to the cruise schedule — chauffeurs staged in the designated black-car queue with luggage handling included.',
    cardBullets: [
      'Pier 91 (Smith Cove) & Pier 66',
      'Cruise-schedule timed staging',
      'Luggage handling included',
      'Post-cruise return rides',
    ],
    cardIconPath: ICON.cruise,
    href: '/service/cruise-transportation',
    eyebrow: 'Cruise Transfers',
    headline: 'Cruise',
    headlineAccent: 'Transportation',
    heroSupporting:
      'Seamless transfers to Pier 91 (Smith Cove) and Pier 66 (Bell Street). Chauffeurs staged in the black-car queue, luggage handling included, and the timing built around the cruise schedule.',
    heroImage: {
      src: cruiseHero,
      alt: 'Cruise ship docked at Seattle Pier 91 with luxury black SUV in the foreground',
    },
    lead:
      'Cruise transfers run on a schedule the line publishes weeks in advance — and on the day, that schedule shifts. Our chauffeurs are staged in the designated black-car queue at Pier 91 (Smith Cove) and Pier 66 (Bell Street) according to your boarding window. Luggage handling is included; the chauffeur stages bags curbside so you walk straight into check-in. Disembarkation pickups follow the line’s release pattern — typically by-deck, twenty minutes per group — and we time the staging accordingly.',
    leadExtended:
      'Most of our cruise riders pair a SEA-TAC pickup with the pier transfer as a single booking, often with a hotel night in between. Combined-leg bookings carry a single confirmation and a single invoice.',
    benefits: [
      {
        title: 'Pier 91 & Pier 66',
        description: 'Both Seattle cruise terminals — staged in the designated black-car queue, not the public drive.',
        iconPath: ICON.cruise,
      },
      {
        title: 'Boarding-Window Timing',
        description: 'Staging is set by your boarding-pass window, not a fixed drop-off time.',
        iconPath: ICON.clock,
      },
      {
        title: 'Luggage Handling',
        description: 'Chauffeur stages bags curbside so you walk straight into check-in.',
        iconPath: ICON.briefcase,
      },
      {
        title: 'Combined SEA-TAC Leg',
        description: 'Pair the airport pickup and the pier transfer as a single booking, one invoice.',
        iconPath: ICON.plane,
      },
    ],
    recommendedFleetIds: ['escalade-esv', 'sprinter', 'navigator-l'],
    faqs: [
      {
        question: 'Which cruise terminals do you serve?',
        answer:
          'Pier 91 / Smith Cove (Princess, Norwegian, Royal Caribbean, Holland America) and Pier 66 / Bell Street (Norwegian, Oceania). Both terminals have designated black-car staging that we use rather than the public drop-off lanes.',
      },
      {
        question: 'How is timing handled for embarkation day?',
        answer:
          'We stage according to your boarding-pass window. If your check-in opens at 11:30 and the ship leaves at 16:00, your pickup is timed for arrival in your window, not at the published sailing time. This avoids both the early-morning crush and the late-afternoon bottleneck.',
      },
      {
        question: 'Do you handle luggage to the terminal?',
        answer:
          'Yes. The chauffeur unloads at the curbside porter station for your line, stages bags with the porter for tagging, and confirms your check-in path before departing.',
      },
      {
        question: 'Can you combine my SEA-TAC pickup and the cruise transfer?',
        answer:
          'Yes — most of our cruise clients pair an airport arrival, an optional pre-cruise hotel night, and the pier transfer as a single booking. One confirmation, one invoice, one chauffeur if the schedule allows.',
      },
      {
        question: 'What about post-cruise return pickups?',
        answer:
          'Disembarkation pickups stage according to the line’s release schedule — typically by-deck, twenty minutes per group. Share your deck and the release time and we stage the chauffeur to meet you in the porter zone.',
      },
    ],
    meta: {
      title: 'Seattle Cruise Transfers | Emerald City Limos',
      description:
        'Pier 91 and Pier 66 cruise transportation in Seattle. Boarding-window timed pickups, luggage handling, and combined SEA-TAC + cruise bookings.',
      keywords: [
        'seattle cruise transportation',
        'pier 91 transfer',
        'pier 66 transfer',
        'seattle cruise limo',
      ],
    },
  },

  {
    slug: 'game-day-transport',
    name: 'Game Day Transport',
    cardHeadline: 'Game Day Transport',
    cardDescription:
      'Stadium drop-offs and pickups for Lumen Field, T-Mobile Park, Climate Pledge Arena, and Husky Stadium — with a chauffeur who knows the closures.',
    cardBullets: [
      'Lumen · T-Mobile Park · Climate Pledge · Husky',
      'Designated black-car drop-off lanes',
      'Post-game pickup at staged points',
      'Groups up to 12',
    ],
    cardIconPath: ICON.trophy,
    href: '/service/game-day-transport',
    eyebrow: 'Game Day',
    headline: 'Game Day',
    headlineAccent: 'Transport',
    heroSupporting:
      'Stadium drop-offs and pickups for every Seattle venue — Lumen Field, T-Mobile Park, Climate Pledge Arena, and Husky Stadium — with a chauffeur who knows the road closures by heart.',
    heroImage: {
      src: gameDayHero,
      alt: 'Black luxury SUV at the entrance of a Seattle sports stadium on game day',
    },
    lead:
      'Game-day Seattle is a different city. Surface streets close in stages, the I-5 reversible lanes flip without notice, and the stadium drop-off lanes fill ninety minutes before kickoff. Our chauffeurs know the closure timing for Mariners, Seahawks, Sounders, Kraken, and Huskies game days — and they route around it. Drop-offs use the designated black-car lanes at each venue; post-game pickups stage at fixed meeting points and we text you the exact location ten minutes before doors open.',
    leadExtended:
      'For groups of eight or more we recommend the Mercedes Sprinter — single vehicle, single chauffeur, no caravan logistics. Tailgate-ready pickups (cooler space, no per-bag charges, return ride after the game) are routine.',
    benefits: [
      {
        title: 'Closure-Aware Routing',
        description: 'Chauffeurs route around live game-day closures rather than fixed map data.',
        iconPath: ICON.trafficCone,
      },
      {
        title: 'Black-Car Drop Lanes',
        description: 'Use the designated black-car lanes at each venue — not the public drop-off crush.',
        iconPath: ICON.navigation,
      },
      {
        title: 'Post-Game Staging',
        description: 'Fixed pickup points within a short walk of the gates; location texted before doors open.',
        iconPath: ICON.clock,
      },
      {
        title: 'Group-Ready',
        description: 'Sprinter dispatch for parties of 8–12, with cooler space for tailgate runs.',
        iconPath: ICON.user,
      },
    ],
    recommendedFleetIds: ['sprinter', 'escalade-esv', 'navigator-l'],
    faqs: [
      {
        question: 'Which Seattle venues do you serve?',
        answer:
          'Lumen Field (Seahawks, Sounders), T-Mobile Park (Mariners), Climate Pledge Arena (Kraken, Storm, concerts), and Husky Stadium (UW football). We also serve ShoWare Center in Kent for the Thunderbirds.',
      },
      {
        question: 'How does post-game pickup work?',
        answer:
          'Closing roads make in-front pickups impossible at most venues, so we stage at a fixed point within a five-minute walk. You receive a text with the exact pickup location and the chauffeur’s phone number ten minutes before doors open.',
      },
      {
        question: 'Can you accommodate tailgating?',
        answer:
          'Yes. The Mercedes Sprinter has dedicated cooler space and there is no per-bag charge for tailgate gear. Drop-off at the lot, pickup after the game from the same staged point.',
      },
      {
        question: 'What is the largest group you can handle?',
        answer:
          'Up to twelve in a single Sprinter. Larger groups (twenty-plus) we dispatch coordinated multi-vehicle bookings with a single point of contact for the day.',
      },
      {
        question: 'Do you handle out-of-town playoff games?',
        answer:
          'Yes — playoff or visiting-team transfers (BFI to the stadium, hotel circulator service for visiting fans) are routine. Book at least 48 hours ahead for guaranteed availability.',
      },
    ],
    meta: {
      title: 'Seattle Game Day Transport | Emerald City Limos',
      description:
        'Stadium chauffeur service for Lumen Field, T-Mobile Park, Climate Pledge Arena, and Husky Stadium. Closure-aware routing, post-game pickup staging, groups up to 12.',
      keywords: [
        'seattle game day transportation',
        'seahawks limo',
        'mariners chauffeur',
        'climate pledge arena car service',
      ],
    },
  },

  {
    slug: 'special-occasions',
    name: 'Special Occasions',
    cardHeadline: 'Special Occasions',
    cardDescription:
      'Galas, anniversaries, milestone birthdays, proms — multi-stop chauffeur service with the same discretion we bring to the executive ride.',
    cardBullets: [
      'Multi-stop itineraries',
      'In-cabin amenities by request',
      'Group sizes up to 12',
      'Decoration-friendly',
    ],
    cardIconPath: ICON.sparkles,
    href: '/service/special-occasions',
    eyebrow: 'Milestone Moments',
    headline: 'Special',
    headlineAccent: 'Occasions',
    heroSupporting:
      'Galas, milestone birthdays, anniversaries, proms — multi-stop chauffeur service with the same discretion and on-time discipline we bring to the executive ride.',
    heroImage: {
      src: eventsHero,
      alt: 'Couple stepping out of a black luxury limousine at an evening event',
    },
    lead:
      'Anniversaries, milestone birthdays, proms, quinceañeras, holiday parties, gala nights — the through-line is that the day has to feel effortless. We plan the route with you, brief the chauffeur on photo stops and surprise moments, and stage in-cabin amenities (chilled water and flutes, request-driven music, a privacy partition where the vehicle has one) before the first pickup. Group sizes up to twelve in a single Sprinter; larger parties coordinated as a multi-vehicle booking.',
    leadExtended:
      'For prom and similar youth events we run alcohol-free vehicles by default, ride-along chaperone protocols on request, and pre-confirmed drop-off windows with the venue. The chauffeur is the adult in the room; we hold that line.',
    benefits: [
      {
        title: 'Custom Itinerary',
        description: 'Multi-stop routes with photo windows, surprise stops, and on-the-day reflows.',
        iconPath: ICON.navigation,
      },
      {
        title: 'In-Cabin Amenities',
        description: 'Chilled water, flutes, request-driven music — set up before the first pickup.',
        iconPath: ICON.champagne,
      },
      {
        title: 'Group Sizes to 12',
        description: 'Single-vehicle Sprinter for the party; multi-vehicle coordination for larger groups.',
        iconPath: ICON.user,
      },
      {
        title: 'Decoration-Friendly',
        description: 'Birthday signage, prom corsage staging, anniversary placards — coordinated with you.',
        iconPath: ICON.sparkles,
      },
    ],
    recommendedFleetIds: ['town-car-stretch', 'escalade-esv', 'sprinter'],
    faqs: [
      {
        question: 'Do you handle prom transportation?',
        answer:
          'Yes — and we run alcohol-free vehicles by default for youth events. We confirm drop-off and pickup windows with the venue ahead of time and the chauffeur stays with the vehicle for the entire engagement.',
      },
      {
        question: 'Can we decorate the inside of the vehicle?',
        answer:
          'Yes — signage, balloons, anniversary placards, and similar are welcome. We ask that adhesives and confetti be avoided; the chauffeur can stage decor before pickup so the vehicle is ready when you step in.',
      },
      {
        question: 'How many stops can we include in one booking?',
        answer:
          'There is no fixed cap. Most special-occasion bookings include three to six stops over a three-to-six-hour block. Beyond that we discuss the route to make sure the timing is comfortable.',
      },
      {
        question: 'Is alcohol allowed in the vehicle?',
        answer:
          'For adult parties, sealed alcohol can be carried for unsealing at the destination; in-cabin consumption is at the chauffeur’s discretion and subject to applicable state law. For youth events the vehicle is alcohol-free.',
      },
      {
        question: 'Do you offer last-minute bookings?',
        answer:
          'Yes, subject to fleet availability. Peak weekends (prom season, holiday parties, New Year’s Eve) we recommend booking at least four weeks ahead.',
      },
    ],
    meta: {
      title: 'Seattle Special Occasion Limousine | Emerald City Limos',
      description:
        'Chauffeur service for milestone birthdays, anniversaries, proms, galas, and special nights in Seattle. Multi-stop itineraries and groups up to 12.',
      keywords: [
        'seattle special occasion limo',
        'seattle prom limo',
        'birthday limo seattle',
        'anniversary chauffeur seattle',
      ],
    },
  },

  {
    slug: 'personal-chauffeur',
    name: 'Personal Chauffeur',
    cardHeadline: 'Personal Chauffeur',
    cardDescription:
      'A dedicated chauffeur on retainer — same driver across rides, priority booking, and a single account for family and business.',
    cardBullets: [
      'Same chauffeur each ride',
      'Priority booking window',
      'Family + business on one account',
      'Consolidated monthly billing',
    ],
    cardIconPath: ICON.user,
    href: '/service/personal-chauffeur',
    eyebrow: 'On Retainer',
    headline: 'Personal',
    headlineAccent: 'Chauffeur',
    heroSupporting:
      'A dedicated chauffeur on retainer — the same driver across rides, a priority booking window for short-notice requests, and a single account for both family and business travel.',
    heroImage: {
      src: executiveHero,
      alt: 'Professional chauffeur waiting beside a black executive sedan',
    },
    lead:
      'A personal chauffeur is the closest thing to a private driver without the overhead. You hold an account; we assign a primary chauffeur familiar with your patterns — preferred routes, child-seat configuration, hotel and office loading zones, frequent destinations. Rides book through a single dispatcher contact and rotate to a vetted backup chauffeur when the primary is unavailable. Billing consolidates monthly with per-ride detail.',
    leadExtended:
      'Personal chauffeur accounts are common for executives who travel from the same address every week, families with recurring school or activity rides, and travelers who pair a regular SEA-TAC commute with occasional event nights. Minimum monthly engagement is twenty hours; above that, hourly rates step down.',
    benefits: [
      {
        title: 'Primary Chauffeur',
        description: 'Same driver across rides, familiar with your patterns, with a vetted backup on file.',
        iconPath: ICON.user,
      },
      {
        title: 'Priority Booking',
        description: 'Account holders get a priority window for short-notice and same-day requests.',
        iconPath: ICON.bolt,
      },
      {
        title: 'Family + Business',
        description: 'One account covers spouse, kids, and corporate rides — billed separately on the same invoice.',
        iconPath: ICON.heart,
      },
      {
        title: 'Monthly Billing',
        description: 'Consolidated invoice with per-ride detail and clean separation of personal vs. business.',
        iconPath: ICON.receipt,
      },
    ],
    recommendedFleetIds: ['s-class-s580', 'escalade-esv', 'navigator-l'],
    faqs: [
      {
        question: 'What is the minimum commitment?',
        answer:
          'Twenty hours per month. Below that, our standard hourly chauffeur service is usually a better fit. Above twenty hours, the per-hour rate steps down in tiers.',
      },
      {
        question: 'Can multiple family members or colleagues use the account?',
        answer:
          'Yes. Accounts can list multiple authorized riders — typically a spouse, children of driving-eligible age for pickup, and an executive assistant who can request rides on behalf of the principal.',
      },
      {
        question: 'What happens if my primary chauffeur is sick or off?',
        answer:
          'Every account has a named backup chauffeur on file who has been briefed on your preferences. When the primary is unavailable, the backup steps in with no change to the booking workflow.',
      },
      {
        question: 'Do I have to use the same vehicle each time?',
        answer:
          'No. Most accounts default to a primary vehicle class (sedan or SUV) but can swap up or down for the day’s use case — a single sedan for the morning commute, a Sprinter for the family trip, an Escalade for evening events.',
      },
      {
        question: 'How is short-notice handled?',
        answer:
          'Account holders move to a priority booking window — dispatch confirms same-day requests ahead of non-account bookings, and after-hours requests come straight to a 24/7 dispatcher line rather than the standard booking flow.',
      },
    ],
    meta: {
      title: 'Personal Chauffeur Seattle | Emerald City Limos',
      description:
        'Dedicated chauffeur on retainer in Seattle. Same primary driver each ride, priority booking, and a single account for family and business travel.',
      keywords: [
        'seattle personal chauffeur',
        'seattle private driver',
        'dedicated chauffeur seattle',
        'chauffeur retainer seattle',
      ],
    },
  },

  {
    slug: 'infant-car-seats',
    name: 'Infant Car Seats / Booster Seats',
    cardHeadline: 'Infant & Booster Seats',
    cardDescription:
      'Complimentary infant, convertible, and booster seats — professionally installed by your chauffeur and pre-staged before pickup.',
    cardBullets: [
      'Rear-facing, forward-facing & booster',
      'Pre-installed before pickup',
      'NHTSA install protocol',
      'No additional fee',
    ],
    cardIconPath: ICON.carSeat,
    href: '/service/infant-car-seats',
    eyebrow: 'Travelling with Children',
    headline: 'Infant & Booster',
    headlineAccent: 'Car Seats',
    heroSupporting:
      'Complimentary infant, convertible, and booster seats — professionally installed by your chauffeur ahead of pickup, with installation matched to your child’s age and weight.',
    heroImage: {
      src: boosterHero,
      alt: 'Properly installed infant car seat in the rear of a luxury black SUV',
    },
    lead:
      'Children ride in age-and-weight-appropriate seats — rear-facing infant carriers, convertible forward-facing seats, or high-back boosters — installed by your chauffeur before pickup. Installation follows the NHTSA inspection protocol: latch or seatbelt tensioned to the manufacturer specification, seat angle verified for the child’s weight range, and harness routing checked. There is no additional fee for the seat or for the install.',
    leadExtended:
      'Multiple children are routine — we stage up to three child seats in the Escalade ESV and up to five in the Mercedes Sprinter without taking adult capacity below the booked headcount. Request the seat type and your child’s age/weight at booking; dispatch confirms before the day.',
    benefits: [
      {
        title: 'Pre-Installed',
        description: 'Seat is installed before the chauffeur leaves staging — no on-curb fitting.',
        iconPath: ICON.carSeat,
      },
      {
        title: 'Age-Matched',
        description: 'Rear-facing, forward-facing, or booster — selected for the child’s weight range.',
        iconPath: ICON.baby,
      },
      {
        title: 'NHTSA Install Protocol',
        description: 'Latch or seatbelt tensioned to spec; angle and harness routing verified.',
        iconPath: ICON.shieldCheck,
      },
      {
        title: 'No Added Fee',
        description: 'Complimentary on every ride; multiple seats per vehicle without additional charge.',
        iconPath: ICON.badgeCheck,
      },
    ],
    recommendedFleetIds: ['escalade-esv', 'navigator-l', 'sprinter'],
    faqs: [
      {
        question: 'How do I request a car seat at booking?',
        answer:
          'Add a note to the booking with the child’s age and approximate weight; dispatch confirms the seat type (infant, convertible, or booster) and stages it for the chauffeur ahead of the pickup window.',
      },
      {
        question: 'What seat types are available?',
        answer:
          'Rear-facing infant carriers (newborn to roughly 22 lb), convertible seats with forward-facing harness (20–65 lb), and high-back boosters (40–100 lb). For preteens above booster age the standard adult seat belt routing is verified before the ride.',
      },
      {
        question: 'Is there a charge for the car seat?',
        answer:
          'No — car seats and installation are complimentary. We do not charge per seat or per child, and there is no added handling fee.',
      },
      {
        question: 'Can you fit multiple seats in one vehicle?',
        answer:
          'Yes. We stage up to three child seats in an Escalade ESV and up to five in a Mercedes Sprinter without taking adult capacity below your booked headcount. Triple-stroller families: dispatch will confirm the vehicle ahead of time.',
      },
      {
        question: 'What if my child is in between booster size and adult belt?',
        answer:
          'High-back boosters fit children up to roughly 100 lb. If your child is above that range but the lap belt does not yet route correctly, we will discuss a low-back booster or seat-position adjustment with you before the ride.',
      },
    ],
    meta: {
      title: 'Car Seats for Seattle Chauffeur Rides | Emerald City Limos',
      description:
        'Complimentary infant, convertible, and booster car seats with every Seattle chauffeur ride. Pre-installed, NHTSA-protocol fit, multiple seats per vehicle.',
      keywords: [
        'seattle limo car seat',
        'infant car seat chauffeur',
        'booster seat limo seattle',
        'family chauffeur seattle',
      ],
    },
  },
];

/** Look up a service by slug. Returns `undefined` if not found. */
export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Resolve `recommendedFleetIds` to full Vehicle objects, preserving order. */
export function getRecommendedFleet(service: Service): Vehicle[] {
  return service.recommendedFleetIds
    .map((id) => fleet.find((v) => v.id === id))
    .filter((v): v is Vehicle => v != null);
}
