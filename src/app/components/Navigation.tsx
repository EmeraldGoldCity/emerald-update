import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setMobileMenuOpen(false); // Close mobile menu on navigation
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Airport Transfers', path: '/airport-transfers' },
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'Locations', path: '/locations' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white sticky top-0 z-50 w-full shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Frame */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="border-2 border-[#d4af37] rounded-lg px-4 py-2 bg-emerald-950/30 hover:bg-emerald-950/50 transition-colors">
              <div className="text-xl md:text-2xl font-bold">
                <span className="text-white">Emerald City</span>
                <span className="text-[#d4af37]"> Limo</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium hover:text-[#d4af37] whitespace-nowrap ${
                  isActive(link.path) ? 'text-[#d4af37]' : 'text-white'
                }`}
                style={{
                  transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Book Now Button - Desktop */}
            <Link 
              to="/book-now" 
              className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-6 py-2 rounded-lg font-semibold whitespace-nowrap ml-2"
              style={{
                transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              BOOK NOW
            </Link>
          </div>

          {/* Contact Email - Desktop Only */}
          <div className="hidden lg:flex items-center">
            <a 
              href="mailto:client@emeraldcitylimos.com" 
              className="flex items-center space-x-2 text-sm hover:text-[#d4af37]"
              style={{
                transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-emerald-700 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-emerald-700 text-yellow-400'
                    : 'text-white hover:bg-emerald-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 py-2 space-y-2 border-t border-emerald-700 mt-2 pt-4">
              <Link to="/book-now" className="block w-full text-center bg-[#d4af37] hover:bg-[#b8941f] text-black px-6 py-2 rounded-lg font-semibold transition-all">
                BOOK NOW
              </Link>
              <a href="mailto:client@emeraldcitylimos.com" className="flex items-center space-x-2 text-sm hover:text-[#d4af37]">
                <Mail className="w-4 h-4" />
                <span>client@emeraldcitylimos.com</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}