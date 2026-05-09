/**
 * Fleet vehicle catalogue.
 *
 * The shape is intentionally schema.org-friendly so this same array can later
 * power a Vehicle / Product JSON-LD block (name, vehicleSeatingCapacity,
 * vehicleConfiguration, etc.) without re-modelling the data.
 *
 * Real vehicle photography swap-in:
 *   Set `imageSrc` to the published path (e.g. '/images/fleet/escalade.webp').
 *   When `imageSrc` is undefined the cards render a brand-styled placeholder,
 *   so the section looks complete without any photo assets in place.
 */

export type VehicleCategory =
  | 'Luxury Sedan'
  | 'SUV'
  | 'Luxury SUV'
  | 'Executive Van'
  | 'Limousine';

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  capacity: number;
  capacityLabel: string;
  features: string[];
  bestFor: string[];
  imageSrc?: string;
  imageAlt: string;
  featured: boolean;
  href: string;
}

export const fleet: Vehicle[] = [
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
    imageSrc: '/images/cadl2.webp',
    imageAlt:
      'Black Cadillac Escalade ESV luxury SUV — Emerald City Limos chauffeur fleet',
    featured: true,
    href: '/fleet#escalade-esv',
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
      'In-vehicle WiFi',
      'Dual climate zones',
    ],
    bestFor: ['Airport transfers', 'Corporate groups'],
    // imageSrc: '/images/fleet/navigator.webp',
    imageAlt:
      'Black Lincoln Navigator L luxury SUV — Emerald City Limos chauffeur fleet',
    featured: false,
    href: '/fleet#navigator-l',
  },
  {
    id: 'sprinter',
    name: 'Mercedes-Benz Sprinter',
    category: 'Executive Van',
    capacity: 12,
    capacityLabel: 'Up to 12 passengers',
    features: [
      'Club seating',
      'Privacy glass',
      'USB charging at every seat',
      'Bar setup',
    ],
    bestFor: ['Groups', 'Events', 'Wine tours'],
    imageSrc: '/images/SPRINTER.jpeg',
    imageAlt:
      'Mercedes-Benz Sprinter executive edition van — Emerald City Limos chauffeur fleet',
    featured: false,
    href: '/fleet#sprinter',
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
    imageSrc: '/images/merc.webp',
    imageAlt:
      'Mercedes-Benz S-Class S580 luxury sedan — Emerald City Limos chauffeur fleet',
    featured: false,
    href: '/fleet#s-class-s580',
  },
  {
    id: 'town-car-stretch',
    name: 'Lincoln Town Car Stretch',
    category: 'Limousine',
    capacity: 10,
    capacityLabel: 'Up to 10 passengers',
    features: [
      'Fiber-optic lighting',
      'Wet bar',
      'Privacy divider',
      'Rear entertainment system',
    ],
    bestFor: ['Weddings', 'Proms', 'Special occasions'],
    imageSrc: '/images/party1.webp',
    imageAlt:
      'Lincoln Town Car stretch limousine — Emerald City Limos chauffeur fleet',
    featured: false,
    href: '/fleet#town-car-stretch',
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
  { value: 'Executive Van', label: 'Van' },
  { value: 'Limousine', label: 'Limousine' },
];
