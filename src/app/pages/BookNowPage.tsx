import { Clock, Shield, Star, CheckCircle, ArrowDown } from 'lucide-react';

export function BookNowPage() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Instant Confirmation",
      description: "Get immediate booking confirmation via text and email"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Payment",
      description: "Safe and encrypted payment processing"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Real-Time Tracking",
      description: "Track your chauffeur in real-time on pickup day"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Book anytime for any service, day or night"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-[#d4af37]">Book Your Ride</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-4">
            Experience luxury transportation with Emerald City Limos - Seattle's premier limousine service
          </p>
          <div className="flex items-center justify-center gap-3 animate-bounce">
            <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-[#d4af37]" />
            <p className="text-base md:text-lg text-[#d4af37] font-semibold">BOOK NOW</p>
            <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-[#d4af37]" />
          </div>
        </div>
      </section>

      {/* Booking Widget Section - Primary Focus */}
      <section className="py-8 md:py-12 -mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(16,185,129,0.3)] border-4 border-[#d4af37] p-4 md:p-8 lg:p-10 relative">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-emerald-700 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-emerald-700 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-emerald-700 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-emerald-700 rounded-br-3xl"></div>
            
            <div className="text-center mb-6 md:mb-8 relative z-10">
              <div className="inline-block bg-gradient-to-r from-emerald-700 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                ⭐ Premium Booking Portal
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                Reserve Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-[#d4af37]">Luxury Transportation</span>
              </h2>
              <p className="text-base md:text-xl text-gray-600 font-medium">
                Instant confirmation • Secure payment • 24/7 support
              </p>
            </div>

            {/* Moovs Booking Widget Container */}
            <div className="w-full rounded-2xl overflow-hidden border-2 border-emerald-200 shadow-inner bg-gradient-to-br from-emerald-50 to-yellow-50 p-2">
              <iframe 
                src="https://customer.moovs.app/a1-charters-1/iframe" 
                title="Moovs App"
                className="w-full h-[600px] md:h-[900px] border-0 rounded-xl bg-white"
                style={{ minHeight: '600px' }}
              />
            </div>

            {/* Trust Badges below form */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-8">
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-gradient-to-br from-emerald-100 to-yellow-100 border-2 border-emerald-300">
                <Clock className="w-8 h-8 text-emerald-700 mb-2" />
                <p className="text-xs md:text-sm font-bold text-gray-900">Instant Confirmation</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-gradient-to-br from-emerald-100 to-yellow-100 border-2 border-emerald-300">
                <Shield className="w-8 h-8 text-emerald-700 mb-2" />
                <p className="text-xs md:text-sm font-bold text-gray-900">Secure Payment</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-gradient-to-br from-emerald-100 to-yellow-100 border-2 border-emerald-300">
                <Star className="w-8 h-8 text-emerald-700 mb-2" />
                <p className="text-xs md:text-sm font-bold text-gray-900">Real-Time Tracking</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-gradient-to-br from-emerald-100 to-yellow-100 border-2 border-emerald-300">
                <CheckCircle className="w-8 h-8 text-emerald-700 mb-2" />
                <p className="text-xs md:text-sm font-bold text-gray-900">24/7 Availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Booking?</h2>
          <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8">
            Our team is available 24/7 to assist you with your reservation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12065959675"
              className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all text-sm md:text-base"
            >
              Call: (206) 595-9675
            </a>
            <a
              href="mailto:client@emeraldcitylimos.com"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all text-sm md:text-base"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/12065959675"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1da851] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all text-sm md:text-base"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">15+</div>
              <div className="text-sm md:text-base text-gray-600">Years of Service</div>
            </div>
            <div className="p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">10,000+</div>
              <div className="text-sm md:text-base text-gray-600">Happy Clients</div>
            </div>
            <div className="p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">24/7</div>
              <div className="text-sm md:text-base text-gray-600">Available Service</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}