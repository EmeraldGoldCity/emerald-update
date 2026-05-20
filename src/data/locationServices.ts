/**
 * Service catalog used on every location page (deduped from per-page copy).
 * Keep this list lean — every item below is rendered as a card on every
 * /locations/[slug] page, so each entry must read clearly without context.
 */

export interface LocationService {
  /** Stable id for keys / anchors. */
  id: string;
  /** Card heading. */
  title: string;
  /** ~22-word benefit-led description. */
  description: string;
  /** Internal href for the "Learn more" link. */
  href: string;
  /** Heroicons-style outline path-d, single path. */
  iconPath: string;
}

/**
 * Source order = visual order on the page.
 * Per spec: Airport, Corporate, Hourly, Events & Weddings, Point-to-Point.
 */
export const locationServices: LocationService[] = [
  {
    id: 'airport-transfers',
    title: 'Airport Transfers',
    description:
      'Flight-tracked transfers to SEA-TAC, Boeing Field, and Paine Field with curbside or baggage-claim meet-and-greet.',
    href: '/airport-transfers',
    iconPath:
      'M3.75 9h16.5m-16.5 6.75h16.5M2.25 12c0-2.485 4.367-4.5 9.75-4.5s9.75 2.015 9.75 4.5-4.367 4.5-9.75 4.5S2.25 14.485 2.25 12z',
  },
  {
    id: 'corporate-transportation',
    title: 'Corporate Transportation',
    description:
      'Dedicated chauffeur accounts with consolidated billing, dispatcher-direct lines, and recurring named-driver assignments.',
    href: '/service/executive-transportation',
    iconPath:
      'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  },
  {
    id: 'hourly-chauffeur',
    title: 'Hourly Chauffeur',
    description:
      'Three-hour minimum hourly bookings for back-to-back meetings, full-day client visits, and roadshows across the metro.',
    href: '/service/hourly-charters',
    iconPath: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    id: 'events-weddings',
    title: 'Events & Weddings',
    description:
      'Stretch limousines, Cadillac Escalade ESVs, and Mercedes Sprinters for weddings, galas, and milestone celebrations.',
    href: '/service/wedding-transportation',
    iconPath:
      'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
  },
  {
    id: 'point-to-point',
    title: 'Point-to-Point Transfers',
    description:
      'Flat-rate, on-demand rides across King, Pierce, and Snohomish counties — no surge pricing, no hidden tolls.',
    href: '/service/personal-chauffeur',
    iconPath:
      'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
  },
];
