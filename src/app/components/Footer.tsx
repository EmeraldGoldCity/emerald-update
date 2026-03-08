import { Facebook, Instagram, Mail, Phone, MapPin, } from 'lucide-react';
import { Link } from 'react-router-dom';

// YouTube icon component
const YouTubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-3xl font-bold mb-4">
              <div className="text-white">Emerald City</div>
              <div className="text-[#d4af37]">Limo</div>
            </div>
            <p className="text-gray-200 text-sm mb-4">
              Premier luxury transportation serving the Greater Seattle area and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-white hover:text-[#d4af37] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-[#d4af37] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-white hover:text-[#d4af37] transition-colors">
                <YouTubeIcon />
              </a>
              <a href="https://www.tiktok.com/@emeraldcitylimos" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white hover:text-[#d4af37] transition-colors">
                <img src="/images/icon-tiktok.png" alt="TikTok" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-[#d4af37] text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-200 hover:text-[#d4af37]"
                  style={{ transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-200 hover:text-[#d4af37]"
                  style={{ transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/airport-transfers" 
                  className="text-gray-200 hover:text-[#d4af37]"
                  style={{ transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                  Airport Transfers
                </Link>
              </li>
              <li>
                <Link 
                  to="/locations" 
                  className="text-gray-200 hover:text-[#d4af37]"
                  style={{ transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link 
                  to="/affiliates" 
                  className="text-gray-200 hover:text-[#d4af37]"
                  style={{ transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                  Become an Affiliate
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-[#d4af37] text-lg">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Airport Transfers</li>
              <li>Hourly Charters</li>
              <li>Wedding Transportation</li>
              <li>Game Day Transport</li>
              <li>Special Occasions</li>
              <li>Corporate Events</li>
              <li>Executive Transportation</li>
              <li>Cruise Transportation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-[#d4af37] text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2 text-gray-200">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:+12065959675" className="hover:text-[#d4af37] transition-colors">
                  (206) 595-9675
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-200">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:client@emeraldcitylimos.com" className="hover:text-[#d4af37] transition-colors break-all">
                  client@emeraldcitylimos.com
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-200">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Seattle, WA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Emerald City Limos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}