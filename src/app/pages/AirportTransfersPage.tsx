import { Plane, Check, Clock, Users, Shield, Star, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const airportTransferBg = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop&q=80";

export function AirportTransfersPage() {
  const airports = [
    {
      name: 'Seattle-Tacoma International Airport (SEA)',
      code: 'SEA',
      description: 'Our most popular destination. We provide reliable transportation to and from Sea-Tac Airport 24/7.',
    },
    {
      name: 'Boeing Field / King County International Airport',
      code: 'BFI',
      description: 'Private and charter flight transportation to Boeing Field with premium service.',
    },
    {
      name: 'Paine Field / Snohomish County Airport',
      code: 'PAE',
      description: 'Convenient transportation to Paine Field in Everett for Alaska Airlines flights.',
    },
  ];

  const features = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Flight Tracking',
      description: 'We monitor your flight in real-time to adjust for delays or early arrivals.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Service',
      description: 'Available round the clock for early morning or late-night flights.',
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: 'Meet & Greet',
      description: 'Professional chauffeur waiting at baggage claim with a name sign.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Fully Insured',
      description: 'All vehicles and drivers are fully licensed and insured.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Child Seats',
      description: 'Complimentary car seats and boosters pre-installed for safe family travel.',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Refreshment Setup',
      description: 'Pre-order coffee, drinks, snacks, or essentials ready in your vehicle.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/80 z-10"></div>
        <img
          src={airportTransferBg}
          alt="Airport Transfer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            <span className="text-[#d4af37]">Airport Transfers</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg">
            Stress-free transportation to and from all major airports
          </p>
          <Link
            to="/book-now"
            className="bg-white hover:bg-gray-100 text-emerald-900 px-8 py-4 rounded-lg font-semibold transition-all inline-block shadow-xl"
          >
            BOOK NOW
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Airport Service?</h2>
            <p className="text-xl text-gray-600">Premium features included with every ride</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Airports We Serve */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Airports We Serve</h2>
            <p className="text-xl text-gray-600 mb-6">Professional service to all major regional airports</p>
            <Link 
              to="/locations" 
              className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold text-lg transition-colors"
            >
              Learn More <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {airports.map((airport, index) => (
              <Link
                key={index}
                to={`/location/${airport.code === 'SEA' ? 'sea-tac-airport' : airport.code === 'BFI' ? 'boeing-field-airport' : 'paine-field-airport'}`}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-2 border-emerald-200 hover:border-emerald-500 hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col">
                  <div className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-800 transition-colors">
                    {airport.code}
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-emerald-700 transition-colors leading-tight">
                    {airport.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{airport.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple and seamless airport transportation</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-700 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Book</h3>
              <p className="text-gray-600 text-sm">Book your ride</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:block">
              <ArrowRight className="w-8 h-8 text-[#d4af37] mx-4" />
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-700 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Confirm</h3>
              <p className="text-gray-600 text-sm">Get booking confirmation via text & email</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:block">
              <ArrowRight className="w-8 h-8 text-[#d4af37] mx-4" />
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-700 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Track</h3>
              <p className="text-gray-600 text-sm">We monitor your flight for any changes</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:block">
              <ArrowRight className="w-8 h-8 text-[#d4af37] mx-4" />
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-700 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Meet</h3>
              <p className="text-gray-600 text-sm">Chauffeur greets you at baggage claim (curbside option available)</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:block">
              <ArrowRight className="w-8 h-8 text-[#d4af37] mx-4" />
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-700 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                5
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Relax</h3>
              <p className="text-gray-600 text-sm">Enjoy a comfortable ride to your destination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Airport Transfer Service Areas</h2>
            <p className="text-xl text-gray-200">We serve the entire Greater Seattle area and beyond</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <Link 
              to="/location/seattle"
              className="bg-emerald-800/50 hover:bg-emerald-700 rounded-lg p-4 transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              Seattle
            </Link>
            <Link 
              to="/location/bellevue"
              className="bg-emerald-800/50 hover:bg-emerald-700 rounded-lg p-4 transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              Bellevue
            </Link>
            <Link 
              to="/location/tacoma"
              className="bg-emerald-800/50 hover:bg-emerald-700 rounded-lg p-4 transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              Tacoma
            </Link>
            <Link 
              to="/location/everett"
              className="bg-emerald-800/50 hover:bg-emerald-700 rounded-lg p-4 transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              Everett
            </Link>
            <Link 
              to="/location/redmond"
              className="bg-emerald-800/50 hover:bg-emerald-700 rounded-lg p-4 transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              Redmond
            </Link>
            <Link 
              to="/location/kirkland"
              className="bg-emerald-800/50 hover:bg-emerald-700 rounded-lg p-4 transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              Kirkland
            </Link>
            <Link 
              to="/location/renton"
              className="bg-emerald-800/50 hover:bg-emerald-700 rounded-lg p-4 transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              Renton
            </Link>
            <Link 
              to="/locations"
              className="bg-[#d4af37] hover:bg-[#b8941f] text-black rounded-lg p-4 transition-all hover:shadow-lg hover:scale-105 cursor-pointer font-semibold"
            >
              All King County
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Airport Transportation?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your airport transfer today and travel stress-free
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              to="/book-now"
              className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              BOOK NOW
            </Link>
            <a
              href="https://wa.me/12065959675"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="tel:+12065959675"
              className="inline-flex items-center justify-center bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold transition-all"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
            <a
              href="sms:+12065959675"
              className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Text Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}