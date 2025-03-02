import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Book Now', href: '/#booking' },
    { name: 'Our Fleet', href: '/cars' },
    { name: 'Services', href: '/#services' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-black/90 sticky top-0 backdrop-blur-sm text-white w-full z-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/"> 
              <Logo />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-gold-400 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) => 
                    isActive 
                      ? "text-gold-400 font-medium" 
                      : "text-gray-300 hover:text-gold-400 transition-colors duration-200 font-medium"
                  }
                >
                  {link.name}
                </NavLink>
              )
            ))}
            <a 
              href="tel:+1234567890" 
              className="flex items-center bg-gold-500 hover:bg-gold-600 text-black px-4 py-2 rounded-md transition-colors duration-200"
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">Book by Call</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold-400 hover:bg-gray-900 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) => 
                    `block px-3 py-2 text-base font-medium rounded-md ${
                      isActive 
                        ? "text-gold-400 bg-gray-900" 
                        : "text-gray-300 hover:text-gold-400 hover:bg-gray-900"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              )
            ))}
            <a 
              href="tel:+1234567890" 
              className="flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-black px-4 py-2 rounded-md transition-colors duration-200 mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">Book by Call</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;