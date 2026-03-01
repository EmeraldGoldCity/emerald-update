import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Shield, Users } from 'lucide-react';
import { SEOHead, LocalBusinessSchema } from '@/app/components/SEOHead';

export function HomePage() {
  const services = [
    {
      title: 'Airport Transfers',
      description: 'Reliable and punctual airport transportation to Sea-Tac and beyond.',
      icon: '✈️',
      link: '/airport-transfers'
    },
    {
      title: 'Hourly Charters',
      description: 'Flexible hourly services for shopping, tours, or business meetings.',
      icon: '⏰',
      link: '/service/hourly-charters'
    },
    {
      title: 'Wedding',
      description: 'Make your special day perfect with our elegant wedding limousines.',
      icon: '💍',
      link: '/service/wedding-transportation'
    },
    {
      title: 'Game Day',
      description: 'Arrive in style for Seahawks, Mariners, Sounders, and Kraken games.',
      icon: '🏈',
      link: '/service/game-day-transport'
    },
    {
      title: 'Executive',
      description: 'Professional chauffeur service for executives and business travelers.',
      icon: '💼',
      link: '/service/executive-transportation'
    },
    {
      title: 'Cruise',
      description: 'Seamless transfers to and from Seattle cruise terminals.',
      icon: '🚢',
      link: '/service/cruise-transportation'
    },
    {
      title: 'Infant Car Seats',
      description: 'Pre-installed car seats and booster seats for safe family travel.',
      icon: '👶',
      link: '/service/infant-car-seats'
    },
    {
      title: 'Special Occasions',
      description: 'Celebrate birthdays, anniversaries, and all life\'s special moments.',
      icon: '⭐',
      link: '/service/special-occasions'
    },
  ];

  const features = [
    { icon: <Star className="w-8 h-8" />, title: '5-Star Service', description: 'Highest rated limo service in Seattle' },
    { icon: <Clock className="w-8 h-8" />, title: 'Always On Time', description: 'Punctuality guaranteed' },
    { icon: <Shield className="w-8 h-8" />, title: 'Fully Insured', description: 'Your safety is our priority' },
    { icon: <Users className="w-8 h-8" />, title: 'Professional Chauffeurs', description: 'Experienced and courteous drivers' },
  ];

  return (
    <>
      <SEOHead
        title="Emerald City Limos - Seattle's Premier Limousine Service"
        description="Professional luxury transportation in Seattle since 2010. Airport transfers, corporate travel, weddings, special events. 24/7 service. Book your limo now!"
        canonical="/"
        keywords="seattle limo service, seatac airport transportation, luxury car service seattle, corporate transportation, wedding limo seattle"
        schema={LocalBusinessSchema}
      />
      <div className="min-h-screen">
        {/* Hero Section - Mobile Performance Optimized */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          {/* Optimized Background Image - Purple SUV in modern building */}
          {/* Optimized Background Image - New Hero Image */}
<div className="absolute inset-0">
  <picture>
    {/* WebP - High Quality */}
    <source
      type="image/webp"
      srcSet="
        https://images.unsplash.com/photo-1768024175224-db216683d310?w=480&h=320&fit=crop&q=70&fm=webp 480w,
        https://images.unsplash.com/photo-1768024175224-db216683d310?w=768&h=512&fit=crop&q=75&fm=webp 768w,
        https://images.unsplash.com/photo-1768024175224-db216683d310?w=1280&h=720&fit=crop&q=80&fm=webp 1280w,
        https://images.unsplash.com/photo-1768024175224-db216683d310?w=1920&h=1080&fit=crop&q=85&fm=webp 1920w
      "
      sizes="100vw"
    />

    {/* JPEG Fallback */}
    <img
      src="https://images.unsplash.com/photo-1768024175224-db216683d310?w=1920&h=1080&fit=crop&q=80&auto=format"
      alt="Luxury limousine service vehicle - Emerald City Limos Seattle"
      className="absolute inset-0 w-full h-full object-cover object-center"
      width="1920"
      height="1080"
      loading="eager"
      fetchpriority="high"
      decoding="sync"
      style={{
        objectPosition: 'center center',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
    />
  </picture>
</div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/80 z-10"></div>
          
          {/* Optional: Video Link Overlay (opens YouTube in new tab instead of embedding) */}
          <a 
            href="https://www.youtube.com/watch?v=kcUFqF7MUWc"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-8 right-8 z-30 group"
            aria-label="Watch Our Video"
          >
            <div className="flex items-center gap-2 bg-black/60 hover:bg-black/80 text-white px-4 py-2 rounded-full" style={{
              transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span className="text-sm font-semibold">Watch Video</span>
            </div>
          </a>

          <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
              <span className="text-[#d4af37]">Emerald City Limos</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg">
              Seattle's Premier Limousine Service Since 2010
            </p>
            <div className="flex justify-center">
              <Link
                to="/book-now"
                className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-12 py-5 rounded-lg text-xl font-bold transition-all shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center justify-center"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  About <span className="text-emerald-700">Emerald City Limos</span>
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Since 2010, we've been providing the Greater Seattle area with unparalleled luxury transportation services. Our fleet of premium vehicles and professional chauffeurs ensure that every journey is comfortable, safe, and memorable.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you're heading to Sea-Tac Airport, celebrating a wedding, attending a sporting event, cruising from Seattle's port, or need executive transportation, we deliver excellence every time.
                </p>
                <Link
                  to="/locations"
                  className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800"
                  style={{
                    transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  View Service Areas <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <picture>
                  {/* WebP Format */}
                  <source
                    type="image/webp"
                    srcSet="https://images.unsplash.com/photo-1631730666263-37c41034d5ea?w=400&h=300&fit=crop&q=70&fm=webp 400w,
                            https://images.unsplash.com/photo-1631730666263-37c41034d5ea?w=600&h=450&fit=crop&q=75&fm=webp 600w,
                            https://images.unsplash.com/photo-1631730666263-37c41034d5ea?w=800&h=600&fit=crop&q=80&fm=webp 800w"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* JPEG Fallback */}
                  <img
                    src="https://images.unsplash.com/photo-1631730666263-37c41034d5ea?w=600&h=450&fit=crop&q=75&auto=format"
                    alt="Professional Chauffeur with Luxury Black SUV - Emerald City Limos Premium Airport Transportation"
                    className="w-full h-full object-cover"
                    width="600"
                    height="450"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">Luxury transportation for every occasion</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 hover:shadow-xl group flex flex-col"
                  style={{
                    transition: 'border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Icon Container - Fixed Position */}
                  <div className="flex justify-center mb-4">
                    <div className="text-6xl">{service.icon}</div>
                  </div>
                  
                  {/* Content Container - Structured Layout */}
                  <div className="flex flex-col flex-1">
                    {/* Title - Fixed Height */}
                    <h3 
                      className="text-center text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 leading-snug min-h-[3.5rem] flex items-center justify-center"
                      style={{
                        transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      {service.title}
                    </h3>
                    
                    {/* Description - Fixed Min Height */}
                    <p className="text-center text-base text-gray-600 leading-relaxed mb-6 min-h-[4.5rem]">
                      {service.description}
                    </p>
                    
                    {/* Button - Always at Bottom */}
                    <div className="mt-auto flex justify-center">
                      <span 
                        className="inline-flex items-center text-emerald-700 font-semibold text-base px-6 py-2 border-2 border-emerald-700 rounded-lg group-hover:bg-emerald-700 group-hover:text-white"
                        style={{
                          transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      >
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Luxury?</h2>
            <p className="text-xl mb-8 text-white">
              Book your premium limousine service today and travel in style
            </p>
            <div className="flex justify-center">
              <Link
                to="/book-now"
                className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
