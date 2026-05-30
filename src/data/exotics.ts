/**
 * Exotic vehicle catalogue — powers /exotics/[slug] and the
 * ExoticFleetSection on /services/car-exotics.
 *
 * Image swap-in:
 *   Add images to  public/images/exotics/<make>/<filename>
 *   then un-comment or update the imageSrc / gallery src values below.
 *   String paths (public/) are used so the user can drop files in without
 *   touching TypeScript imports.
 *
 * Directory layout expected:
 *   public/images/exotics/
 *     ferrari/          ferrari-roma.jpg, ferrari-roma-exterior.jpg,
 *                       ferrari-roma-rear.jpg, ferrari-roma-interior.jpg,
 *                       ferrari-roma-detail.jpg
 *     lamborghini/      lamborghini-urus.jpg, lamborghini-urus-exterior.jpg,
 *                       lamborghini-urus-side.jpg, lamborghini-urus-interior.jpg,
 *                       lamborghini-urus-detail.jpg
 *     porsche/          porsche-911-carrera.jpg, porsche-911-exterior.jpg,
 *                       porsche-911-rear.jpg, porsche-911-interior.jpg,
 *                       porsche-911-detail.jpg
 *     mercedes/         g63-amg.jpg, g63-amg-exterior.jpg,
 *                       g63-amg-side.jpg, g63-amg-interior.jpg,
 *                       g63-amg-detail.jpg
 *     audi/             audi-rs7.jpg, audi-rs7-exterior.jpg,
 *                       audi-rs7-rear.jpg, audi-rs7-interior.jpg,
 *                       audi-rs7-detail.jpg
 *     jeep/             jeep-wrangler-rubicon.jpg, jeep-wrangler-exterior.jpg,
 *                       jeep-wrangler-side.jpg, jeep-wrangler-interior.jpg,
 *                       jeep-wrangler-detail.jpg
 */
import type { Vehicle } from './fleet';
import audiExterior from "@/assets/images/services/exotics/audi/exterior-front.jpg";
import audiExteriorFront from "@/assets/images/services/exotics/audi/exterior-side.jpg";
import audiRear from "@/assets/images/services/exotics/audi/interior-cabin.jpg";
import audiInterior from "@/assets/images/services/exotics/audi/exterior-rear.jpg";
import audiSeating from "@/assets/images/services/exotics/audi/seating.jpg"

  /* ── Lamborghini Urus ─────────────────────────────────────────── */
import urusExteriorFront from "@/assets/images/services/exotics/urus/urus-exterior-front.jpg";
import urusExteriorSide from "@/assets/images/services/exotics/urus/urus-exterior-side.jpg";
import urusRear from "@/assets/images/services/exotics/urus/urus-rear.jpg";
import urusInterior from "@/assets/images/services/exotics/urus/urus-cockpit.jpg";
import urusSeating from "@/assets/images/services/exotics/urus/urus-seating.jpg";

  /* ── Porsche Carrera ─────────────────────────────────────────── */
import porscheExterior from "@/assets/images/services/exotics/porsche/porsche-carrera.jpg";
import porscheExteriorFront from "@/assets/images/services/exotics/porsche/porsche-exterior.jpg";
import porscheInterior from "@/assets/images/services/exotics/porsche/porsche-interior.jpg";
import porscheRear from "@/assets/images/services/exotics/porsche/porsche-rear.jpg";

  /* ── gwagon ─────────────────────────────────────────── */
import gwagonExteriorSide from "@/assets/images/services/exotics/gwagon/g-exterior-side.jpg";
import gwagonExteriorFront from "@/assets/images/services/exotics/gwagon/g-exterior-front.jpg";
import gwagonInterior from "@/assets/images/services/exotics/gwagon/g-interior-cockpit.jpg";
import gwagonRear from "@/assets/images/services/exotics/gwagon/g-rear.jpg";

  /* ── bmw ─────────────────────────────────────────── */
  import bmwExteriorFront from "@/assets/images/services/exotics/bmw/exterior-front.jpg";
  import bmwExteriorSide from "@/assets/images/services/exotics/bmw/exterior-side.jpg";
  import bmwExteriorRear from "@/assets/images/services/exotics/bmw/exterior-rear.jpg";
  import bmwInterior from "@/assets/images/services/exotics/bmw/interior-cabin.jpg";
  import bmwSeating from "@/assets/images/services/exotics/bmw/seating.jpg";



