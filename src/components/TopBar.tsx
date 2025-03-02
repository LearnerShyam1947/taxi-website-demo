import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Temporarily set isVisible to true for testing
  // const isVisible = true; // Uncomment this line for testing

  return (
    <div className={`topbar  bg-yellow-500 shadow-md z-30 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex justify-between items-center p-2">
        <div className="address text-gray-700 text-sm">123 Main St, City, Country</div>
        <div className="right flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <Instagram size={20} />
          </a>
          <span className="phone-number text-gray-600 text-sm">+123 456 7890</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 