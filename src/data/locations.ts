/**
 * Location data — single source of truth for /locations and /locations/[slug].
 *
 * Editing rules:
 *  - `slug` is the URL segment (kebab-case, lowercased, no spaces).
 *  - `name` is the human display name (e.g. "SeaTac Airport").
 *  - Keep every `intro` and `localValueProp` paragraph unique per city to
 *    avoid duplicate-content/thin-content penalties.
 *  - All FAQs should have city-specific answers — generic copy is a thin-
 *    content signal both Google and AI search engines penalize.
 *  - `meta.title` ≤ 60 chars, `meta.description` 140–160 chars.
 *
 * The schema below is intentionally schema.org-friendly: lat/lng, county,
 * zipCodes, etc. feed LocalBusiness / Service / Place JSON-LD without re-
 * shaping data downstream.
 */

import type { ImageMetadata } from 'astro';
import cad1 from '@/assets/locations/king/kirkland-2.jpg';
import imgSeattle from '@/assets/locations/king/seattle-landmark.jpg';
import imgBellevue from '@/assets/locations/king/Bellevue-landmark.jpg';
import imgRedmond from '@/assets/locations/king/Redmond-landmark.webp';
import imgKirkland from '@/assets/locations/king/kirkland.jpg';
import imgRenton from '@/assets/locations/king/renton-landmark.jpg';
import imgTacoma from '@/assets/locations/pierce/tacoma.jpg';
import imgEverett from '@/assets/locations/snohomish/everrett.webp';
import imgLynnwood from '@/assets/locations/king/lynnwood.jpg';
import imgEdmonds from '@/assets/locations/king/edmond.jpg';
import imgBothell from '@/assets/locations/snohomish/bothell.png';
import imgWoodinville from '@/assets/locations/king/woodinville.webp';
import imgAuburn from '@/assets/locations/king/auburn-landmark.jpg';
import imgFederalWay from '@/assets/locations/king/federal-way-landmark.webp';
import imgSammamish from '@/assets/locations/king/sammamish-landmark.jpg';
import imgKent from '@/assets/locations/king/kent.jpg';
import imgLakewood from '@/assets/locations/king/lakewood.jpg';
import imgPuyallup from '@/assets/locations/king/puyallup.jpg';
import imgMarysville from '@/assets/locations/snohomish/marysville.jpg';
import imgSeatac from '@/assets/images/airports/seatac-airport.webp';
import imgBoeingField from '@/assets/images/airports/boeing-field.jpg';

export interface PopularRoute {
  /** Origin display name. Defaults to the parent location when omitted. */
  from?: string;
  /** Destination display name. */
  to: string;
  /** Approximate one-way drive time at typical traffic. */
  driveTime: string;
  /** Approximate distance in miles. */
  distanceMiles: number;
  /** Optional starting price for sedan-tier service ($). */
  startingPriceUSD?: number;
  /** Optional internal route slug for future point-to-point pages. */
  href?: string;
}

export interface AirportProximity {
  /** "SEA-TAC International Airport" / "Boeing Field (BFI)" / "Paine Field (PAE)". */
  airport: string;
  /** IATA code for badge / schema. */
  code: 'SEA' | 'BFI' | 'PAE';
  /** Approx miles. */
  distanceMiles: number;
  /** Approx drive time at typical traffic. */
  driveTime: string;
}

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationMeta {
  /** Title tag — keep ≤ 60 chars. */
  title: string;
  /** Meta description — 140–160 chars. */
  description: string;
  /** Comma-joined into <meta name="keywords">. Optional, low SEO weight. */
  keywords: string[];
  /** Optional OG image override. Falls back to `heroImage`. */
  ogImage?: string;
}

export interface Location {
  /** Human display name. */
  name: string;
  /** URL slug — must be kebab-case, no spaces, must match filename. */
  slug: string;
  /** WA county. */
  county: string;
  /** Lat / lng — used for LocalBusiness JSON-LD GeoCoordinates. */
  coordinates: { lat: number; lng: number };
  /** ZIP codes within the service zone — fuels "we serve you" search intent. */
  zipCodes: string[];

  /** Hero image — public path or imported asset URL. */
  heroImage: ImageMetadata;
  /** Hero alt text — describe the *image*, not the page. */
  heroImageAlt: string;

  /** 1–2 sentence supporting paragraph for the hero. Unique per city. */
  heroSupporting: string;
  /** Local value-prop paragraph (~80–120 words). Unique per city. */
  localValueProp: string;
  /** Optional second paragraph for E-E-A-T depth (~60–100 words). */
  localValuePropExtended?: string;

  /** Landmarks, business districts, hotels, venues we serve nearby. */
  nearbyLandmarks: string[];
  businessDistricts?: string[];
  hotels?: string[];
  eventVenues?: string[];

  /** Airport proximity rows — drives "X to SeaTac" intent. */
  airportProximity: AirportProximity[];

  /** Popular point-to-point routes (3–6 ideal). */
  popularRoutes: PopularRoute[];

  /** Location-specific FAQs (4–6 ideal). */
  faqs: LocationFAQ[];

  /** SEO metadata. */
  meta: LocationMeta;
}

// Fallback hero used when a slug has no entry in HERO_IMAGES below.
const HERO_DEFAULT: ImageMetadata = cad1;

/**
 * Per-location hero images.
 *
 * Each /locations/[slug] route shows the image keyed by its slug. To swap
 * one out: drop a new file in /public/images/ (or anywhere under public/)
 * and update its path here. The map is applied to the `locations` array
 * below, so the rest of the file stays untouched.
 *
 * Slugs without an entry fall back to HERO_DEFAULT.
 */
const HERO_IMAGES: Record<string, ImageMetadata> = {
  seattle:          imgSeattle,
  bellevue:         imgBellevue,
  redmond:          imgRedmond,
  kirkland:         imgKirkland,
  renton:           imgRenton,
  tacoma:           imgTacoma,
  everett:          imgEverett,
  lynnwood:         imgLynnwood,
  edmonds:          imgEdmonds,
  bothell:          imgBothell,
  woodinville:      imgWoodinville,
  auburn:           imgAuburn,
  'federal-way':    imgFederalWay,
  sammamish:        imgSammamish,
  kent:             imgKent,
  lakewood:         imgLakewood,
  puyallup:         imgPuyallup,
  marysville:       imgMarysville,
  'seatac-airport': imgSeatac,
  'boeing-field':   imgBoeingField,
};

export const locations: Location[] = [
  {
    name: 'Seattle',
    slug: 'seattle',
    county: 'King County',
    coordinates: { lat: 47.6062, lng: -122.3321 },
    zipCodes: ['98101', '98104', '98109', '98112', '98119', '98121', '98122', '98134', '98144'],
    heroImage: HERO_DEFAULT,
    heroImageAlt:
      'Black luxury chauffeur sedan on a downtown Seattle street with the Space Needle in the background',
    heroSupporting:
      'On-time, professionally chauffeured black-car service across downtown Seattle, Capitol Hill, Belltown, and the waterfront booked 24/7.',
    localValueProp:
      'Seattle moves on its own clock. Meetings stack up in South Lake Union, dinners run late on Capitol Hill, and the I-5 reversible express lanes change direction without warning. Emerald City Limos is built around that reality. Our Seattle chauffeurs know which surface streets stay open during a Mariners game, where the loading zones at the Fairmont Olympic and Four Seasons actually let a Cadillac Escalade ESV pull up, and how to time a SeaTac run so you clear the airport expressway before it backs up. We hold a Washington Utilities and Transportation Commission permit, carry $1.5M in liability coverage, and dispatch flight-tracked rides for every airport pickup.',
    localValuePropExtended:
      'Whether you are flying in for a Microsoft, Amazon, or Boeing meeting, hosting clients during a Climate Pledge Arena event, or boarding a cruise at Pier 91, our chauffeurs greet you in business attire, handle your luggage, and route around the Mercer mess so you arrive composed.',
    nearbyLandmarks: [
      'Space Needle',
      'Pike Place Market',
      'Climate Pledge Arena',
      'Lumen Field',
      'T-Mobile Park',
      'Pier 91 Cruise Terminal',
      'Washington State Convention Center',
    ],
    businessDistricts: ['Downtown', 'South Lake Union', 'Belltown', 'Pioneer Square'],
    hotels: ['Fairmont Olympic', 'Four Seasons', 'The Edgewater', 'Lotte Hotel Seattle', 'InterContinental Seattle'],
    eventVenues: ['Climate Pledge Arena', 'Lumen Field', 'Paramount Theatre', 'Benaroya Hall'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 13, driveTime: '20–30 min' },
      { airport: 'Boeing Field (BFI)', code: 'BFI', distanceMiles: 6, driveTime: '12–18 min' },
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 25, driveTime: '35–45 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '20–30 min', distanceMiles: 13, startingPriceUSD: 75 },
      { to: 'Bellevue', driveTime: '15–25 min', distanceMiles: 10, startingPriceUSD: 75 },
      { to: 'Redmond', driveTime: '25–40 min', distanceMiles: 16, startingPriceUSD: 95 },
      { to: 'Pier 91 Cruise Terminal', driveTime: '15–25 min', distanceMiles: 4, startingPriceUSD: 75 },
      { to: 'Tacoma', driveTime: '35–55 min', distanceMiles: 33, startingPriceUSD: 135 },
    ],
    faqs: [
      {
        question: 'Do you serve all of Seattle, including Capitol Hill and West Seattle?',
        answer:
          'Yes. We serve every Seattle neighborhood Downtown, Capitol Hill, Queen Anne, Ballard, Fremont, West Seattle, Magnolia, the U-District, Columbia City, and beyond. Our chauffeurs route around bridge openings and stadium-day closures so you arrive on time.',
      },
      {
        question: 'How much is an airport transfer from downtown Seattle to SEA-TAC?',
        answer:
          'Sedan service from downtown Seattle to SEA-TAC starts at $75 flat-rate; luxury SUVs start at $95. Pricing is all-inclusive no surge, no hidden tolls and every airport ride includes flight tracking and a 60-minute domestic / 90-minute international meet-and-greet grace period.',
      },
      {
        question: 'Can you handle corporate transportation for Seattle-based companies?',
        answer:
          'Yes. We run dedicated chauffeur accounts for executives across South Lake Union, Pioneer Square, and downtown with consolidated billing, dispatcher-direct lines, and the same chauffeur reassigned to recurring rides on request.',
      },
      {
        question: 'Do you pick up from Pier 91 and Pier 66 cruise terminals?',
        answer:
          'Absolutely. Cruise transfers are one of our most-booked services from May through October. We monitor disembarkation times and stage chauffeurs in the designated black-car queue at both Pier 91 (Smith Cove) and Pier 66.',
      },
      {
        question: 'What vehicles are available for Seattle pickups?',
        answer:
          'Our Seattle fleet includes the Mercedes-Benz S-Class, Cadillac Escalade ESV, Lincoln Navigator L, Mercedes Sprinter executive vans, and stretch limousines for special occasions.',
      },
    ],
    meta: {
      title: 'Seattle Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur and black-car service in Seattle. SEA-TAC airport transfers, corporate rides, weddings, and hourly chauffeur booked 24/7.',
      keywords: ['seattle chauffeur', 'seattle black car service', 'seattle limo service', 'seattle airport transfer'],
    },
  },

  {
    name: 'Bellevue',
    slug: 'bellevue',
    county: 'King County',
    coordinates: { lat: 47.6101, lng: -122.2015 },
    zipCodes: ['98004', '98005', '98006', '98007', '98008'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur SUV waiting outside a Bellevue high-rise office tower at dusk',
    heroSupporting:
      'Executive chauffeur service for Bellevue’s tech corridor flight-tracked airport runs, corporate accounts, and event transportation across the Eastside.',
    localValueProp:
      'Bellevue is no longer Seattle’s suburb it is a Fortune-100 hub with Microsoft satellite offices, T-Mobile’s headquarters, and Amazon’s growing Eastside campus. Our Bellevue chauffeurs know the Bellevue Collection loading zones, where to stage at The Westin and the Hyatt Regency, and how the 520 toll plaza behaves at 5 p.m. on a Thursday. We also know that an executive flying into SEA-TAC at 8:55 p.m. needs a chauffeur already in the cell lot at 8:35 not en route. Every airport pickup includes live flight tracking, a 60-minute domestic grace period, and a chauffeur in business attire holding a sign at the curb or, for international arrivals, baggage claim.',
    localValuePropExtended:
      'For events at Meydenbauer Center, holiday shopping at Bellevue Square, or wine tours into Woodinville, we deploy Cadillac Escalade ESVs and Mercedes Sprinter executive vans staged within ten minutes of the Eastside.',
    nearbyLandmarks: [
      'Bellevue Collection',
      'Bellevue Square',
      'Meydenbauer Center',
      'Bellevue Botanical Garden',
      'Downtown Park',
      'KEMPER Development office towers',
    ],
    businessDistricts: ['Downtown Bellevue', 'Bel-Red Corridor', 'Factoria', 'Eastgate'],
    hotels: ['The Westin Bellevue', 'Hyatt Regency Bellevue', 'W Bellevue', 'Hilton Bellevue'],
    eventVenues: ['Meydenbauer Center', 'Hyatt Regency Bellevue ballrooms', 'Bellevue Arts Museum'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 17, driveTime: '25–40 min' },
      { airport: 'Boeing Field (BFI)', code: 'BFI', distanceMiles: 13, driveTime: '20–30 min' },
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 26, driveTime: '35–50 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '25–40 min', distanceMiles: 17, startingPriceUSD: 95 },
      { to: 'Downtown Seattle', driveTime: '15–25 min', distanceMiles: 10, startingPriceUSD: 75 },
      { to: 'Redmond (Microsoft Campus)', driveTime: '10–20 min', distanceMiles: 7, startingPriceUSD: 75 },
      { to: 'Woodinville Wine Country', driveTime: '15–25 min', distanceMiles: 10, startingPriceUSD: 95 },
      { to: 'Paine Field', driveTime: '35–50 min', distanceMiles: 26, startingPriceUSD: 145 },
    ],
    faqs: [
      {
        question: 'Do you serve all of Bellevue, including Bridle Trails and Somerset?',
        answer:
          'Yes. We serve every Bellevue neighborhood Downtown, Bel-Red, Factoria, Eastgate, Bridle Trails, Somerset, Newport, and Crossroads with the same flat-rate pricing and 24/7 dispatch.',
      },
      {
        question: 'What does an airport transfer from Bellevue to SEA-TAC cost?',
        answer:
          'Sedan service from Bellevue to SEA-TAC starts at $95 flat-rate; luxury SUVs from $115. Pricing is all-inclusive flight tracking, meet-and-greet, tolls, and gratuity-disclosed.',
      },
      {
        question: 'Can you handle corporate transportation for Bellevue-based companies?',
        answer:
          'Yes. We run dedicated chauffeur accounts for Eastside companies including consolidated monthly billing, dispatcher-direct phone lines, and recurring chauffeur assignments for executives who want the same driver every week.',
      },
      {
        question: 'Do you provide chauffeurs for events at Meydenbauer Center?',
        answer:
          'We do - we routinely stage Cadillac Escalade ESVs and Mercedes Sprinter vans for conferences, galas, and corporate events at Meydenbauer Center, the Hyatt Regency Bellevue, and the Bellevue Collection.',
      },
    ],
    meta: {
      title: 'Bellevue Chauffeur Service | Emerald City Limos',
      description:
        'Premium chauffeur service in Bellevue, WA. Flight-tracked SEA-TAC transfers, corporate accounts, weddings, and hourly chauffeur - booked 24/7.',
      keywords: ['bellevue chauffeur', 'bellevue black car service', 'bellevue limo service', 'bellevue corporate transportation'],
    },
  },

  {
    name: 'Redmond',
    slug: 'redmond',
    county: 'King County',
    coordinates: { lat: 47.6740, lng: -122.1215 },
    zipCodes: ['98052', '98053', '98073'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur sedan parked at the Microsoft Redmond campus entrance',
    heroSupporting:
      'Chauffeur service for the Microsoft Redmond Campus, Marymoor Park, and the Eastside tech corridor — flight-tracked, business-attired, on time.',
    localValueProp:
      'Redmond runs on Microsoft’s campus rhythm and a tightly packed schedule of investor visits, partner meetings, and offsite retreats. Our Redmond chauffeurs know every campus building number from Studio H to The Commons and route around the daily 520 backups so a 9 a.m. arrival at Building 33 lands at 8:55. We also support the steady stream of international executives flying into SEA-TAC for week-long visits: flight-tracked pickups, a chauffeur waiting in baggage claim with a discreet sign, and a quiet ride to the Westin Redmond or the Marriott Redmond Town Center.',
    nearbyLandmarks: [
      'Microsoft Redmond Campus',
      'Marymoor Park',
      'Redmond Town Center',
      'Sammamish River Trail',
      'Willows Run Golf Club',
    ],
    businessDistricts: ['Microsoft Campus', 'Overlake', 'Downtown Redmond', 'Education Hill'],
    hotels: ['The Westin Redmond', 'Marriott Redmond Town Center', 'Residence Inn Redmond'],
    eventVenues: ['Marymoor Park', 'Microsoft Conference Center', 'Redmond Town Center plaza'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 22, driveTime: '30–45 min' },
      { airport: 'Boeing Field (BFI)', code: 'BFI', distanceMiles: 18, driveTime: '25–40 min' },
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 24, driveTime: '30–45 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '30–45 min', distanceMiles: 22, startingPriceUSD: 110 },
      { to: 'Downtown Seattle', driveTime: '25–40 min', distanceMiles: 16, startingPriceUSD: 95 },
      { to: 'Bellevue', driveTime: '10–20 min', distanceMiles: 7, startingPriceUSD: 75 },
      { to: 'Woodinville Wine Country', driveTime: '15–25 min', distanceMiles: 8, startingPriceUSD: 85 },
    ],
    faqs: [
      {
        question: 'Do you serve the Microsoft Redmond Campus?',
        answer:
          'Yes. We pick up and drop off at every Microsoft building. Our chauffeurs have campus access protocols memorized and use the correct visitor entries.',
      },
      {
        question: 'How much is a Redmond to SEA-TAC airport transfer?',
        answer:
          'Sedan service from Redmond to SEA-TAC starts at $110 flat-rate; luxury SUVs from $135. Includes flight tracking, meet-and-greet, and tolls.',
      },
      {
        question: 'Can you set up a corporate account for our Redmond office?',
        answer:
          'Yes. We onboard corporate accounts in 48 hours with consolidated invoicing, named chauffeur preferences, and a dispatcher-direct line.',
      },
      {
        question: 'Do you offer hourly chauffeur service in Redmond?',
        answer:
          'Yes. Hourly chauffeur (3-hour minimum) is popular for back-to-back partner meetings, board offsites, and full-day customer briefings.',
      },
    ],
    meta: {
      title: 'Redmond Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Redmond, WA. Microsoft Campus pickups, SEA-TAC transfers, corporate accounts flight-tracked and booked 24/7.',
      keywords: ['redmond chauffeur', 'redmond limo service', 'microsoft campus car service', 'redmond airport transfer'],
    },
  },

  {
    name: 'Kirkland',
    slug: 'kirkland',
    county: 'King County',
    coordinates: { lat: 47.6815, lng: -122.2087 },
    zipCodes: ['98033', '98034'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur SUV at a Kirkland waterfront restaurant overlooking Lake Washington',
    heroSupporting:
      'Chauffeured transportation across Kirkland Google’s Eastside campus, Carillon Point, and the Lake Washington waterfront, available 24/7.',
    localValueProp:
      'Kirkland is where the Eastside loosens its tie. Carillon Point hosts client dinners on the water, Google’s Kirkland campus runs partner offsites, and Juanita Bay weddings spill into late summer evenings. Our Kirkland chauffeurs are staged within ten minutes of downtown they know the Houghton Beach pickup quirks, the Heathman Hotel valet rotation, and which Lake Street side streets stay clear during the summer farmers market. For airport runs, we monitor flights live and pre-position the chauffeur so a return from SEA-TAC drops you at your front door before the takeout cools.',
    nearbyLandmarks: ['Carillon Point', 'Kirkland Waterfront', 'Juanita Bay Park', 'Marina Park', 'Google Kirkland Campus'],
    businessDistricts: ['Downtown Kirkland', 'Totem Lake', 'Houghton', 'Juanita'],
    hotels: ['The Heathman Hotel Kirkland', 'Woodmark Hotel & Still Spa'],
    eventVenues: ['Woodmark Hotel ballroom', 'Carillon Point', 'Kirkland Performance Center'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 22, driveTime: '30–45 min' },
      { airport: 'Boeing Field (BFI)', code: 'BFI', distanceMiles: 18, driveTime: '25–40 min' },
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 21, driveTime: '28–40 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '30–45 min', distanceMiles: 22, startingPriceUSD: 105 },
      { to: 'Downtown Seattle', driveTime: '20–35 min', distanceMiles: 12, startingPriceUSD: 85 },
      { to: 'Bellevue', driveTime: '10–20 min', distanceMiles: 6, startingPriceUSD: 75 },
      { to: 'Woodinville Wine Country', driveTime: '12–20 min', distanceMiles: 6, startingPriceUSD: 75 },
    ],
    faqs: [
      {
        question: 'Do you serve all of Kirkland, including Totem Lake and Juanita?',
        answer:
          'Yes Downtown, Houghton, Juanita, Totem Lake, and Finn Hill. Same flat-rate pricing across all Kirkland ZIPs (98033, 98034).',
      },
      {
        question: 'How much is a Kirkland to SEA-TAC airport transfer?',
        answer:
          'Sedan service from Kirkland to SEA-TAC starts at $105 flat-rate; luxury SUVs from $130. All-inclusive pricing with flight tracking and meet-and-greet.',
      },
      {
        question: 'Do you do wedding transportation for the Woodmark Hotel?',
        answer:
          'Frequently. The Woodmark is one of our most-served wedding venues. We coordinate with the property’s event team and stage vehicles in the designated lot.',
      },
    ],
    meta: {
      title: 'Kirkland Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Kirkland, WA. Google Campus pickups, Woodmark weddings, SEA-TAC transfers booked 24/7.',
      keywords: ['kirkland chauffeur', 'kirkland limo service', 'kirkland car service', 'woodmark hotel wedding transportation'],
    },
  },

  {
    name: 'Renton',
    slug: 'renton',
    county: 'King County',
    coordinates: { lat: 47.4829, lng: -122.2171 },
    zipCodes: ['98055', '98056', '98057', '98058', '98059'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur sedan parked outside the Boeing Renton plant at sunrise',
    heroSupporting:
      'Chauffeur service for Renton Boeing 737 plant, The Landing, and the Seahawks training facility fast SEA-TAC access at flat-rate pricing.',
    localValueProp:
      'Renton’s proximity to SEA-TAC (a 12-minute run on a clear day) makes it one of the most popular pickup zones on our schedule. We move Boeing executives between the 737 final assembly plant and the airport, ferry season-ticket holders to Seahawks practice at the Virginia Mason Athletic Center, and run hourly chauffeurs through The Landing and the Renton Highlands. Our chauffeurs know which I-405 ramps to skip during the afternoon Renton-to-Bellevue crawl and which back routes through Skyway shave ten minutes off a SEA-TAC return.',
    nearbyLandmarks: [
      'Boeing Renton Factory',
      'The Landing',
      'Gene Coulon Memorial Beach Park',
      'Virginia Mason Athletic Center (Seahawks)',
      'Renton Municipal Airport',
    ],
    businessDistricts: ['Downtown Renton', 'The Landing', 'Renton Highlands', 'Tukwila border'],
    hotels: ['Hyatt Regency Lake Washington at Seattle’s Southport', 'Larkspur Landing Renton'],
    eventVenues: ['Hyatt Regency Lake Washington', 'Renton Pavilion Event Center'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 9, driveTime: '12–20 min' },
      { airport: 'Boeing Field (BFI)', code: 'BFI', distanceMiles: 8, driveTime: '12–18 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '12–20 min', distanceMiles: 9, startingPriceUSD: 75 },
      { to: 'Downtown Seattle', driveTime: '20–30 min', distanceMiles: 13, startingPriceUSD: 85 },
      { to: 'Bellevue', driveTime: '15–25 min', distanceMiles: 9, startingPriceUSD: 85 },
      { to: 'Boeing Field', driveTime: '12–18 min', distanceMiles: 8, startingPriceUSD: 75 },
    ],
    faqs: [
      {
        question: 'How quickly can I get from Renton to SEA-TAC?',
        answer:
          'Renton is one of the fastest SEA-TAC pickup zones typically 12–20 minutes door-to-door. Sedan service starts at $75 flat-rate.',
      },
      {
        question: 'Do you serve the Boeing Renton Factory?',
        answer:
          'Yes - we routinely chauffeur Boeing executives, customers, and visiting delegations between the 737 plant and SEA-TAC, downtown Seattle, and Bellevue.',
      },
      {
        question: 'Can you set up corporate accounts for Renton-based businesses?',
        answer:
          'Yes - corporate onboarding takes 48 hours and includes consolidated billing, dispatcher-direct lines, and named chauffeur preferences.',
      },
    ],
    meta: {
      title: 'Renton Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Renton, WA. Fast SEA-TAC transfers, Boeing plant pickups, corporate accounts - flat-rate, 24/7.',
      keywords: ['renton chauffeur', 'renton limo service', 'boeing renton car service', 'renton airport transfer'],
    },
  },

  {
    name: 'Tacoma',
    slug: 'tacoma',
    county: 'Pierce County',
    coordinates: { lat: 47.2529, lng: -122.4443 },
    zipCodes: ['98402', '98403', '98404', '98405', '98406', '98407', '98408', '98409'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur SUV on the Tacoma Narrows Bridge at sunset',
    heroSupporting:
      'Chauffeur service across Tacoma University of Puget Sound, Point Ruston, the Tacoma Dome — with flat-rate SEA-TAC and Sea-Tac cruise transfers.',
    localValueProp:
      'Tacoma is its own city, not a Seattle suburb and our Tacoma chauffeur service treats it that way. We run flat-rate transfers from Old Town and Stadium District to SEA-TAC, ferry corporate visitors between the Tacoma Dome, Greater Tacoma Convention Center, and Hotel Murano, and stage Mercedes Sprinter executive vans for events at LeMay – America’s Car Museum and Point Ruston. Our chauffeurs know the I-5 patterns through Fife and the alternate routes via Highway 167 when the southbound lanes wedge up at JBLM.',
    nearbyLandmarks: [
      'Tacoma Dome',
      'Point Defiance Park',
      'Point Ruston',
      'LeMay America’s Car Museum',
      'Museum of Glass',
      'University of Puget Sound',
    ],
    businessDistricts: ['Downtown Tacoma', 'Stadium District', 'Hilltop', 'Old Town'],
    hotels: ['Hotel Murano', 'Marriott Courtyard Tacoma Downtown', 'McMenamins Elks Temple'],
    eventVenues: ['Tacoma Dome', 'Greater Tacoma Convention Center', 'Pantages Theater', 'Foss Waterway Seaport'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 21, driveTime: '30–50 min' },
      { airport: 'Boeing Field (BFI)', code: 'BFI', distanceMiles: 27, driveTime: '35–55 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '30–50 min', distanceMiles: 21, startingPriceUSD: 115 },
      { to: 'Downtown Seattle', driveTime: '35–55 min', distanceMiles: 33, startingPriceUSD: 145 },
      { to: 'Bellevue', driveTime: '40–60 min', distanceMiles: 38, startingPriceUSD: 165 },
      { to: 'Joint Base Lewis-McChord', driveTime: '15–25 min', distanceMiles: 12, startingPriceUSD: 95 },
    ],
    faqs: [
      {
        question: 'Do you serve all of Tacoma, including Ruston and University Place?',
        answer:
          'Yes - Downtown, Stadium District, Old Town, Ruston, North End, and out to University Place at flat-rate pricing.',
      },
      {
        question: 'How much is a Tacoma to SEA-TAC airport transfer?',
        answer:
          'Sedan service from Tacoma to SEA-TAC starts at $115 flat-rate; luxury SUVs from $145. All-inclusive with flight tracking and tolls.',
      },
      {
        question: 'Do you offer transportation for Tacoma Dome events?',
        answer:
          'Yes - we routinely shuttle groups to and from concerts and conventions at the Tacoma Dome, with Mercedes Sprinter vans for groups of 8–14.',
      },
    ],
    meta: {
      title: 'Tacoma Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Tacoma, WA. Flat-rate SEA-TAC transfers, Tacoma Dome events, corporate accounts flight-tracked, 24/7.',
      keywords: ['tacoma chauffeur', 'tacoma limo service', 'tacoma airport transfer', 'tacoma dome transportation'],
    },
  },

  {
    name: 'Everett',
    slug: 'everett',
    county: 'Snohomish County',
    coordinates: { lat: 47.9789, lng: -122.2021 },
    zipCodes: ['98201', '98203', '98204', '98208'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur SUV outside the Boeing Everett Factory at sunrise',
    heroSupporting:
      'Chauffeur service across Everett Boeing Everett Factory, Naval Station Everett, Funko HQ with fast Paine Field and SEA-TAC transfers.',
    localValueProp:
      'Everett is the heartbeat of Snohomish County aerospace. Our chauffeurs run a steady cadence between the Boeing Everett Factory, Paine Field (PAE), and Naval Station Everett plus the rapidly growing Funko, Fluke, and Boeing supplier campuses. Paine Field is just three miles from the Boeing plant and runs commercial flights to nine cities, so we handle a high volume of executive transfers without the SEA-TAC hour. For SEA-TAC-bound clients, we time runs against I-5 traffic through Lynnwood and Mountlake Terrace.',
    nearbyLandmarks: [
      'Boeing Everett Factory & Future of Flight',
      'Paine Field (PAE)',
      'Naval Station Everett',
      'Angel of the Winds Arena',
      'Historic Everett Theatre',
    ],
    businessDistricts: ['Downtown Everett', 'Boeing/Paine Field corridor', 'Silver Lake'],
    hotels: ['Courtyard Marriott Everett', 'Hilton Garden Inn Everett', 'Holiday Inn Downtown Everett'],
    eventVenues: ['Angel of the Winds Arena', 'Historic Everett Theatre', 'Future of Flight Aviation Center'],
    airportProximity: [
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 5, driveTime: '8–15 min' },
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 32, driveTime: '40–60 min' },
      { airport: 'Boeing Field (BFI)', code: 'BFI', distanceMiles: 32, driveTime: '40–55 min' },
    ],
    popularRoutes: [
      { to: 'Paine Field', driveTime: '8–15 min', distanceMiles: 5, startingPriceUSD: 75 },
      { to: 'SEA-TAC Airport', driveTime: '40–60 min', distanceMiles: 32, startingPriceUSD: 145 },
      { to: 'Downtown Seattle', driveTime: '35–55 min', distanceMiles: 28, startingPriceUSD: 135 },
      { to: 'Boeing Everett Factory', driveTime: '5–10 min', distanceMiles: 3, startingPriceUSD: 65 },
    ],
    faqs: [
      {
        question: 'Do you serve the Boeing Everett Factory?',
        answer:
          'Yes - daily. Our chauffeurs have visitor protocols memorized and stage at the correct gates for executive arrivals and Future of Flight tours.',
      },
      {
        question: 'How much is an Everett to SEA-TAC airport transfer?',
        answer:
          'Sedan service from Everett to SEA-TAC starts at $145 flat-rate; luxury SUVs from $175. We route around I-5 backups when traffic warrants.',
      },
      {
        question: 'Do you serve Paine Field commercial passengers?',
        answer:
          'Absolutely, Paine Field is one of our highest-volume pickup airports. Sedan service from Everett to PAE starts at $75.',
      },
    ],
    meta: {
      title: 'Everett Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Everett, WA. Boeing Factory pickups, Paine Field and SEA-TAC transfers, corporate accounts — 24/7.',
      keywords: ['everett chauffeur', 'everett limo service', 'paine field car service', 'boeing everett car service'],
    },
  },

  
  {
    name: 'Snohomish',
    slug: 'snohomish',
    county: 'Snohomish County',
    coordinates: { lat: 47.9129, lng: -122.0982 },
    zipCodes: ['98290', '98296'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Luxury black chauffeur sedan parked in historic downtown Snohomish near antique storefronts',
    heroSupporting:
      'Private chauffeur and luxury car service throughout Snohomish, historic downtown, wedding venues, and airport transfers to Paine Field and SEA-TAC.',
    localValueProp:
      'Snohomish is one of the region’s strongest markets for event-based luxury transportation, particularly weddings, winery visits, private celebrations, and airport transfers for residents outside the Seattle core. Clients regularly book chauffeur service for downtown dining, antique shopping weekends, barn weddings, and executive transportation while avoiding long parking walks or post-event driving. Our fleet is especially popular for wedding guest shuttles and elegant arrival service to rural estates and venues throughout the Snohomish Valley.',
    nearbyLandmarks: [
      'Historic Downtown Snohomish',
      'Snohomish River',
      'Blackman House Museum',
      'Centennial Trail',
    ],
    businessDistricts: ['Historic Downtown Snohomish', 'Bickford Avenue Corridor'],
    hotels: ['Best Western Cascadia Inn'],
    eventVenues: [
      'Hidden Meadows',
      'The Lookout Lodge',
      'Belle Chapel',
    ],
    airportProximity: [
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 16, driveTime: '22–30 min' },
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 43, driveTime: '50–70 min' },
    ],
    popularRoutes: [
      { to: 'Paine Field', driveTime: '22–30 min', distanceMiles: 16, startingPriceUSD: 95 },
      { to: 'SEA-TAC Airport', driveTime: '50–70 min', distanceMiles: 43, startingPriceUSD: 165 },
      { to: 'Downtown Seattle', driveTime: '45–60 min', distanceMiles: 33, startingPriceUSD: 135 },
    ],
    faqs: [
      {
        question: 'Do you provide wedding transportation in Snohomish?',
        answer:
          'Yes - Snohomish is one of our most requested wedding markets. We provide bridal limousines, guest shuttle service, and executive black car transportation to local venues.',
      },
      {
        question: 'Can I book airport service from rural Snohomish properties?',
        answer:
          'Absolutely. We regularly provide pickups from private residences, estates, and event venues throughout the Snohomish area.',
      },
    ],
    meta: {
      title: 'Snohomish Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur and limo service in Snohomish, WA for weddings, airport transfers, private events, and executive transportation.',
      keywords: ['snohomish chauffeur', 'snohomish limo service', 'snohomish wedding transportation', 'snohomish airport car'],
    },
  },

  {
    name: 'Monroe',
    slug: 'monroe',
    county: 'Snohomish County',
    coordinates: { lat: 47.8554, lng: -121.9715 },
    zipCodes: ['98272'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Luxury SUV chauffeur parked near Evergreen State Fairgrounds in Monroe',
    heroSupporting:
      'Professional chauffeur and black car service in Monroe for fairground events, casino trips, airport transfers, and private transportation.',
    localValueProp:
      'Monroe serves as an important gateway between suburban Snohomish County and outdoor recreation corridors heading east. Transportation demand here centers around Evergreen State Fair events, casino traffic, airport transfers, and private rides for residents who prefer dependable premium service over long rideshare waits. Our chauffeurs frequently handle transportation for event attendees, executive clients, and families traveling to and from Seattle-area airports.',
    nearbyLandmarks: [
      'Evergreen State Fairgrounds',
      'Tulalip Resort Casino',
      'Downtown Monroe',
      'Skykomish River Park',
    ],
    businessDistricts: ['Downtown Monroe', 'US-2 Commercial Corridor'],
    hotels: ['Best Western Sky Valley Inn'],
    eventVenues: ['Evergreen State Fairgrounds'],
    airportProximity: [
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 24, driveTime: '30–40 min' },
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 46, driveTime: '55–75 min' },
    ],
    popularRoutes: [
      { to: 'Paine Field', driveTime: '30–40 min', distanceMiles: 24, startingPriceUSD: 110 },
      { to: 'SEA-TAC Airport', driveTime: '55–75 min', distanceMiles: 46, startingPriceUSD: 170 },
      { to: 'Downtown Seattle', driveTime: '50–65 min', distanceMiles: 38, startingPriceUSD: 145 },
      { to: 'Evergreen State Fairgrounds', driveTime: '5–10 min', distanceMiles: 2, startingPriceUSD: 65 },
    ],
    faqs: [
      {
        question: 'Do you provide transportation for Evergreen State Fair events?',
        answer:
          'Yes - we offer private chauffeur service to and from Evergreen State Fairgrounds for concerts, exhibitions, and seasonal events.',
      },
      {
        question: 'How much is Monroe to SEA-TAC?',
        answer:
          'Luxury sedan transfers from Monroe to SEA-TAC start at $170 flat-rate.',
      },
    ],
    meta: {
      title: 'Monroe Chauffeur Service | Emerald City Limos',
      description:
        'Private chauffeur and black car service in Monroe, WA for airport transfers, fairground transportation, and luxury rides.',
      keywords: ['monroe chauffeur', 'monroe limo service', 'monroe airport transfer', 'monroe black car'],
    },
  },

  {
    name: 'Arlington',
    slug: 'arlington',
    county: 'Snohomish County',
    coordinates: { lat: 48.1987, lng: -122.1251 },
    zipCodes: ['98223'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Luxury black sedan chauffeur parked near Arlington Municipal Airport',
    heroSupporting:
      'Luxury chauffeur service in Arlington for airport transfers, executive transportation, private events, and regional travel throughout North Snohomish County.',
    localValueProp:
      'Arlington clients often require dependable long-distance transportation due to its northern location and limited premium transport options. Our chauffeurs provide scheduled airport transfers, executive service, event transportation, and private long-haul rides into Seattle, Bellevue, and surrounding business hubs. This is particularly valuable for clients who prioritize reliability over unpredictable app-based rides, especially for early departures or late-night returns.',
    nearbyLandmarks: [
      'Arlington Municipal Airport',
      'Downtown Arlington',
      'Legion Memorial Park',
      'Gleneagle Golf Course',
    ],
    businessDistricts: ['Downtown Arlington', 'Smokey Point'],
    hotels: ['Medallion Inn & Suites'],
    eventVenues: ['Gleneagle Golf Course'],
    airportProximity: [
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 28, driveTime: '35–45 min' },
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 58, driveTime: '70–90 min' },
    ],
    popularRoutes: [
      { to: 'Paine Field', driveTime: '35–45 min', distanceMiles: 28, startingPriceUSD: 120 },
      { to: 'SEA-TAC Airport', driveTime: '70–90 min', distanceMiles: 58, startingPriceUSD: 195 },
      { to: 'Downtown Seattle', driveTime: '60–80 min', distanceMiles: 50, startingPriceUSD: 165 },
      { to: 'Smokey Point', driveTime: '8–15 min', distanceMiles: 5, startingPriceUSD: 70 },
    ],
    faqs: [
      {
        question: 'Do you offer long-distance airport transfers from Arlington?',
        answer:
          'Yes - Arlington clients frequently book private airport transportation to both Paine Field and SEA-TAC, including early morning departures.',
      },
      {
        question: 'Can I book chauffeur service from Arlington to Seattle?',
        answer:
          'Absolutely. We provide direct point-to-point luxury transportation from Arlington to Seattle, Bellevue, and other regional destinations.',
      },
    ],
    meta: {
      title: 'Arlington Chauffeur Service | Emerald City Limos',
      description:
        'Premium chauffeur and limo service in Arlington, WA for airport transportation, executive travel, and private long-distance rides.',
      keywords: ['arlington chauffeur', 'arlington limo service', 'arlington airport transfer', 'arlington black car'],
    },
  },

  {
    name: 'Mukilteo',
    slug: 'mukilteo',
    county: 'Snohomish County',
    coordinates: { lat: 47.9445, lng: -122.3046 },
    zipCodes: ['98275'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Luxury black chauffeur SUV parked near Mukilteo Lighthouse overlooking Puget Sound',
    heroSupporting:
      'Private chauffeur service throughout Mukilteo, the ferry terminal, waterfront district, Boeing commuter corridors, and Paine Field transfers.',
    localValueProp:
      'Mukilteo serves a unique mix of ferry commuters, Boeing professionals, and waterfront residents who prioritize reliable transportation over parking stress. Our chauffeurs coordinate pickups around Mukilteo-Clinton ferry schedules, executive transfers to Boeing and nearby aerospace campuses, and airport service to both Paine Field and SEA-TAC. For clients hosting guests or celebrating waterfront occasions, our fleet provides polished transportation without disrupting the pace of the area.',
    nearbyLandmarks: [
      'Mukilteo Lighthouse Park',
      'Mukilteo-Clinton Ferry Terminal',
      'Future of Flight Aviation Center',
      'Japanese Gulch Trail',
    ],
    businessDistricts: ['Old Town Mukilteo', 'Harbour Pointe'],
    hotels: ['Silver Cloud Hotel Mukilteo'],
    eventVenues: ['Rosehill Community Center'],
    airportProximity: [
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 5, driveTime: '10–15 min' },
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 39, driveTime: '45–65 min' },
    ],
    popularRoutes: [
      { to: 'Paine Field', driveTime: '10–15 min', distanceMiles: 5, startingPriceUSD: 85 },
      { to: 'Mukilteo Ferry Terminal', driveTime: '5–8 min', distanceMiles: 2, startingPriceUSD: 65 },
      { to: 'SEA-TAC Airport', driveTime: '45–65 min', distanceMiles: 39, startingPriceUSD: 155 },
      { to: 'Downtown Seattle', driveTime: '35–55 min', distanceMiles: 28, startingPriceUSD: 125 },
    ],
    faqs: [
      {
        question: 'Do you provide ferry terminal pickups in Mukilteo?',
        answer:
          'Yes - we coordinate chauffeur pickups and drop-offs around Mukilteo-Clinton ferry activity to reduce wait times and missed sailings.',
      },
      {
        question: 'How much is Mukilteo to Paine Field?',
        answer:
          'Luxury sedan transfers from Mukilteo to Paine Field start at $85 flat-rate.',
      },
    ],
    meta: {
      title: 'Mukilteo Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Mukilteo, WA with ferry terminal pickups, Boeing executive transfers, and airport transportation to Paine Field and SEA-TAC.',
      keywords: ['mukilteo chauffeur', 'mukilteo limo service', 'mukilteo ferry car service', 'mukilteo airport transfer'],
    },
  },

  {
    name: 'Mountlake Terrace',
    slug: 'mountlake-terrace',
    county: 'Snohomish County',
    coordinates: { lat: 47.7880, lng: -122.3087 },
    zipCodes: ['98043'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Executive black sedan parked near Mountlake Terrace transit center',
    heroSupporting:
      'Luxury car service in Mountlake Terrace for airport transfers, commuter connections, and corporate transportation across North Seattle corridors.',
    localValueProp:
      'Mountlake Terrace is built around mobility. With direct freeway access, expanding transit infrastructure, and proximity to both Seattle and Snohomish County employers, clients here need punctual transportation that removes commute friction. Our chauffeurs frequently handle SEA-TAC transfers, corporate pickups, and evening service for residents avoiding parking congestion when heading into Seattle.',
    nearbyLandmarks: [
      'Mountlake Terrace Transit Center',
      'Ballinger Park',
      'Terrace Creek Park',
      'Lake Ballinger',
    ],
    businessDistricts: ['Town Center', 'Lake Ballinger Corridor'],
    hotels: ['Studio 6 Mountlake Terrace'],
    eventVenues: ['Mountlake Terrace Community Senior Center'],
    airportProximity: [
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 15, driveTime: '20–28 min' },
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 31, driveTime: '35–55 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '35–55 min', distanceMiles: 31, startingPriceUSD: 145 },
      { to: 'Paine Field', driveTime: '20–28 min', distanceMiles: 15, startingPriceUSD: 95 },
      { to: 'Downtown Seattle', driveTime: '20–35 min', distanceMiles: 15, startingPriceUSD: 110 },
    ],
    faqs: [
      {
        question: 'Do you offer early morning airport service from Mountlake Terrace?',
        answer:
          'Yes - airport pickups and drop-offs are available 24/7, including early departures and red-eye arrivals.',
      },
      {
        question: 'How much is Mountlake Terrace to SEA-TAC?',
        answer:
          'Flat-rate luxury sedan service to SEA-TAC starts at $145.',
      },
    ],
    meta: {
      title: 'Mountlake Terrace Chauffeur Service | Emerald City Limos',
      description:
        'Professional chauffeur service in Mountlake Terrace, WA for airport transfers, executive transportation, and private rides to Seattle.',
      keywords: ['mountlake terrace chauffeur', 'mountlake terrace limo', 'mountlake terrace airport car service'],
    },
  },

  {
    name: 'Shoreline',
    slug: 'shoreline',
    county: 'Snohomish County',
    coordinates: { lat: 47.7565, lng: -122.3455 },
    zipCodes: ['98133', '98155', '98177'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Luxury chauffeur SUV parked near Richmond Beach waterfront in Shoreline',
    heroSupporting:
      'Private black car and chauffeur service throughout Shoreline for airport transportation, executive travel, and Seattle-bound rides.',
    localValueProp:
      'Shoreline residents benefit from proximity to Seattle without the density of downtown living. Clients here regularly book airport transfers, private transportation to downtown meetings, and evening chauffeur service for dining, events, and waterfront outings. Our service removes the hassle of parking, rideshare uncertainty, and freeway timing across I-5 and Aurora corridors.',
    nearbyLandmarks: [
      'Richmond Beach Saltwater Park',
      'Shoreline Community College',
      'Carkeek Park',
      'Shoreline Stadium',
    ],
    businessDistricts: ['Aurora Corridor', 'North City', 'Richmond Beach'],
    hotels: ['Best Motel Shoreline'],
    eventVenues: ['Shoreline Conference Center'],
    airportProximity: [
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 18, driveTime: '25–35 min' },
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 28, driveTime: '35–55 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '35–55 min', distanceMiles: 28, startingPriceUSD: 140 },
      { to: 'Downtown Seattle', driveTime: '20–30 min', distanceMiles: 12, startingPriceUSD: 105 },
      { to: 'Paine Field', driveTime: '25–35 min', distanceMiles: 18, startingPriceUSD: 105 },
    ],
    faqs: [
      {
        question: 'Can I book Shoreline to Seattle event transportation?',
        answer:
          'Yes - we provide hourly and point-to-point chauffeur service for concerts, dinners, meetings, and private occasions.',
      },
      {
        question: 'Do you offer flat rates to SEA-TAC?',
        answer:
          'Yes - Shoreline to SEA-TAC sedan transfers start at $140 flat-rate.',
      },
    ],
    meta: {
      title: 'Shoreline Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Shoreline, WA for airport transfers, Seattle executive rides, and premium black car transportation.',
      keywords: ['shoreline chauffeur', 'shoreline limo service', 'shoreline airport transfer'],
    },
  },

  {
    name: 'Woodinville',
    slug: 'woodinville',
    county: 'Snohomish County',
    coordinates: { lat: 47.7543, lng: -122.1635 },
    zipCodes: ['98072'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Stretch limousine parked near Woodinville wine country estates',
    heroSupporting:
      'Luxury chauffeur and limo service in Woodinville for wine tours, executive travel, airport transportation, and private celebrations.',
    localValueProp:
      'Woodinville is one of the strongest luxury transportation markets in the region due to its winery district, destination dining, and private event traffic. Clients regularly book chauffeured wine tours, anniversary evenings, executive transfers, and group transportation between tasting rooms, hotels, and Seattle. Our fleet is designed for clients who want a polished experience without navigating parking or coordinating drivers.',
    nearbyLandmarks: [
      'Chateau Ste. Michelle',
      'Woodinville Whiskey Co.',
      'Hollywood District',
      'Willows Lodge',
    ],
    businessDistricts: ['Hollywood District', 'Downtown Woodinville'],
    hotels: ['Willows Lodge'],
    eventVenues: ['Chateau Ste. Michelle'],
    airportProximity: [
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 23, driveTime: '30–40 min' },
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 31, driveTime: '40–60 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '40–60 min', distanceMiles: 31, startingPriceUSD: 145 },
      { to: 'Downtown Seattle', driveTime: '30–45 min', distanceMiles: 22, startingPriceUSD: 120 },
      { to: 'Woodinville Wine District', driveTime: '5–12 min', distanceMiles: 3, startingPriceUSD: 75 },
    ],
    faqs: [
      {
        question: 'Do you offer Woodinville wine tour limo service?',
        answer:
          'Yes - we provide hourly wine tour chauffeur service for couples, groups, and corporate outings throughout Woodinville wine country.',
      },
      {
        question: 'Can I book a stretch limo for Woodinville events?',
        answer:
          'Absolutely. Stretch limousines and SUVs are available for weddings, birthdays, and winery celebrations.',
      },
    ],
    meta: {
      title: 'Woodinville Chauffeur Service | Emerald City Limos',
      description:
        'Premium chauffeur and limo service in Woodinville, WA for wine tours, airport transfers, and luxury private transportation.',
      keywords: ['woodinville chauffeur', 'woodinville limo', 'woodinville wine tour limo'],
    },
  },

  {
    name: 'Mill Creek',
    slug: 'mill-creek',
    county: 'Snohomish County',
    coordinates: { lat: 47.8601, lng: -122.2043 },
    zipCodes: ['98012'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Luxury black SUV chauffeur service outside Mill Creek Town Center',
    heroSupporting:
      'Executive transportation and airport chauffeur service throughout Mill Creek, Town Center, and surrounding residential communities.',
    localValueProp:
      'Mill Creek attracts professionals, executives, and families who value convenience, consistency, and elevated service standards. Our chauffeurs regularly handle airport runs, private evening transportation, and executive pickups from Mill Creek Town Center and nearby residential neighborhoods.',
    nearbyLandmarks: [
      'Mill Creek Town Center',
      'Mill Creek Country Club',
      'North Creek Trail',
    ],
    businessDistricts: ['Mill Creek Town Center'],
    hotels: ['Hilton Garden Inn Bothell'],
    eventVenues: ['Mill Creek Country Club'],
    airportProximity: [
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 10, driveTime: '15–22 min' },
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 36, driveTime: '45–60 min' },
    ],
    popularRoutes: [
      { to: 'Paine Field', driveTime: '15–22 min', distanceMiles: 10, startingPriceUSD: 90 },
      { to: 'SEA-TAC Airport', driveTime: '45–60 min', distanceMiles: 36, startingPriceUSD: 150 },
    ],
    faqs: [
      {
        question: 'Do you provide airport transfers from Mill Creek?',
        answer:
          'Yes - we provide 24/7 flat-rate airport transportation to both Paine Field and SEA-TAC.',
      },
    ],
    meta: {
      title: 'Mill Creek Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Mill Creek, WA with airport transfers, executive transportation, and private black car service.',
      keywords: ['mill creek chauffeur', 'mill creek limo service', 'mill creek airport car'],
    },
  },


  {
    name: 'Lynnwood',
    slug: 'lynnwood',
    county: 'Snohomish County',
    coordinates: { lat: 47.8209, lng: -122.3151 },
    zipCodes: ['98036', '98037', '98087'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur SUV outside Alderwood Mall in Lynnwood',
    heroSupporting:
      'Chauffeur service across Lynnwood Alderwood Mall, Edmonds Community College, the Lynnwood Convention Center with flat-rate SEA-TAC and Paine Field transfers.',
    localValueProp:
      'Lynnwood sits at the I-5/I-405 split the most-used commute artery between Snohomish and King counties and our chauffeurs work it daily. We handle SEA-TAC-bound transfers for the entire Alderwood corridor, run hourly chauffeur for events at the Lynnwood Convention Center, and provide group transportation in Mercedes Sprinters for weddings and reunions at the larger banquet venues. With Sound Transit Link light-rail extending to Lynnwood City Center Station, we increasingly meet clients at the station for the “last mile” to home or hotel in a Mercedes S-Class.',
    nearbyLandmarks: [
      'Alderwood Mall',
      'Lynnwood Convention Center',
      'Edmonds Community College',
      'Lynnwood Link light-rail station',
    ],
    businessDistricts: ['Alderwood', 'Lynnwood City Center', 'Highway 99 corridor'],
    hotels: ['Embassy Suites by Hilton Seattle North Lynnwood', 'Hampton Inn & Suites Lynnwood'],
    eventVenues: ['Lynnwood Convention Center', 'Embassy Suites ballroom'],
    airportProximity: [
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 9, driveTime: '12–20 min' },
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 24, driveTime: '30–50 min' },
      { airport: 'Boeing Field (BFI)', code: 'BFI', distanceMiles: 24, driveTime: '30–45 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '30–50 min', distanceMiles: 24, startingPriceUSD: 125 },
      { to: 'Paine Field', driveTime: '12–20 min', distanceMiles: 9, startingPriceUSD: 85 },
      { to: 'Downtown Seattle', driveTime: '25–45 min', distanceMiles: 17, startingPriceUSD: 105 },
      { to: 'Bellevue', driveTime: '25–40 min', distanceMiles: 18, startingPriceUSD: 110 },
    ],
    faqs: [
      {
        question: 'Do you serve all of Lynnwood?',
        answer: 'Yes - Alderwood, Lynnwood City Center, the Highway 99 corridor, and out to Mountlake Terrace.',
      },
      {
        question: 'How much is a Lynnwood to SEA-TAC transfer?',
        answer: 'Sedan service starts at $125 flat-rate; luxury SUVs from $155. All-inclusive with flight tracking.',
      },
      {
        question: 'Do you provide chauffeurs for Lynnwood Convention Center events?',
        answer:
          'Yes - we routinely deploy Mercedes Sprinters and Cadillac Escalades for conferences and corporate events at the Lynnwood Convention Center.',
      },
    ],
    meta: {
      title: 'Lynnwood Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Lynnwood, WA. SEA-TAC and Paine Field transfers, convention center events, corporate accounts - 24/7.',
      keywords: ['lynnwood chauffeur', 'lynnwood limo service', 'lynnwood airport transfer', 'alderwood car service'],
    },
  },

  {
    name: 'Edmonds',
    slug: 'edmonds',
    county: 'Snohomish County',
    coordinates: { lat: 47.8107, lng: -122.3774 },
    zipCodes: ['98020', '98026'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur sedan at the Edmonds ferry terminal at golden hour',
    heroSupporting:
      'Chauffeur service throughout Edmonds the ferry terminal, downtown waterfront, and Edmonds Center for the Arts with fast Paine Field and SEA-TAC transfers.',
    localValueProp:
      'Edmonds is a destination, not a thoroughfare - its quiet, walkable downtown, the Edmonds-Kingston ferry, and Edmonds Center for the Arts pull in a steady stream of visitors who want to leave the car at home. Our chauffeurs handle ferry-aligned pickups (we time arrivals to actual sailings, not advertised ones), shuttle Edmonds residents to SEA-TAC and Paine Field, and run anniversary or birthday occasions in our stretch limousines along the waterfront. We also support corporate clients in the Westgate and Five Corners commercial pockets.',
    nearbyLandmarks: [
      'Edmonds-Kingston Ferry Terminal',
      'Edmonds Center for the Arts',
      'Brackett’s Landing Park',
      'Edmonds Marina',
    ],
    businessDistricts: ['Downtown Edmonds', 'Westgate', 'Five Corners'],
    hotels: ['Best Western Plus Edmonds Harbor Inn'],
    eventVenues: ['Edmonds Center for the Arts'],
    airportProximity: [
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 11, driveTime: '15–22 min' },
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 27, driveTime: '35–55 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '35–55 min', distanceMiles: 27, startingPriceUSD: 135 },
      { to: 'Paine Field', driveTime: '15–22 min', distanceMiles: 11, startingPriceUSD: 95 },
      { to: 'Edmonds-Kingston Ferry Terminal', driveTime: '5–10 min', distanceMiles: 1, startingPriceUSD: 65 },
      { to: 'Downtown Seattle', driveTime: '25–45 min', distanceMiles: 18, startingPriceUSD: 110 },
    ],
    faqs: [
      {
        question: 'Can you time a pickup with my Edmonds-Kingston ferry?',
        answer:
          'Yes - we monitor WSDOT ferry sailings and adjust pickup times to actual departures, not posted ones. Tell us your booked sailing and we’ll do the rest.',
      },
      {
        question: 'How much is an Edmonds to SEA-TAC transfer?',
        answer: 'Sedan service from Edmonds to SEA-TAC starts at $135 flat-rate; luxury SUVs from $165.',
      },
    ],
    meta: {
      title: 'Edmonds Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Edmonds, WA. Ferry-aligned pickups, SEA-TAC and Paine Field transfers, special occasions - booked 24/7.',
      keywords: ['edmonds chauffeur', 'edmonds limo service', 'edmonds ferry car service', 'edmonds airport transfer'],
    },
  },

  {
    name: 'Bothell',
    slug: 'bothell',
    county: 'King County',
    coordinates: { lat: 47.7623, lng: -122.2054 },
    zipCodes: ['98011', '98012', '98021'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur SUV at a Bothell biotech campus parking circle',
    heroSupporting:
      'Chauffeur service across Bothell - UW Bothell, Canyon Park biotech campuses, Country Village - with quick Paine Field and SEA-TAC access.',
    localValueProp:
      'Bothell is one of the Eastside’s busiest biotech corridors. Seagen, Juno, AGC Biologics, and a cluster of mid-stage life-sciences companies in Canyon Park draw a steady stream of visiting executives, FDA inspectors, and clinical-trial partners — and we move them. Our chauffeurs know which Canyon Park building circles can fit a Cadillac Escalade, the I-405 patterns into and out of Bellevue, and the back routes via Bothell-Everett Highway when 405 stalls.',
    nearbyLandmarks: ['UW Bothell', 'Canyon Park biotech corridor', 'Country Village (historic)', 'Bothell Landing Park'],
    businessDistricts: ['Canyon Park', 'Downtown Bothell', 'North Creek'],
    hotels: ['Hilton Garden Inn Seattle/Bothell', 'Country Inn & Suites Bothell'],
    eventVenues: ['McMenamins Anderson School'],
    airportProximity: [
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 13, driveTime: '18–28 min' },
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 25, driveTime: '35–55 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '35–55 min', distanceMiles: 25, startingPriceUSD: 125 },
      { to: 'Paine Field', driveTime: '18–28 min', distanceMiles: 13, startingPriceUSD: 95 },
      { to: 'Bellevue', driveTime: '15–25 min', distanceMiles: 12, startingPriceUSD: 95 },
      { to: 'Downtown Seattle', driveTime: '25–45 min', distanceMiles: 18, startingPriceUSD: 110 },
    ],
    faqs: [
      {
        question: 'Do you serve the Canyon Park biotech corridor?',
        answer:
          'Yes — daily. We run dedicated corporate accounts for several Canyon Park companies and onboard new accounts in 48 hours.',
      },
      {
        question: 'How much is a Bothell to SEA-TAC transfer?',
        answer: 'Sedan service from Bothell to SEA-TAC starts at $125 flat-rate; luxury SUVs from $155.',
      },
    ],
    meta: {
      title: 'Bothell Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Bothell, WA. Canyon Park biotech pickups, SEA-TAC transfers, corporate accounts — flight-tracked, 24/7.',
      keywords: ['bothell chauffeur', 'bothell limo service', 'canyon park car service', 'bothell airport transfer'],
    },
  },

  {
    name: 'Woodinville',
    slug: 'woodinville',
    county: 'King County',
    coordinates: { lat: 47.7543, lng: -122.1635 },
    zipCodes: ['98072', '98077'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur SUV at a Woodinville winery tasting room patio',
    heroSupporting:
      'Wine country chauffeur service in Woodinville — Chateau Ste. Michelle, the Hollywood District, the Warehouse District — with private wine tours and group Sprinters.',
    localValueProp:
      'Woodinville is Washington wine country in miniature: 130+ tasting rooms across the Hollywood, Warehouse, and Downtown districts, all walking distance from Chateau Ste. Michelle. We run private-label wine tours in Cadillac Escalade ESVs, Mercedes Sprinter executive vans for groups of 8–14, and stretch limousines for bachelorette parties and milestone birthdays. Our chauffeurs know the tasting room layouts, where to stage during evening dinner-and-tasting events at The Herbfarm, and how to time a return to Bellevue or downtown Seattle so the night winds down on schedule.',
    nearbyLandmarks: [
      'Chateau Ste. Michelle',
      'Columbia Winery',
      'The Herbfarm',
      'Hollywood Schoolhouse',
      'Warehouse District tasting rooms',
    ],
    businessDistricts: ['Hollywood District', 'Warehouse District', 'Downtown Woodinville'],
    hotels: ['Willows Lodge'],
    eventVenues: ['Chateau Ste. Michelle amphitheater', 'Willows Lodge', 'Hollywood Schoolhouse'],
    airportProximity: [
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 17, driveTime: '22–32 min' },
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 25, driveTime: '35–55 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '35–55 min', distanceMiles: 25, startingPriceUSD: 125 },
      { to: 'Bellevue', driveTime: '15–25 min', distanceMiles: 10, startingPriceUSD: 85 },
      { to: 'Downtown Seattle', driveTime: '30–50 min', distanceMiles: 22, startingPriceUSD: 125 },
      { to: 'Kirkland', driveTime: '12–20 min', distanceMiles: 6, startingPriceUSD: 75 },
    ],
    faqs: [
      {
        question: 'Do you offer Woodinville wine tours?',
        answer:
          'Yes - private wine tours are one of our most-booked Woodinville services. Choose 4-, 6-, or 8-hour blocks in a Cadillac Escalade ESV (up to 6) or Mercedes Sprinter (up to 14).',
      },
      {
        question: 'Can you handle a Woodinville bachelorette party?',
        answer:
          'Absolutely. Stretch limousines or Mercedes Sprinters with bar setups, ambient lighting, and a chauffeur who knows the route.',
      },
    ],
    meta: {
      title: 'Woodinville Wine Tour Chauffeur | Emerald City Limos',
      description:
        'Luxury chauffeur service and private wine tours in Woodinville, WA. Cadillac Escalades, Mercedes Sprinters, stretch limousines booked 24/7.',
      keywords: ['woodinville wine tour', 'woodinville chauffeur', 'woodinville limo service', 'chateau ste michelle car service'],
    },
  },
{
  name: 'Bothell North',
  slug: 'bothell-north',
  county: 'Snohomish County',
  coordinates: { lat: 47.8107, lng: -122.3774 },
  zipCodes: ['98011', '98012', '98021'],
  heroImage: HERO_DEFAULT,
  heroImageAlt: 'Black luxury chauffeur SUV providing airport transportation in Bothell North',
  heroSupporting:
    'Professional chauffeur service in Bothell North, Canyon Park, and North Creek with flat-rate SEA-TAC airport transfers, executive travel, and hourly black car service.',

  localValueProp:
    'Emerald City Limos provides professional chauffeur service throughout Bothell North for airport transfers, executive transportation, private events, and hourly bookings. With regular service across Canyon Park, North Creek, Mill Creek, and the I-405 corridor, our chauffeurs understand local traffic patterns, airport timing requirements, and corporate transportation expectations for North End travelers.',

  nearbyLandmarks: [
    'Canyon Park Business Center',
    'North Creek Trail',
    'University of Washington Bothell',
    'Country Village',
  ],

  businessDistricts: [
    'Canyon Park',
    'North Creek',
    'Downtown Bothell',
  ],

  hotels: [
    'Country Inn & Suites Bothell',
    'Holiday Inn & Suites Bothell',
  ],

  eventVenues: [
    'Hidden Meadows',
    'The Cottage',
    'North Creek Events Center',
  ],

  airportProximity: [
    {
      airport: 'SEA-TAC International Airport',
      code: 'SEA',
      distanceMiles: 28,
      driveTime: '35–55 min',
    },
    {
      airport: 'Paine Field',
      code: 'PAE',
      distanceMiles: 15,
      driveTime: '20–30 min',
    },
  ],

  popularRoutes: [
    {
      to: 'SEA-TAC Airport',
      driveTime: '35–55 min',
      distanceMiles: 28,
      startingPriceUSD: 145,
    },
    {
      to: 'Downtown Seattle',
      driveTime: '30–45 min',
      distanceMiles: 20,
      startingPriceUSD: 135,
    },
    {
      to: 'Paine Field',
      driveTime: '20–30 min',
      distanceMiles: 15,
      startingPriceUSD: 95,
    },
    {
      to: 'Bellevue',
      driveTime: '20–30 min',
      distanceMiles: 14,
      startingPriceUSD: 110,
    },
  ],

  faqs: [
    {
      question: 'Do you offer airport transportation from Bothell North to SEA-TAC?',
      answer:
        'Yes. Emerald City Limos provides pre-scheduled flat-rate airport transfers from Bothell North to SEA-TAC 24/7 with professional chauffeurs, flight tracking, and luggage assistance.',
    },
    {
      question: 'Do you provide corporate transportation in Canyon Park and North Creek?',
      answer:
        'Yes. We regularly serve Canyon Park, North Creek, and surrounding business districts with executive sedan and SUV transportation for meetings, office transfers, and client travel.',
    },
    {
      question: 'Can I book hourly chauffeur service in Bothell North?',
      answer:
        'Yes. Hourly chauffeur service is available for private events, business travel, dinners, and flexible transportation throughout Bothell, Bellevue, Seattle, and the Eastside.',
    },
    {
      question: 'What vehicles are available in Bothell North?',
      answer:
        'Our Bothell North clients commonly book Cadillac Escalade ESV SUVs, executive sedans, Sprinter vans, and stretch limousines depending on passenger count and service type.',
    },
  ],

  meta: {
    title: 'Bothell North Chauffeur Service | Emerald City Limos',
    description:
      'Luxury chauffeur service in Bothell North, WA with flat-rate airport transfers, executive transportation, hourly black car service, and professional chauffeurs available 24/7.',
    keywords: [
      'bothell chauffeur service',
      'bothell limo service',
      'bothell airport transfer',
      'canyon park car service',
      'north creek black car service',
    ],
  },
},

  {
    name: 'Auburn',
    slug: 'auburn',
    county: 'King County',
    coordinates: { lat: 47.3073, lng: -122.2285 },
    zipCodes: ['98001', '98002', '98092'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur sedan at Muckleshoot Casino in Auburn',
    heroSupporting:
      'Chauffeur service across Auburn Muckleshoot Casino, Emerald Downs, the Boeing Auburn plant with quick SEA-TAC and Sea-Tac cruise transfers.',
    localValueProp:
      'Auburn anchors the southern stretch of King County. Muckleshoot Casino draws nightly crowds, Emerald Downs hosts thoroughbred racing through the summer, and the Boeing Auburn site keeps a steady flow of executive visitors. We handle high-volume night runs to and from Muckleshoot in Cadillac Escalade ESVs and stretch limousines, plus SEA-TAC transfers timed against I-5 evening congestion through Federal Way and Kent.',
    nearbyLandmarks: ['Muckleshoot Casino Resort', 'Emerald Downs', 'Boeing Auburn site', 'White River Amphitheatre'],
    businessDistricts: ['Downtown Auburn', 'Auburn Way', 'Boeing Auburn'],
    hotels: ['Holiday Inn Express Auburn'],
    eventVenues: ['Muckleshoot Casino', 'Emerald Downs', 'White River Amphitheatre'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 13, driveTime: '20–35 min' },
      { airport: 'Boeing Field (BFI)', code: 'BFI', distanceMiles: 18, driveTime: '25–40 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '20–35 min', distanceMiles: 13, startingPriceUSD: 95 },
      { to: 'Muckleshoot Casino', driveTime: '5–12 min', distanceMiles: 3, startingPriceUSD: 65 },
      { to: 'Downtown Seattle', driveTime: '30–50 min', distanceMiles: 25, startingPriceUSD: 130 },
      { to: 'Tacoma', driveTime: '20–30 min', distanceMiles: 15, startingPriceUSD: 95 },
    ],
    faqs: [
      {
        question: 'Do you serve Muckleshoot Casino late at night?',
        answer:
          'Yes, 24/7 dispatch covers Muckleshoot every night of the week. Sedan or stretch limousine pickups available with 30 minutes notice.',
      },
      {
        question: 'How much is an Auburn to SEA-TAC transfer?',
        answer: 'Sedan service from Auburn to SEA-TAC starts at $95 flat-rate; luxury SUVs from $115.',
      },
    ],
    meta: {
      title: 'Auburn Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Auburn, WA. Muckleshoot Casino, SEA-TAC transfers, Boeing pickups flat-rate, booked 24/7.',
      keywords: ['auburn chauffeur', 'auburn limo service', 'muckleshoot casino car service', 'auburn airport transfer'],
    },
  },

  {
    name: 'Federal Way',
    slug: 'federal-way',
    county: 'King County',
    coordinates: { lat: 47.3223, lng: -122.3126 },
    zipCodes: ['98003', '98023', '98063'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur SUV at the Performing Arts and Event Center in Federal Way',
    heroSupporting:
      'Chauffeur service across Federal Way the Performing Arts & Event Center, Wild Waves, the Commons with fast SEA-TAC transfers.',
    localValueProp:
      'Federal Way sits 8 miles south of SEA-TAC, making it one of our fastest airport pickup zones in the south end. We chauffeur travelers between Federal Way’s residential neighborhoods and SEA-TAC, run hourly chauffeurs for events at the Performing Arts and Event Center, and provide group transportation to Wild Waves, the Pacific Bonsai Museum, and Dash Point State Park. Our chauffeurs route around I-5 incidents through the Tacoma Dome stretch when traffic warrants.',
    nearbyLandmarks: [
      'Federal Way Performing Arts and Event Center',
      'Wild Waves Theme Park',
      'The Commons at Federal Way',
      'Dash Point State Park',
      'Pacific Bonsai Museum',
    ],
    businessDistricts: ['Downtown Federal Way', 'Twin Lakes', 'West Campus'],
    hotels: ['Courtyard Marriott Federal Way', 'Hampton Inn & Suites Federal Way'],
    eventVenues: ['Federal Way Performing Arts and Event Center'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 8, driveTime: '12–20 min' },
      { airport: 'Boeing Field (BFI)', code: 'BFI', distanceMiles: 15, driveTime: '20–30 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '12–20 min', distanceMiles: 8, startingPriceUSD: 75 },
      { to: 'Tacoma', driveTime: '15–25 min', distanceMiles: 10, startingPriceUSD: 85 },
      { to: 'Downtown Seattle', driveTime: '25–45 min', distanceMiles: 22, startingPriceUSD: 115 },
    ],
    faqs: [
      {
        question: 'How fast is a Federal Way to SEA-TAC transfer?',
        answer: 'Typically 12–20 minutes door-to-door. Sedan service starts at $75 flat-rate.',
      },
    ],
    meta: {
      title: 'Federal Way Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Federal Way, WA. Fast SEA-TAC transfers, event transportation, corporate accounts booked 24/7.',
      keywords: ['federal way chauffeur', 'federal way limo service', 'federal way airport transfer'],
    },
  },

  {
    name: 'Sammamish',
    slug: 'sammamish',
    county: 'King County',
    coordinates: { lat: 47.6163, lng: -122.0356 },
    zipCodes: ['98074', '98075'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur sedan in front of a Sammamish estate at twilight',
    heroSupporting:
      'Discreet chauffeur service across Sammamish Pine Lake, Klahanie, Trossachs with flight-tracked SEA-TAC transfers and executive accounts.',
    localValueProp:
      'Sammamish is one of King County’s most established residential communities quiet, deliberate, and home to a steady roster of executives commuting to Microsoft, Google Kirkland, and downtown Seattle. Our chauffeurs run flight-tracked airport transfers for residents, hourly chauffeur for full-day client visits across the Eastside, and special-occasion stretch limousine service for milestone birthdays and weddings at Pine Lake and Beaver Lake venues. We honor a quiet curbside protocol no horn taps, no loud arrivals at residential pickups.',
    nearbyLandmarks: ['Pine Lake', 'Beaver Lake', 'Sammamish Commons', 'Klahanie'],
    businessDistricts: ['Sammamish Plateau'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 22, driveTime: '30–45 min' },
      { airport: 'Boeing Field (BFI)', code: 'BFI', distanceMiles: 19, driveTime: '28–40 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '30–45 min', distanceMiles: 22, startingPriceUSD: 115 },
      { to: 'Bellevue', driveTime: '15–25 min', distanceMiles: 10, startingPriceUSD: 85 },
      { to: 'Microsoft Redmond Campus', driveTime: '15–25 min', distanceMiles: 8, startingPriceUSD: 85 },
      { to: 'Downtown Seattle', driveTime: '25–45 min', distanceMiles: 19, startingPriceUSD: 115 },
    ],
    faqs: [
      {
        question: 'Do you serve all of Sammamish, including Klahanie and Trossachs?',
        answer: 'Yes every Sammamish neighborhood at flat-rate pricing.',
      },
      {
        question: 'How much is a Sammamish to SEA-TAC transfer?',
        answer: 'Sedan service from Sammamish to SEA-TAC starts at $115 flat-rate; luxury SUVs from $140.',
      },
    ],
    meta: {
      title: 'Sammamish Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Sammamish, WA. Flight-tracked SEA-TAC transfers, executive accounts, special occasions booked 24/7.',
      keywords: ['sammamish chauffeur', 'sammamish limo service', 'sammamish airport transfer'],
    },
  },

  {
    name: 'Kent',
    slug: 'kent',
    county: 'King County',
    coordinates: { lat: 47.3809, lng: -122.2348 },
    zipCodes: ['98030', '98031', '98032', '98042'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur sedan at the ShoWare Center in Kent',
    heroSupporting:
      'Chauffeur service across Kent accesso ShoWare Center, the Kent Valley industrial corridor, Riverbend Golf Complex with fast SEA-TAC transfers.',
    localValueProp:
      'Kent is the logistics spine of the Puget Sound. The Kent Valley industrial corridor moves more freight than most U.S. cities its size, and our chauffeurs serve the executives and visiting clients who keep that operation running. We also handle event transportation for accesso ShoWare Center concerts and Seattle Thunderbirds games, plus airport transfers timed against I-5 and SR-167 patterns.',
    nearbyLandmarks: ['accesso ShoWare Center', 'Kent Station', 'Riverbend Golf Complex', 'Lake Meridian Park'],
    businessDistricts: ['Kent Valley industrial corridor', 'Kent Station', 'East Hill'],
    hotels: ['Best Western Plus Kent / Seattle Area'],
    eventVenues: ['accesso ShoWare Center'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 9, driveTime: '15–25 min' },
      { airport: 'Boeing Field (BFI)', code: 'BFI', distanceMiles: 12, driveTime: '18–30 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '15–25 min', distanceMiles: 9, startingPriceUSD: 85 },
      { to: 'Downtown Seattle', driveTime: '25–45 min', distanceMiles: 19, startingPriceUSD: 110 },
      { to: 'Tacoma', driveTime: '20–35 min', distanceMiles: 15, startingPriceUSD: 95 },
    ],
    faqs: [
      {
        question: 'How much is a Kent to SEA-TAC transfer?',
        answer: 'Sedan service from Kent to SEA-TAC starts at $85 flat-rate; luxury SUVs from $105.',
      },
      {
        question: 'Do you serve accesso ShoWare Center events?',
        answer: 'Yes concerts, hockey games, family shows. Group transportation in Mercedes Sprinter vans available.',
      },
    ],
    meta: {
      title: 'Kent Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Kent, WA. Fast SEA-TAC transfers, ShoWare Center events, corporate accounts flat-rate, 24/7.',
      keywords: ['kent chauffeur', 'kent limo service', 'kent airport transfer', 'showare center transportation'],
    },
  },

  {
    name: 'Lakewood',
    slug: 'lakewood',
    county: 'Pierce County',
    coordinates: { lat: 47.1718, lng: -122.5185 },
    zipCodes: ['98498', '98499'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur SUV at the gates of Joint Base Lewis-McChord',
    heroSupporting:
      'Chauffeur service across Lakewood and Joint Base Lewis-McChord flight-tracked SEA-TAC transfers, military relocations, Pierce College pickups.',
    localValueProp:
      'Lakewood lives next to Joint Base Lewis-McChord (JBLM), and our service reflects that. We run chauffeur transfers for incoming and outgoing military personnel and their families, often timed against PCS move logistics, plus standard airport transfers from the broader Lakewood community to SEA-TAC. Our chauffeurs know the JBLM gate access procedures and stage at the correct gates for visitor arrivals.',
    nearbyLandmarks: ['Joint Base Lewis-McChord', 'Lakewood Towne Center', 'American Lake', 'Fort Steilacoom Park'],
    businessDistricts: ['Lakewood Towne Center', 'JBLM corridor'],
    hotels: ['La Quinta Inn & Suites Tacoma – Seattle'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 28, driveTime: '40–60 min' },
      { airport: 'Boeing Field (BFI)', code: 'BFI', distanceMiles: 33, driveTime: '45–60 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '40–60 min', distanceMiles: 28, startingPriceUSD: 145 },
      { to: 'Joint Base Lewis-McChord', driveTime: '5–15 min', distanceMiles: 4, startingPriceUSD: 65 },
      { to: 'Tacoma', driveTime: '10–20 min', distanceMiles: 9, startingPriceUSD: 75 },
    ],
    faqs: [
      {
        question: 'Do you serve Joint Base Lewis-McChord (JBLM)?',
        answer:
          'Yes daily. Our chauffeurs know the gate access procedures for visitors and contractors, and we run transfers timed against PCS arrival schedules.',
      },
      {
        question: 'How much is a Lakewood to SEA-TAC transfer?',
        answer: 'Sedan service from Lakewood to SEA-TAC starts at $145 flat-rate; luxury SUVs from $175.',
      },
    ],
    meta: {
      title: 'Lakewood Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Lakewood, WA. JBLM transfers, SEA-TAC airport runs, military and corporate accounts booked 24/7.',
      keywords: ['lakewood chauffeur', 'lakewood limo service', 'jblm car service', 'lakewood airport transfer'],
    },
  },

  {
    name: 'Puyallup',
    slug: 'puyallup',
    county: 'Pierce County',
    coordinates: { lat: 47.1854, lng: -122.2929 },
    zipCodes: ['98371', '98372', '98373', '98374', '98375'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur SUV at the Washington State Fair entrance in Puyallup',
    heroSupporting:
      'Chauffeur service across Puyallup the Washington State Fair, the Puyallup Fairgrounds, South Hill with flat-rate SEA-TAC transfers.',
    localValueProp:
      'Puyallup hosts the Washington State Fair the largest single-attraction event in the state every September, and our chauffeurs handle the surge with Mercedes Sprinter executive vans, Cadillac Escalade ESVs, and stretch limousines. Beyond fair season, we run flat-rate airport transfers from South Hill and downtown Puyallup, hourly chauffeur for vendor events at the fairgrounds, and special-occasion service for weddings at the historic Pioneer Park.',
    nearbyLandmarks: ['Washington State Fair / Puyallup Fairgrounds', 'Pioneer Park', 'South Hill Mall'],
    businessDistricts: ['Downtown Puyallup', 'South Hill'],
    eventVenues: ['Washington State Fairgrounds', 'Pioneer Park'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 22, driveTime: '30–50 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '30–50 min', distanceMiles: 22, startingPriceUSD: 125 },
      { to: 'Tacoma', driveTime: '15–25 min', distanceMiles: 11, startingPriceUSD: 85 },
      { to: 'Downtown Seattle', driveTime: '40–60 min', distanceMiles: 35, startingPriceUSD: 155 },
    ],
    faqs: [
      {
        question: 'Do you serve the Washington State Fair?',
        answer:
          'Yes daily during the fair. We strongly recommend booking 2+ weeks ahead during fair season as Mercedes Sprinters and stretch limousines book out.',
      },
      {
        question: 'How much is a Puyallup to SEA-TAC transfer?',
        answer: 'Sedan service from Puyallup to SEA-TAC starts at $125 flat-rate; luxury SUVs from $155.',
      },
    ],
    meta: {
      title: 'Puyallup Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Puyallup, WA. Washington State Fair transportation, SEA-TAC transfers, weddings booked 24/7.',
      keywords: ['puyallup chauffeur', 'puyallup limo service', 'washington state fair transportation', 'puyallup airport transfer'],
    },
  },

  {
    name: 'Marysville',
    slug: 'marysville',
    county: 'Snohomish County',
    coordinates: { lat: 48.0518, lng: -122.1771 },
    zipCodes: ['98270', '98271'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur sedan at the Tulalip Resort Casino entrance in Marysville',
    heroSupporting:
      'Chauffeur service across Marysville Tulalip Resort Casino, Seattle Premium Outlets, Boeing with flat-rate SEA-TAC and Paine Field transfers.',
    localValueProp:
      'Marysville and the Tulalip Reservation draw a steady stream of casino, outlet-mall, and Boeing supplier visitors year-round. We run chauffeur service to and from Tulalip Resort Casino in Cadillac Escalade ESVs and stretch limousines, handle Seattle Premium Outlets shopping runs, and provide flight-tracked transfers to both Paine Field and SEA-TAC.',
    nearbyLandmarks: ['Tulalip Resort Casino', 'Seattle Premium Outlets', 'Hibulb Cultural Center'],
    businessDistricts: ['Downtown Marysville', 'Smokey Point'],
    hotels: ['Tulalip Resort Casino Hotel'],
    eventVenues: ['Tulalip Amphitheatre'],
    airportProximity: [
      { airport: 'Paine Field (PAE)', code: 'PAE', distanceMiles: 13, driveTime: '18–28 min' },
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 41, driveTime: '50–70 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '50–70 min', distanceMiles: 41, startingPriceUSD: 175 },
      { to: 'Paine Field', driveTime: '18–28 min', distanceMiles: 13, startingPriceUSD: 95 },
      { to: 'Tulalip Resort Casino', driveTime: '5–10 min', distanceMiles: 2, startingPriceUSD: 65 },
    ],
    faqs: [
      {
        question: 'Do you serve Tulalip Resort Casino?',
        answer: 'Yes 24/7. Sedan, SUV, and stretch limousine availability with 30 minutes notice.',
      },
      {
        question: 'How much is a Marysville to SEA-TAC transfer?',
        answer: 'Sedan service from Marysville to SEA-TAC starts at $175 flat-rate; luxury SUVs from $210.',
      },
    ],
    meta: {
      title: 'Marysville Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Marysville, WA. Tulalip Resort Casino, SEA-TAC and Paine Field transfers flat-rate, booked 24/7.',
      keywords: ['marysville chauffeur', 'marysville limo service', 'tulalip casino car service', 'marysville airport transfer'],
    },
  },

  {
    name: 'SeaTac Airport',
    slug: 'seatac-airport',
    county: 'King County',
    coordinates: { lat: 47.4502, lng: -122.3088 },
    zipCodes: ['98148', '98158', '98168', '98188'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur SUV at the SeaTac Airport arrivals curb at twilight',
    heroSupporting:
      'SEA-TAC airport chauffeur service flight-tracked, business-attired chauffeurs at arrivals or baggage claim with sign-in-hand meet-and-greet.',
    localValueProp:
      'SEA-TAC International Airport (SEA) handles 50+ million passengers a year, and our airport service is built for that scale. Every airport ride includes live flight tracking, a 60-minute domestic / 90-minute international grace period, and a chauffeur in business attire. For arrivals, choose curbside (Door 00 / Door 30) or the indoor meet-and-greet at baggage claim where your chauffeur will be holding a discreet placard with your name. For departures, we monitor TSA wait times and adjust pickup so you have buffer at the gate.',
    nearbyLandmarks: [
      'SEA-TAC International Airport',
      'Westfield Southcenter',
      'Angle Lake Park',
      'Sound Transit SEA-TAC Link station',
    ],
    businessDistricts: ['SEA-TAC Airport campus', 'Tukwila Southcenter'],
    hotels: [
      'DoubleTree by Hilton Seattle Airport',
      'Hilton Seattle Airport',
      'Marriott Seattle Airport',
      'Hyatt Regency Seattle Airport',
    ],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 0, driveTime: 'On-site' },
      { airport: 'Boeing Field (BFI)', code: 'BFI', distanceMiles: 7, driveTime: '12–18 min' },
    ],
    popularRoutes: [
      { from: 'SEA-TAC Airport', to: 'Downtown Seattle', driveTime: '20–30 min', distanceMiles: 13, startingPriceUSD: 75 },
      { from: 'SEA-TAC Airport', to: 'Bellevue', driveTime: '25–40 min', distanceMiles: 17, startingPriceUSD: 95 },
      { from: 'SEA-TAC Airport', to: 'Pier 91 Cruise Terminal', driveTime: '25–40 min', distanceMiles: 17, startingPriceUSD: 95 },
      { from: 'SEA-TAC Airport', to: 'Redmond', driveTime: '30–45 min', distanceMiles: 22, startingPriceUSD: 110 },
      { from: 'SEA-TAC Airport', to: 'Tacoma', driveTime: '30–50 min', distanceMiles: 21, startingPriceUSD: 115 },
    ],
    faqs: [
      {
        question: 'Do you offer meet-and-greet at SEA-TAC baggage claim?',
        answer:
          'Yes international arrivals receive complimentary indoor meet-and-greet at baggage claim. Domestic meet-and-greet is available on request.',
      },
      {
        question: 'What if my flight is delayed?',
        answer:
          'Every airport ride includes live flight tracking. We adjust your chauffeur’s arrival automatically no rebooking, no extra fees for the standard grace period.',
      },
      {
        question: 'Where do you pick up at SEA-TAC?',
        answer:
          'Curbside at Door 00 (north end) or Door 30 (south end), depending on your airline. International arrivals: indoor meet-and-greet at baggage claim. We confirm your exact pickup point by text once you land.',
      },
    ],
    meta: {
      title: 'SEA-TAC Airport Chauffeur Service | Emerald City Limos',
      description:
        'SEA-TAC Airport chauffeur service. Flight-tracked, meet-and-greet at baggage claim, business-attired chauffeurs flat-rate, booked 24/7.',
      keywords: ['sea-tac chauffeur', 'sea-tac airport transfer', 'seatac car service', 'seatac meet and greet'],
    },
  },

  {
    name: 'Boeing Field',
    slug: 'boeing-field',
    county: 'King County',
    coordinates: { lat: 47.5298, lng: -122.3019 },
    zipCodes: ['98108'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Black luxury chauffeur SUV staged at a Boeing Field private aviation FBO',
    heroSupporting:
      'Private aviation chauffeur service at Boeing Field (KBFI) Signature, Modern Aviation, and the Galvin Flying FBO ramp discreet, on-tarmac when authorized.',
    localValueProp:
      'Boeing Field (King County International Airport, KBFI) is Seattle’s primary private aviation gateway, hosting Signature Flight Support, Modern Aviation, Galvin Flying, and Clay Lacy. Our chauffeurs run on FBO time staged in the lobby ten minutes before your wheels-down, on the ramp itself when your flight crew authorizes vehicle access, and through the gate without delay. We coordinate with line crews on aircraft tail numbers, monitor ADS-B for actual arrival, and handle multi-leg trip support when you’re continuing to a meeting in Bellevue or Redmond.',
    nearbyLandmarks: ['Boeing Field (KBFI)', 'The Museum of Flight', 'Signature Flight Support BFI', 'Modern Aviation BFI'],
    businessDistricts: ['Boeing Field FBO ramps', 'Georgetown', 'SoDo'],
    airportProximity: [
      { airport: 'Boeing Field (BFI)', code: 'BFI', distanceMiles: 0, driveTime: 'On-site' },
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 7, driveTime: '12–18 min' },
    ],
    popularRoutes: [
      { from: 'Boeing Field', to: 'Downtown Seattle', driveTime: '12–18 min', distanceMiles: 6, startingPriceUSD: 75 },
      { from: 'Boeing Field', to: 'Bellevue', driveTime: '20–30 min', distanceMiles: 13, startingPriceUSD: 95 },
      { from: 'Boeing Field', to: 'Redmond', driveTime: '25–40 min', distanceMiles: 18, startingPriceUSD: 110 },
      { from: 'Boeing Field', to: 'SEA-TAC Airport', driveTime: '12–18 min', distanceMiles: 7, startingPriceUSD: 75 },
    ],
    faqs: [
      {
        question: 'Can you meet me on the ramp at Boeing Field?',
        answer:
          'Yes ramp access requires FBO authorization on your tail number, but we coordinate with Signature, Modern Aviation, and Galvin Flying line crews routinely.',
      },
      {
        question: 'Do you handle multi-leg private aviation trips?',
        answer:
          'Yes Boeing Field arrival, ground transport to a Bellevue meeting, return to BFI for the next departure. We hold your chauffeur on standby for the full trip.',
      },
    ],
    meta: {
      title: 'Boeing Field Chauffeur Service | Emerald City Limos',
      description:
        'Private aviation chauffeur service at Boeing Field (KBFI). FBO ramp access, multi-leg trip support, business-attired chauffeurs booked 24/7.',
      keywords: ['boeing field chauffeur', 'kbfi chauffeur', 'private aviation seattle', 'fbo ramp transfer'],
    },
  },

  
  {
    name: 'Gig Harbor',
    slug: 'gig-harbor',
    county: 'Pierce County',
    coordinates: { lat: 47.3293, lng: -122.5801 },
    zipCodes: ['98332', '98335'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Luxury black SUV chauffeur service overlooking Gig Harbor waterfront marina',
    heroSupporting:
      'Private chauffeur and black car service throughout Gig Harbor, waterfront districts, golf clubs, and airport transfers to SEA-TAC.',
    localValueProp:
      'Gig Harbor is a premium-fit market driven by affluent residential neighborhoods, marina traffic, waterfront dining, and private event transportation. Clients here commonly book executive airport transfers, evening chauffeur service into Seattle, and luxury transportation for weddings, yacht gatherings, and anniversary occasions. Our chauffeurs help clients avoid bridge traffic stress, downtown parking, and late-night return driving.',
    nearbyLandmarks: [
      'Gig Harbor Marina',
      'Point Defiance Ferry Terminal',
      'Cushman Trail',
      'Skansie Brothers Park',
    ],
    businessDistricts: ['Downtown Gig Harbor', 'Uptown Gig Harbor'],
    hotels: ['Best Western Wesley Inn & Suites'],
    eventVenues: ['Canterwood Golf & Country Club'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 36, driveTime: '45–65 min' },
      { airport: 'Tacoma Narrows Airport', code: 'TIW', distanceMiles: 8, driveTime: '12–18 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '45–65 min', distanceMiles: 36, startingPriceUSD: 155 },
      { to: 'Downtown Seattle', driveTime: '55–75 min', distanceMiles: 42, startingPriceUSD: 165 },
      { to: 'Tacoma Narrows Airport', driveTime: '12–18 min', distanceMiles: 8, startingPriceUSD: 75 },
    ],
    faqs: [
      {
        question: 'Do you provide chauffeur service for Gig Harbor waterfront events?',
        answer:
          'Yes - we regularly provide transportation for marina dinners, private celebrations, weddings, and waterfront events throughout Gig Harbor.',
      },
      {
        question: 'Can I book SEA-TAC airport transfers from Gig Harbor?',
        answer:
          'Yes - luxury airport transportation from Gig Harbor to SEA-TAC starts at $155 flat-rate.',
      },
    ],
    meta: {
      title: 'Gig Harbor Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Gig Harbor, WA for airport transfers, waterfront events, weddings, and executive transportation.',
      keywords: ['gig harbor chauffeur', 'gig harbor limo service', 'gig harbor airport transfer'],
    },
  },

  {
    name: 'Bonney Lake',
    slug: 'bonney-lake',
    county: 'Pierce County',
    coordinates: { lat: 47.1771, lng: -122.1865 },
    zipCodes: ['98391'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Luxury chauffeur SUV parked near Lake Tapps waterfront in Bonney Lake',
    heroSupporting:
      'Premium black car service in Bonney Lake for airport transportation, executive rides, and private event travel.',
    localValueProp:
      'Bonney Lake serves a growing residential client base that frequently requires dependable airport transfers, executive transportation, and private rides into Seattle or Bellevue. With suburban expansion and limited luxury transportation options nearby, clients value scheduled reliability, flat-rate pricing, and premium vehicles for business travel and special occasions.',
    nearbyLandmarks: [
      'Lake Tapps',
      'Allan Yorke Park',
      'Bonney Lake Village',
    ],
    businessDistricts: ['Bonney Lake Village', 'SR-410 Corridor'],
    hotels: ['Holiday Inn Express Sumner'],
    eventVenues: ['Kelley Farm'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 33, driveTime: '40–55 min' },
      { airport: 'Seattle-Tacoma Airport', code: 'SEA', distanceMiles: 33, driveTime: '40–55 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '40–55 min', distanceMiles: 33, startingPriceUSD: 145 },
      { to: 'Downtown Seattle', driveTime: '50–70 min', distanceMiles: 40, startingPriceUSD: 160 },
    ],
    faqs: [
      {
        question: 'Do you offer flat-rate airport transfers from Bonney Lake?',
        answer:
          'Yes - Bonney Lake to SEA-TAC luxury sedan transfers start at $145 flat-rate.',
      },
    ],
    meta: {
      title: 'Bonney Lake Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur and airport transportation service in Bonney Lake, WA for executive travel and private rides.',
      keywords: ['bonney lake chauffeur', 'bonney lake limo service', 'bonney lake airport car'],
    },
  },

  {
    name: 'Sumner',
    slug: 'sumner',
    county: 'Pierce County',
    coordinates: { lat: 47.2032, lng: -122.2404 },
    zipCodes: ['98390'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Executive black sedan parked near downtown Sumner historic district',
    heroSupporting:
      'Private chauffeur transportation in Sumner for airport service, executive travel, and event transportation.',
    localValueProp:
      'Sumner blends residential convenience with business accessibility, making it a practical market for airport transfers, commuter-focused executive rides, and event transportation. Our chauffeurs frequently serve professionals, families, and wedding guests seeking reliable luxury transportation without relying on inconsistent app-based services.',
    nearbyLandmarks: [
      'Downtown Sumner',
      'Sumner Station',
      'Daffodil Valley',
    ],
    businessDistricts: ['Downtown Sumner'],
    hotels: ['Holiday Inn Express Sumner'],
    eventVenues: ['Rock Creek Gardens'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 26, driveTime: '35–50 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '35–50 min', distanceMiles: 26, startingPriceUSD: 135 },
      { to: 'Downtown Seattle', driveTime: '45–60 min', distanceMiles: 34, startingPriceUSD: 150 },
    ],
    faqs: [
      {
        question: 'Do you offer transportation from Sumner Station?',
        answer:
          'Yes - we provide scheduled pickups and private transportation to and from Sumner Station and surrounding neighborhoods.',
      },
    ],
    meta: {
      title: 'Sumner Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in Sumner, WA for airport transfers, executive rides, and private transportation.',
      keywords: ['sumner chauffeur', 'sumner limo service', 'sumner airport transfer'],
    },
  },

  {
    name: 'Fife',
    slug: 'fife',
    county: 'Pierce County',
    coordinates: { lat: 47.2393, lng: -122.3571 },
    zipCodes: ['98424'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Luxury SUV chauffeur parked near Fife business corridor hotels',
    heroSupporting:
      'Executive black car and airport transportation service throughout Fife hotels, business districts, and event venues.',
    localValueProp:
      'Fife is heavily driven by logistics, hospitality, and business travel. With multiple hotels, conference traffic, casino demand, and freeway access, clients frequently require prompt airport transfers, executive pickups, and hotel transportation. Our chauffeurs serve business travelers and visitors who need polished, efficient transportation near Tacoma and SEA-TAC corridors.',
    nearbyLandmarks: [
      'Emerald Queen Casino Fife',
      'Fife Aquatic Center',
      'Port of Tacoma corridor',
    ],
    businessDistricts: ['Pacific Highway Corridor'],
    hotels: ['Holiday Inn Express Fife'],
    eventVenues: ['Emerald Queen Casino'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 21, driveTime: '25–40 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '25–40 min', distanceMiles: 21, startingPriceUSD: 125 },
      { to: 'Downtown Seattle', driveTime: '35–50 min', distanceMiles: 29, startingPriceUSD: 140 },
    ],
    faqs: [
      {
        question: 'Do you provide hotel pickups in Fife?',
        answer:
          'Yes - we regularly provide transportation to and from Fife hotels, casinos, and conference venues.',
      },
    ],
    meta: {
      title: 'Fife Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur and airport transportation service in Fife, WA for hotel guests, business travelers, and private clients.',
      keywords: ['fife chauffeur', 'fife limo service', 'fife airport car'],
    },
  },

  {
    name: 'University Place',
    slug: 'university-place',
    county: 'Pierce County',
    coordinates: { lat: 47.2359, lng: -122.5504 },
    zipCodes: ['98466', '98467'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Luxury black sedan parked near Chambers Bay Golf Course in University Place',
    heroSupporting:
      'Private chauffeur and executive transportation service throughout University Place, golf destinations, and airport routes.',
    localValueProp:
      'University Place is a strong premium transportation market due to Chambers Bay, upscale residential neighborhoods, and corporate clientele seeking airport and private transportation. Our chauffeurs frequently handle golf outings, executive transfers, client entertainment, and premium airport service.',
    nearbyLandmarks: [
      'Chambers Bay Golf Course',
      'University Place Town Center',
      'Titlow Beach',
    ],
    businessDistricts: ['Town Center'],
    hotels: ['Hotel Murano Tacoma'],
    eventVenues: ['Chambers Bay'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 31, driveTime: '35–50 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '35–50 min', distanceMiles: 31, startingPriceUSD: 145 },
      { to: 'Downtown Seattle', driveTime: '45–60 min', distanceMiles: 39, startingPriceUSD: 155 },
    ],
    faqs: [
      {
        question: 'Do you provide transportation to Chambers Bay?',
        answer:
          'Yes - we regularly provide luxury transportation to Chambers Bay for golf outings, events, and private bookings.',
      },
    ],
    meta: {
      title: 'University Place Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur service in University Place, WA for Chambers Bay transportation, airport transfers, and executive travel.',
      keywords: ['university place chauffeur', 'university place limo', 'chambers bay transportation'],
    },
  },

  
  {
    name: 'DuPont',
    slug: 'dupont',
    county: 'Pierce County',
    coordinates: { lat: 47.0968, lng: -122.6482 },
    zipCodes: ['98327'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Luxury black executive SUV parked near DuPont corporate district and golf course',
    heroSupporting:
      'Executive chauffeur and luxury airport transportation throughout DuPont, JBLM corridors, corporate campuses, and private residential communities.',
    localValueProp:
      'DuPont is a highly strategic chauffeur market due to its concentration of corporate offices, military-adjacent travel demand, master-planned residential communities, and convenient I-5 access. Our chauffeurs frequently provide airport transfers, executive transportation for business travelers, and private rides for clients commuting between DuPont, Seattle, Bellevue, and regional event venues. DuPont clients prioritize punctuality, professionalism, and vehicle quality over inconsistent rideshare availability.',
    nearbyLandmarks: [
      'The Home Course',
      'DuPont Historical Museum',
      'Sequalitchew Creek Trail',
      'Northwest Landing',
    ],
    businessDistricts: ['Northwest Landing', 'Center Drive Business Corridor'],
    hotels: ['Fairfield Inn & Suites Tacoma DuPont'],
    eventVenues: ['The Home Course'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 43, driveTime: '45–65 min' },
      { airport: 'Olympia Regional Airport', code: 'OLM', distanceMiles: 19, driveTime: '25–35 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '45–65 min', distanceMiles: 43, startingPriceUSD: 165 },
      { to: 'Downtown Seattle', driveTime: '60–80 min', distanceMiles: 50, startingPriceUSD: 175 },
      { to: 'JBLM', driveTime: '10–18 min', distanceMiles: 7, startingPriceUSD: 75 },
      { to: 'The Home Course', driveTime: '5–10 min', distanceMiles: 2, startingPriceUSD: 65 },
    ],
    faqs: [
      {
        question: 'Do you provide executive transportation in DuPont?',
        answer:
          'Yes - we regularly serve business travelers, executives, and corporate clients throughout DuPont and nearby JBLM corridors.',
      },
      {
        question: 'Can I schedule airport service from DuPont to SEA-TAC?',
        answer:
          'Absolutely. Luxury sedan transfers from DuPont to SEA-TAC start at $165 flat-rate with scheduled pickups available 24/7.',
      },
    ],
    meta: {
      title: 'DuPont Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur and airport transportation in DuPont, WA for executive travel, SEA-TAC transfers, corporate rides, and private transportation.',
      keywords: ['dupont chauffeur', 'dupont limo service', 'dupont airport transfer', 'dupont executive car service'],
    },
  },

  {
    name: 'Steilacoom',
    slug: 'steilacoom',
    county: 'Pierce County',
    coordinates: { lat: 47.1698, lng: -122.6029 },
    zipCodes: ['98388'],
    heroImage: HERO_DEFAULT,
    heroImageAlt: 'Luxury black chauffeur sedan overlooking Steilacoom waterfront at sunset',
    heroSupporting:
      'Private chauffeur and luxury black car service throughout Steilacoom waterfront, historic districts, and airport transportation routes.',
    localValueProp:
      'Steilacoom offers a distinct transportation profile driven by waterfront residences, private events, destination dining, and historic charm. Clients here frequently book airport transfers, anniversary evenings, wedding transportation, and private chauffeur service to Seattle, Tacoma, and surrounding event venues. Our service is especially valuable for clients seeking polished transportation without navigating limited parking and evening driving along waterfront routes.',
    nearbyLandmarks: [
      'Steilacoom Ferry Terminal',
      'Saltars Point Beach',
      'Sunnyside Beach Park',
      'Historic Downtown Steilacoom',
    ],
    businessDistricts: ['Historic Downtown Steilacoom', 'Lafayette Street Corridor'],
    hotels: ['Best Western Lakewood'],
    eventVenues: ['The Bair at Chambers Bay'],
    airportProximity: [
      { airport: 'SEA-TAC International Airport', code: 'SEA', distanceMiles: 34, driveTime: '40–55 min' },
      { airport: 'Tacoma Narrows Airport', code: 'TIW', distanceMiles: 15, driveTime: '20–28 min' },
    ],
    popularRoutes: [
      { to: 'SEA-TAC Airport', driveTime: '40–55 min', distanceMiles: 34, startingPriceUSD: 150 },
      { to: 'Downtown Seattle', driveTime: '50–70 min', distanceMiles: 42, startingPriceUSD: 165 },
      { to: 'Steilacoom Ferry Terminal', driveTime: '5–8 min', distanceMiles: 1, startingPriceUSD: 65 },
      { to: 'Tacoma Narrows Airport', driveTime: '20–28 min', distanceMiles: 15, startingPriceUSD: 95 },
    ],
    faqs: [
      {
        question: 'Do you provide chauffeur service for Steilacoom weddings and waterfront events?',
        answer:
          'Yes - we regularly provide luxury transportation for weddings, waterfront dinners, anniversaries, and private celebrations in Steilacoom.',
      },
      {
        question: 'Can you provide airport transportation from Steilacoom?',
        answer:
          'Yes - flat-rate airport transportation from Steilacoom to SEA-TAC starts at $150 for luxury sedan service.',
      },
    ],
    meta: {
      title: 'Steilacoom Chauffeur Service | Emerald City Limos',
      description:
        'Luxury chauffeur and airport transportation service in Steilacoom, WA for waterfront events, weddings, and private rides.',
      keywords: ['steilacoom chauffeur', 'steilacoom limo service', 'steilacoom airport transfer', 'steilacoom wedding transportation'],
    },
  },


];

// Apply per-slug hero images from HERO_IMAGES, falling back to HERO_DEFAULT.
locations.forEach((loc) => {
  loc.heroImage = HERO_IMAGES[loc.slug] ?? HERO_DEFAULT;
});

export const locationsBySlug: Record<string, Location> =
  Object.fromEntries(locations.map((loc) => [loc.slug, loc]));

export function getLocationBySlug(slug: string): Location | undefined {
  return locationsBySlug[slug];
}

/** All slugs for static path generation. */
export const locationSlugs: string[] = locations.map((loc) => loc.slug);
