import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Baby,
  Bell,
  Briefcase,
  Calendar,
  CarFront,
  ChevronDown,
  Clock,
  Heart,
  MapPin,
  Menu,
  Phone,
  Plane,
  Ship,
  Sparkles,
  Star,
  Trophy,
  X,
} from 'lucide-react';

/* =========================================================
   Emerald City Limos — Primary Navigation
   ---------------------------------------------------------
   Theming: brand tokens live in src/styles/theme.css.
   Use Tailwind utilities only — no hex literals here.

     Color: bg-brand-forest, bg-brand-forest-deep,
            text-brand-gold, text-brand-gold-soft,
            text-brand-champagne, bg-brand-emerald
     Type:  font-display (Cormorant Garamond), default sans (Inter)

   Behavior: fixed, transparent over hero, glass on scroll,
   shrinks slightly on scroll, mega menus open on hover/click,
   mobile drawer is focus-trapped and scroll-locked.
   ========================================================= */

const PHONE_DISPLAY = '(206) 595-9675';
const PHONE_HREF = 'tel:+12065959675';

type MegaKey = 'services' | 'locations';
type Mega = MegaKey | null;

const SERVICES = [
  {
    name: 'Airport Transfers',
    href: '/services/airport-transfer',
    icon: Plane,
    desc: 'SEA-TAC, BFI, PAE — flight tracked, on time.',
  },
  {
    name: 'Corporate Travel',
    href: '/services/executive-transportation',
    icon: Briefcase,
    desc: 'Executive ground transport with discretion.',
  },
  {
    name: 'Weddings',
    href: '/services/wedding-transportation',
    icon: Heart,
    desc: 'White-glove service for the day that matters.',
  },
  {
    name: 'Hourly Chauffeur',
    href: '/services/hourly-charters',
    icon: Clock,
    desc: 'On-demand chauffeur, by the hour.',
  },
  {
    name: 'Special Occasions',
    href: '/services/special-occasions',
    icon: Sparkles,
    desc: 'Galas, anniversaries, milestone moments.',
  },
  {
    name: 'Events',
    href: '/events',
    icon: Calendar,
    desc: 'Browse upcoming events — World Cup 2026, concerts & more.',
  },
  {
    name: 'Cruise Transportation',
    href: '/services/cruise-transportation',
    icon: Ship,
    desc: 'Pier 91 & 66 transfers timed to your sailing.',
  },
  {
    name: 'Game Day Transport',
    href: '/services/game-day-transport',
    icon: Trophy,
    desc: 'Lumen, T-Mobile Park, Climate Pledge & Husky.',
  },
  {
    name: 'Personal Chauffeur',
    href: '/services/personal-chauffeur',
    icon: Star,
    desc: 'Same driver on retainer — family & business.',
  },
  {
    name: 'Infant & Booster Seats',
    href: '/services/infant-car-seats',
    icon: Baby,
    desc: 'Complimentary seats, pre-installed before pickup.',
  },
  {
    name: 'Hotel Concierge',
    href: '/services/hotel-concierge',
    icon: Bell,
    desc: 'VIP guest transportation coordinated with hotel staff.',
  },
  {
    name: 'Car Exotics',
    href: '/services/car-exotics',
    icon: CarFront,
    desc: 'Ferrari, Lambo Urus, Porsche, G-Wagon — chauffeur or self-drive.',
  },
] as const;

