import React from 'react';
import { MapPin, Shield } from 'lucide-react';

import { counties } from '@/app/data/locations';
const seattleBackground = "/images/seattle-landmark.jpg";

export function LocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={seattleBackground}
            alt="Seattle Background"
            className="w-full h-full object-cover object-center opacity-30"
            style={{ objectPosition: 'center' }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#d4af37]">Service</span> Locations
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We proudly serve the Greater Seattle area, including King, Snohomish, and Pierce counties, plus extended service to Eastern Washington.
          </p>
        </div>
      </section>

      {/* Counties Section */}
      <section className="relative py-20">
        {/* Background with lower opacity */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={seattleBackground}
            alt="Seattle Background"
            className="w-full h-full object-cover object-center opacity-5"
            style={{ objectPosition: 'center', minHeight: '100%', minWidth: '100%' }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{/* King County */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{counties.king.name}</h2>
              <p className="text-xl text-gray-600">Seattle and surrounding communities</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {counties.king.cities.map((city) => (
                <a
                  key={city.slug}
                  href={`/location/${city.slug}`}
                  className="group bg-white/95 backdrop-blur-sm border-2 border-emerald-200 rounded-lg p-7 hover:border-emerald-500 hover:shadow-xl transition-all"
                >
                  {/* Header Row: Icon + Name */}
                  <div className="flex items-start gap-3 mb-5">
                    <MapPin className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {city.name}
                    </h3>
                  </div>
                  
                  {/* Description Below with generous spacing */}
                  <p className="text-gray-600 text-sm leading-relaxed pl-9">
                    {city.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Snohomish County */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{counties.snohomish.name}</h2>
              <p className="text-xl text-gray-600">North Sound communities</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {counties.snohomish.cities.map((city) => (
                <a
                  key={city.slug}
                  href={`/location/${city.slug}`}
                  className="group bg-white/95 backdrop-blur-sm border-2 border-emerald-200 rounded-lg p-7 hover:border-emerald-500 hover:shadow-xl transition-all"
                >
                  {/* Header Row: Icon + Name */}
                  <div className="flex items-start gap-3 mb-5">
                    <MapPin className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {city.name}
                    </h3>
                  </div>
                  
                  {/* Description Below with generous spacing */}
                  <p className="text-gray-600 text-sm leading-relaxed pl-9">
                    {city.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Pierce County */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{counties.pierce.name}</h2>
              <p className="text-xl text-gray-600">South Sound region</p>
              {counties.pierce.description && (
                <div className="mt-6 max-w-4xl mx-auto bg-gradient-to-r from-emerald-50 to-yellow-50 border-2 border-[#d4af37] rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Shield className="w-8 h-8 text-emerald-700" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Military Transportation Services</h3>
                      <p className="text-gray-700">{counties.pierce.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {counties.pierce.cities.map((city) => (
                <a
                  key={city.slug}
                  href={`/location/${city.slug}`}
                  className="group bg-white/95 backdrop-blur-sm border-2 border-emerald-200 rounded-lg p-7 hover:border-emerald-500 hover:shadow-xl transition-all"
                >
                  {/* Header Row: Icon + Name */}
                  <div className="flex items-start gap-3 mb-5">
                    <MapPin className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {city.name}
                    </h3>
                  </div>
                  
                  {/* Description Below with generous spacing */}
                  <p className="text-gray-600 text-sm leading-relaxed pl-9">
                    {city.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Extended Service Areas */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{counties.other.name}</h2>
              <p className="text-xl text-gray-600">Eastern Washington destinations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {counties.other.cities.map((city) => (
                <a
                  key={city.slug}
                  href={`/location/${city.slug}`}
                  className="group bg-white/95 backdrop-blur-sm border-2 border-yellow-300 rounded-lg p-7 hover:border-yellow-500 hover:shadow-xl transition-all"
                >
                  {/* Header Row: Icon + Name */}
                  <div className="flex items-start gap-3 mb-5">
                    <MapPin className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-700 transition-colors leading-snug">
                      {city.name}
                    </h3>
                  </div>
                  
                  {/* Description Below with generous spacing */}
                  <p className="text-gray-600 text-sm leading-relaxed pl-9">
                    {city.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Don't See Your Location?</h2>
          <p className="text-xl mb-8 text-gray-200">
            We may still be able to serve you! Contact us to inquire about transportation to other areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
             href="/book-now"
              className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold transition-all"
            >
              BOOK NOW
            </a>
            <a
              href="mailto:client@a1charterspnw.com"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-900 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}