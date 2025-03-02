import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredCars = [
  {
    id: 1,
    name: 'Mercedes-Benz S-Class',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    rating: 4.9,
    description: 'Experience ultimate luxury with our flagship Mercedes-Benz S-Class. Perfect for executive travel and special occasions.',
    features: ['Leather interior', 'Climate control', 'Privacy glass', 'Premium sound system']
  },
  {
    id: 2,
    name: 'BMW 7 Series',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 4.8,
    description: 'The BMW 7 Series combines sophisticated elegance with cutting-edge technology for a premium travel experience.',
    features: ['Executive seating', 'Ambient lighting', 'Panoramic roof', 'Advanced driver assistance']
  },
  {
    id: 3,
    name: 'Cadillac Escalade',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 4.7,
    description: 'Our Cadillac Escalade offers spacious luxury with commanding presence, perfect for group travel or making a statement.',
    features: ['Spacious 7-seater', 'Premium audio', 'Heated/cooled seats', 'Ample luggage space']
  }
];

const CarConsole: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Handle next car
  const nextCar = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredCars.length);
  };

  // Handle previous car
  const prevCar = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredCars.length) % featuredCars.length);
  };

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        nextCar();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentIndex]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const currentCar = featuredCars[currentIndex];

  return (
    <section 
      id="car-console" 
      className="py-20 bg-gray-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Featured <span className="text-gold-500">Luxury Vehicles</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our premium fleet of vehicles, each offering exceptional comfort and style for your journey.
          </p>
        </div>

        <div className="relative">
          {/* Car showcase */}
          <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="h-64 lg:h-auto relative">
                <img 
                  src={currentCar.image} 
                  alt={currentCar.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-gold-500 text-black font-bold px-3 py-1 rounded-full text-sm">
                  {currentCar.category}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm flex items-center">
                  <span className="text-gold-500 mr-1">★</span>
                  <span>{currentCar.rating}/5</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{currentCar.name}</h3>
                <p className="text-gray-400 mb-6">{currentCar.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-gold-500 font-semibold mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {currentCar.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <Link 
                    to={`/cars/${currentCar.id}`}
                    className="px-6 py-2 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-md transition-all duration-300"
                  >
                    View Details
                  </Link>
                  <a 
                    href="#booking" 
                    className="px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-semibold rounded-md transition-all duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevCar}
              className="w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors duration-300"
              aria-label="Previous car"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2">
              {featuredCars.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-gold-500' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to car ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextCar}
              className="w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors duration-300"
              aria-label="Next car"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/cars" 
              className="inline-flex items-center text-gold-500 hover:text-gold-400 font-semibold"
            >
              View All Vehicles
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarConsole;