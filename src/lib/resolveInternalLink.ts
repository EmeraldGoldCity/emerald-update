type LinkType = 'service' | 'fleet' | 'location' | 'booking';

// Emerald City Limos route map — these are Emerald's own URL paths.
// Location uses /service-areas/, not /locations/.
const routeMap: Record<LinkType, (slug?: string) => string> = {
  service:  (slug) => `/services/${slug ?? ''}`,
  fleet:    (slug) => `/fleet/${slug ?? ''}`,
  location: (slug) => `/service-areas/${slug ?? ''}`,
  booking:  ()     => (import.meta.env as Record<string, string | undefined>).PUBLIC_MOOVS_URL ?? '#',
};

export function resolveInternalLink(type: string, slug?: string): string {
  const resolver = routeMap[type as LinkType];
  if (!resolver) return '#';
  return resolver(slug);
}
