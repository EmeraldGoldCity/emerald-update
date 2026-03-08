import { useState } from 'react';

import { ChevronLeft, ChevronRight, Search, Calendar, ArrowRight, Tag, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

const blogPosts: BlogPost[] = [
  // ===== NEW COMPREHENSIVE BLOG POSTS (February 2025) =====
  {
    id: 'new-1',
    slug: 'seatac-airport-to-downtown-seattle-transportation-guide',
    title: 'The Complete Guide to Getting From Sea-Tac Airport to Downtown Seattle (2025)',
    excerpt: 'Every option for getting from Sea-Tac Airport to downtown Seattle compared — limo, rideshare, taxi, light rail, shuttle. Costs, times, pros & cons.',
    content: '',
    image: 'https://images.unsplash.com/photo-1728327208432-782ad594ef7e?w=1080&q=80',
    category: 'Travel Guide',
    date: 'February 17, 2025',
    readTime: '12 min read',
    tags: ['Sea-Tac Airport', 'Downtown Seattle', 'Transportation', 'Travel Guide']
  },
  {
    id: 'new-2',
    slug: 'seattle-wedding-transportation-complete-planning-guide',
    title: 'Seattle Wedding Transportation: The Complete Planning Guide for 2025',
    excerpt: 'Everything you need to know about booking wedding transportation in Seattle. Timelines, vehicle types, costs, venue logistics, and mistakes to avoid.',
    content: '',
    image: 'https://images.unsplash.com/photo-1616137477862-170063810e39?w=1080&q=80',
    category: 'Wedding Guide',
    date: 'February 17, 2025',
    readTime: '14 min read',
    tags: ['Wedding', 'Seattle Weddings', 'Transportation Planning', 'Luxury Limos']
  },
  {
    id: 'new-3',
    slug: 'seattle-game-day-transportation-ultimate-guide',
    title: 'The Ultimate Guide to Seattle Game Day Transportation (Seahawks, Mariners, Kraken)',
    excerpt: 'Complete guide to Lumen Field, T-Mobile Park, and Climate Pledge Arena transportation. Parking, transit, rideshare, and limo options compared.',
    content: '',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1080&q=80',
    category: 'Game Day',
    date: 'February 17, 2025',
    readTime: '11 min read',
    tags: ['Seahawks', 'Mariners', 'Sports', 'Game Day', 'Seattle Events']
  },
  {
    id: 'new-4',
    slug: 'woodinville-wine-tour-planning-guide',
    title: 'Planning the Perfect Woodinville Wine Tour: Complete 2025 Guide',
    excerpt: 'Everything you need to know about visiting Woodinville wine country — 100+ wineries, tasting strategies, transportation options, and insider tips.',
    content: '',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1080&q=80',
    category: 'Wine Tours',
    date: 'February 17, 2025',
    readTime: '10 min read',
    tags: ['Woodinville', 'Wine Tours', 'Day Trips', 'Eastside']
  },
  {
    id: 'new-5',
    slug: 'corporate-transportation-seattle-executive-guide',
    title: 'Corporate Transportation Seattle: Executive Guide to Business Travel (2025)',
    excerpt: 'Everything executives need to know about Seattle corporate car service — from airport transfers to hourly charters, client meetings to multi-city trips.',
    content: '',
    image: 'https://images.unsplash.com/photo-1758518727984-17b37f2f0562?w=1080&q=80',
    category: 'Executive Transport',
    date: 'February 17, 2025',
    readTime: '9 min read',
    tags: ['Corporate', 'Executive', 'Business Travel', 'Black Car']
  },
  {
    id: 'new-6',
    slug: 'seattle-cruise-port-transportation-guide',
    title: 'Seattle Cruise Port Transportation: Complete Guide to Pier 91 & Pier 66 (2025)',
    excerpt: 'Everything you need to know about transportation to Seattle cruise terminals for Alaska cruises. Pier 91, Pier 66, timing, luggage, stress-free embarkation.',
    content: '',
    image: 'https://images.unsplash.com/photo-1763341982412-e249c8a988a7?w=1080&q=80',
    category: 'Cruise Transportation',
    date: 'February 17, 2025',
    readTime: '10 min read',
    tags: ['Cruise Port', 'Alaska Cruise', 'Pier 91', 'Pier 66', 'Seattle Waterfront']
  },
  {
    id: 'new-7',
    slug: 'seattle-prom-homecoming-transportation-guide',
    title: 'Seattle Prom & Homecoming Transportation: Parent\'s Guide to Safe Teen Limo Service',
    excerpt: 'Complete guide to booking safe, reliable prom and homecoming transportation in Seattle. What parents need to know about teen limo service, safety, pricing.',
    content: '',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1080&q=80',
    category: 'Special Occasions',
    date: 'February 17, 2025',
    readTime: '9 min read',
    tags: ['Prom', 'Homecoming', 'Teen Transportation', 'Safety', 'High School']
  },
  {
    id: 'new-8',
    slug: 'bainbridge-island-ferry-transportation-guide',
    title: 'Bainbridge Island Transportation & Ferry Guide: Complete 2025 Travel Guide',
    excerpt: 'Everything you need to know about getting to Bainbridge Island — ferry schedules, transportation options, wedding/event logistics, and Kitsap County service.',
    content: '',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1080&q=80',
    category: 'Island Travel',
    date: 'February 17, 2025',
    readTime: '10 min read',
    tags: ['Bainbridge Island', 'Ferry', 'Island Weddings', 'Kitsap County']
  },
  {
    id: 'new-9',
    slug: 'seattle-holiday-events-nye-transportation',
    title: 'Seattle Holiday Events & New Year\'s Eve Transportation: Safe Celebration Guide',
    excerpt: 'Complete guide to Seattle holiday party transportation and New Year\'s Eve limo service. Stay safe, avoid DUIs, and celebrate in style.',
    content: '',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1080&q=80',
    category: 'Holiday Events',
    date: 'February 17, 2025',
    readTime: '8 min read',
    tags: ['New Year\'s Eve', 'Holiday Parties', 'Safety', 'Celebrations']
  },
  {
    id: 'new-10',
    slug: 'mount-rainier-day-trip-transportation-guide',
    title: 'Mount Rainier & Seattle Day Trips: Complete Transportation Guide (2025)',
    excerpt: 'Discover the best Seattle day trips — Mount Rainier, Leavenworth, Snoqualmie Falls, wine country — with professional transportation, timing, and insider tips.',
    content: '',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1080&q=80',
    category: 'Day Trips',
    date: 'February 17, 2025',
    readTime: '11 min read',
    tags: ['Mount Rainier', 'Day Trips', 'Scenic Tours', 'Leavenworth']
  },
  
  // ===== EXISTING BLOG POSTS =====
  {
    id: '1',
    slug: 'ultimate-guide-seattle-airport-limo-service',
    title: 'The Ultimate Guide to Seattle Airport Limo Service: Sea-Tac Travel Made Easy',
    excerpt: 'Discover how professional airport transfer services can transform your Sea-Tac experience with reliability, comfort, and stress-free travel.',
    content: '',
    image: 'https://images.unsplash.com/photo-1728327208432-782ad594ef7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWF0dGxlJTIwYWlycG9ydCUyMHRlcm1pbmFsfGVufDF8fHx8MTc2OTg5MzU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Airport Transfers',
    date: 'January 30, 2026',
    readTime: '8 min read',
    tags: ['Sea-Tac Airport', 'Airport Transfer', 'Travel Tips', 'Seattle']
  },
  {
    id: '2',
    slug: 'seattle-black-car-service-vs-rideshare',
    title: 'Seattle Black Car Service vs Rideshare: Which is Better for Executives?',
    excerpt: 'Compare professional black car service to rideshare apps for business travel. Discover why Seattle executives choose luxury transportation over Uber and Lyft.',
    content: '',
    image: 'https://images.unsplash.com/photo-1758518727984-17b37f2f0562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjBidXNpbmVzc3xlbnwxfHx8fDE3Njk4OTM1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Executive Transport',
    date: 'January 31, 2026',
    readTime: '7 min read',
    tags: ['Black Car Service', 'Executive', 'Corporate', 'Comparison']
  },
  {
    id: '3',
    slug: 'best-seatac-airport-car-service-seattle',
    title: 'Best SeaTac Airport Car Service: 24/7 Luxury Transportation to Seattle',
    excerpt: 'Find the most reliable SeaTac airport car service with flat-rate pricing, flight tracking, and professional chauffeurs available 24/7.',
    content: '',
    image: 'https://images.unsplash.com/photo-1728327208432-782ad594ef7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWF0dGxlJTIwYWlycG9ydCUyMHRlcm1pbmFsfGVufDF8fHx8MTc2OTg5MzU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Airport Transfers',
    date: 'January 29, 2026',
    readTime: '9 min read',
    tags: ['SeaTac Airport', 'Car Service', '24/7 Service', 'Flat Rate']
  },
  {
    id: '4',
    slug: 'hourly-black-car-service-seattle-corporate',
    title: 'Hourly Black Car Service Seattle: Executive Transportation for Multiple Stops',
    excerpt: 'Learn how hourly charter black car service in Seattle saves time and money for executives with multiple meetings and appointments.',
    content: '',
    image: 'https://images.unsplash.com/photo-1758518727984-17b37f2f0562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjBidXNpbmVzc3xlbnwxfHx8fDE3Njk4OTM1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Executive Transport',
    date: 'January 28, 2026',
    readTime: '6 min read',
    tags: ['Hourly Service', 'Corporate', 'Executive', 'Multiple Stops']
  },
  {
    id: '5',
    slug: 'bellevue-airport-car-service-to-seatac',
    title: 'Bellevue Airport Car Service to SeaTac: Eastside Luxury Transportation',
    excerpt: 'Discover the fastest, most reliable Bellevue to SeaTac airport car service with professional chauffeurs and luxury vehicles.',
    content: '',
    image: 'https://images.unsplash.com/photo-1728327208432-782ad594ef7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWF0dGxlJTIwYWlycG9ydCUyMHRlcm1pbmFsfGVufDF8fHx8MTc2OTg5MzU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Airport Transfers',
    date: 'January 27, 2026',
    readTime: '7 min read',
    tags: ['Bellevue', 'Airport Service', 'Eastside', 'SeaTac']
  },
  {
    id: '6',
    slug: 'seattle-cruise-port-transportation-pier-91-66',
    title: 'Seattle Cruise Port Transportation: Pier 91 & Pier 66 Luxury Service',
    excerpt: 'Complete guide to stress-free Seattle cruise terminal transportation for Alaska cruises at Pier 91 (Smith Cove) and Pier 66 (Bell Street).',
    content: '',
    image: 'https://images.unsplash.com/photo-1763341982412-e249c8a988a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwc2VhdHRsZSUyMHBvcnR8ZW58MXx8fHwxNzY5ODkzNjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cruise Transportation',
    date: 'January 26, 2026',
    readTime: '8 min read',
    tags: ['Cruise Port', 'Pier 91', 'Pier 66', 'Alaska Cruise']
  },
  {
    id: '7',
    slug: 'point-to-point-car-service-seattle',
    title: 'Point-to-Point Car Service Seattle: Direct Luxury Transportation',
    excerpt: 'Everything you need to know about point-to-point black car service in Seattle with flat-rate pricing and no hidden fees.',
    content: '',
    image: 'https://images.unsplash.com/photo-1767023025057-9f4033342df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaW1vdXNpbmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njk4OTM1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Car Service',
    date: 'January 25, 2026',
    readTime: '5 min read',
    tags: ['Point-to-Point', 'Flat Rate', 'Direct Service', 'No Hidden Fees']
  },
  {
    id: '8',
    slug: 'sprinter-van-service-seattle-group-transportation',
    title: 'Sprinter Van Service Seattle: Luxury Group Transportation Up to 14 Passengers',
    excerpt: 'Discover Mercedes Sprinter van service in Seattle for corporate groups, weddings, and events. Premium group transportation with professional service.',
    content: '',
    image: 'https://images.unsplash.com/photo-1767023025057-9f4033342df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaW1vdXNpbmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njk4OTM1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Group Transport',
    date: 'January 24, 2026',
    readTime: '7 min read',
    tags: ['Sprinter Van', 'Group Transportation', 'Corporate Events', '14 Passengers']
  },
  {
    id: '9',
    slug: 'wedding-transportation-seattle-complete-guide',
    title: 'Wedding Transportation in Seattle: Making Your Special Day Perfect',
    excerpt: 'Everything you need to know about luxury wedding transportation in Seattle, from timing to vehicle selection.',
    content: '',
    image: 'https://images.unsplash.com/photo-1616137477862-170063810e39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWF0dGxlJTIwd2VkZGluZyUyMGNvdXBsZXxlbnwxfHx8fDE3Njk4OTM1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Wedding Transport',
    date: 'January 23, 2026',
    readTime: '10 min read',
    tags: ['Wedding', 'Special Occasions', 'Seattle Weddings', 'Luxury Transport']
  },
  {
    id: '10',
    slug: 'downtown-seattle-car-service-convention-center',
    title: 'Downtown Seattle Car Service: Convention Center & Hotel Transportation',
    excerpt: 'Professional chauffeur service for downtown Seattle hotels, Washington State Convention Center, and Union Station with on-time guarantee.',
    content: '',
    image: 'https://images.unsplash.com/photo-1758518727984-17b37f2f0562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjBidXNpbmVzc3xlbnwxfHx8fDE3Njk4OTM1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Corporate Transport',
    date: 'January 22, 2026',
    readTime: '6 min read',
    tags: ['Downtown Seattle', 'Convention Center', 'Hotels', 'Professional Service']
  },
  {
    id: '11',
    slug: 'corporate-executive-transportation-seattle',
    title: 'Corporate Executive Transportation: Elevate Your Business Travel in Seattle',
    excerpt: 'Professional chauffeur services that help executives maximize productivity and make powerful first impressions.',
    content: '',
    image: 'https://images.unsplash.com/photo-1758518727984-17b37f2f0562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjBidXNpbmVzc3xlbnwxfHx8fDE3Njk4OTM1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Executive Transport',
    date: 'January 21, 2026',
    readTime: '7 min read',
    tags: ['Corporate', 'Business Travel', 'Executive', 'Productivity']
  },
  {
    id: '12',
    slug: 'game-day-transportation-seattle-sports',
    title: 'Game Day Transportation in Seattle: Your Ultimate Sports Event Guide',
    excerpt: 'Navigate Seahawks, Mariners, Sounders, and Kraken games stress-free with professional limo service.',
    content: '',
    image: 'https://images.unsplash.com/photo-1740760055939-19504a345784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWF0dGxlJTIwc2VhaGF3a3MlMjBzdGFkaXVtfGVufDF8fHx8MTc2OTg5MzU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Game Day',
    date: 'January 20, 2026',
    readTime: '6 min read',
    tags: ['Sports Events', 'Seahawks', 'Mariners', 'Seattle Sports']
  },
  {
    id: '13',
    slug: 'prom-night-limo-service-seattle',
    title: 'Prom Night Limo Service: Safety, Style, and Memories in Seattle',
    excerpt: 'Parents\' guide to choosing safe, reliable prom transportation that creates unforgettable memories.',
    content: '',
    image: 'https://images.unsplash.com/photo-1763959952600-00d09e42957d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9tJTIwbmlnaHQlMjBmb3JtYWx8ZW58MXx8fHwxNzY5ODkzNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Special Occasions',
    date: 'January 19, 2026',
    readTime: '5 min read',
    tags: ['Prom', 'Teen Events', 'Safety', 'Special Occasions']
  },
  {
    id: '14',
    slug: 'luxury-limousine-features-what-to-expect',
    title: 'Inside Our Fleet: Premium Features You\'ll Love in Emerald City Limos Vehicles',
    excerpt: 'Take a detailed look at the luxury amenities and features that make our limousine service exceptional.',
    content: '',
    image: 'https://images.unsplash.com/photo-1767023025057-9f4033342df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaW1vdXNpbmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njk4OTM1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Fleet Features',
    date: 'January 18, 2026',
    readTime: '9 min read',
    tags: ['Luxury', 'Fleet', 'Amenities', 'Premium Service']
  }
];

function FeaturedSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredPosts = blogPosts.slice(0, 4);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? featuredPosts.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === featuredPosts.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative group">
      <div className="relative h-[500px] overflow-hidden rounded-2xl">
        <a href={`/blog/${featuredPosts[currentIndex].slug}`}>
          <div className="relative h-full">
            <ImageWithFallback
              src={featuredPosts[currentIndex].image}
              alt={featuredPosts[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="inline-block bg-[#d4af37] text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {featuredPosts[currentIndex].category}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredPosts[currentIndex].title}</h2>
              <p className="text-gray-200 text-lg mb-4 max-w-3xl">{featuredPosts[currentIndex].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {featuredPosts[currentIndex].date}
                </span>
                <span>•</span>
                <span>{featuredPosts[currentIndex].readTime}</span>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all"
        aria-label="Previous post"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all"
        aria-label="Next post"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-[#d4af37] w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Airport Transfers', 'Wedding Transport', 'Executive Transport', 'Game Day', 'Special Occasions', 'Fleet Features'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Emerald City Limos <span className="text-[#d4af37]">Blog</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your source for luxury transportation insights, Seattle travel tips, and industry expertise
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, tips, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Slider */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
            <div className="text-[#d4af37] font-semibold">Latest Posts</div>
          </div>
          <FeaturedSlider />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-emerald-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#d4af37] text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-emerald-700 font-semibold group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Luxury?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Book your premium limousine service today
          </p>
          <a
            href="/book-now"
            className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-12 py-4 rounded-lg text-lg font-bold transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl"
          >
            BOOK NOW
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

const faqs: FAQ[] = [
  // Booking & Reservations
  {
    id: '1',
    question: 'How far in advance should I book my limousine service?',
    answer: 'For airport transfers and standard services, we recommend booking at least 24-48 hours in advance. For weddings, proms, and special events, book 6-12 months ahead, especially during peak season (June-September). Game day transportation should be booked 1-2 weeks before the event. Last-minute bookings are accepted based on availability.',
    category: 'Booking & Reservations',
    keywords: ['booking', 'advance', 'reservation', 'how far', 'schedule', 'when to book']
  },
  {
    id: '2',
    question: 'Can I book a limo service online or do I need to call?',
    answer: 'You can book online through our booking portal at any time, or call us at (206) 595-9675 during business hours. Online booking provides instant confirmation. For complex itineraries or special requests, we recommend calling to speak with our reservations team.',
    category: 'Booking & Reservations',
    keywords: ['online booking', 'call', 'phone', 'how to book', 'reservation methods']
  },
  {
    id: '3',
    question: 'What is your cancellation policy?',
    answer: 'Standard reservations can be cancelled up to 24 hours before pickup time for a full refund. Wedding and event packages require 72-hour notice. Cancellations within 24 hours are subject to a 50% charge. No-shows are charged the full amount. We recommend travel insurance for major events.',
    category: 'Booking & Reservations',
    keywords: ['cancellation', 'cancel', 'refund', 'policy', 'change reservation']
  },
  {
    id: '4',
    question: 'Do you offer hourly rates or only point-to-point service?',
    answer: 'We offer both! Point-to-point service (like airport transfers) has a flat rate based on pickup and destination. Hourly charters are available with 2-hour minimums, perfect for multiple stops, city tours, or events where you need the vehicle to wait. Hourly rates vary by vehicle type.',
    category: 'Booking & Reservations',
    keywords: ['hourly', 'rates', 'pricing', 'point to point', 'charter', 'cost']
  },
  
  // Pricing & Payment
  {
    id: '5',
    question: 'How much does limo service cost in Seattle?',
    answer: 'Pricing varies by vehicle type, distance, and duration. Sedan airport transfers typically range $80-150, SUVs $120-200, and larger vehicles $150-400+. Hourly charters start at $95/hour for sedans. We provide exact quotes upfront with no hidden fees. Pricing includes fuel, tolls, and standard gratuity recommendations.',
    category: 'Pricing & Payment',
    keywords: ['cost', 'price', 'how much', 'rates', 'pricing', 'expensive']
  },
  {
    id: '6',
    question: 'What forms of payment do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, corporate accounts, and cash. Corporate clients can set up billing accounts with monthly invoicing. Payment is processed securely, and receipts are provided immediately.',
    category: 'Pricing & Payment',
    keywords: ['payment', 'credit card', 'cash', 'how to pay', 'corporate account']
  },
  {
    id: '7',
    question: 'Is gratuity included in the price?',
    answer: 'Gratuity is not automatically included but is greatly appreciated for excellent service. Industry standard is 15-20% of the total fare. You can add gratuity when booking, at the end of service, or it can be added to your credit card receipt. Corporate account clients can have gratuity included in invoicing.',
    category: 'Pricing & Payment',
    keywords: ['tip', 'gratuity', 'included', 'extra cost', 'tipping']
  },
  {
    id: '8',
    question: 'Are there any hidden fees I should know about?',
    answer: 'No hidden fees! Our quotes include all charges except gratuity. The price you see is what you pay. This includes fuel surcharges, tolls, parking fees, and airport fees. Any additional stops or wait time beyond the agreed schedule will be communicated and approved before charges apply.',
    category: 'Pricing & Payment',
    keywords: ['hidden fees', 'extra charges', 'additional costs', 'tolls', 'airport fees']
  },

  // Airport Transportation
  {
    id: '9',
    question: 'How does Sea-Tac airport pickup work?',
    answer: 'Your chauffeur monitors your flight in real-time and adjusts pickup accordingly. Upon landing, collect your luggage and call/text the driver number provided. Your chauffeur meets you at the designated pickup zone (domestic or international) with a name sign. Complimentary wait time: 30 minutes domestic, 45 minutes international.',
    category: 'Airport Transportation',
    keywords: ['Sea-Tac', 'airport', 'pickup', 'how it works', 'baggage claim', 'flight tracking']
  },
  {
    id: '10',
    question: 'What if my flight is delayed or arrives early?',
    answer: 'No problem! We monitor all flights automatically and adjust driver dispatch times accordingly. There\'s no extra charge for flight delays. Your chauffeur will be there when you land, whether that\'s 2 hours late or 30 minutes early. Just proceed to baggage claim as normal.',
    category: 'Airport Transportation',
    keywords: ['flight delay', 'early arrival', 'late flight', 'delayed', 'tracking']
  },
  {
    id: '11',
    question: 'How much time should I allow for airport drop-off?',
    answer: 'For domestic flights, we recommend pickup 2-2.5 hours before departure. For international flights, allow 3 hours. Our experienced drivers know Sea-Tac traffic patterns and will adjust pickup time based on time of day, traffic conditions, and any special circumstances like sporting events or road closures.',
    category: 'Airport Transportation',
    keywords: ['drop off', 'departure', 'how early', 'airport timing', 'Sea-Tac departure']
  },
  {
    id: '12',
    question: 'Do you provide car seats for children for airport transfers?',
    answer: 'Yes! We provide complimentary child safety seats upon request. We offer infant seats (rear-facing, up to 35 lbs), toddler seats (forward-facing, 20-65 lbs), and booster seats (40-100 lbs). Simply indicate the number and types needed when booking. All seats are professionally installed by our chauffeurs.',
    category: 'Airport Transportation',
    keywords: ['car seat', 'child seat', 'baby', 'infant', 'booster', 'family travel']
  },

  // Service Areas & Coverage
  {
    id: '13',
    question: 'What areas do you serve in the Seattle region?',
    answer: 'We serve all of King County (Seattle, Bellevue, Redmond, Renton, Kent, Federal Way, Kirkland), Snohomish County (Everett, Lynnwood, Edmonds, Marysville), Pierce County (Tacoma, Lakewood, Puyallup), and extended areas including Spokane and Wenatchee. Contact us for service to other Washington locations.',
    category: 'Service Areas',
    keywords: ['service area', 'coverage', 'where', 'locations', 'cities', 'Seattle areas']
  },
  {
    id: '14',
    question: 'Do you provide transportation to Spokane or Eastern Washington?',
    answer: 'Yes! We offer long-distance charters to Spokane, Wenatchee, and throughout Eastern Washington. These trips are quoted based on distance, vehicle type, and whether you need one-way or round-trip service. Popular for wine country tours, ski trips, and business travel to Spokane.',
    category: 'Service Areas',
    keywords: ['Spokane', 'Eastern Washington', 'Wenatchee', 'long distance', 'out of town']
  },
  {
    id: '15',
    question: 'Can you pick me up from cruise terminals in Seattle?',
    answer: 'Absolutely! We provide seamless cruise terminal transportation to/from Smith Cove Terminal (Pier 91) and Bell Street Terminal (Pier 66). Service includes luggage assistance and direct routes to Sea-Tac Airport or local hotels. Cruise transfers should be booked at least 1-2 weeks in advance during summer cruise season.',
    category: 'Service Areas',
    keywords: ['cruise', 'terminal', 'port', 'ship', 'Pier 91', 'Bell Street']
  },

  // Vehicles & Fleet
  {
    id: '16',
    question: 'What types of vehicles are available?',
    answer: 'Our fleet includes: Mercedes S-Class sedans (3 passengers), Cadillac Escalade ESV (6 passengers), Cadillac XT6 (3 passengers), Mercedes Sprinter vans (9 and 14 passengers), Party Bus (30 passengers), and Motorcoach (57 passengers). All vehicles feature leather interiors, climate control, and premium amenities.',
    category: 'Vehicles & Fleet',
    keywords: ['vehicles', 'fleet', 'car types', 'options', 'what cars', 'limousines']
  },
  {
    id: '17',
    question: 'How many passengers fit in each vehicle?',
    answer: 'Sedans (Mercedes S-Class, Cadillac XT6): 3 passengers. SUV (Cadillac Escalade): 6 passengers. Executive Vans: 9 or 14 passengers. Party Bus: 30 passengers. Motorcoach: 57 passengers. Passenger counts include comfortable seating with luggage space. For groups, we can coordinate multiple vehicles.',
    category: 'Vehicles & Fleet',
    keywords: ['capacity', 'how many people', 'passengers', 'group size', 'seating']
  },
  {
    id: '18',
    question: 'Are your vehicles wheelchair accessible?',
    answer: 'We can arrange wheelchair-accessible vehicles with advance notice (48+ hours recommended). These specialized vehicles include ramps or lifts and securement systems. Please specify accessibility needs when booking so we can ensure the appropriate vehicle and assistance.',
    category: 'Vehicles & Fleet',
    keywords: ['wheelchair', 'accessible', 'disability', 'ADA', 'handicap', 'special needs']
  },
  {
    id: '19',
    question: 'How often are vehicles cleaned and maintained?',
    answer: 'All vehicles are professionally detailed before every trip and undergo deep cleaning weekly. Mechanical maintenance follows manufacturer schedules with monthly safety inspections. We exceed DOT standards for commercial vehicle safety. Your vehicle will always be immaculate, mechanically sound, and fully insured.',
    category: 'Vehicles & Fleet',
    keywords: ['clean', 'maintenance', 'safety', 'inspection', 'well maintained']
  },

  // Special Events
  {
    id: '20',
    question: 'Do you provide wedding transportation packages?',
    answer: 'Yes! Wedding packages include multiple vehicles for bridal party and guests, red carpet service, champagne for the newlyweds, "Just Married" signage, and flexible scheduling. We coordinate timing with your wedding planner and handle all transportation logistics. Book 6-12 months ahead for peak season weddings.',
    category: 'Special Events',
    keywords: ['wedding', 'bride', 'marriage', 'ceremony', 'reception', 'bridal party']
  },
  {
    id: '21',
    question: 'What about prom transportation for teenagers?',
    answer: 'We specialize in safe, supervised prom transportation. Parents receive driver contact information and GPS tracking. Our chauffeurs enforce strict no-alcohol policies. Popular options: Party Bus for large groups (20-30 students) or Sprinter vans for 9-14 students. Includes pickup, dinner transport, prom arrival, and end-of-night return. Book 2-3 months ahead.',
    category: 'Special Events',
    keywords: ['prom', 'teenagers', 'teen', 'high school', 'formal', 'students']
  },
  {
    id: '22',
    question: 'Can you handle large group transportation for corporate events?',
    answer: 'Absolutely! We coordinate multi-vehicle logistics for conferences, shareholder meetings, client entertainment, and team outings. Services include airport transfers for attendee groups, event shuttles, and executive transportation. Corporate account setup available for simplified billing and priority service.',
    category: 'Special Events',
    keywords: ['corporate', 'business event', 'conference', 'company', 'large group']
  },
  {
    id: '23',
    question: 'Do you offer transportation for Seahawks, Mariners, or other sporting events?',
    answer: 'Game day transportation is hugely popular! We serve Lumen Field (Seahawks/Sounders), T-Mobile Park (Mariners), Climate Pledge Arena (Kraken/Storm), and Husky Stadium. Avoid parking hassles and traffic—we drop you at the venue entrance and pick up after the game. Party buses perfect for tailgating groups. Book 1-2 weeks ahead.',
    category: 'Special Events',
    keywords: ['sports', 'game day', 'Seahawks', 'Mariners', 'Kraken', 'Sounders', 'stadium']
  },

  // Chauffeurs & Service
  {
    id: '24',
    question: 'Are your chauffeurs licensed and insured?',
    answer: 'All chauffeurs hold valid commercial driver\'s licenses, pass comprehensive background checks, complete professional training programs, and undergo regular drug testing. They\'re covered by our commercial liability insurance ($1M+ coverage). We maintain the highest safety and professionalism standards in the industry.',
    category: 'Chauffeurs & Service',
    keywords: ['driver', 'chauffeur', 'licensed', 'insured', 'background check', 'safety']
  },
  {
    id: '25',
    question: 'What if I need to make stops along the way?',
    answer: 'Additional stops can be arranged! For point-to-point service, notify us in advance. Hourly charter service is ideal for multiple destinations. Brief stops (under 10 minutes) typically have no additional charge. Longer stops are billed in 15-minute increments. We\'re flexible and accommodating—just communicate your needs.',
    category: 'Chauffeurs & Service',
    keywords: ['stops', 'multiple destinations', 'wait time', 'detour', 'extra stops']
  },
  {
    id: '26',
    question: 'Can I request a specific driver?',
    answer: 'Yes! If you\'ve had excellent service with a particular chauffeur, request them when booking (subject to their availability). Many of our regular corporate and airport clients have preferred drivers. We\'ll do our best to accommodate requests while maintaining our service standards.',
    category: 'Chauffeurs & Service',
    keywords: ['specific driver', 'request driver', 'same chauffeur', 'favorite driver']
  },
  {
    id: '27',
    question: 'What should I do if my chauffeur hasn\'t arrived?',
    answer: 'First, check your confirmation email/text for the driver\'s direct contact number and call/text them. Traffic or unforeseen delays can occur. If you can\'t reach your driver within 10 minutes of scheduled pickup, call our dispatch line at (206) 595-9675 immediately. We\'ll locate your chauffeur or dispatch a backup vehicle right away.',
    category: 'Chauffeurs & Service',
    keywords: ['late', 'driver not here', 'waiting', 'where is my driver', 'no show']
  },

  // Amenities & Features
  {
    id: '28',
    question: 'Do your vehicles have Wi-Fi?',
    answer: 'Yes! All our executive sedans, SUVs, and vans include complimentary high-speed Wi-Fi. Perfect for business travelers who need to work during transit or families who want entertainment connectivity. Party buses and larger vehicles also feature Wi-Fi for passenger convenience.',
    category: 'Amenities & Features',
    keywords: ['Wi-Fi', 'internet', 'wifi', 'wireless', 'connectivity']
  },
  {
    id: '29',
    question: 'Can I bring alcohol in the vehicle?',
    answer: 'For passengers 21+, alcohol is permitted in most vehicles (excluding services with minors like prom). We provide complimentary champagne for weddings. You\'re welcome to bring your own beverages. Glass containers should be handled carefully. Our chauffeurs enforce responsible consumption and reserve the right to refuse service for unsafe behavior.',
    category: 'Amenities & Features',
    keywords: ['alcohol', 'drinks', 'champagne', 'beverages', 'BYOB']
  },
  {
    id: '30',
    question: 'Is smoking allowed in your vehicles?',
    answer: 'No, all our vehicles are non-smoking to maintain air quality and cleanliness for all passengers. Smoking breaks can be accommodated during stops on longer trips. Violation of our no-smoking policy results in a $250 cleaning fee. We appreciate your cooperation in keeping our fleet pristine.',
    category: 'Amenities & Features',
    keywords: ['smoking', 'cigarettes', 'no smoking', 'tobacco', 'vaping']
  },

  // Logistics & Planning
  {
    id: '31',
    question: 'How early will my driver arrive for pickup?',
    answer: 'Chauffeurs arrive 5-10 minutes before scheduled pickup time and wait at the designated location. For airport drop-offs, they factor in current traffic conditions. You\'ll receive a text notification when your driver arrives. We pride ourselves on punctuality—your chauffeur will be ready when you are.',
    category: 'Logistics & Planning',
    keywords: ['arrival time', 'pickup time', 'when does driver arrive', 'punctual']
  },
  {
    id: '32',
    question: 'What happens during Seattle traffic or accidents?',
    answer: 'Our chauffeurs are Seattle traffic experts who use real-time GPS and traffic apps to avoid congestion. They know alternate routes around I-5, SR-520, and I-405 bottlenecks. For time-sensitive trips (flights, events), we build buffer time into schedules. Communicate any concerns immediately—we adapt routes in real-time.',
    category: 'Logistics & Planning',
    keywords: ['traffic', 'delays', 'accidents', 'I-5', 'congestion', 'late']
  },
  {
    id: '33',
    question: 'Can you accommodate last-minute bookings?',
    answer: 'We try to accommodate same-day and last-minute requests based on vehicle availability. Call (206) 595-9675 for immediate assistance. While we can often help, availability isn\'t guaranteed for last-minute bookings, especially weekends, holidays, and peak times. Advance booking ensures your preferred vehicle and time.',
    category: 'Logistics & Planning',
    keywords: ['last minute', 'same day', 'emergency', 'urgent', 'immediate']
  },
  {
    id: '34',
    question: 'Do you provide 24/7 service?',
    answer: 'Yes! Our dispatch operates 24/7/365, including holidays. Whether you need a 3 AM airport run, late-night event transportation, or emergency service, we\'re available around the clock. Red-eye flights, overnight shifts, and early morning departures—we never close.',
    category: 'Logistics & Planning',
    keywords: ['24/7', 'hours', 'late night', 'early morning', 'overnight', 'always open']
  },

  // Customer Experience
  {
    id: '35',
    question: 'What makes Emerald City Limos different from rideshare apps?',
    answer: 'Professional commercial chauffeurs (not gig drivers), guaranteed vehicle type and condition, predictable flat-rate pricing (no surge), flight monitoring, meet-and-greet service, premium vehicle amenities, child safety seats available, corporate accounts, and dedicated customer service. You\'re not a transaction—you\'re a valued client.',
    category: 'Customer Experience',
    keywords: ['Uber', 'Lyft', 'rideshare', 'difference', 'why choose', 'better than']
  },
  {
    id: '36',
    question: 'Do you offer discounts or loyalty programs?',
    answer: 'Corporate account clients receive volume discounts. We occasionally run seasonal promotions (follow us on social media!). Repeat customers get priority scheduling. For large group bookings or multi-day events, contact us for custom pricing. Wedding packages bundle services for better value than individual bookings.',
    category: 'Customer Experience',
    keywords: ['discount', 'promo', 'loyalty', 'coupon', 'deal', 'special offer']
  },
  {
    id: '37',
    question: 'How do I leave feedback or file a complaint?',
    answer: 'We value your feedback! Email us at info@a1charters.com, call (206) 595-9675, or leave reviews on Google. For exceptional service, please mention your chauffeur by name—they appreciate recognition. For concerns, contact us immediately so we can address issues promptly and make things right.',
    category: 'Customer Experience',
    keywords: ['feedback', 'complaint', 'review', 'customer service', 'problem']
  },
  {
    id: '38',
    question: 'Are you available for out-of-town weddings or events?',
    answer: 'Yes! We travel throughout Washington State for destination weddings, corporate retreats, wine tours, and special events. Popular destinations include Woodinville wine country, San Juan Islands ferry service, Leavenworth, Mount Rainier area, and Eastern Washington. Custom quotes provided based on distance and duration.',
    category: 'Customer Experience',
    keywords: ['destination wedding', 'out of town', 'travel', 'wine tour', 'day trip']
  },

  // Safety & Regulations
  {
    id: '39',
    question: 'What COVID-19 safety measures are in place?',
    answer: 'Vehicles are thoroughly sanitized between trips with hospital-grade disinfectants. High-touch surfaces receive special attention. Chauffeurs maintain health protocols. We provide hand sanitizer in all vehicles. Masks available upon request. Fresh air circulation systems run continuously. Your health and safety are priorities.',
    category: 'Safety & Regulations',
    keywords: ['COVID', 'coronavirus', 'sanitize', 'clean', 'safety', 'health']
  },
  {
    id: '40',
    question: 'Are you properly licensed and insured?',
    answer: 'Emerald City Limos operates under full commercial licensing with the Washington State Department of Transportation. We carry $2M+ commercial liability insurance, comprehensive collision coverage, and worker\'s compensation. All vehicles pass DOT inspections. We exceed industry safety standards and are fully compliant with all regulations.',
    category: 'Safety & Regulations',
    keywords: ['licensed', 'insured', 'legal', 'DOT', 'insurance', 'legitimate']
  }
];

function FAQSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    'All',
    'Booking & Reservations',
    'Pricing & Payment',
    'Airport Transportation',
    'Service Areas',
    'Vehicles & Fleet',
    'Special Events',
    'Chauffeurs & Service',
    'Amenities & Features',
    'Logistics & Planning',
    'Customer Experience',
    'Safety & Regulations'
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-emerald-700">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our luxury limousine service
          </p>
        </div>

        {/* FAQ Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs by keyword (e.g., 'airport pickup', 'pricing', 'car seat')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-emerald-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full text-left p-6 flex items-center justify-between group"
              >
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">❓</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors pr-4">
                        {faq.question}
                      </h3>
                      <span className="inline-block mt-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedId === faq.id && (
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-11 text-gray-700 leading-relaxed border-l-4 border-[#d4af37] pl-6">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🤔</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No FAQs found</h3>
            <p className="text-gray-600 mb-6">
              Try different keywords or browse all categories
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-emerald-700 font-semibold hover:text-emerald-800"
            >
              Clear search and show all FAQs
            </button>
          </div>
        )}

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-10 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our team is here to help! Contact us for personalized assistance with your transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12065959675"
              className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center"
            >
              Call (206) 595-9675
            </a>
            <a
              href="/book-now"
              className="bg-white hover:bg-gray-100 text-emerald-900 px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center"
            >
              Book Online Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}