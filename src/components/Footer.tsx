import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <Link to="/">
              <Logo />
            </Link>
            <p className="mt-4 text-gray-400">
              Experience luxury transportation with our premium fleet of vehicles and professional chauffeurs. Available 24/7 for your convenience.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-gold-500 transition-colors duration-200 flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/cars" 
                  className="text-gray-400 hover:text-gold-500 transition-colors duration-200 flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" />
                  Our Fleet
                </Link>
              </li>
              <li>
                <a 
                  href="/#services" 
                  className="text-gray-400 hover:text-gold-500 transition-colors duration-200 flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/#pricing" 
                  className="text-gray-400 hover:text-gold-500 transition-colors duration-200 flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" />
                  Pricing
                </a>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-gold-500 transition-colors duration-200 flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-500">Our Services</h3>
            <ul className="space-y-2">
              {['Economy Rides', 'Premium Service', 'Luxury Experience', 'SUV Transport', 'Airport Transfers', 'Corporate Travel'].map((item) => (
                <li key={item}>
                  <a 
                    href="/#services" 
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-200 flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-500">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button
                type="submit"
                className="bg-gold-500 hover:bg-gold-600 text-black px-4 rounded-r-md transition-colors duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TaxiRide Luxury Taxi Service. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-gold-500 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-gold-500 transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;