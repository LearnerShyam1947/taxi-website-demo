import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1562618817-92ba4e5f6f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          <span className="block">Experience Luxury</span>
          <span className="block mt-2">
            With <span className="text-gold-500">Premium</span> Taxi Service
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Travel in style with our premium fleet of luxury vehicles and professional chauffeurs.
          Book your ride now and experience the difference.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a 
            href="#booking" 
            className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-md transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            Book Now
            <ChevronRight size={20} className="ml-2" />
          </a>
          
          <a 
            href="#services" 
            className="px-8 py-3 bg-transparent border-2 border-white hover:border-gold-500 text-white hover:text-gold-500 font-semibold rounded-md transition-all duration-300"
          >
            Our Services
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center">
              <span className="text-black font-bold text-xl">24</span>
            </div>
            <span className="ml-3 text-white">Hours Service</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center">
              <span className="text-black font-bold text-xl">5★</span>
            </div>
            <span className="ml-3 text-white">Rated Service</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center">
              <span className="text-black font-bold text-xl">100%</span>
            </div>
            <span className="ml-3 text-white">Satisfaction</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#booking" className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;