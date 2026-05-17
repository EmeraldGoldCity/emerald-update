/**
 * Fleet vehicle catalogue.
 *
 * The shape is intentionally schema.org-friendly so this same array can later
 * power a Vehicle / Product JSON-LD block (name, vehicleSeatingCapacity,
 * vehicleConfiguration, etc.) without re-modelling the data.
 *
 * Image swap-in:
 *   `imageSrc` powers the grid card. `gallery` powers the carousel on the
 *   detail page (/fleet/<slug>). Both are optional — components fall back
 *   to a brand-styled placeholder when no asset is provided.
 *
 * Spec sheets:
 *   `specs` populates the detail-page spec table. Optional. Values reflect
 *   the most recent model year typically chartered; verify against actual
 *   fleet inventory before publication.
 */
import { images } from './images';
import type { ImageMetadata } from 'astro';


export type VehicleCategory =
  | 'Luxury Sedan'
  | 'SUV'
  | 'Luxury SUV'
  | 'Mid-Size SUV'
  | 'Executive Van'
  | 'Limousine'
  | 'Minibus'
  | 'Party Bus'
  | 'Motor Coach';

export type GalleryView =
  | 'Exterior'
  | 'Exterior · Front'
  | 'Exterior · Rear'
  | 'Exterior · Side'
  | 'Interior'
  | 'Interior · Cabin'
  | 'Detail';


export interface GalleryImage {
  src: ImageMetadata | string;
  alt: string;
  view: GalleryView;
}

export interface VehicleSpecRow {
  label: string;
  value: string;
}

export interface VehicleSpecs {
  yearRange: string;
  drivetrain: string;
  transmission: string;
  luggage: string;
  /** Extra rows rendered below the universal ones (engine, MPG, etc.). */
  extras?: VehicleSpecRow[];
}

export interface Vehicle {
  /** URL slug — must be kebab-case, no spaces. Used for /fleet/<id>. */
  id: string;
  name: string;
  category: VehicleCategory;
  capacity: number;
  capacityLabel: string;
  features: string[];
  bestFor: string[];
  /** Primary image used in the grid card. */
  imageSrc?: ImageMetadata | string;
  imageAlt: string;
  /** Optional alt-tagged gallery (carousel on the detail page). */
  gallery?: GalleryImage[];
  /** Spec sheet rendered as a table on the detail page. */
  specs?: VehicleSpecs;
  /** Detail-page lead paragraph (~80–120 words). */
  description?: string;
  /** Optional second paragraph for E-E-A-T depth (~60–90 words). */
  descriptionExtended?: string;
  featured: boolean;
  href: string;
}

