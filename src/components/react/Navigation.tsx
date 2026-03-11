import { Menu, X, Mail } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Get current path from window.location in the browser
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Airport Transfers', path: '/airport-transfers' },
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'Locations', path: '/locations' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <nav 
      className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white shadow-lg sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a 
            href="/"
            className="flex items-center space-x-2"
            aria-label="Emerald City Limos - Return to homepage"
          >
            <img
              src="/images/logo.webp"
              alt="Emerald City Limos"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="list">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#d4af37] ${
                  isActive(link.path) ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-white'
                }`}
                aria-current={isActive(link.path) ? 'page' : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="/book-now" 
              className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-6 py-2 rounded-lg font-semibold transition-all"
              role="button"
              aria-label="Book your limousine service now"
            >
              BOOK NOW
            </a>
            <a 
              href="mailto:client@emeraldcitylimos.com" 
              className="flex items-center space-x-2 text-sm hover:text-[#d4af37] transition-colors"
              aria-label="Email us at client@emeraldcitylimos.com"
            >
              <Mail className="w-4 h-4" aria-hidden="true" focusable="false" />
              <span className="sr-only">client@emeraldcitylimos.com</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-emerald-700 transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" focusable="false" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" focusable="false" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div 
            id="mobile-navigation"
            className="md:hidden pb-4 space-y-2"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-emerald-700 text-yellow-400'
                    : 'text-white hover:bg-emerald-700'
                }`}
                role="menuitem"
                aria-current={isActive(link.path) ? 'page' : undefined}
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 py-2 space-y-2 border-t border-emerald-700 mt-2 pt-4">
              <a 
                href="/book-now" 
                className="block w-full text-center bg-[#d4af37] hover:bg-[#b8941f] text-black px-6 py-2 rounded-lg font-semibold transition-all"
                role="button"
                aria-label="Book your limousine service now"
              >
                BOOK NOW
              </a>
              <a 
                href="mailto:client@emeraldcitylimos.com" 
                className="flex items-center space-x-2 text-sm hover:text-[#d4af37]"
                aria-label="Email us at client@emeraldcitylimos.com"
              >
                <Mail className="w-4 h-4" aria-hidden="true" focusable="false" />
                <span>client@emeraldcitylimos.com</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}