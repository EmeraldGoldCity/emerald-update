# Emerald City Limos Astro Migration

## Migration Status: IN PROGRESS

### ✅ Completed
1. **Astro Configuration**
   - astro.config.mjs with React, Tailwind, and Sitemap integrations
   - package.json updated with Astro scripts
   - tsconfig.json configured for Astro + React

2. **Core Layouts**
   - BaseLayout.astro (SEO, meta tags, structured data)
   - MainLayout.astro (with Navigation and Footer)

3. **Components Converted**
   - Navigation.tsx → React island component
   - Footer.tsx → React island component  
   - VehicleCarousel.tsx → React island for interactive carousels

4. **Pages Converted to Astro**
   - ✅ index.astro (Home Page)
   - ✅ services.astro (Services Page)
   - ✅ book-now.astro (Book Now Page with Moovs iframe)
   - ✅ locations.astro (Locations Overview Page)

5. **SEO & Performance**
   - robots.txt added
   - Sitemap integration configured
   - Schema.org structured data for LocalBusiness
   - Open Graph and Twitter meta tags

### 🚧 Remaining Work

#### Pages to Convert
1. **Fleet Page** - needs VehicleCarousel React islands
2. **Airport Transfers Page** - straightforward conversion
3. **Service Detail Pages** (9 pages):
   - /service/hourly-charters
   - /service/wedding-transportation
   - /service/game-day-transport
   - /service/special-occasions
   - /service/executive-transportation
   - /service/cruise-transportation
   - /service/infant-car-seats
   - /service/personal-chauffeur
4. **Location Detail Pages** (10 pages):
   - /location/king-county
   - /location/snohomish-county
   - /location/pierce-county
   - /location/spokane
   - /location/wenatchee
   - /location/seattle
   - /location/bellevue
   - /location/tacoma
   - /location/everett
   - /location/redmond
5. **Blog System**:
   - /blog (main blog page with search)
   - /blog/[slug] (individual blog posts - 14 posts)
   - /blog/faq (FAQ page)
6. **Affiliates Page** - form needs React island

#### Components Needed
- BlogPostCard.tsx (React island)
- BlogSearch.tsx (React island for search functionality)
- AffiliatesForm.tsx (React island for form)
- BlogSlider.tsx (React island for featured posts carousel)

#### Assets
- All Figma assets need to be available in /public or imported correctly
- Images from `figma:asset/*` scheme need proper handling

## How to Complete Migration

### Pattern for Static Pages
```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
---

<MainLayout 
  title="Page Title"
  description="SEO description"
  keywords="keyword1, keyword2"
>
  <!-- Static HTML content here -->
</MainLayout>
```

### Pattern for Pages with Interactive Components
```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
import { InteractiveComponent } from '@/components/react/InteractiveComponent';
---

<MainLayout title="..." description="...">
  <!-- Static content -->
  <InteractiveComponent client:load />
  <!-- More static content -->
</MainLayout>
```

### Client Directives
- `client:load` - Load component immediately on page load
- `client:idle` - Load when browser is idle
- `client:visible` - Load when component enters viewport
- `client:only="react"` - Only run on client, never server-render

## Running the Site

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Performance Features
- Static Site Generation (SSG) for all pages
- Automatic image optimization with Sharp
- Code splitting by default
- Minimal JavaScript (only for interactive islands)
- Automatic sitemap generation

## SEO Features
- Canonical URLs
- Open Graph tags
- Twitter Card tags
- Schema.org structured data
- Optimized meta descriptions for each page
- robots.txt configured

## Next Steps
1. Convert remaining pages following the patterns above
2. Create React islands for interactive components
3. Handle Figma asset imports
4. Test all navigation and links
5. Verify SEO meta tags on all pages
6. Test performance with Lighthouse
7. Deploy to production