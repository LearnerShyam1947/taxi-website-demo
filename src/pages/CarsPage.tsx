import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Filter, ChevronDown } from 'lucide-react';
import { carsData } from '../data/carsData';

const CarsPage: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');
  const [showFilters, setShowFilters] = useState(false);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const carsPerPage = 3; // Number of cars to display per page

  // Filter and sort cars
  const filteredCars = carsData
    .filter(car => filterCategory === 'all' || car.category === filterCategory)
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-low') return a.pricePerKm - b.pricePerKm;
      if (sortBy === 'price-high') return b.pricePerKm - a.pricePerKm;
      return 0;
    });

  // Pagination logic
  const totalCars = filteredCars.length;
  const totalPages = Math.ceil(totalCars / carsPerPage);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Get unique categories
  const categories = ['all', ...new Set(carsData.map(car => car.category))];

  return (
    <div >
      {/* Header */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Our <span className="text-gold-500">Premium Fleet</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Explore our collection of luxury vehicles, each offering exceptional comfort and style for your journey.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-md py-4 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <button 
              className="flex items-center text-gray-700 md:hidden mb-4"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={20} className="mr-2" />
              Filters
              <ChevronDown size={20} className={`ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`${showFilters ? 'block' : 'hidden'} md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6`}>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full md:w-auto py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">
                  Sort By
                </label>
                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full md:w-auto py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                >
                  <option value="rating">Highest Rating</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
            
            <div className="text-gray-600 mt-4 md:mt-0">
              Showing {currentCars.length} / {filteredCars.length} vehicles
            </div>
          </div>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCars.map((car) => (
              <div 
                key={car.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gold-500 text-black font-bold px-3 py-1 rounded-full text-sm">
                    {car.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{car.name}</h3>
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded">
                      <Star size={16} className="text-gold-500 fill-gold-500 mr-1" />
                      <span className="font-semibold">{car.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{car.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-gray-700">
                      <span className="font-semibold text-lg text-gold-600">₹{car.pricePerKm}</span> per km
                    </div>
                    <div className="text-gray-700">
                      Base: <span className="font-semibold">₹{car.baseFare}</span>
                    </div>
                  </div>

                  {/* Car Features Section */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800">Features:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {car.carFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link 
                      to={`/cars/${car.id}`}
                      className="flex-1 text-center px-4 py-2 bg-black text-white rounded hover:bg-gold-500 hover:text-black transition-colors duration-300"
                    >
                      View Details
                    </Link>
                    <a 
                      href="#booking" 
                      className="flex-1 text-center px-4 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black rounded transition-colors duration-300"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-gold-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {currentCars.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No vehicles found matching your criteria.</p>
              <button 
                onClick={() => {
                  setFilterCategory('all');
                  setSortBy('rating');
                }}
                className="mt-4 px-6 py-2 bg-gold-500 text-black rounded-md hover:bg-gold-600 transition-colors duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarsPage;