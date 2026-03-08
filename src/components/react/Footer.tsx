import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

// YouTube icon component
const YouTubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export function Footer() {
  return (
    <footer 
      className="bg-gradient-to-r from-emerald-950 to-emerald-900 text-white"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-3xl font-bold mb-4" aria-label="Emerald City Limos">
              <div className="text-emerald-400">Emerald City</div>
              <div className="text-[#d4af37]">Limo</div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Premier luxury transportation serving the Greater Seattle area and beyond.
            </p>
            <div className="flex space-x-4" role="list" aria-label="Social media links">
              <a 
                href="https://www.facebook.com/profile.php?id=61550876342830" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Facebook - Opens in new window" 
                className="text-gray-300 hover:text-[#d4af37] transition-colors"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" focusable="false" />
              </a>
              <a 
                href="https://www.instagram.com/a1charters_?igsh=MWRoa2wxMTdkdjNhMw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Instagram - Opens in new window" 
                className="text-gray-300 hover:text-[#d4af37] transition-colors"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" focusable="false" />
              </a>
              <a 
                href="https://www.youtube.com/@A1ChartersUSA" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Subscribe to our YouTube channel - Opens in new window" 
                className="text-gray-300 hover:text-[#d4af37] transition-colors"
              >
                <YouTubeIcon />
              </a>
              <a href="https://www.tiktok.com/@emeraldcitylimos" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white hover:text-[#d4af37] transition-colors">
                <img src="/images/tiktok.png" alt="TikTok" className="w-5 h-5 invert" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation - Quick links">
            <h3 className="font-bold mb-4 text-[#d4af37]">Quick Links</h3>
            <ul className="space-y-2 text-sm" role="list">
              <li><a href="/" className="text-gray-300 hover:text-[#d4af37] transition-colors">Home</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-[#d4af37] transition-colors">Services</a></li>
              <li><a href="/airport-transfers" className="text-gray-300 hover:text-[#d4af37] transition-colors">Airport Transfers</a></li>
              <li><a href="/locations" className="text-gray-300 hover:text-[#d4af37] transition-colors">Locations</a></li>
              <li><a href="/affiliates" className="text-gray-300 hover:text-[#d4af37] transition-colors">Become an Affiliate</a></li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer navigation - Our services">
            <h3 className="font-bold mb-4 text-[#d4af37]">Our Services</h3>
            <ul className="space-y-2 text-sm" role="list">
              <li><a href="/airport-transfers" className="text-gray-300 hover:text-[#d4af37] transition-colors">Airport Transfers</a></li>
              <li><a href="/service/hourly-charters" className="text-gray-300 hover:text-[#d4af37] transition-colors">Hourly Charters</a></li>
              <li><a href="/service/wedding-transportation" className="text-gray-300 hover:text-[#d4af37] transition-colors">Wedding Transportation</a></li>
              <li><a href="/services/sports-events" className="text-gray-300 hover:text-[#d4af37] transition-colors">Game Day Transport</a></li>
              <li><a href="/service/special-occasions" className="text-gray-300 hover:text-[#d4af37] transition-colors">Special Occasions</a></li>
              <li><a href="/services/corporate-transportation" className="text-gray-300 hover:text-[#d4af37] transition-colors">Corporate Events</a></li>
              <li><a href="/service/executive-transportation" className="text-gray-300 hover:text-[#d4af37] transition-colors">Executive Transportation</a></li>
              <li><a href="/services/cruise-port-transfers" className="text-gray-300 hover:text-[#d4af37] transition-colors">Cruise Transportation</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-[#d4af37]">Contact Us</h3>
            <address className="not-italic">
              <ul className="space-y-3 text-sm" role="list">
                <li className="flex items-start space-x-2 text-gray-300">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" focusable="false" />
                  <a 
                    href="tel:+12065959675" 
                    className="hover:text-[#d4af37] transition-colors"
                    aria-label="Call us at (206) 595-9675"
                  >
                    (206) 595-9675
                  </a>
                </li>
                <li className="flex items-start space-x-2 text-gray-300">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" focusable="false" />
                  <a 
                    href="mailto:client@emeraldcitylimos.com" 
                    className="hover:text-[#d4af37] transition-colors break-all"
                    aria-label="Email us at client@emeraldcitylimos.com"
                  >
                    client@emeraldcitylimos.com
                  </a>
                </li>
                <li className="flex items-start space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" focusable="false" />
                  <span>Seattle, WA</span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Emerald City Limos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}