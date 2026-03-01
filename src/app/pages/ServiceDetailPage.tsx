import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check, Phone, Mail } from 'lucide-react';
// Child safety seat images - Order: Infant (rear-facing), Toddler (convertible), Booster
import imgInfantSeat from 'https://icons8.com/icon/7RehHYEguMHB/baby'; // Chicco infant seat - rear-facing
import imgToddlerSeat from 'https://icons8.com/icon/7RehHYEguMHB/baby'; // Graco convertible seat - front-facing
import imgBoosterSeat from 'https://icons8.com/icon/7RehHYEguMHB/baby'; // Chicco booster seat

interface ServiceDetail {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  pricing?: string;
}

const serviceData: Record<string, ServiceDetail> = {
  'hourly-charters': {
    title: 'Hourly Charters',
    subtitle: 'Flexible luxury transportation on your schedule',
    description: 'Our hourly charter service provides you with a professional chauffeur and luxury vehicle for as long as you need. Perfect for shopping trips, business meetings, wine tours, city tours, or any occasion where you need flexible, premium transportation.',
    heroImage: 'https://icons8.com/icon/7RehHYEguMHB/baby',
    icon: '⏰',
    features: [
      'Minimum 3-hour booking',
      'Professional uniformed chauffeur',
      'Premium luxury vehicles',
      'Fully customizable itinerary',
      'Complimentary bottled water',
      'Climate-controlled comfort',
      'Phone charging available',
      'Meet & greet service'
    ],
    benefits: [
      'No need to worry about parking',
      'Enjoy wine tasting without driving',
      'Productive mobile office space',
      'Impress clients and associates',
      'Stress-free shopping experience',
      'Flexible schedule adjustments'
    ],
    process: [
      { step: 'Book Your Hours', description: 'Choose your preferred vehicle and number of hours needed' },
      { step: 'Plan Your Route', description: 'Share your destinations and preferred schedule with us' },
      { step: 'Enjoy Your Day', description: 'Your chauffeur handles navigation while you relax' },
      { step: 'Extend If Needed', description: 'Need more time? Easy extensions available on request' }
    ],
    faqs: [
      { question: 'What is the minimum booking?', answer: 'Our hourly charter service requires a minimum 3-hour booking.' },
      { question: 'Can I change my itinerary?', answer: 'Absolutely! Your itinerary is flexible and can be adjusted during your charter.' },
      { question: 'What happens if I need more time?', answer: 'You can extend your booking in one-hour increments, subject to vehicle and chauffeur availability.' },
      { question: 'Are there extra fees for multiple stops?', answer: 'No, multiple stops are included in your hourly rate. Plan as many stops as you\'d like!' }
    ],
    pricing: 'Book Chauffeur Now'
  },
  'wedding-transportation': {
    title: 'Wedding Transportation',
    subtitle: 'Make your special day absolutely perfect',
    description: 'Your wedding day deserves nothing less than perfection. Our elegant wedding limousines provide luxurious transportation for the wedding party, family, and guests. From the ceremony to the reception and beyond, we ensure every moment is magical.',
    heroImage: 'https://images.unsplash.com/photo-1507309270028-9121e9937409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: '💍',
    features: [
      'White stretch limousines',
      'Decorated vehicles upon request',
      'Red carpet service',
      'Complimentary champagne',
      'Professional uniformed chauffeurs',
      'Ribbons and bows',
      '"Just Married" signs available',
      'Flexible timing for photos'
    ],
    benefits: [
      'Arrive in style and elegance',
      'Keep the wedding party together',
      'Professional photography opportunities',
      'Stress-free transportation',
      'Punctual and reliable service',
      'Create unforgettable memories'
    ],
    process: [
      { step: 'Consultation', description: 'Discuss your wedding day timeline and transportation needs' },
      { step: 'Vehicle Selection', description: 'Choose from our elegant wedding vehicles and customize decor' },
      { step: 'Timeline Planning', description: 'We coordinate pickup times to match your wedding schedule' },
      { step: 'Wedding Day', description: 'Relax and enjoy while we handle all transportation details' }
    ],
    faqs: [
      { question: 'How far in advance should I book?', answer: 'We recommend booking 3-6 months in advance, especially for peak wedding season (June-September).' },
      { question: 'Can you accommodate large wedding parties?', answer: 'Yes! We have multiple vehicles and can coordinate transportation for parties of any size.' },
      { question: 'Do you provide champagne?', answer: 'Yes, complimentary champagne service is included for the bride and groom.' },
      { question: 'What if our timeline changes?', answer: 'We understand weddings can run behind schedule. We build flexibility into our bookings and work with you throughout the day.' }
    ],
    pricing: 'Custom packages available'
  },
  'game-day-transport': {
    title: 'Game Day Transport',
    subtitle: 'Tailgate in style, avoid parking hassles',
    description: 'Skip the traffic, parking nightmares, and designated driver worries. Our game day transportation gets your group to Seahawks, Mariners, Sounders, Kraken, and Huskies games safely and in style. Focus on having fun while we handle the logistics.',
    heroImage: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: '🏈',
    features: [
      'Door-to-door service',
      'No parking hassles',
      'Professional chauffeurs',
      'Spacious party vehicles',
      'Coolers and ice available',
      'Premium sound systems',
      'LED mood lighting',
      'Post-game pickup included'
    ],
    benefits: [
      'No designated driver needed',
      'Avoid expensive stadium parking',
      'Keep your group together',
      'Pre-game tailgating in the limo',
      'Continue the party after the game',
      'Safe ride home guaranteed'
    ],
    process: [
      { step: 'Choose Your Event', description: 'Select your game and number of passengers' },
      { step: 'Set Pickup Times', description: 'We coordinate pickup before and after the game' },
      { step: 'Game Day Fun', description: 'Enjoy the ride with your group in comfort and style' },
      { step: 'Safe Return', description: 'We\'ll be waiting to bring everyone home safely' }
    ],
    faqs: [
      { question: 'Which venues do you serve?', answer: 'We service Lumen Field (Seahawks/Sounders), T-Mobile Park (Mariners), Climate Pledge Arena (Kraken), and Husky Stadium (UW Football).' },
      { question: 'How long will you wait after the game?', answer: 'We monitor game times and wait for you after the final whistle. We recommend meeting within 30 minutes of game end.' },
      { question: 'Can we bring coolers?', answer: 'Yes! You can bring your own coolers, or we can provide coolers with ice.' },
      { question: 'Do you offer round-trip service?', answer: 'Yes, our game day packages include both drop-off and pickup service.' }
    ],
    pricing: 'Starting at $350 per game'
  },
  'special-occasions': {
    title: 'Special Occasions',
    subtitle: 'Celebrate life\'s memorable moments in luxury',
    description: 'Every special occasion deserves to be celebrated in style. Whether it\'s a milestone birthday, anniversary, prom night, quinceañera, corporate event, or any celebration, our luxury limousines add elegance and excitement to your special day.',
    heroImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: '⭐',
    features: [
      'Stretch limousines available',
      'Party buses for large groups',
      'Premium sound systems',
      'Mood lighting options',
      'Complimentary decorations',
      'Red carpet service',
      'Non-alcoholic beverages included',
      'Photo opportunities'
    ],
    benefits: [
      'Make memories that last forever',
      'VIP treatment for your group',
      'Safe transportation for all',
      'No parking or traffic worries',
      'Professional chauffeur service',
      'Customizable packages'
    ],
    process: [
      { step: 'Tell Us Your Vision', description: 'Share details about your celebration and preferences' },
      { step: 'Select Your Package', description: 'Choose the perfect vehicle and service duration' },
      { step: 'Customize Details', description: 'Add special touches like decorations or specific routes' },
      { step: 'Celebrate in Style', description: 'Enjoy your special occasion with luxury transportation' }
    ],
    faqs: [
      { question: 'What occasions do you service?', answer: 'Birthdays, anniversaries, proms, quinceañeras, bachelor/bachelorette parties, corporate events, concerts, and any special celebration!' },
      { question: 'Can you accommodate large groups?', answer: 'Yes! Our party buses can accommodate groups of 15-20 passengers.' },
      { question: 'Do you provide decorations?', answer: 'Yes, we can customize vehicle decorations for your occasion at no extra charge.' },
      { question: 'Is alcohol allowed?', answer: 'For passengers 21 and over, BYOB is allowed. We provide ice and coolers. ID verification required.' }
    ],
    pricing: 'Custom packages from $300'
  },
  'executive-transportation': {
    title: 'Executive Transportation',
    subtitle: 'Professional chauffeur service for business leaders',
    description: 'Time is your most valuable asset. Our executive transportation service provides business leaders with punctual, professional, and discreet chauffeur service. Whether for airport transfers, client meetings, or corporate events, arrive prepared and refreshed.',
    heroImage: 'https://images.unsplash.com/photo-1549924231-f129b911e442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: '💼',
    features: [
      'Luxury executive sedans',
      'Professional uniformed chauffeurs',
      'Complimentary Wi-Fi',
      'Phone charging stations',
      'Bottled water and refreshments',
      'Privacy partition available',
      'Corporate account billing',
      'Flexible scheduling'
    ],
    benefits: [
      'Mobile office environment',
      'Arrive refreshed and prepared',
      'Impress clients and partners',
      'Maximize productivity while traveling',
      'Punctual and reliable service',
      'Discreet and professional'
    ],
    process: [
      { step: 'Setup Corporate Account', description: 'Establish your account with flexible billing options' },
      { step: 'Book As Needed', description: 'Easy booking via phone, email, or online portal' },
      { step: 'Professional Service', description: 'Your chauffeur arrives early and dressed professionally' },
      { step: 'Seamless Experience', description: 'From pickup to destination, everything is handled perfectly' }
    ],
    faqs: [
      { question: 'Do you offer corporate accounts?', answer: 'Yes! We offer monthly billing and priority booking for corporate accounts.' },
      { question: 'Can I work during the ride?', answer: 'Absolutely. Our vehicles are equipped with Wi-Fi, charging ports, and privacy partitions for a productive mobile office.' },
      { question: 'How far in advance must I book?', answer: 'While we recommend 24 hours notice, we can often accommodate same-day requests for corporate clients.' },
      { question: 'Do you provide airport services?', answer: 'Yes, airport transfers are a specialty. We monitor flights and provide meet & greet service.' }
    ],
    pricing: 'Corporate rates available'
  },
  'cruise-transportation': {
    title: 'Cruise Transportation',
    subtitle: 'Start your voyage stress-free',
    description: 'Your cruise vacation begins the moment you leave home. Our cruise transportation service provides seamless door-to-door service to Seattle cruise terminals at Pier 91 and Bell Street Pier. Avoid parking fees and enjoy comfortable, reliable transportation with luggage assistance.',
    heroImage: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: '🚢',
    features: [
      'Direct terminal drop-off',
      'Luggage loading assistance',
      'Spacious vehicles for groups',
      'Ample cargo space for luggage',
      'Flight monitoring for delays',
      'Meet & greet at airport',
      'Post-cruise pickup service',
      'All cruise lines serviced'
    ],
    benefits: [
      'Avoid expensive terminal parking',
      'No luggage handling stress',
      'Start vacation immediately',
      'Door-to-door convenience',
      'Professional assistance',
      'Reliable pickup after cruise'
    ],
    process: [
      { step: 'Provide Cruise Details', description: 'Share your cruise line, ship name, and sailing date' },
      { step: 'Choose Service Type', description: 'Select one-way to terminal or round-trip service' },
      { step: 'Pre-Cruise Transfer', description: 'We pick you up and deliver you directly to your ship' },
      { step: 'Post-Cruise Pickup', description: 'We\'re waiting when you disembark to take you home' }
    ],
    faqs: [
      { question: 'Which terminals do you service?', answer: 'We service both Pier 91 (Smith Cove Terminal) and Bell Street Pier (Pier 66) cruise terminals.' },
      { question: 'How much luggage can I bring?', answer: 'Our vehicles accommodate standard cruise luggage for up to 6 passengers. Larger groups can book multiple vehicles or our sprinter van.' },
      { question: 'What if my flight is delayed?', answer: 'We monitor your flight and adjust pickup times automatically for delays.' },
      { question: 'Do you offer post-cruise service?', answer: 'Yes! Book round-trip service and we\'ll be waiting when you disembark. We track ship arrivals to ensure timely pickup.' }
    ],
    pricing: 'Starting at $120 one-way'
  },
  'infant-car-seats': {
    title: 'Infant Car Seats & Booster Seats',
    subtitle: 'Safe travel for your little ones',
    description: 'Traveling with children requires special care and attention to safety. Our vehicles can be equipped with professionally-installed infant car seats, convertible car seats, and booster seats appropriate for children of all ages. Your child\'s safety is our top priority.',
    heroImage: 'https://images.unsplash.com/photo-1473569103450-d1e0b2f9f0b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: '👶',
    features: [
      'Rear-facing infant seats (0-12 months)',
      'Forward-facing convertible seats (1-4 years)',
      'Booster seats (4-8 years)',
      'Pre-installed before pickup',
      'Professionally secured',
      'Safety certified seats',
      'Multiple seats available',
      'Complimentary service'
    ],
    benefits: [
      'No need to bring your own seat',
      'Professional installation guaranteed',
      'Appropriate seat for child\'s age/weight',
      'Peace of mind for parents',
      'Complies with Washington State law',
      'Clean, sanitized seats'
    ],
    process: [
      { step: 'Provide Child Details', description: 'Tell us your child\'s age, weight, and height when booking' },
      { step: 'Seat Selection', description: 'We select and install the appropriate safety seat' },
      { step: 'Professional Installation', description: 'Seats are installed by trained professionals before your pickup' },
      { step: 'Travel Safely', description: 'Your children travel safely and comfortably throughout your trip' }
    ],
    faqs: [
      { question: 'Is there an extra charge for car seats?', answer: 'No! Car seat installation is a complimentary service for all our clients with children.' },
      { question: 'How do I know which seat my child needs?', answer: 'When you book, provide your child\'s age, weight, and height, and we\'ll select the appropriate seat. We follow Washington State guidelines.' },
      { question: 'Are the seats clean and safe?', answer: 'Yes! All car seats are thoroughly cleaned, sanitized, and inspected before each use. We only use safety-certified seats.' },
      { question: 'Can I bring my own car seat?', answer: 'Absolutely! If you prefer to use your own car seat, our chauffeurs can assist with installation.' },
      { question: 'How far in advance must I request a car seat?', answer: 'Please request car seats at least 24 hours in advance so we can ensure proper installation before your pickup.' }
    ],
    pricing: 'Complimentary with any service'
  },
  'personal-chauffeur': {
    title: 'Personal Chauffeur',
    subtitle: 'Your dedicated driver for family and business needs',
    description: 'Experience the ultimate in personalized luxury transportation with your own dedicated chauffeur. Tailored specifically for clients who value consistency, reliability, and a professional driver who understands your unique preferences and schedule. Perfect for busy executives, families, and those who demand the highest level of service.',
    heroImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: '🚗',
    features: [
      'Dedicated professional chauffeur',
      'Flexible daily/weekly/monthly packages',
      'Priority scheduling',
      'Personalized service preferences',
      'Family and business use',
      'Consistent driver knowledge',
      'Custom route planning',
      'Discreet and professional'
    ],
    benefits: [
      'Build rapport with your regular driver',
      'No need to re-explain preferences',
      'Consistent, reliable service',
      'Priority booking guaranteed',
      'Tailored to your family\'s needs',
      'Peace of mind for daily transportation'
    ],
    process: [
      { step: 'Consultation', description: 'Discuss your transportation needs and preferences' },
      { step: 'Select Package', description: 'Choose from daily, weekly, or monthly service plans' },
      { step: 'Meet Your Chauffeur', description: 'Get acquainted with your dedicated professional driver' },
      { step: 'Enjoy Personalized Service', description: 'Experience consistent, tailored luxury transportation' }
    ],
    faqs: [
      { question: 'What is included in a personal chauffeur package?', answer: 'Packages include a dedicated chauffeur, priority scheduling, flexible hours based on your needs, and personalized service. You\'ll work with the same driver who learns your preferences, routes, and requirements.' },
      { question: 'Can I use my personal chauffeur for both business and family needs?', answer: 'Absolutely! Your personal chauffeur is available for any transportation needs - business meetings, school runs, errands, social events, or family outings.' },
      { question: 'How does billing work for personal chauffeur service?', answer: 'We offer flexible billing with daily, weekly, or monthly packages. Monthly packages provide the best value and can be customized to your specific usage needs.' },
      { question: 'What if my regular chauffeur is unavailable?', answer: 'While we assign a dedicated chauffeur, we also have backup drivers who are briefed on your preferences to ensure consistent service if your regular driver is unavailable.' },
      { question: 'Can I change my service hours or schedule?', answer: 'Yes! Personal chauffeur packages are flexible. Simply provide advance notice and we\'ll adjust your schedule to accommodate your changing needs.' }
    ],
    pricing: 'Custom packages from $2,500/month'
  }
};

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-emerald-700 hover:text-emerald-800 font-semibold">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/80 z-10"></div>
        <img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {service.title}
          </h1>
          <p className="text-2xl text-gray-200 mb-8">{service.subtitle}</p>
          {service.pricing && (
            slug === 'hourly-charters' ? (
              <Link 
                to="/book-now"
                className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-black px-6 py-3 rounded-lg font-bold text-xl transition-all"
              >
                {service.pricing}
              </Link>
            ) : (
              <div className="inline-block bg-[#d4af37] text-black px-6 py-3 rounded-lg font-bold text-xl">
                {service.pricing}
              </div>
            )
          )}
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-700 leading-relaxed">{service.description}</p>
        </div>
      </section>

      {/* Features & Benefits Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Features</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose This Service</h2>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Child Safety Seats Section - Only for infant-car-seats */}
      {slug === 'infant-car-seats' && (
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
              <div className="group">
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
              </div>

              {/* Toddler/Convertible Seat */}
              <div className="group">
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
              </div>

              {/* Booster Seat */}
              <div className="group">
                <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-center justify-center h-64 mb-6 overflow-hidden">
                    <img
                      src={imgBoosterSeat}
                      alt="Booster Seat"
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
                      40-100 lbs • 4-8 years old
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">
                🎯 Request Your Child Seat at Booking
              </h3>
              <p className="text-lg text-emerald-100 mb-6 max-w-2xl mx-auto">
                All child safety seats are complimentary and professionally installed by our trained chauffeurs. 
                Simply let us know your needs when you book, and we'll have everything ready for your family's safe journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
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
              
              {/* Link to Fleet Page */}
              <div className="border-t border-white/20 pt-6 mt-6">
                <p className="text-emerald-100 mb-4">
                  Want to see the luxury vehicles we'll install these seats in?
                </p>
                <Link
                  to="/fleet"
                  className="inline-flex items-center bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-3 rounded-lg font-bold text-lg transition-all"
                >
                  View Our Fleet <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-700 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.step}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Book This Service?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us today to reserve your luxury transportation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-now"
              className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              BOOK NOW <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+12065959675"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-900 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              (206) 595-9675
            </a>
            <a
              href="mailto:client@a1charterspnw.com"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-900 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              <Mail className="mr-2 w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Other Services You May Like</h2>
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold text-lg"
            >
              View All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}