export const exoticFleet: Vehicle[] = [
/* ── BMW M5 Competition ────────────────────────────────────── */
  {
    id: 'bmw-m5',
    name: 'BMW M5 Competition',
    category: 'High-Performance Luxury Sedan',
    capacity: 4,
    capacityLabel: 'Up to 4 passengers',
    features: [
      '4.4L M TwinPower Turbo V8 — 617 hp',
      'M xDrive All-Wheel Drive System',
      'Adaptive M Suspension Professional',
      'Bowers & Wilkins Diamond Surround Sound',
    ],
    bestFor: [
      'Executive transportation',
      'Business meetings',
      'Airport transfers',
      'Luxury weekend drives',
    ],
    imageSrc: bmwExteriorFront,
    imageAlt: 'BMW M5 Competition luxury performance sedan — Emerald City Limos exotic fleet Seattle',
    gallery: [
      {
        src: bmwExteriorSide,
        alt: 'BMW M5 Competition — front three-quarter exterior',
        view: 'Exterior · Side',
      },
      {
        src: bmwExteriorRear,
        alt: 'BMW M5 Competition — rear exterior view',
        view: 'Exterior · Rear',
      },
      {
        src: bmwInterior,
        alt: 'BMW M5 Competition — luxury interior cabin',
        view: 'Interior · Cabin',
      },
      {
        src: bmwSeating,
        alt: 'BMW M5 Competition — M cockpit detail',
        view: 'Detail',
      },
    ],
    specs: {
      yearRange: '2021–Present',
      drivetrain: 'M xDrive AWD',
      transmission: '8-speed M Steptronic automatic',
      luggage: 'Up to 4 standard suitcases',
      extras: [
        { label: 'Engine', value: '4.4L M TwinPower Turbo V8' },
        { label: 'Output', value: '617 hp / 553 lb-ft torque' },
        { label: '0–60 mph', value: '3.1 sec' },
      ],
    },
    description:
      'The BMW M5 Competition combines executive luxury with supercar-level performance. Its 617-hp twin-turbocharged V8 launches the sedan to 60 mph in just over three seconds while M xDrive all-wheel drive delivers confidence in every season. Inside, passengers enjoy premium materials, advanced technology, and generous rear-seat space. For clients who require business-class comfort without sacrificing performance, the M5 Competition is one of the most capable luxury sedans on the road.',
    descriptionExtended:
      'Available chauffeur-driven or as a verified self-drive rental. The M5 Competition offers the practicality of a luxury executive sedan with the acceleration, handling, and prestige expected from BMW’s flagship M model.',
    featured: true,
    href: '/exotics/bmw-m5',
  },

  /* ── Lamborghini Urus ──────────────────────────────────────── */
  {
    id: 'lamborghini-urus',
    name: 'Lamborghini Urus',
    category: 'Exotic SUV',
    capacity: 4,
    capacityLabel: 'Up to 4 passengers',
    features: [
      '4.0L Twin-Turbo V8 — 641 hp',
      'ANIMA driving mode selector',
      'Carbon ceramic brakes',
      'Active roll stabilization',
    ],
    bestFor: [
      'VIP arrivals',
      'Photo & content shoots',
      'Brand activations',
      'High-profile event entrances',
    ],
    imageSrc: urusExteriorFront,
    imageAlt: 'Lamborghini Urus performance SUV — Emerald City Limos exotic fleet Seattle',
    gallery: [
      {
        src: urusExteriorSide,
        alt: 'Lamborghini Urus — front three-quarter exterior',
        view: 'Exterior · Front',
      },
      {
        src: urusExteriorSide,
        alt: 'Lamborghini Urus — side profile',
        view: 'Exterior · Side',
      },
      {
        src: urusInterior,
        alt: 'Lamborghini Urus — cabin and cockpit',
        view: 'Interior · Cabin',
      },
      {
        src: urusRear,
        alt: 'Lamborghini Urus — cabin and cockpit',
        view: 'Rear · View',
      },
    ],
    specs: {
      yearRange: '2019–Present',
      drivetrain: 'AWD (Lamborghini Permanente)',
      transmission: '8-speed torque-converter automatic',
      luggage: 'Up to 2 standard suitcases',
      extras: [
        { label: 'Engine', value: '4.0L Twin-Turbo V8' },
        { label: 'Output', value: '641 hp / 627 lb-ft torque' },
        { label: '0–60 mph', value: '3.5 sec' },
      ],
    },
    description:
      'The Lamborghini Urus rewrote what a performance SUV could be — 641 horsepower, a sub-3.5-second sprint to 60, and a design aggressive enough to stop traffic from the moment it arrives. The ANIMA selector spans street, sport, and corsa modes; the air suspension adjusts ride height on command. For high-profile arrivals, brand activations, and productions that need presence before doors open, nothing in the fleet photographs like the Urus.',
    descriptionExtended:
      'Available chauffeur-driven or as a verified self-drive rental. The Urus seats four comfortably with real cargo capacity. We stage the vehicle at your hotel, venue, or private terminal — fully detailed and fueled.',
    featured: true,
    href: '/exotics/lamborghini-urus',
  },

  /* ── Porsche 911 Carrera S ─────────────────────────────────── */
  {
    id: 'porsche-911-carrera',
    name: 'Porsche 911 Carrera S',
    category: 'Exotic Sports Car',
    capacity: 2,
    capacityLabel: 'Up to 2 passengers',
    features: [
      '3.0L flat-six twin-turbo — 443 hp',
      '8-speed PDK transmission',
      'Sport Chrono Package',
      'PASM active suspension management',
    ],
    bestFor: [
      'Private drives',
      'Date nights',
      'Special occasion arrivals',
      'Content creation',
    ],
    imageSrc: porscheExterior,
    imageAlt: 'Porsche 911 Carrera S — Emerald City Limos exotic fleet Seattle',
    gallery: [
      {
        src: porscheExteriorFront,
        alt: 'Porsche 911 Carrera S — front three-quarter exterior',
        view: 'Exterior · Front',
      },
      {
        src:  porscheInterior,
        alt: 'Porsche 911 Carrera S — rear with active spoiler',
        view: 'Exterior · Rear',
      },
      {
        src: porscheRear,
        alt: 'Porsche 911 Carrera S — sport cockpit',
        view: 'Interior · Cabin',
      },
    ],
    specs: {
      yearRange: '2020–Present',
      drivetrain: 'RWD (4S AWD available)',
      transmission: '8-speed PDK',
      luggage: 'Minimal — 1 carry-on + rear shelf',
      extras: [
        { label: 'Engine', value: '3.0L flat-six twin-turbo' },
        { label: 'Output', value: '443 hp / 390 lb-ft torque' },
        { label: '0–60 mph', value: '3.5 sec' },
      ],
    },
    description:
      'The Porsche 911 Carrera S is the benchmark sports car — sixty years of development distilled into a rear-engined, flat-six platform that remains the reference point for everything built after it. The 3.0L twin-turbo produces 443 horsepower; the 8-speed PDK executes gearchanges in milliseconds. Sport Chrono and PASM adjust the car sharper or softer on demand. For clients who want the driving experience above all else, nothing in the exotic fleet compares on the roads of the Pacific Northwest.',
    descriptionExtended:
      'Available as a verified self-drive rental or chauffeur-driven. The 911 is delivered detailed, fueled, and staged at your location. Minimum rental age 25; license verification required at booking.',
    featured: true,
    href: '/exotics/porsche-911-carrera',
  },

  /* ── Mercedes-Benz G63 AMG ─────────────────────────────────── */
  {
    id: 'mercedes-g63-amg',
    name: 'Mercedes-Benz G63 AMG',
    category: 'Exotic SUV',
    capacity: 4,
    capacityLabel: 'Up to 4 passengers',
    features: [
      'AMG 4.0L Biturbo V8 — 577 hp',
      'Three 100% differential locks',
      'AMG RIDE CONTROL+ suspension',
      'Burmester surround sound system',
    ],
    bestFor: [
      'High-profile arrivals',
      'Executive statement transport',
      'Photo & content shoots',
      'Brand activations',
    ],
    imageSrc: gwagonExteriorFront,
    imageAlt: 'Mercedes-Benz G63 AMG G-Wagon — Emerald City Limos exotic fleet Seattle',
    gallery: [
      {
        src: gwagonExteriorSide,
        alt: 'Mercedes-Benz G63 AMG — front three-quarter exterior',
        view: 'Exterior · Side',
      },
      {
        src: gwagonInterior,
        alt: 'Mercedes-Benz G63 AMG — side profile',
        view: 'Interior · Cabin',
      },
      {
        src: gwagonRear,
        alt: 'Mercedes-Benz G63 AMG — luxury cabin with AMG trim',
        view: 'Rear · View',
      },
    ],
    specs: {
      yearRange: '2019–Present',
      drivetrain: 'AMG Performance 4MATIC AWD',
      transmission: 'AMG SPEEDSHIFT TCT 9-speed',
      luggage: 'Up to 3 standard suitcases',
      extras: [
        { label: 'Engine', value: 'AMG 4.0L Biturbo V8' },
        { label: 'Output', value: '577 hp / 627 lb-ft torque' },
        { label: '0–60 mph', value: '4.5 sec' },
      ],
    },
    description:
      'The G63 AMG is the G-Class with 577 horsepower — the same upright, boxy silhouette that has defined off-road luxury since 1979, rebuilt around an AMG biturbo V8 and a nine-speed performance gearbox. Three 100% locking differentials retain every terrain capability of the original; AMG RIDE CONTROL+ suspension and Burmester audio handle the pavement in equal measure. It is the most recognizable vehicle in the exotic fleet and, for high-profile arrivals, the most photographed.',
    descriptionExtended:
      'Available chauffeur-driven or as a verified self-drive rental. The G63 is delivered detailed and fueled to your hotel, residence, or event venue. Frequently booked for social media content, brand activations, and statement event arrivals.',
    featured: true,
    href: '/exotics/mercedes-g63-amg',
  },

  /* ── Audi R8 Coupe ─────────────────────────────────────────── */
  {
    id: 'audi-r8',
    name: 'Audi R8 Coupe',
    category: 'Exotic Supercar',
    capacity: 2,
    capacityLabel: 'Up to 2 passengers',
    features: [
      '5.2L FSI Naturally Aspirated V10 — 562 hp',
      'Quattro AWD for maximum traction',
      'Magnetic ride adaptive suspension',
      'Bang & Olufsen Premium Sound System',
    ],
    bestFor: [
      'Luxury weekend drives',
      'Special occasions',
      'Photoshoots & content creation',
      'VIP arrivals',
    ],
    imageSrc: audiExterior,
    imageAlt: 'Audi R8 Coupe exotic supercar — Emerald City Limos exotic fleet Seattle',
    gallery: [
      {
        src: audiExteriorFront,
        alt: 'Audi R8 Coupe — front three-quarter exterior',
        view: 'Exterior · Front',
      },
      {
        src: audiRear,
        alt: 'Audi R8 Coupe — rear exterior view',
        view: 'Exterior · Rear',
      },
      {
        src: audiInterior,
        alt: 'Audi R8 Coupe — driver-focused interior cabin',
        view: 'Interior · Cabin',
      },
      {
        src: audiSeating,
        alt: 'Audi R8 Coupe — driver-focused interior cabin',
        view: 'Interior · Cabin',
      },
    ],
    specs: {
      yearRange: '2020–Present',
      drivetrain: 'Quattro AWD',
      transmission: '7-speed S tronic dual-clutch automatic',
      luggage: 'Front trunk fits 1–2 small carry-on bags',
      extras: [
        { label: 'Engine', value: '5.2L Naturally Aspirated V10' },
        { label: 'Output', value: '562 hp / 406 lb-ft torque' },
        { label: '0–60 mph', value: '3.4 sec' },
      ],
    },
    description:
      'The Audi R8 Coupe delivers everyday drivability with true supercar performance. Powered by a naturally aspirated 5.2L V10 mounted behind the cabin, the R8 produces an unmistakable soundtrack and razor-sharp throttle response. Quattro all-wheel drive provides confidence in all conditions while the low-slung cockpit surrounds passengers in refined luxury and race-inspired technology. For clients seeking a modern exotic that balances aggression, comfort, and precision engineering, the R8 stands in a class of its own.',
    descriptionExtended:
      'Available chauffeur-driven or as a verified self-drive rental. The R8 combines exotic styling, supercar acceleration, and Audi refinement into a package suited for luxury experiences, events, and unforgettable drives.',
    featured: false,
    href: '/exotics/audi-r8',
  },
  /* ── Jeep Wrangler Rubicon 4xe ─────────────────────────────── */
  // {
  //   id: 'jeep-wrangler-rubicon',
  //   name: 'Jeep Wrangler Rubicon 4xe',
  //   category: 'Adventure SUV',
  //   capacity: 4,
  //   capacityLabel: 'Up to 4 passengers',
  //   features: [
  //     'Plug-in hybrid — 375 hp combined',
  //     'Rock-Trac 4WD with 4:1 low range',
  //     'Removable doors, roof and windshield',
  //     'Electronic sway-bar disconnect',
  //   ],
  //   bestFor: [
  //     'Off-road adventures',
  //     'PNW exploration',
  //     'Outdoor events & activations',
  //     'Overland experiences',
  //   ],
  //   imageSrc: '/images/exotics/jeep/jeep-wrangler-rubicon.jpg',
  //   imageAlt: 'Jeep Wrangler Rubicon 4xe — Emerald City Limos exotic fleet Seattle',
  //   gallery: [
  //     {
  //       src: '/images/exotics/jeep/jeep-wrangler-exterior.jpg',
  //       alt: 'Jeep Wrangler Rubicon 4xe — front three-quarter exterior',
  //       view: 'Exterior · Front',
  //     },
  //     {
  //       src: '/images/exotics/jeep/jeep-wrangler-side.jpg',
  //       alt: 'Jeep Wrangler Rubicon 4xe — side profile off-road',
  //       view: 'Exterior · Side',
  //     },
  //     {
  //       src: '/images/exotics/jeep/jeep-wrangler-interior.jpg',
  //       alt: 'Jeep Wrangler Rubicon 4xe — cabin with open roof',
  //       view: 'Interior · Cabin',
  //     },
  //   ],
  //   specs: {
  //     yearRange: '2022–Present',
  //     drivetrain: 'Rock-Trac 4WD (4:1 low range)',
  //     transmission: '8-speed automatic',
  //     luggage: 'Up to 2 medium bags (modular configuration)',
  //     extras: [
  //       { label: 'Engine', value: '2.0L turbo + dual electric motors' },
  //       { label: 'Combined Output', value: '375 hp / 470 lb-ft torque' },
  //       { label: 'EV Range', value: '21 miles electric-only' },
  //     ],
  //   },
  //   description:
  //     'The Wrangler Rubicon 4xe is the adventure vehicle in the exotic fleet — a plug-in hybrid off-roader with 375 combined horsepower, Rock-Trac 4WD, and the Wrangler\'s signature removable doors and roof for open-air driving. Seattle sits at the edge of the Cascades, the Olympic Peninsula, and the San Juan Islands. When the destination is a trailhead, a coastal overlook, or an outdoor venue that requires leaving the pavement, the Rubicon is the only vehicle in the exotic fleet that truly belongs there.',
  //   descriptionExtended:
  //     'Available as a verified self-drive rental or chauffeur-driven for guided adventure packages. The 4xe\'s electric mode runs nearly silent on paved sections; Rock-Trac handles everything beyond. Minimum rental age 25; towing not permitted.',
  //   featured: false,
  //   href: '/exotics/jeep-wrangler-rubicon',
  // },
];

/** Look up an exotic vehicle by its id. */
export function getExotic(id: string): Vehicle | undefined {
  return exoticFleet.find((v) => v.id === id);
}
