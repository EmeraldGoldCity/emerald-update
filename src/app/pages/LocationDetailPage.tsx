import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowLeft, CheckCircle, DollarSign, Clock, Star } from 'lucide-react';
import { allLocations } from '@/app/data/locations';
import { ENHANCED_LOCATIONS, getLocationBySlug, calculatePricing } from '@/app/data/enhanced-locations';
import { SEOHead } from '@/app/components/SEOHead';

export function LocationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = allLocations.find(loc => loc.slug === slug);
  const enhancedLocation = getLocationBySlug(slug || '');

  if (!location && !enhancedLocation) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Location Not Found</h1>
          <Link to="/locations" className="text-emerald-700 hover:text-emerald-800 font-semibold">
            ← Back to Locations
          </Link>
        </div>
      </div>
    );
  }

  // Use enhanced location data if available, otherwise fall back to basic location
  const displayLocation = enhancedLocation || location!;
  const pricing = enhancedLocation ? calculatePricing(enhancedLocation.distance) : null;

  const services = [
    'Airport Transfers',
    'Hourly Charters',
    'Wedding Transportation',
    'Corporate Events',
    'Special Occasions',
    'Game Day Transport',
    'Wine Tours',
    'Sightseeing',
  ];

  return (
    <>
      <SEOHead
        title={`${displayLocation.name} Limo Service - Luxury Car Service & Airport Transportation`}
        description={enhancedLocation?.metaDescription || displayLocation.description}
        keywords={enhancedLocation?.keywords.join(', ') || `${displayLocation.name.toLowerCase()} limo service, ${displayLocation.name.toLowerCase()} car service, ${displayLocation.name.toLowerCase()} airport transportation`}
        canonical={`https://emeraldcitylimos.com/location/${slug}`}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/locations" className="inline-flex items-center text-gray-200 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to All Locations
            </Link>
            
            {/* Clean Title Section */}
            <div className="mb-6">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-400 flex-shrink-0 mt-1" aria-hidden="true" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {displayLocation.name}
                </h1>
              </div>
              
              {displayLocation.county && (
                <p className="text-base sm:text-lg md:text-xl text-gray-200">{displayLocation.county}</p>
              )}
            </div>
            
            {/* Description - Full Width Below Title */}
            <div className="max-w-3xl">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                {displayLocation.description}
              </p>
            </div>
            
            {/* Quick Stats */}
            {enhancedLocation && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-[#d4af37]">{enhancedLocation.distance}</div>
                  <div className="text-sm text-gray-200 mt-1">Miles from Seattle</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-[#d4af37]">24/7</div>
                  <div className="text-sm text-gray-200 mt-1">Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-[#d4af37]">{enhancedLocation.zipCodes.length}</div>
                  <div className="text-sm text-gray-200 mt-1">ZIP Codes Covered</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-[#d4af37]">⭐ 4.9</div>
                  <div className="text-sm text-gray-200 mt-1">Customer Rating</div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Pricing Section */}
        {enhancedLocation && pricing && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {displayLocation.name} Limo Service Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-emerald-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Executive Sedan</h3>
                    <Star className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div className="text-4xl font-bold text-emerald-700 mb-2">
                    ${pricing.sedan}
                  </div>
                  <p className="text-gray-600 mb-4">To/From SeaTac Airport</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>1-3 passengers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>3 large bags + carry-ons</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Mercedes S-Class or similar</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#d4af37]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Luxury SUV</h3>
                    <div className="bg-[#d4af37] text-black px-3 py-1 rounded-full text-xs font-bold">
                      POPULAR
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-emerald-700 mb-2">
                    ${pricing.suv}
                  </div>
                  <p className="text-gray-600 mb-4">To/From SeaTac Airport</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>4-6 passengers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>6 large bags + carry-ons</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cadillac Escalade ESV</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">
                  <strong>Hourly Service:</strong> Starting at $95/hour (sedan) | $125/hour (SUV)
                </p>
                <Link
                  to="/book-now"
                  className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  Get Instant Quote
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Service Area Details */}
        {enhancedLocation && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    About {displayLocation.name} Transportation Service
                  </h2>
                  
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p>
                      Emerald City Limos provides premium luxury limousine service throughout {displayLocation.name} and 
                      surrounding areas in {enhancedLocation.county}. Our professional chauffeurs know every neighborhood 
                      and can navigate efficiently to your destination.
                    </p>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      Neighborhoods We Serve in {displayLocation.name}
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {enhancedLocation.neighborhoods.map((neighborhood, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-700 rounded-full"></div>
                          <span>{neighborhood}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      Popular Destinations & Landmarks
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {enhancedLocation.landmarks.map((landmark, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                          <span>{landmark}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      ZIP Codes Covered
                    </h3>
                    <p className="text-gray-700 mb-6">
                      We provide comprehensive limo service throughout all {displayLocation.name} ZIP codes: {enhancedLocation.zipCodes.join(', ')}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-emerald-50 to-yellow-50 border-2 border-emerald-200 rounded-xl p-8 sticky top-24">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Services Available</h3>
                    <div className="space-y-3">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-emerald-700 rounded-full"></div>
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-emerald-200">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Book Your Ride</h4>
                      <div className="space-y-3">
                        <a
                          href="tel:+12065959675"
                          className="flex items-center space-x-3 text-gray-700 hover:text-emerald-700 transition-colors"
                        >
                          <Phone className="w-5 h-5" />
                          <span>(206) 595-9675</span>
                        </a>
                        <a
                          href="mailto:client@emeraldcitylimos.com"
                          className="flex items-center space-x-3 text-gray-700 hover:text-emerald-700 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                          <span>client@emeraldcitylimos.com</span>
                        </a>
                      </div>
                    </div>

                    <Link
                      to="/book-now"
                      className="mt-6 block w-full text-center bg-[#d4af37] hover:bg-[#b8941f] text-black px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                      Book Online Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Popular Destinations from this Location */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Popular Destinations from {displayLocation.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow">
                <p className="font-semibold text-gray-900">Sea-Tac Airport</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow">
                <p className="font-semibold text-gray-900">Downtown Seattle</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow">
                <p className="font-semibold text-gray-900">Bellevue</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow">
                <p className="font-semibold text-gray-900">Convention Center</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">Ready to Book in {displayLocation.name}?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Contact us today to reserve your luxury limousine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-now"
                className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold transition-all"
              >
                BOOK NOW
              </Link>
              <Link
                to="/services"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-900 text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}