export const fleet: Vehicle[] = [
  {
    id: 'rolls-royce-cullinan',
    name: 'Rolls-Royce Cullinan',
    category: 'Luxury SUV',
    capacity: 4,
    capacityLabel: 'Up to 4 passengers',
    features: [
      'Starlight headliner',
      'Executive rear seating',
      'Privacy glass',
      'Premium surround sound',
    ],
    bestFor: ['VIP airport transfers', 'Executive travel', 'Luxury occasions'],
    imageSrc: images.fleet.cullinan.main,
    imageAlt:
      'Rolls-Royce Cullinan luxury SUV — Emerald City Limos chauffeur fleet',
    gallery: [
      {
        src: images.fleet.cullinan.gallery[0],
        alt: 'Rolls-Royce Cullinan — exterior view',
        view: 'Exterior',
      },
      {
        src: images.fleet.cullinan.gallery[1],
        alt: 'Rolls-Royce Cullinan — rear executive seating',
        view: 'Interior · Rear Cabin',
      },
      {
        src: images.fleet.cullinan.gallery[2],
        alt: 'Rolls-Royce Cullinan — luxury cockpit details',
        view: 'Front Cockpit',
      },
      {
        src: images.fleet.cullinan.gallery[3],
        alt: 'Rolls-Royce Cullinan — luxury cabin details',
        view: 'Interior',
      },
      {
        src: images.fleet.cullinan.gallery[4],
        alt: 'Rolls-Royce Cullinan — exterior view',
        view: 'Exterior view',
      },
      
    ],
    specs: {
      yearRange: '2022–Present',
      drivetrain: 'AWD',
      transmission: '8-speed automatic',
      luggage: 'Up to 4 standard suitcases',
      extras: [
        { label: 'Engine', value: '6.75L Twin-Turbo V12' },
        { label: 'Cabin', value: 'Starlight headliner, executive rear seating' },
        { label: 'Entertainment', value: 'Premium surround sound with rear media controls' },
      ],
    },
    description:
      'The Rolls-Royce Cullinan delivers an ultra-luxury chauffeur experience designed for executives, VIP clients, and milestone occasions. With handcrafted interior finishes, whisper-quiet cabin insulation, and signature Rolls-Royce ride comfort, it offers unmatched prestige and comfort.',
    descriptionExtended:
      'Ideal for luxury airport transfers, executive transportation, private events, and elevated city travel. Every Cullinan booking includes a professionally dressed chauffeur, immaculate detailing, and a discreet premium service experience.',
    featured: true,
    href: '/fleet/rolls-royce-cullinan',
  },
  {
    id: 'escalade-esv',
    name: 'Cadillac Escalade ESV',
    category: 'Luxury SUV',
    capacity: 6,
    capacityLabel: 'Up to 6 passengers',
    features: [
      'Massaging executive seats',
      'Bose Studio audio',
      'Ambient cabin lighting',
      'Extended wheelbase',
    ],
    bestFor: ['Corporate', 'VIP transport', 'Airport'],
    imageSrc: images.fleet.escaladeEsv.main,
    imageAlt:
      'Black Cadillac Escalade ESV luxury SUV — Emerald City Limos chauffeur fleet',
    gallery: [
      {
        src: images.fleet.escaladeEsv.gallery[0],
        alt: 'Black Cadillac Escalade ESV — front three-quarter view',
        view: 'Exterior · Front',
      },
      {
        src: images.fleet.escaladeEsv.gallery[2],
        alt: 'Black Cadillac Escalade ESV — rear three-quarter',
        view: 'Exterior · Rear',
      },
      {
        src: images.fleet.escaladeEsv.gallery[3],
        alt: 'Cadillac Escalade ESV — executive rear cabin with leather seating',
        view: 'Interior · Cabin',
      },
    ],
    specs: {
      yearRange: '2022–2024',
      drivetrain: 'Full-time 4WD',
      transmission: '10-speed automatic',
      luggage: 'Up to 8 standard suitcases',
      extras: [
        { label: 'Engine', value: '6.2L V8 / 3.0L Duramax diesel' },
        { label: 'Wheelbase', value: 'Extended (ESV)' },
        { label: 'Wi-Fi', value: 'Cellular onboard' },
      ],
    },
    description:
      'The Escalade ESV is the workhorse of the executive fleet — extended wheelbase, full-time four-wheel drive, and a third row that folds flat for a luggage bay that swallows eight standard suitcases. Massaging executive seats, Bose Studio audio, and ambient cabin lighting come standard across our spec; in-cabin Wi-Fi keeps the ride productive between meetings.',
    descriptionExtended:
      'We rotate the Escalade fleet on a 60,000-mile interval and detail every vehicle between rides. Every Escalade in service carries a current Washington UTC permit, $1.5M in commercial liability, and a pre-trip inspection log signed off by the chauffeur on duty.',
    featured: true,
    href: '/fleet/escalade-esv',
  },
  {
    id: 'navigator-l',
    name: 'Lincoln Navigator L',
    category: 'SUV',
    capacity: 6,
    capacityLabel: 'Up to 6 passengers',
    features: [
      'Premium leather interior',
      'Panoramic roof',
      'In-vehicle Wi-Fi',
      'Dual climate zones',
    ],
    bestFor: ['Airport transfers', 'Corporate groups'],
    imageSrc: images.fleet.navigatorL.main,
    imageAlt:
      'Black Lincoln Navigator L luxury SUV — Emerald City Limos chauffeur fleet',
      gallery: [
        {
          src: images.fleet.navigatorL.gallery[0],
          alt: 'Lincoln Navigator L — exterior side profile',
          view: 'Exterior · Side',
        },
        {
          src: images.fleet.navigatorL.gallery[1],
          alt: 'Lincoln Navigator L — premium executive rear cabin',
          view: 'Interior · Cabin',
        },
        {
          src: images.fleet.navigatorL.gallery[2],
          alt: 'Lincoln Navigator L — spacious passenger interior',
          view: 'Interior',
        },
      ],
    specs: {
      yearRange: '2022–2024',
      drivetrain: '4WD',
      transmission: '10-speed automatic',
      luggage: 'Up to 7 standard suitcases',
      extras: [
        { label: 'Engine', value: '3.5L twin-turbo V6' },
        { label: 'Wheelbase', value: 'Extended (L)' },
        { label: 'Wi-Fi', value: 'Cellular onboard' },
      ],
    },
    description:
      'The Navigator L is the quiet alternative to the Escalade — same six-passenger capacity, extended wheelbase, and luggage volume, with a notably softer ride and a panoramic glass roof. Twin-turbo V6 power, premium leather, dual climate zones, and onboard Wi-Fi make it a frequent pick for executives who prefer the Lincoln cabin feel.',
    descriptionExtended:
      'Like every vehicle in the fleet, our Navigators are detailed between rides and inspected pre-trip. Chauffeurs assigned to the Navigator class hold the same executive-tier certification as the S-Class detail.',
    featured: false,
    href: '/fleet/navigator-l',
  },
  {
    id: 'sprinter',
    name: 'Mercedes-Benz Sprinter',
    category: 'Executive Van',
    capacity: 14,
    capacityLabel: 'Up to 14 passengers',
    features: [
      'Club seating',
      'Privacy glass',
      'USB charging at every seat',
      'Bar setup',
    ],
    bestFor: ['Groups', 'Events', 'Wine tours'],
    imageSrc: images.fleet.sprinter.main,
    imageAlt:
      'Mercedes-Benz Sprinter executive edition van — Emerald City Limos chauffeur fleet',
    gallery: [
      {
        src: images.fleet.sprinter.gallery[0],
        alt: 'Mercedes-Benz Sprinter — exterior side view',
        view: 'Exterior · Side',
      },
      {
        src: images.fleet.sprinter.gallery[1],
        alt: 'Mercedes-Benz Sprinter — executive cabin with club seating',
        view: 'Interior · Cabin',
      },
      {
        src: images.fleet.sprinter.gallery[2],
        alt: 'Mercedes-Benz Sprinter — passenger cabin from rear',
        view: 'Interior',
      },
    ],
    specs: {
      yearRange: '2022–2024',
      drivetrain: 'RWD (4WD optional)',
      transmission: '9G-Tronic 9-speed automatic',
      luggage: 'Up to 14 standard suitcases',
      extras: [
        { label: 'Engine', value: '3.0L turbo-diesel V6' },
        { label: 'Seating', value: 'Executive club configuration' },
        { label: 'Power', value: 'USB-C at every seat' },
      ],
    },
    description:
      'The Sprinter is the group-transport flagship — executive club seating for up to fourteen, privacy glass, USB-C at every seat, and a galley with a bar setup that can be configured for hot beverages or champagne service. Roof height comfortably accommodates standing passengers; rear bench folds to expand luggage space when the headcount is below capacity.',
    descriptionExtended:
      'Common use cases: corporate group transfers, wedding-party shuttles, multi-stop wine tours, and roadshow staff transport. We dispatch the Sprinter with a chauffeur briefed on the day’s itinerary and dispatcher-direct contact in case the schedule reflows mid-trip.',
    featured: false,
    href: '/fleet/sprinter',
  },
  {
    id: 's-class-s580',
    name: 'Mercedes-Benz S‑Class S580',
    category: 'Luxury Sedan',
    capacity: 3,
    capacityLabel: 'Up to 3 passengers',
    features: [
      'Executive rear seating',
      'Burmester surround audio',
      'Seat massage',
      'Ambient cabin lighting',
    ],
    bestFor: ['Solo executive travel', 'Airport', 'VIP'],
    imageSrc: images.fleet.sClass.main,
    imageAlt:
      'Mercedes-Benz S-Class S580 luxury sedan — Emerald City Limos chauffeur fleet',
    gallery: [
      {
        src: images.fleet.sClass.gallery[0],
        alt: 'Mercedes-Benz S-Class S580 — exterior three-quarter',
        view: 'Exterior',
      },
      {
        src: images.fleet.sClass.gallery[1],
        alt: 'Mercedes-Benz S-Class — executive rear cabin',
        view: 'Interior · Cabin',
      },
      {
        src: images.fleet.sClass.gallery[2],
        alt: 'Mercedes-Benz S-Class — interior detail',
        view: 'Detail',
      },
    ],
    specs: {
      yearRange: '2022–2024',
      drivetrain: '4MATIC all-wheel drive',
      transmission: '9G-Tronic 9-speed automatic',
      luggage: 'Up to 4 standard suitcases',
      extras: [
        { label: 'Engine', value: '4.0L twin-turbo V8 + EQ Boost' },
        { label: 'Audio', value: 'Burmester 4D surround' },
        { label: 'Rear seating', value: 'Executive heated & cooled with massage' },
      ],
    },
    description:
      'The S580 is the executive sedan in its current best generation — twin-turbo V8 with mild-hybrid assist, 4MATIC all-wheel drive, and a rear cabin that pairs heated-and-cooled executive seats with Burmester 4D surround audio. Drop-off-only at the airline door, or full meet-and-greet through baggage claim on request.',
    descriptionExtended:
      'Reserved for VIP travel, sensitive client transport, and any ride where the cabin needs to feel private. Chauffeurs assigned to the S-Class hold our highest-tier executive certification.',
    featured: false,
    href: '/fleet/s-class-s580',
  },
  {
    id: 'cadillac-xt6',
    name: 'Cadillac XT6',
    category: 'Mid-Size SUV',
    capacity: 3,
    capacityLabel: 'Up to 3 passengers',
    features: [
      'Heated leather seating',
      'AWD all-weather capability',
      'Bose Premium audio',
      'Tri-zone climate control',
    ],
    bestFor: ['Solo travel', 'Couples', 'Airport', 'Compact luggage'],
    imageSrc: images.fleet.cadillacXt6.main,
    imageAlt:
      'Black Cadillac XT6 mid-size luxury SUV — Emerald City Limos chauffeur fleet',
    gallery: [
      {
        src: images.fleet.cadillacXt6.gallery[0],
        alt: 'Cadillac XT6 — exterior three-quarter view',
        view: 'Exterior',
      },
      {
        src: images.fleet.cadillacXt6.gallery[1],
        alt: 'Cadillac XT6 — exterior three-quarter view',
        view: 'Exterior',
      },
      {
        src: images.fleet.cadillacXt6.gallery[2],
        alt: 'Cadillac XT6 — interior rear cabin view',
        view: 'Interior Rear Cabin',
      },
    ],
    specs: {
      yearRange: '2022–2024',
      drivetrain: 'AWD',
      transmission: '9-speed automatic',
      luggage: 'Up to 5 standard suitcases',
      extras: [
        { label: 'Engine', value: '3.6L V6' },
        { label: 'Climate', value: 'Tri-zone automatic' },
        { label: 'Audio', value: 'Bose Premium' },
      ],
    },
    description:
      'The XT6 is the mid-size alternative to the Escalade — lighter footprint, easier curb access, and the same all-wheel-drive confidence in Seattle weather. Heated leather, tri-zone climate, and Bose Premium audio come standard. Best fit for solo executives and couples whose luggage runs lighter than a full Escalade load.',
    descriptionExtended:
      'A frequent default for downtown-to-SEA-TAC executive runs when the booked headcount is two or fewer. Same vehicle care and chauffeur standards as the rest of the executive fleet.',
    featured: false,
    href: '/fleet/cadillac-xt6',
  },
  {
    id: 'freightliner-minibus',
    name: 'Freightliner Minibus',
    category: 'Minibus',
    capacity: 32,
    capacityLabel: 'Up to 32 passengers',
    features: [
      'Tour-grade reclining seats',
      'Overhead storage racks',
      'Onboard A/V system',
      'Rear luggage compartment',
    ],
    bestFor: ['Wedding shuttles', 'Conference transport', 'Sports teams'],
    imageSrc: images.fleet.freightliner.main,
    imageAlt:
      'Freightliner minibus charter coach — Emerald City Limos group transport fleet',
    gallery: [
      {
        src: images.fleet.freightliner.gallery[0],
        alt: 'Freightliner minibus — exterior side view',
        view: 'Exterior · Side',
      },
      {
        src: images.fleet.freightliner.gallery[1],
        alt: 'Freightliner minibus — interior view',
        view: 'Interior view',
      },
      {
        src: images.fleet.freightliner.gallery[2],
        alt: 'Freightliner minibus — exterior side view',
        view: 'Exterior · Side',
      },
    ],
    specs: {
      yearRange: '2020–2024',
      drivetrain: 'RWD',
      transmission: 'Allison automatic',
      luggage: 'Rear luggage compartment + overhead racks',
      extras: [
        { label: 'Engine', value: 'Diesel turbo' },
        { label: 'A/V', value: 'Onboard PA + LCD displays' },
        { label: 'Lavatory', value: 'Onboard restroom available on request' },
      ],
    },
    description:
      'The Freightliner minibus is the right tool for the mid-sized group transfer — twenty-four to thirty-two passengers, tour-grade reclining seats, overhead racks, and a rear luggage compartment for full-day moves. Onboard A/V supports presentation playback or in-route announcements; restroom equipped on request.',
    descriptionExtended:
      'Common bookings: wedding-guest shuttles between hotel and venue, multi-day conference circulators, sports-team and university transport, and corporate offsites. Drivers carry CDL passenger endorsements and the same Washington UTC permit as the rest of the fleet.',
    featured: false,
    href: '/fleet/freightliner-minibus',
  },
  {
    id: 'party-bus',
    name: 'Party Bus',
    category: 'Party Bus',
    capacity: 30,
    capacityLabel: 'Up to 30 passengers',
    features: [
      'LED party lighting',
      'Premium sound system',
      'Wraparound lounge seating',
      'Wet bar with ice well',
    ],
    bestFor: ['Bachelor / bachelorette', 'Birthdays', 'Group nights out'],
    imageSrc: images.fleet.partyBus.main,
    imageAlt:
      'Luxury party bus interior with LED lighting — Emerald City Limos fleet',
    gallery: [
      {
        src: images.fleet.partyBus.gallery[0],
        alt: 'Party bus interior — lounge seating with LED lighting',
        view: 'Interior · Cabin',
      },
    ],
    specs: {
      yearRange: '2018–2024',
      drivetrain: 'RWD',
      transmission: 'Automatic',
      luggage: 'Limited storage — designed for group nights out',
      extras: [
        { label: 'Lighting', value: 'Multi-zone LED' },
        { label: 'Audio', value: 'Bluetooth sound system with subwoofers' },
        { label: 'Bar', value: 'Wet bar with ice well and cup holders' },
      ],
    },
    description:
      'The party bus is the room that moves — wraparound lounge seating for thirty, multi-zone LED lighting, a Bluetooth sound system with subwoofers, and a wet bar with an ice well and cup holders. Designed for bachelor and bachelorette parties, milestone birthdays, and group nights out where the vehicle is part of the experience.',
    descriptionExtended:
      'Alcohol is permitted in the cabin for adult parties subject to applicable state law and the chauffeur’s discretion. Group bookings for youth events run alcohol-free by default; we confirm before dispatch.',
    featured: false,
    href: '/fleet/party-bus',
  },
  {
    id: 'motor-coach',
    name: 'Executive Motor Coach',
    category: 'Motor Coach',
    capacity: 57,
    capacityLabel: 'Up to 57 passengers',
    features: [
      'Underfloor luggage bays',
      'Recliner seating with foot rests',
      'Onboard restroom',
      '110V outlets at every row',
    ],
    bestFor: ['Large groups', 'Conferences', 'Wedding shuttles', 'Multi-day tours'],
    imageSrc: images.fleet.motorCoach.main,
    imageAlt:
      'Executive motor coach — Emerald City Limos large-group transport fleet',
    gallery: [
      {
        src: images.fleet.motorCoach.gallery[0],
        alt: 'Executive motor coach — exterior side view',
        view: 'Exterior · Side',
      },
    ],
    specs: {
      yearRange: '2018–2024',
      drivetrain: 'RWD',
      transmission: 'Allison 6-speed automatic',
      luggage: 'Underfloor luggage bays — full-trip capacity',
      extras: [
        { label: 'Engine', value: 'Diesel turbo' },
        { label: 'Restroom', value: 'Onboard' },
        { label: 'Power', value: '110V outlets at every row' },
      ],
    },
    description:
      'The motor coach is the only single-vehicle option for groups above forty. Underfloor luggage bays handle a full multi-day load, recliner seating with foot rests turns the long-haul trip into something passengers actually enjoy, and an onboard restroom removes the unscheduled rest stop. 110V outlets at every row keep the conference badges, phones, and laptops charged.',
    descriptionExtended:
      'Routine bookings include large-event guest shuttles, conference transport, multi-day winery and brewery tours, and church / university group travel. CDL-passenger-endorsed drivers; the same WUTC permit, $1.5M liability coverage, and pre-trip inspection protocol apply.',
    featured: false,
    href: '/fleet/motor-coach',
  },
];

export const defaultFeaturedId = 'escalade-esv';

export interface FleetCategoryTab {
  value: 'All' | VehicleCategory;
  label: string;
}

export const fleetCategoryTabs: FleetCategoryTab[] = [
  { value: 'All', label: 'All' },
  { value: 'Luxury Sedan', label: 'Sedan' },
  { value: 'SUV', label: 'SUV' },
  { value: 'Luxury SUV', label: 'Luxury SUV' },
  { value: 'Mid-Size SUV', label: 'Mid-Size SUV' },
  { value: 'Executive Van', label: 'Van' },
  { value: 'Limousine', label: 'Limousine' },
  { value: 'Minibus', label: 'Minibus' },
  { value: 'Party Bus', label: 'Party Bus' },
  { value: 'Motor Coach', label: 'Motor Coach' },
];

/** Look up a vehicle by slug (its `id`). */
export function getVehicle(id: string): Vehicle | undefined {
  return fleet.find((v) => v.id === id);
}
