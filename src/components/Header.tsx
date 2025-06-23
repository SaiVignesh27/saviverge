import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const PHONE = import.meta.env.VITE_PUBLIC_PHONE;
  const EMAIL = import.meta.env.VITE_PUBLIC_EMAIL;

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-s">SAVI</span>
              {/* <ArrowUpRight className="w-3 h-3 text-white ml-0.5 mt-0.5" /> */}
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-800">SAVI Verge</h1>
              <p className="text-xs text-gray-600 -mt-1">From Vision to Verge</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-gold-600 bg-gold-50'
                    : 'text-gray-700 hover:text-gold-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gold-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>{PHONE}</span>
            </a>
            <Link
              to="/contact"
              className="bg-gold-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold-600 transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-30"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Mobile Menu */}
          <div className="bg-white border-t border-gray-100 w-4/5 max-w-xs h-full shadow-lg animate-slideInRight">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-gold-600 bg-gold-50'
                      : 'text-gray-700 hover:text-gold-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-100">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600"
                >
                  <Phone className="w-4 h-4" />
                  <span>{PHONE}</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-gold-500 text-white px-3 py-2 rounded-lg text-center font-medium mx-3 mt-2"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;