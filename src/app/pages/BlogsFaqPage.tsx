import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, User } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function BlogsFaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const blogs = [
    {
      title: '5 Tips for Stress-Free Airport Travel in Seattle',
      date: 'January 15, 2025',
      author: 'Emerald City Limos Team',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      excerpt: 'Discover how to navigate Sea-Tac Airport like a pro with our insider tips for smooth airport transfers and timely arrivals.',
    },
    {
      title: 'Why Choose a Professional Chauffeur for Your Wedding',
      date: 'January 10, 2025',
      author: 'Emerald City Limos Team',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      excerpt: 'Your wedding day deserves perfection. Learn why hiring a professional limousine service makes all the difference.',
    },
    {
      title: 'Game Day Transportation Guide: Seattle Sports Venues',
      date: 'January 5, 2025',
      author: 'Emerald City Limos Team',
      image: 'https://images.unsplash.com/photo-1508224185921-58b3d70929e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      excerpt: 'Skip the parking hassle and arrive in style. Your complete guide to luxury transportation for Seahawks, Mariners, and Kraken games.',
    },
  ];

  const faqs = [
    {
      question: 'How far in advance should I book my limousine?',
      answer: 'We recommend booking at least 48 hours in advance for airport transfers and standard services. For special events like weddings, proms, or large group transportation, we suggest booking 2-4 weeks ahead to ensure vehicle availability.',
    },
    {
      question: 'Do you provide car seats for children?',
      answer: 'Yes! We offer complimentary infant car seats, convertible car seats, and booster seats. Simply let us know your child\'s age, weight, and height when booking, and we\'ll have the appropriate safety seat professionally installed before your pickup.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made 24 hours or more before your scheduled pickup time receive a full refund. Cancellations within 24 hours may be subject to a cancellation fee. We understand that plans change and will work with you to reschedule when possible.',
    },
    {
      question: 'Are gratuities included in the price?',
      answer: 'Gratuities are not included in our base rates but are greatly appreciated. The standard gratuity is 15-20% of the total fare. You can add gratuity when booking or provide it directly to your chauffeur.',
    },
    {
      question: 'What happens if my flight is delayed?',
      answer: 'We monitor all flights in real-time using advanced flight tracking technology. If your flight is delayed, we automatically adjust your pickup time at no additional charge. There\'s no need to call us - we\'re already on it!',
    },
    {
      question: 'Can I request specific refreshments or amenities?',
      answer: 'Absolutely! We offer our Refreshment Setup service where you can pre-order coffee, beverages, snacks, wet wipes for kids, or other essentials to be ready in your vehicle. Just let us know your preferences when booking.',
    },
    {
      question: 'Do you service areas outside of Seattle?',
      answer: 'Yes! While we\'re based in Seattle, we provide service throughout King, Snohomish, and Pierce Counties, as well as destinations like Spokane and Wenatchee. Contact us for pricing to your specific location.',
    },
    {
      question: 'What forms of payment do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and cash. Corporate accounts with monthly billing are also available for businesses.',
    },
    {
      question: 'Are your vehicles and drivers insured?',
      answer: 'Yes, all our vehicles and drivers are fully licensed, insured, and meet Washington State requirements. Our chauffeurs undergo background checks and professional training to ensure your safety and comfort.',
    },
    {
      question: 'Can I bring alcohol in the vehicle?',
      answer: 'For passengers 21 and over, BYOB (Bring Your Own Beverage) is permitted. We provide ice and coolers. Valid ID verification is required. Please drink responsibly.',
    },
    {
      question: 'How do I get a quote for my event?',
      answer: 'You can get an instant quote by calling us at (206) 595-9675, emailing client@emeraldcitylimos.com, or using our online booking tool. Provide details about your event, date, time, number of passengers, and destination for an accurate estimate.',
    },
    {
      question: 'What is your service area for airport transfers?',
      answer: 'We provide airport transfers throughout the Greater Seattle area including Seattle, Bellevue, Tacoma, Everett, Redmond, Kirkland, Renton, and all of King, Snohomish, and Pierce Counties. We service SEA-TAC, Boeing Field, and Paine Field airports.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/80 z-10"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Blogs and FAQ"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Blogs & <span className="text-[#FFD700]">FAQ</span>
          </h1>
          <p className="text-xl text-gray-200">
            Helpful tips and answers to your questions
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600">Tips, guides, and insights for luxury transportation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:border-emerald-500 transition-all">
                <ImageWithFallback
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <User className="w-4 h-4 mr-2" />
                    <span>{blog.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <button className="text-emerald-700 font-semibold hover:text-emerald-800 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our services</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-emerald-700 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-emerald-700 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Our team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12065959675"
              className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Call (206) 595-9675
            </a>
            <a
              href="mailto:client@emeraldcitylimos.com"
              className="bg-white hover:bg-gray-100 text-emerald-900 px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}