// Mirror of src/data/locations.ts — keep in sync when adding new cities.
const LOCATIONS = {
  king: {
    label: 'King County',
    items: [
      { name: 'Seattle', href: '/locations/seattle' },
      { name: 'Bellevue', href: '/locations/bellevue' },
      { name: 'Redmond', href: '/locations/redmond' },
      { name: 'Kirkland', href: '/locations/kirkland' },
      { name: 'Sammamish', href: '/locations/sammamish' },
      { name: 'Renton', href: '/locations/renton' },
      { name: 'Kent', href: '/locations/kent' },
      { name: 'Auburn', href: '/locations/auburn' },
      { name: 'Federal Way', href: '/locations/federal-way' },
      { name: 'Woodinville', href: '/locations/woodinville' },
    ],
  },
  snohomish: {
    label: 'Snohomish County',
    items: [
      { name: 'Everett', href: '/locations/everett' },
      { name: 'Mukilteo', href: '/locations/mukilteo' },
      { name: 'Marysville', href: '/locations/marysville' },
      { name: 'Mountlake Terrace', href: '/locations/mountlake-terrace' },
      { name: 'Mill Creek', href: '/locations/mill-creek' },
      { name: 'Bothell North', href: '/locations/bothell-north' },
      { name: 'Snohomish', href: '/locations/snohomish' },
      { name: 'Monroe', href: '/locations/monroe' },
      { name: 'Arlington', href: '/locations/arlington' },
      { name: 'Edmonds', href: '/locations/edmonds' },
    ],
  },
  pierce: {
    label: 'Pierce County',
    items: [
      { name: 'Tacoma', href: '/locations/tacoma' },
      { name: 'Lakewood', href: '/locations/lakewood' },
      { name: 'Puyallup', href: '/locations/puyallup' },
      { name: 'Gig Harbor', href: '/locations/gig-harbor' },
      { name: 'Bonney Lake', href: '/locations/bonney-lake' },
      { name: 'Sumner', href: '/locations/sumner' },
      { name: 'Fife', href: '/locations/fife' },
      { name: 'University Place', href: '/locations/university-place' },
      { name: 'DuPont', href: '/locations/dupont' },
      { name: 'Steilacoom', href: '/locations/steilacoom' },
    ],
  },
  airports: {
    label: 'Airports',
    items: [
      { name: 'SeaTac Airport (SEA)', href: '/locations/seatac-airport' },
      { name: 'Boeing Field (BFI)', href: '/locations/boeing-field' },
      { name: 'Paine Field (PAE)', href: '/airport/paine-field' },
      { name: 'Tacoma Narrows Airport (TIW)', href: '/airport/tacoma-narrows-airport' },
    ],
  },
} as const;

const AIRPORTS = [
  { name: 'Sea-Tac (SEA)', href: '/airport/sea-tac', tag: 'Most popular' },
  { name: 'Boeing Field (BFI)', href: '/airport/boeing-field' },
  { name: 'Paine Field (PAE)', href: '/airport/paine-field' },
  { name: 'Tacoma Narrows Airport (TIW)', href: '/airport/tacoma-narrows-airport' },

] as const;

type NavItem =
  | { type: 'link'; name: string; href: string }
  | { type: 'mega'; name: string; key: MegaKey };

const NAV: NavItem[] = [
  // { type: 'link', name: 'Home', href: '/' },
  { type: 'mega', name: 'Services', key: 'services' },
  { type: 'mega', name: 'Locations', key: 'locations' },
  { type: 'link', name: 'Fleet', href: '/fleet' },
  { type: 'link', name: 'About', href: '/about' },
  { type: 'link', name: 'Blog', href: '/blog' },
  { type: 'link', name: 'Contact', href: '/contact' },
];

const SERVICES_PATH_PREFIXES = ['/services', '/service/', '/airport-transfers', '/events'];
const LOCATIONS_PATH_PREFIXES = ['/locations', '/airport/'];

/* Shared focus-ring class (extracted because it's used everywhere) */
const RING =
  'outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-forest';
const RING_TIGHT = 'outline-none focus-visible:ring-2 focus-visible:ring-brand-gold';

interface NavigationProps {
  /** Force solid mode (use on pages without a dark hero). Defaults to overlay. */
  variant?: 'overlay' | 'solid';
}

