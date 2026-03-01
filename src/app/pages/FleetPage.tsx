import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// 6 Seater SUV images
const imgEscalade1 = "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=533&fit=crop&q=75&fm=webp";
const imgEscalade2 = "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=533&fit=crop&q=75&fm=webp";
const imgEscalade3 = "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=533&fit=crop&q=75&fm=webp";


// Premium Sedan images
const imgMercedesSClass1 = "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=533&fit=crop&q=75&fm=webp";
const imgMercedesSClass2 = "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=533&fit=crop&q=75&fm=webp";
// Mid-Size SUV images
const imgCadillacXT6_1 = "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=533&fit=crop&q=75&fm=webp";
const imgCadillacXT6_2 = "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=533&fit=crop&q=75&fm=webp";
const imgCadillacXT6_3 = "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=533&fit=crop&q=75&fm=webp";

// Mercedes Sprinter images
const imgSprinterExterior = "https://images.unsplash.com/photo-1538391912490-304338a7f94c?w=800&h=533&fit=crop&q=75&fm=webp";
const imgSprinter14SeaterInterior = "https://images.unsplash.com/photo-1538391912490-304338a7f94c?w=800&h=533&fit=crop&q=75&fm=webp";
const imgSprinterInterior2 = "https://images.unsplash.com/photo-1538391912490-304338a7f94c?w=800&h=533&fit=crop&q=75&fm=webp";



// Party Bus images
const imgPartyBusInterior = "https://images.unsplash.com/photo-1562822641-8b8f2b8c5e33?w=800&h=533&fit=crop&q=75&fm=webp"
const imgInfantSeat = "https://images.pexels.com/photos/193997/pexels-photo-193997.jpeg";
const imgToddlerSeat = "https://images.pexels.com/photos/193997/pexels-photo-193997.jpeg";
const imgBoosterSeat = "https://images.pexels.com/photos/193997/pexels-photo-193997.jpeg";



function VehicleCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative group">
      <div className="flex items-center justify-center h-48 mb-4 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Vehicle view ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain transition-opacity duration-300"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="flex justify-center gap-2 mt-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#d4af37] w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function FleetPage() {
  const vehicles = [
    {
      name: '6 Seater SUV',
      category: 'Premium SUV',
      images: [imgEscalade1, imgEscalade2, imgEscalade3],
      passengers: '6',
    },
    {
      name: 'Mercedes S-Class',
      category: 'Premium Sedan',
      images: [imgMercedesSClass1, imgMercedesSClass2],
      passengers: '3',
    },
    {
      name: 'Cadillac XT6',
      category: 'Mid-Size SUV',
      images: [imgCadillacXT6_1, imgCadillacXT6_2, imgCadillacXT6_3],
      passengers: '3',
    },
    {
      name: 'Mercedes Benz Sprinter',
      category: 'Mercedes Benz 14 Seater Sprinter',
      images: [imgSprinterExterior, imgSprinter14SeaterInterior, imgSprinterInterior2],
      passengers: '14',
    },
    {
      name: 'Mercedes Benz Sprinter',
      category: 'Mercedes Benz 9 Seater Executive Van',
      images: [imgSprinterExterior, imgSprinterInterior2],
      passengers: '9',
    },
    {
      name: 'Party Bus',
      category: 'Party Bus',
      images: [imgPartyBusInterior],
      passengers: '30',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-[#d4af37]">Fleet</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Premium luxury vehicles meticulously maintained to ensure your comfort, safety, and satisfaction
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-emerald-500 hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-white p-6 text-center">
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                    {vehicle.category}
                  </p>
                  <VehicleCarousel images={vehicle.images} />
                  <div className="h-px bg-gray-200 w-24 mx-auto my-6"></div>
                  <h3 className="text-lg uppercase text-gray-900 mb-6 font-bold">
                    {vehicle.name}
                  </h3>
                  <div className="mb-6 text-gray-800">
                    <p>
                      <span className="text-base">Passengers: </span>
                      <span className="text-xl font-medium">{vehicle.passengers}</span>
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 border-t-2 border-gray-200 py-5 text-center">
                  <Link
                    to="/book-now"
                    className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-3 rounded-lg text-sm uppercase tracking-widest font-bold transition-all hover:shadow-lg"
                  >
                    Reserve Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Child Safety Seats Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Traveling with <span className="text-emerald-700">Little Ones?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
              We've got your family covered with premium child safety seats
            </p>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Infant Seat */}
            <Link to="/book-now" className="group">
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center justify-center h-64 mb-6 overflow-hidden">
                  <img
                    src={imgInfantSeat}
                    alt="Infant Car Seat"
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <div className="inline-block bg-emerald-700 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    REAR-FACING
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Infant Seat
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For newborns and babies
                  </p>
                  <div className="border-t border-[#d4af37] w-16 mx-auto mb-4"></div>
                  <p className="text-sm text-gray-500">
                    4-35 lbs • Birth to 12 months
                  </p>
                </div>
              </div>
            </Link>

            {/* Toddler/Convertible Seat */}
            <Link to="/book-now" className="group">
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center justify-center h-64 mb-6 overflow-hidden">
                  <img
                    src={imgToddlerSeat}
                    alt="Toddler Car Seat"
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <div className="inline-block bg-[#d4af37] text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    FRONT-FACING
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Toddler Seat
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For growing toddlers
                  </p>
                  <div className="border-t border-[#d4af37] w-16 mx-auto mb-4"></div>
                  <p className="text-sm text-gray-500">
                    20-65 lbs • 1-4 years old
                  </p>
                </div>
              </div>
            </Link>

            {/* Booster Seat */}
            <Link to="/book-now" className="group">
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center justify-center h-64 mb-6 overflow-hidden">
                  <img
                    src={imgBoosterSeat}
                    alt="Booster Car Seat"
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <div className="inline-block bg-emerald-700 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    BOOSTER
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Booster Seat
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For older children
                  </p>
                  <div className="border-t border-[#d4af37] w-16 mx-auto mb-4"></div>
                  <p className="text-sm text-gray-500">
                    40-100 lbs • 4-12 years
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-4">
              🎯 Request Your Child Seat at Booking
            </h3>
            <p className="text-lg text-emerald-100 mb-6 max-w-2xl mx-auto">
              All child safety seats are complimentary and professionally installed by our trained chauffeurs. 
              Simply let us know your needs when you book, and we'll have everything ready for your family's safe journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="text-[#d4af37]">✓</span>
                <span>Safety Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="text-[#d4af37]">✓</span>
                <span>Professionally Installed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="text-[#d4af37]">✓</span>
                <span>Complimentary Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Vehicles Include</h2>
            <p className="text-xl text-gray-600">Premium amenities in every ride</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Immaculate Condition</h3>
              <p className="text-gray-700">Professionally detailed before every trip</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-700">Commercial insurance for your peace of mind</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Regular Maintenance</h3>
              <p className="text-gray-700">Strict maintenance schedule for reliability</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👶</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Child Safety Available</h3>
              <p className="text-gray-700">Car seats & booster seats for kids upon request</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Reserve Your Vehicle?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us today to book the perfect vehicle for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-now"
              className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold transition-all"
            >
              BOOK NOW
            </Link>
            <a
              href="tel:+12065959675"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-900 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Call (206) 595-9675
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
