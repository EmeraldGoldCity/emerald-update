---
/**
 * Emerald City Limos — Homepage
 *
 * The hero section is the primary above-the-fold experience.
 * Sections below the hero (services, fleet, testimonials, etc.)
 * would follow here using the same design system.
 */

import Layout from '../layouts/Layout.astro'
import Hero   from '../components/hero/Hero.astro'

import type { HeroProps } from '../types/hero'

// ── Hero Configuration ─────────────────────────────────────────────────────
// Edit these values to customise the hero copy, links, and image.
// The image src should point to a real photo in your /public/images/ directory.

const heroConfig = {
  // Copy
  eyebrow:        "Seattle's Premier Chauffeur Service",
  headline:       "Refined Chauffeur Experiences Wherever You Travel",
  headlineAccent: "Luxury Chauffeur",
  headlineEnd:    "Experience",
  tagline:        "Arrive impeccably. Every journey crafted with discretion, comfort, and absolute precision.",

  // CTAs
  ctaPrimary: {
    label: 'Book Your Ride',
    href:  '/book',
    id:    'cta-book-hero',
  },
  ctaSecondary: {
    label: 'Call Now',
    href:  '/contact',
    id:    'cta-call-hero',
  },

  // Phone — displayed in secondary CTA on mobile
  phone: '(206) 555-0192',

  // Trust indicators (label + icon name)
  trustIndicators: [
    { label: 'Licensed & Insured',      icon: 'shield' as const },
    { label: 'Professional Chauffeurs', icon: 'user'   as const },
    { label: '24/7 Availability',       icon: 'clock'  as const },
    { label: 'Premium Fleet',           icon: 'car'    as const },
  ],

  // Background image
  // IMPORTANT: Add your own luxury vehicle/chauffeur photograph here.
  // See Hero.astro for image guidelines.
  // Recommended: Unsplash free-license images, tagged 'luxury car' or 'limousine night'
  image: {
    // For demo purposes we reference a dark placeholder.
    // In production, replace with: '/images/hero.webp'
    src:       '/images/emerald-hero.webp',
    srcMobile: '/images/hero-mobile.webp',
    alt:       'A luxury black chauffeur vehicle at night, illuminated by city lights in Seattle — Emerald City Limos premium fleet',
    width:     2400,
    height:    1600,
  },

  showScrollIndicator: true,
  minHeight:           '100svh',
} satisfies Omit<HeroProps, 'headline'> & {
  headline:       string
  headlineAccent: string
  headlineEnd?:   string
}
---

<Layout
  title="Emerald City Limos | Luxury Chauffeur Service Seattle, WA"
  description="Seattle's most trusted luxury chauffeur and limousine service. Professional drivers, premium fleet, available 24/7. Book airport transfers, weddings, corporate events, and more."
  heroImageSrc={heroConfig.image.src}
>
  <!-- ── HERO ─────────────────────────────────────────────────────────── -->
  <Hero {...heroConfig} />

  <!-- ── BELOW FOLD ────────────────────────────────────────────────────── -->
  <!--
    The sections below are structural placeholders.
    Build each as its own Astro component following the same design system.
    Recommended section order for conversion:
      1. Services overview (airport, wedding, corporate, events)
      2. Fleet showcase with vehicle cards
      3. Social proof (testimonials + star ratings)
      4. How it works (3-step process)
      5. Coverage area / service locations
      6. Final CTA section
      7. Footer
  -->
  <main id="main-content" tabindex="-1">

    <!-- Services Section Placeholder -->
    <section
      class="py-24 px-6 sm:px-8 bg-brand-ivory"
      aria-labelledby="services-heading"
    >
      <div class="max-w-6xl mx-auto text-center">
        <p class="font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-gold mb-4">
          Our Services
        </p>
        <h2
          id="services-heading"
          class="font-display font-light text-brand-green-deep mb-6"
          style="font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.015em; line-height: 1.1;"
        >
          Every Journey,<br />
          <em class="text-brand-gold" style="font-style: italic;">Perfected</em>
        </h2>
        <p class="font-sans font-light text-brand-charcoal max-w-xl mx-auto"
           style="font-size: 1.05rem; line-height: 1.8;">
          From seamless airport transfers to unforgettable wedding arrivals —
          Emerald City Limos brings white-glove service to every occasion.
        </p>
      </div>
    </section>

  </main>

</Layout>