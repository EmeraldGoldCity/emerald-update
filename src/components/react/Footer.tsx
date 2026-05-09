import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const TikTokIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const PHONE_DISPLAY = '(206) 595-9675';
const PHONE_TEL = 'tel:+12065959675';
const EMAIL = 'client@emeraldcitylimos.com';

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/fleet', label: 'Fleet' },
  { href: '/locations', label: 'Locations' },
  { href: '/blog', label: 'Blog' },
  { href: '/affiliates', label: 'Affiliates' },
];

const SERVICE_LINKS = [
  { href: '/airport-transfers', label: 'Airport Transfers' },
  { href: '/service/executive-transportation', label: 'Executive Transport' },
  { href: '/service/wedding-transportation', label: 'Weddings' },
  { href: '/service/hourly-charters', label: 'Hourly Charters' },
  { href: '/service/cruise-transportation', label: 'Cruise Transfers' },
  { href: '/service/game-day-transport', label: 'Game Day' },
  { href: '/service/special-occasions', label: 'Special Occasions' },
  { href: '/service/infant-car-seats', label: 'Infant & Booster Seats' },
];

const SOCIALS = [
  { href: 'https://www.facebook.com/emeraldcitylimos', label: 'Facebook', Icon: Facebook },
  { href: 'https://www.instagram.com/emeraldcitylimos', label: 'Instagram', Icon: Instagram },
  { href: 'https://www.tiktok.com/@emeraldcitylimos', label: 'TikTok', Icon: TikTokIcon },
  { href: 'https://www.youtube.com/@emeraldcitylimos', label: 'YouTube', Icon: YouTubeIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-brand-forest text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      {/* Top hairline — gold gradient, matches CTA section */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold-soft to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20 lg:pt-24">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-12 lg:gap-12">

          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-4">
            <a
              href="/"
              aria-label="Emerald City Limos — home"
              className="ecl-focusable inline-block"
            >
              <span className="block font-sans text-xs font-semibold uppercase tracking-widest text-brand-gold">
                Established 2010
              </span>
              <span className="mt-3 block font-display text-3xl font-light leading-none tracking-tight text-white sm:text-4xl">
                Emerald City{' '}
                <em className="italic text-brand-gold-soft">Limos</em>
              </span>
            </a>

            <p className="mt-5 max-w-sm font-sans text-sm font-light leading-relaxed text-white/65">
              Premium chauffeur service for the Greater Seattle area &mdash; discreet, precise,
              and on time. Available 24/7.
            </p>

            <ul role="list" className="mt-7 flex items-center gap-3">
              {SOCIALS.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (opens in a new tab)`}
                    className="ecl-focusable inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors duration-300 hover:border-brand-gold hover:text-brand-gold"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <nav aria-labelledby="footer-explore" className="lg:col-span-2">
            <h3
              id="footer-explore"
              className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-gold"
            >
              Explore
            </h3>
            <ul role="list" className="mt-5 space-y-3">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="ecl-focusable font-sans text-sm font-light text-white/75 transition-colors duration-300 hover:text-brand-gold"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-labelledby="footer-services" className="lg:col-span-3">
            <h3
              id="footer-services"
              className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-gold"
            >
              Services
            </h3>
            <ul role="list" className="mt-5 space-y-3">
              {SERVICE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="ecl-focusable font-sans text-sm font-light text-white/75 transition-colors duration-300 hover:text-brand-gold"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-gold">
              Contact
            </h3>
            <address className="mt-5 not-italic">
              <ul role="list" className="space-y-4">
                <li>
                  <a
                    href={PHONE_TEL}
                    className="ecl-focusable inline-flex items-start gap-3 font-sans text-sm font-light text-white/75 transition-colors duration-300 hover:text-brand-gold"
                  >
                    <Phone
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold"
                      aria-hidden="true"
                    />
                    <span className="tabular-nums">{PHONE_DISPLAY}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="ecl-focusable inline-flex items-start gap-3 break-all font-sans text-sm font-light text-white/75 transition-colors duration-300 hover:text-brand-gold"
                  >
                    <Mail
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold"
                      aria-hidden="true"
                    />
                    <span>{EMAIL}</span>
                  </a>
                </li>
                <li className="inline-flex items-start gap-3 font-sans text-sm font-light text-white/75">
                  <MapPin
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold"
                    aria-hidden="true"
                  />
                  <span>Seattle, WA</span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-8 sm:mt-16">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="font-sans text-xs font-light text-white/50">
              &copy;{' '}
              <time dateTime={String(year)}>{year}</time>{' '}
              Emerald City Limos. All rights reserved.
            </p>
            <ul role="list" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <li>
                <a
                  href="/sitemap.xml"
                  className="ecl-focusable font-sans text-xs font-light text-white/50 transition-colors duration-300 hover:text-brand-gold"
                >
                  Sitemap
                </a>
              </li>
              <li>
                <a
                  href={PHONE_TEL}
                  className="ecl-focusable font-sans text-xs font-light tabular-nums text-white/50 transition-colors duration-300 hover:text-brand-gold"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
