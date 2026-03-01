import { Plane, Clock, Heart, Trophy, Star, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ServicesPage() {
  const services = [
    {
      icon: <Plane className="w-12 h-12" />,
      title: 'Airport Transfers',
      description: 'Professional transportation to and from Sea-Tac Airport, Boeing Field, and Paine Field. We monitor flights and ensure timely pickups and drop-offs.',
      features: ['Flight tracking', 'Meet & greet service', 'Luggage assistance', 'All major airports'],
      link: '/airport-transfers'
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Hourly Charters',
      description: 'Flexible hourly services perfect for business meetings, shopping trips, wine tours, or sightseeing around the Seattle area.',
      features: ['Minimum 3-hour booking', 'Professional chauffeur', 'Premium vehicles', 'Customizable itinerary'],
      link: '/service/hourly-charters'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Wedding',
      description: 'Make your special day perfect with our elegant wedding limousines. We provide transportation for the wedding party, guests, and the happy couple.',
      features: ['Decorated vehicles', 'Red carpet service', 'Champagne service', 'Flexible packages'],
      link: '/service/wedding-transportation'
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: 'Game Day',
      description: 'Arrive in style at Lumen Field, T-Mobile Park, Climate Pledge Arena, or Husky Stadium. Enjoy the game without worrying about traffic or parking.',
      features: ['Seahawks games', 'Mariners games', 'Sounders matches', 'Kraken hockey'],
      link: '/service/game-day-transport'
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: 'Special Occasions',
      description: 'Celebrate birthdays, anniversaries, proms, quinceañeras, and any special event with our luxury limousine service.',
      features: ['Birthday celebrations', 'Anniversaries', 'Prom nights', 'Corporate events'],
      link: '/service/special-occasions'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Executive',
      description: 'Premium chauffeur service for executives and VIPs. Professional, discreet, and punctual transportation for business leaders.',
      features: ['Corporate accounts', 'Executive sedans', 'Airport pickups', 'Business meetings'],
      link: '/service/executive-transportation'
    },
  ];

  const cruiseService = {
    icon: '🚢',
    title: 'Cruise',
    description: 'Seamless transportation to and from Seattle cruise terminals at Pier 91 and Bell Street Pier. Start your voyage stress-free.',
    features: ['All cruise terminals', 'Luggage handling', 'Pre-cruise transfers', 'Post-cruise pickups'],
    link: '/service/cruise-transportation'
  };

  const infantSeatService = {
    icon: '👶',
    title: 'Infant Car Seats/Booster Seats',
    description: 'Travel safely with your little ones. Our vehicles come equipped with professionally installed infant car seats and booster seats appropriate for all ages.',
    features: ['Pre-installed upon request', 'Multiple age groups', 'Safety certified', 'Complimentary service'],
    link: '/service/infant-car-seats'
  };

  const personalChauffeurService = {
    icon: '🚗',
    title: 'Personal Chauffeur',
    description: 'Dedicated chauffeur service tailored for clients seeking personalized transportation for their families and business needs. Your own professional driver, on your schedule.',
    features: ['Dedicated driver', 'Flexible scheduling', 'Family & business use', 'Priority service'],
    link: '/service/personal-chauffeur'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/80 z-10"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1507309270028-9121e9937409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbGltb3VzaW5lfGVufDF8fHx8MTc2OTA0Njg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Wedding Limousine"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-[#d4af37]">Services</span>
          </h1>
          <p className="text-xl text-white">
            Luxury transportation for every occasion
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* All 9 services in a symmetrical 3x3 grid */}
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 hover:shadow-xl transition-all flex flex-col h-full"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-700 to-emerald-600 text-white rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{service.title}</h3>
                <p className="text-gray-700 text-sm mb-4 flex-grow">{service.description}</p>
                <ul className="space-y-1.5 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <span className="text-[#d4af37]">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center justify-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors mt-auto"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}

            {/* Cruise Transportation */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 hover:shadow-xl transition-all flex flex-col h-full">
              <div className="flex items-center justify-center mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-700 to-emerald-600 text-white rounded-lg flex items-center justify-center text-3xl">
                  {cruiseService.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{cruiseService.title}</h3>
              <p className="text-gray-700 text-sm mb-4 flex-grow">{cruiseService.description}</p>
              <ul className="space-y-1.5 mb-4">
                {cruiseService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm">
                    <span className="text-[#d4af37]">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={cruiseService.link}
                className="inline-flex items-center justify-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors mt-auto"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Infant Car Seats */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 hover:shadow-xl transition-all flex flex-col h-full">
              <div className="flex items-center justify-center mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-700 to-emerald-600 text-white rounded-lg flex items-center justify-center text-3xl">
                  {infantSeatService.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{infantSeatService.title}</h3>
              <p className="text-gray-700 text-sm mb-4 flex-grow">{infantSeatService.description}</p>
              <ul className="space-y-1.5 mb-4">
                {infantSeatService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm">
                    <span className="text-[#d4af37]">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={infantSeatService.link}
                className="inline-flex items-center justify-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors mt-auto"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Personal Chauffeur */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-500 hover:shadow-xl transition-all flex flex-col h-full">
              <div className="flex items-center justify-center mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-700 to-emerald-600 text-white rounded-lg flex items-center justify-center text-3xl">
                  {personalChauffeurService.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{personalChauffeurService.title}</h3>
              <p className="text-gray-700 text-sm mb-4 flex-grow">{personalChauffeurService.description}</p>
              <ul className="space-y-1.5 mb-4">
                {personalChauffeurService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm">
                    <span className="text-[#d4af37]">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={personalChauffeurService.link}
                className="inline-flex items-center justify-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors mt-auto"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Emerald City Limos?</h2>
            <p className="text-xl text-white">Excellence in every detail</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d4af37] mb-2">Stress-Free</div>
              <p className="text-xl">Chauffeured Transport</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#d4af37] mb-2">50K+</div>
              <p className="text-xl">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#d4af37] mb-2">24/7</div>
              <p className="text-xl">Available Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Book?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to reserve your luxury limousine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-now"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              BOOK NOW
            </Link>
            <a
              href="mailto:client@emeraldcitylimos.com"
              className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}