export function Navigation({ variant = 'overlay' }: NavigationProps) {
  const [scrolled, setScrolled] = useState(variant === 'solid');
  const [pathname, setPathname] = useState<string>('');
  const [openMega, setOpenMega] = useState<Mega>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<Mega>(null);

  const headerRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<number | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (variant === 'solid') return;
    const onScroll = () => setScrolled((window.scrollY || 0) > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [variant]);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (openMega) {
        const k = openMega;
        setOpenMega(null);
        triggerRefs.current[k]?.focus();
      } else if (mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [openMega, mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!openMega) return;
    const onPointer = (e: PointerEvent) => {
      const el = headerRef.current;
      if (el && !el.contains(e.target as Node)) setOpenMega(null);
    };
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, [openMega]);

  const isLinkActive = useCallback(
    (href: string) => {
      if (!pathname) return false;
      if (href === '/') return pathname === '/';
      const bare = href.split('#')[0];
      if (!bare) return false;
      return pathname === bare || pathname.startsWith(bare + '/');
    },
    [pathname]
  );

  const isMegaActive = useCallback(
    (key: MegaKey) => {
      if (!pathname) return false;
      const prefixes = key === 'services' ? SERVICES_PATH_PREFIXES : LOCATIONS_PATH_PREFIXES;
      return prefixes.some((p) => pathname === p || pathname.startsWith(p));
    },
    [pathname]
  );

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpenMega(null), 140);
  };
  const closeMobile = () => setMobileOpen(false);

  // Scrolled is the ONLY trigger for visual changes. Opening a mega menu
  // never affects the navbar's own appearance — the dropdown is a pure
  // absolute overlay below it.
  const isSolid = variant === 'solid' || scrolled;

  return (
    <>
      <header
        ref={headerRef}
        data-scrolled={isSolid ? 'true' : 'false'}
        className={[
          'fixed inset-x-0 top-0 z-50',
          // Only color/blur/shadow transition — never height/padding/layout.
          'transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out motion-reduce:transition-none',
          isSolid
            ? 'bg-brand-forest/90 shadow-[0_1px_0_rgba(163,126,44,0.18),0_8px_28px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md'
            : 'bg-gradient-to-b from-black/45 via-black/15 to-transparent',
        ].join(' ')}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Inner bar — height is FIXED. Never bind padding, height, or flex
              alignment to scroll/menu state. Any layout shift here = bug. */}
          <div className="flex h-16 items-center justify-between gap-4 md:h-20">
            <a
              href="/"
              className={`group flex items-center gap-3 rounded-md ${RING}`}
              aria-label="Emerald City Limos — return to homepage"
            >
              <picture>
                <source srcSet="/icons/logo.webp" type="image/webp" />
                <img
                  src="/icons/logo.png"
                  alt="emerald city limos logo"
                  width={57}
                  height={48}
                  className="h-12 w-auto object-contain"
                  decoding="async"
                  fetchpriority="low"
                />
              </picture>
              <span className="flex flex-col leading-none" aria-hidden="true">
                <span className="font-display text-base font-semibold tracking-wide text-brand-gold">Emerald</span>
                <span className="font-display text-[0.7rem] tracking-[0.18em] text-brand-champagne/75">City Limos</span>
              </span>
            </a>

            <nav
              className="hidden lg:block"
              aria-label="Primary"
              onMouseLeave={scheduleClose}
            >
              <ul className="flex items-center gap-1" role="list">
                {NAV.map((item) =>
                  item.type === 'link' ? (
                    <li key={item.name}>
                      <NavLink
                        href={item.href}
                        active={isLinkActive(item.href)}
                        label={item.name}
                      />
                    </li>
                  ) : (
                    <li key={item.name} className="relative">
                      <MegaTrigger
                        label={item.name}
                        controlsId={`mega-${item.key}`}
                        open={openMega === item.key}
                        active={isMegaActive(item.key)}
                        onOpen={() => {
                          cancelClose();
                          setOpenMega(item.key);
                        }}
                        onToggle={() =>
                          setOpenMega((cur) => (cur === item.key ? null : item.key))
                        }
                        registerRef={(el) => {
                          triggerRefs.current[item.key] = el;
                        }}
                      />
                    </li>
                  )
                )}
              </ul>
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={PHONE_HREF}
                className={`group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-extra-light text-brand-champagne transition-colors hover:text-brand-gold-soft ${RING_TIGHT}`}
                aria-label={`Call us at ${PHONE_DISPLAY}, available twenty-four hours a day`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="tabular-nums">{PHONE_DISPLAY}</span>
              </a>
              
              <a
                href="https://customer.moovs.app/a1-charters-1/new/info"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center rounded-none bg-brand-gold px-5 py-2.5 text-sm font-semibold tracking-wide text-brand-forest shadow-[0_2px_0_rgba(0,0,0,0.08)] transition-[background-color,box-shadow] duration-200 hover:bg-brand-gold-soft hover:shadow-[0_6px_20px_-6px_rgba(163,126,44,0.6)] motion-reduce:transition-none ${RING}`}
              >
                Book Now
              </a>
            </div>

            <div className="flex items-center gap-1 lg:hidden">
              <a
                href={PHONE_HREF}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-md text-brand-champagne transition-colors hover:text-brand-gold-soft ${RING_TIGHT}`}
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
              </a>
              <button
                ref={hamburgerRef}
                type="button"
                onClick={() => setMobileOpen(true)}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-md text-brand-champagne transition-colors hover:text-brand-gold-soft ${RING_TIGHT}`}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-drawer"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Mega menu — pure absolute overlay anchored to the header content
              container. Out of document flow: opening/closing this NEVER
              affects the navbar's height, padding, or surrounding layout.
              Only opacity and transform animate. */}
          <div
            className={[
              'absolute inset-x-4 top-full z-10 hidden sm:inset-x-6 lg:inset-x-8 lg:block',
              'transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none',
              openMega
                ? 'pointer-events-auto translate-y-0 opacity-100'
                : 'pointer-events-none -translate-y-1 opacity-0',
            ].join(' ')}
            aria-hidden={openMega ? undefined : 'true'}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="mx-auto w-full max-w-[72rem]">
              {openMega === 'services' && (
                <ServicesMega onSelect={() => setOpenMega(null)} />
              )}
              {openMega === 'locations' && (
                <LocationsMega onSelect={() => setOpenMega(null)} />
              )}
            </div>
          </div>
        </div>
      </header>

      <MobileDrawer
        open={mobileOpen}
        onClose={closeMobile}
        section={mobileSection}
        setSection={setMobileSection}
        isLinkActive={isLinkActive}
        returnFocusRef={hamburgerRef}
      />
    </>
  );
}

/* ==================== Subcomponents ==================== */

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <a
      href={href}
      aria-current={active ? 'page' : undefined}
      className={[
        'relative inline-flex items-center px-4 py-2 text-[0.78rem] font-medium uppercase tracking-[0.1em]',
        'text-brand-champagne/85 transition-colors hover:text-brand-champagne',
        'rounded-md',
        RING_TIGHT,
        'after:absolute after:inset-x-4 after:bottom-1 after:h-px after:bg-brand-gold',
        'after:origin-center after:scale-x-0 after:transition-transform after:duration-200 motion-reduce:after:transition-none',
        'hover:after:scale-x-100',
        active ? 'text-brand-champagne after:scale-x-100' : '',
      ].join(' ')}
    >
      {label}
    </a>
  );
}

function MegaTrigger({
  label,
  controlsId,
  open,
  active,
  onOpen,
  onToggle,
  registerRef,
}: {
  label: string;
  controlsId: string;
  open: boolean;
  active: boolean;
  onOpen: () => void;
  onToggle: () => void;
  registerRef: (el: HTMLButtonElement | null) => void;
}) {
  return (
    <button
      ref={registerRef}
      type="button"
      aria-haspopup="true"
      aria-expanded={open}
      aria-controls={controlsId}
      onMouseEnter={onOpen}
      onFocus={onOpen}
      onClick={onToggle}
      className={[
        'relative inline-flex items-center gap-1 px-4 py-2 text-[0.78rem] font-medium uppercase tracking-[0.1em]',
        'text-brand-champagne/85 transition-colors hover:text-brand-champagne',
        'rounded-md',
        RING_TIGHT,
        'after:absolute after:inset-x-4 after:bottom-1 after:h-px after:bg-brand-gold',
        'after:origin-center after:scale-x-0 after:transition-transform after:duration-200 motion-reduce:after:transition-none',
        open || active ? 'text-brand-champagne after:scale-x-100' : 'hover:after:scale-x-100',
      ].join(' ')}
    >
      {label}
      <ChevronDown
        className={`h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transition-none ${
          open ? 'rotate-180' : ''
        }`}
        aria-hidden="true"
      />
    </button>
  );
}

function ServicesMega({ onSelect }: { onSelect: () => void }) {
  return (
    <div
      id="mega-services"
      className="-mt-5 overflow-hidden rounded-2xl border border-brand-gold/20 bg-brand-forest-deep/95 shadow-[0_24px_56px_-16px_rgba(0,0,0,0.65)] backdrop-blur-xl"
    >
      <ul role="list" className="grid grid-cols-1 gap-1 p-3 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              onClick={onSelect}
              className={`group flex items-start gap-3 rounded-xl p-4 transition-colors hover:bg-brand-gold/10 ${RING_TIGHT}`}
            >
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-gold/15 text-brand-gold transition-colors group-hover:bg-brand-gold group-hover:text-brand-forest">
                <s.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-brand-champagne">
                  {s.name}
                </span>
                <span className="mt-0.5 block text-xs leading-relaxed text-brand-champagne/65">
                  {s.desc}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2 border-t border-brand-gold/15 bg-brand-forest px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-brand-champagne/70">
          Need something custom? We charter for any occasion.
        </p>
        <a
          href="/services"
          onClick={onSelect}
          className={`rounded-sm text-xs font-semibold tracking-wide text-brand-gold transition-colors hover:text-brand-gold-soft ${RING_TIGHT}`}
        >
          View all services →
        </a>
      </div>
    </div>
  );
}

function LocationsMega({ onSelect }: { onSelect: () => void }) {
  return (
    <div
      id="mega-locations"
      className="-mt-5 overflow-hidden rounded-2xl border border-brand-gold/20 bg-brand-forest-deep/95 shadow-[0_24px_56px_-16px_rgba(0,0,0,0.65)] backdrop-blur-xl"
    >
      <div className="grid gap-6 p-6 md:grid-cols-4">
        {Object.entries(LOCATIONS).map(([k, group]) => (
          <div key={k}>
            <p className="mb-3 flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brand-gold">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {group.label}
            </p>
            <ul role="list" className="space-y-0.5">
              {group.items.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    onClick={onSelect}
                    className={`block rounded-md px-2 py-1.5 text-sm text-brand-champagne/85 transition-colors hover:bg-brand-gold/10 hover:text-brand-champagne ${RING_TIGHT}`}
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-brand-gold/15 bg-brand-forest px-6 py-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brand-gold">
              <Plane className="h-3 w-3" aria-hidden="true" />
              Airports
            </p>
            <ul role="list" className="flex flex-wrap gap-2">
              {AIRPORTS.map((a) => (
                <li key={a.href}>
                  <a
                    href={a.href}
                    onClick={onSelect}
                    className={`inline-flex items-center gap-2 rounded-full border border-brand-gold/25 bg-brand-forest px-3 py-1.5 text-xs text-brand-champagne transition-colors hover:border-brand-gold hover:text-brand-gold-soft ${RING_TIGHT}`}
                  >
                    {a.name}
                    {'tag' in a && a.tag && (
                      <span className="rounded-full bg-brand-emerald/20 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-brand-emerald">
                        {a.tag}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="/locations"
            onClick={onSelect}
            className={`self-start rounded-sm text-xs font-semibold tracking-wide text-brand-gold transition-colors hover:text-brand-gold-soft md:self-auto ${RING_TIGHT}`}
          >
            View all locations →
          </a>
        </div>
      </div>
    </div>
  );
}

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  section: Mega;
  setSection: (s: Mega) => void;
  isLinkActive: (h: string) => boolean;
  returnFocusRef: React.RefObject<HTMLButtonElement | null>;
}

function MobileDrawer({
  open,
  onClose,
  section,
  setSection,
  isLinkActive,
  returnFocusRef,
}: MobileDrawerProps) {
  const drawerRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 30);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (open) return;
    returnFocusRef.current?.focus();
  }, [open, returnFocusRef]);

  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    if (!drawer) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusable = drawer.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    drawer.addEventListener('keydown', onKey);
    return () => drawer.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <div
        className={[
          'fixed inset-0 z-40 bg-black/60 backdrop-blur-sm',
          'transition-opacity duration-300 ease-out motion-reduce:transition-none',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={[
          'fixed right-0 top-0 z-50 flex h-[100dvh] w-[88vw] max-w-sm flex-col',
          'bg-brand-forest text-brand-champagne shadow-2xl',
          'transition-transform duration-300 ease-out motion-reduce:transition-none',
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <div className="flex items-center justify-between border-b border-brand-gold/15 px-5 py-4">

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-md text-brand-champagne transition-colors hover:text-brand-gold-soft ${RING_TIGHT}`}
            aria-label="Close navigation menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav
          className="flex-1 overflow-y-auto overscroll-contain px-3 py-4"
          aria-label="Mobile primary"
        >
          <ul role="list" className="space-y-1">
            {NAV.map((item) => {
              if (item.type === 'link') {
                const active = isLinkActive(item.href);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? 'page' : undefined}
                      className={[
                        'flex min-h-[48px] items-center rounded-lg px-4 text-base',
                        RING_TIGHT,
                        active
                          ? 'bg-brand-gold/15 font-semibold text-brand-gold-soft'
                          : 'font-medium text-brand-champagne hover:bg-brand-gold/10',
                      ].join(' ')}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              }
              const isOpen = section === item.key;
              const panelId = `m-${item.key}`;
              return (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => setSection(isOpen ? null : item.key)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className={`flex min-h-[48px] w-full items-center justify-between rounded-lg px-4 text-base font-medium text-brand-champagne transition-colors hover:bg-brand-gold/10 ${RING_TIGHT}`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-4 w-4 text-brand-gold transition-transform duration-200 motion-reduce:transition-none ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={panelId}
                    hidden={!isOpen}
                    className="ml-4 mt-1 mb-2 border-l border-brand-gold/20 pl-3"
                  >
                    {item.key === 'services' ? (
                      <ul role="list" className="space-y-0.5">
                        {SERVICES.map((s) => (
                          <li key={s.href}>
                            <a
                              href={s.href}
                              onClick={onClose}
                              className={`flex min-h-[44px] items-center rounded-md px-3 text-sm text-brand-champagne/85 transition-colors hover:bg-brand-gold/10 hover:text-brand-champagne ${RING_TIGHT}`}
                            >
                              {s.name}
                            </a>
                          </li>
                        ))}
                        <li>
                          <a
                            href="/services"
                            onClick={onClose}
                            className={`flex min-h-[44px] items-center rounded-md px-3 text-sm font-semibold text-brand-gold hover:text-brand-gold-soft ${RING_TIGHT}`}
                          >
                            View all services →
                          </a>
                        </li>
                      </ul>
                    ) : (
                      <div className="space-y-3">
                        <ul role="list" className="flex flex-wrap gap-1.5">
                          {AIRPORTS.map((a) => (
                            <li key={a.href}>
                              <a
                                href={a.href}
                                onClick={onClose}
                                className={`inline-flex min-h-[40px] items-center rounded-full border border-brand-gold/25 px-3 text-xs font-semibold text-brand-champagne transition-colors hover:border-brand-gold hover:text-brand-gold-soft ${RING_TIGHT}`}
                              >
                                {a.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                        {Object.entries(LOCATIONS).map(([k, group]) => (
                          <div key={k}>
                            <p className="px-1 pt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brand-gold">
                              {group.label}
                            </p>
                            <ul role="list" className="space-y-0.5">
                              {group.items.map((c) => (
                                <li key={c.href}>
                                  <a
                                    href={c.href}
                                    onClick={onClose}
                                    className={`flex min-h-[40px] items-center rounded-md px-3 text-sm text-brand-champagne/80 transition-colors hover:bg-brand-gold/10 hover:text-brand-champagne ${RING_TIGHT}`}
                                  >
                                    {c.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <a
                          href="/locations"
                          onClick={onClose}
                          className={`block rounded-sm px-1 py-2 text-sm font-semibold text-brand-gold hover:text-brand-gold-soft ${RING_TIGHT}`}
                        >
                          View all locations →
                        </a>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-2.5 border-t border-brand-gold/15 bg-brand-forest-deep px-5 py-4">
          <a
            href="https://customer.moovs.app/a1-charters-1/new/info"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex min-h-[52px] w-full items-center justify-center rounded-none bg-brand-gold px-5 font-semibold tracking-wide text-brand-forest outline-none transition-colors hover:bg-brand-gold-soft focus-visible:ring-2 focus-visible:ring-brand-champagne"
          >
            Book Now
          </a>
          <a
            href="https://customer.moovs.app/a1-charters-1/new/info"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className={`flex min-h-[48px] w-full items-center justify-center rounded-none border border-brand-champagne/30 px-5 font-semibold text-brand-champagne transition-colors hover:border-brand-gold hover:text-brand-gold-soft ${RING_TIGHT}`}
          >
            Get a Quote
          </a>
          <a
            href={PHONE_HREF}
            onClick={onClose}
            className={`flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md text-brand-champagne transition-colors hover:text-brand-gold-soft ${RING_TIGHT}`}
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="text-base font-semibold tabular-nums">{PHONE_DISPLAY}</span>
          </a>
          <p className="text-center text-xs text-brand-champagne/55">
            Available 24 hours · Seven days a week
          </p>
        </div>
      </aside>
    </>
  );
}
