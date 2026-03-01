# Astro Migration Checklist

## ✅ Phase 1: Core Setup (COMPLETED)
- [x] Install Astro and dependencies
- [x] Configure astro.config.mjs
- [x] Set up Tailwind CSS v4
- [x] Configure TypeScript
- [x] Create base layouts
- [x] Add View Transitions
- [x] Configure sitemap generation
- [x] Add robots.txt
- [x] Set up SEO components

## ✅ Phase 2: Core Components (COMPLETED)
- [x] Convert Navigation to React island
- [x] Convert Footer component
- [x] Create VehicleCarousel React island
- [x] Create OptimizedImage component

## ✅ Phase 3: Main Pages (COMPLETED)
- [x] Home page (/)
- [x] Services page (/services)
- [x] Locations overview (/locations)
- [x] Book Now page (/book-now)
- [x] Airport Transfers (/airport-transfers)
- [x] Sample Service Detail (hourly-charters)

## 📋 Phase 4: Service Detail Pages (TODO)
- [ ] Wedding Transportation (`/service/wedding-transportation`)
- [ ] Game Day Transport (`/service/game-day-transport`)
- [ ] Special Occasions (`/service/special-occasions`)
- [ ] Executive Transportation (`/service/executive-transportation`)
- [ ] Cruise Transportation (`/service/cruise-transportation`)
- [ ] Infant Car Seats (`/service/infant-car-seats`)
- [ ] Personal Chauffeur (`/service/personal-chauffeur`)

**Template**: Copy `/src/pages/service/hourly-charters.astro`

## 📋 Phase 5: Location Pages (TODO)
- [ ] King County (`/location/king-county`)
- [ ] Snohomish County (`/location/snohomish-county`)
- [ ] Pierce County (`/location/pierce-county`)
- [ ] Spokane (`/location/spokane`)
- [ ] Wenatchee (`/location/wenatchee`)
- [ ] Seattle (`/location/seattle`)
- [ ] Bellevue (`/location/bellevue`)
- [ ] Tacoma (`/location/tacoma`)
- [ ] Everett (`/location/everett`)
- [ ] Redmond (`/location/redmond`)

**Template**: Use template in `/TEMPLATES.md`

## 📋 Phase 6: Fleet & Assets (TODO)
- [ ] Create Fleet page (`/fleet`)
- [ ] Add VehicleCarousel for each vehicle
- [ ] Handle Figma asset imports (car images)
- [ ] Add baby seat images
- [ ] Optimize all images

**Files needed**:
- Copy images from React app or use Figma assets
- Use VehicleCarousel component that's already created

## 📋 Phase 7: Blog System (TODO)
- [ ] Create blog overview page (`/blog`)
- [ ] Create BlogSearch React island
- [ ] Create BlogPostCard component
- [ ] Create FAQ page (`/blog/faq`)
- [ ] Create individual blog post pages:
  - [ ] Seattle Airport Transfer Guide
  - [ ] Wine Tour Transportation
  - [ ] Wedding Planning Guide
  - [ ] Corporate Transportation Tips
  - [ ] Game Day Transportation
  - [ ] Cruise Terminal Guide
  - [ ] Child Safety Seats Guide
  - [ ] Executive Travel Tips
  - [ ] Special Events Planning
  - [ ] Holiday Transportation
  - [ ] Prom Transportation Guide
  - [ ] Bachelor Party Transport
  - [ ] Anniversary Ideas
  - [ ] Seattle Sightseeing Guide

**Components needed**:
```bash
/src/components/react/BlogSearch.tsx
/src/components/react/BlogPostCard.tsx
/src/components/react/FeaturedPostsSlider.tsx
```

## 📋 Phase 8: Affiliates (TODO)
- [ ] Create Affiliates page (`/affiliates`)
- [ ] Create AffiliatesForm React island
- [ ] Add form validation
- [ ] Add file upload for insurance documents

## 📋 Phase 9: Testing (TODO)
- [ ] Test all navigation links
- [ ] Verify mobile responsiveness
- [ ] Test booking portal iframe
- [ ] Check all images load correctly
- [ ] Test forms (if any)
- [ ] Verify SEO meta tags
- [ ] Check Open Graph tags
- [ ] Test 404 page
- [ ] Verify sitemap generates correctly

## 📋 Phase 10: Performance Optimization (TODO)
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Optimize remaining images
- [ ] Add preload for critical assets
- [ ] Verify lazy loading works
- [ ] Test on slow 3G connection
- [ ] Check bundle sizes

## 📋 Phase 11: SEO (TODO)
- [ ] Verify unique titles on all pages
- [ ] Check meta descriptions (155 chars max)
- [ ] Verify canonical URLs
- [ ] Test structured data with Google Rich Results Test
- [ ] Create XML sitemap
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt
- [ ] Add breadcrumb schema (if needed)

## 📋 Phase 12: Deployment (TODO)
- [ ] Choose hosting provider (Vercel/Netlify/Cloudflare)
- [ ] Set up custom domain
- [ ] Configure SSL certificate
- [ ] Set up CDN
- [ ] Configure environment variables (if needed)
- [ ] Test production build locally
- [ ] Deploy to production
- [ ] Verify live site works
- [ ] Set up analytics (Google Analytics/Plausible)
- [ ] Configure error tracking (optional)

## Priority Order

### High Priority (Do First)
1. Service detail pages (7 pages) - High traffic pages
2. Location pages (10 pages) - SEO critical
3. Fleet page - Showcases vehicles
4. Blog main page - Content marketing

### Medium Priority
5. Individual blog posts (14 pages) - SEO content
6. FAQ page - Customer service
7. Affiliates page - Business development

### Completion Estimates
- **Service Pages**: ~2-3 hours (copy template, update content)
- **Location Pages**: ~3-4 hours (copy template, add location-specific content)
- **Fleet Page**: ~1-2 hours (handle image carousels)
- **Blog System**: ~3-4 hours (create search, cards, individual posts)
- **Testing & QA**: ~2-3 hours
- **Total**: ~11-16 hours to complete migration

## Quick Reference

### Create New Page
```bash
touch src/pages/service/wedding-transportation.astro
```

### Copy Template
```bash
cp src/pages/service/hourly-charters.astro src/pages/service/wedding-transportation.astro
```

### Test Changes
```bash
npm run dev
# Visit http://localhost:4321
```

### Build & Check
```bash
npm run build
```

## Resources
- Astro Docs: https://docs.astro.build
- Existing React Components: `/src/app/pages/`
- Templates: `/TEMPLATES.md`
- Migration Status: `/MIGRATION_STATUS.md`
- Deployment Guide: `/DEPLOYMENT.md`

---

**Current Status**: Foundation complete! Core architecture, SEO, and performance optimizations are live. Ready to complete remaining pages using established patterns.

🎯 **Next Step**: Start with service detail pages using the template in `/src/pages/service/hourly-charters.astro`
