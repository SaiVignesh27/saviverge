import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
                <ArrowUpRight className="w-3 h-3 text-white ml-0.5 mt-0.5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SAVI Verge</h3>
                <p className="text-sm text-gray-300">From Vision to Verge</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses with beautiful, functional digital presence. We transform your vision into reality with cutting-edge web solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500" />
                <a href="mailto:saivigneshkadiri@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                  saivigneshkadiri@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500" />
                <a href="tel:+918688959653" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +91 86889 59653
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-gold-500" />
                <a 
                  href="https://wa.me/918688959653" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'Web Design', 'E-commerce', 'SEO Optimization'].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 SAVI Verge. All rights reserved. | Founded by K Sai Vignesh
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;