# Page Templates for Easy Completion

## Service Detail Page Template

Use this template for all remaining service pages. Copy `/src/pages/service/hourly-charters.astro` and modify:

### Required Changes:
1. **Title**: Update the `title` prop in MainLayout
2. **Description**: Update the `description` with service-specific content
3. **Keywords**: Add service-specific keywords
4. **Hero Section**: Update h1, description, and hero image
5. **Service Overview**: Update the "Your Personal" section with service details
6. **Perfect For**: Update the grid with relevant use cases
7. **Pricing Info**: Update pricing details (if applicable)

### Service Pages Needed:
```
/src/pages/service/wedding-transportation.astro
/src/pages/service/game-day-transport.astro
/src/pages/service/special-occasions.astro
/src/pages/service/executive-transportation.astro
/src/pages/service/cruise-transportation.astro
/src/pages/service/infant-car-seats.astro
/src/pages/service/personal-chauffeur.astro
```

## Location Detail Page Template

```astro
---
import MainLayout from '@/layouts/MainLayout.astro';

const locationName = "King County"; // Change this
const locationSlug = "king-county"; // Change this
---

<MainLayout 
  title=`${locationName} Limo Service - Luxury Transportation | Emerald City Limos`
  description=`Professional limousine and black car service in ${locationName}. Airport transfers, corporate events, weddings. Available 24/7.`
  keywords=`${locationSlug} limo service, ${locationSlug} car service, luxury transportation ${locationSlug}`
>
  {/* Hero Section */}
  <section class="relative h-[400px] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-emerald-900/80 z-10"></div>
    <img
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
      alt={locationName}
      class="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div class="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
      <h1 class="text-5xl md:text-6xl font-bold mb-4">
        <span class="text-[#d4af37]">{locationName}</span> Limo Service
      </h1>
      <p class="text-xl text-gray-200">
        Premium luxury transportation throughout {locationName}
      </p>
    </div>
  </section>

  {/* Location Content */}
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="prose max-w-none">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">
          Professional Limousine Service in {locationName}
        </h2>
        <p class="text-xl text-gray-600 mb-6">
          Emerald City Limos provides premium transportation services throughout {locationName}...
        </p>
        
        {/* Add location-specific content here */}
        
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-12">Cities We Serve in {locationName}</h3>
        <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <li class="flex items-center space-x-2">
            <span class="text-[#d4af37]">✓</span>
            <span>City 1</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-[#d4af37]">✓</span>
            <span>City 2</span>
          </li>
          {/* Add more cities */}
        </ul>
      </div>
    </div>
  </section>

  {/* Services */}
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">Our Services in {locationName}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl p-8 shadow-lg text-center">
          <div class="text-5xl mb-4">✈️</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Airport Transfers</h3>
          <p class="text-gray-600">Sea-Tac Airport transportation</p>
        </div>
        <div class="bg-white rounded-xl p-8 shadow-lg text-center">
          <div class="text-5xl mb-4">💼</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Corporate Events</h3>
          <p class="text-gray-600">Business transportation</p>
        </div>
        <div class="bg-white rounded-xl p-8 shadow-lg text-center">
          <div class="text-5xl mb-4">💍</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Weddings</h3>
          <p class="text-gray-600">Special occasion transport</p>
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section class="py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold mb-6">Book Your Ride in {locationName}</h2>
      <p class="text-xl mb-8 text-gray-200">
        Professional transportation available 24/7
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/book-now"
          class="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold transition-all"
        >
          BOOK NOW
        </a>
        <a
          href="tel:+12065959675"
          class="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-900 text-white px-8 py-4 rounded-lg font-semibold transition-all"
        >
          Call (206) 595-9675
        </a>
      </div>
    </div>
  </section>
</MainLayout>
```

### Location Pages Needed:
```
/src/pages/location/king-county.astro
/src/pages/location/snohomish-county.astro
/src/pages/location/pierce-county.astro
/src/pages/location/spokane.astro
/src/pages/location/wenatchee.astro
/src/pages/location/seattle.astro
/src/pages/location/bellevue.astro
/src/pages/location/tacoma.astro
/src/pages/location/everett.astro
/src/pages/location/redmond.astro
```

## Fleet Page with Vehicle Carousel

You'll need to use the VehicleCarousel React island:

```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
import { VehicleCarousel } from '@/components/react/VehicleCarousel';
---

<MainLayout title="Our Fleet">
  <section>
    <h1>Our Fleet</h1>
    
    <!-- For each vehicle -->
    <div class="vehicle-card">
      <VehicleCarousel 
        client:load
        images={[
          'https://image1.jpg',
          'https://image2.jpg',
          'https://image3.jpg'
        ]}
        alt="Cadillac Escalade"
      />
      <h3>Cadillac Escalade ESV</h3>
      <p>Passengers: 6</p>
    </div>
  </section>
</MainLayout>
```

## Blog Page

Create a React island for search functionality:

```tsx
// /src/components/react/BlogSearch.tsx
import { useState } from 'react';

export function BlogSearch({ posts }) {
  const [search, setSearch] = useState('');
  
  const filtered = posts.filter(post => 
    post.title.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div>
      <input 
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search blog posts..."
      />
      <div>
        {filtered.map(post => (
          <a key={post.slug} href={`/blog/${post.slug}`}>
            {post.title}
          </a>
        ))}
      </div>
    </div>
  );
}
```

## Affiliates Form

Create a React island:

```tsx
// /src/components/react/AffiliatesForm.tsx
import { useState } from 'react';

export function AffiliatesForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    dotNumber: '',
    email: '',
    phone: '',
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

## Pro Tips

### 1. Batch Similar Pages
Create all service pages at once by copying the template and doing find/replace.

### 2. Content from Existing Site
Copy content from your existing React components in `/src/app/pages/`.

### 3. Images
- Use Unsplash URLs for now
- Replace with actual images later
- Use `loading="lazy"` for images below the fold

### 4. SEO
Make each page unique with:
- Different title tags
- Unique meta descriptions
- Location/service-specific keywords

### 5. Internal Linking
Link between pages:
```html
<a href="/services">Our Services</a>
<a href="/location/seattle">Seattle Service</a>
```

## Quick Commands

```bash
# Create a new page
touch src/pages/service/wedding-transportation.astro

# Start dev server to test
npm run dev

# Build to check for errors
npm run build
```

## File Naming
- Use lowercase with hyphens: `wedding-transportation.astro`
- Match your URL structure
- Group related pages in folders

Ready to complete the migration! 🚀