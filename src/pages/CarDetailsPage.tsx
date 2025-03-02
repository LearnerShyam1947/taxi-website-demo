import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronLeft, Calendar, Clock, Users, DollarSign, MessageSquare } from 'lucide-react';
import { carsData, Car, Review } from '../data/carsData';

const CarDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  
  // New review form state
  const [newReview, setNewReview] = useState({
    userName: '',
    rating: 5,
    comment: ''
  });
  
  // Fetch car data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundCar = carsData.find(c => c.id === Number(id));
      setCar(foundCar || null);
      setLoading(false);
    }, 500);
  }, [id]);
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value
    }));
  };
  
  // Handle review submission
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!car) return;
    
    // Create new review
    const review: Review = {
      id: car.reviews.length + 1,
      userName: newReview.userName,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };
    
    // Update car with new review (in a real app, this would be an API call)
    const updatedCar = {
      ...car,
      reviews: [...car.reviews, review],
      // Recalculate average rating
      rating: parseFloat(((car.rating * car.reviews.length + review.rating) / (car.reviews.length + 1)).toFixed(1))
    };
    
    setCar(updatedCar);
    
    // Reset form
    setNewReview({
      userName: '',
      rating: 5,
      comment: ''
    });
    
    // Show success message
    alert('Thank you for your review!');
  };
  
  if (loading) {
    return (
      <div className="pt-16 flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading vehicle details...</p>
        </div>
      </div>
    );
  }
  
  if (!car) {
    return (
      <div className="pt-16 flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Vehicle Not Found</h2>
          <p className="text-gray-600 mb-6">Sorry, we couldn't find the vehicle you're looking for.</p>
          <Link 
            to="/cars" 
            className="px-6 py-2 bg-gold-500 text-black rounded-md hover:bg-gold-600 transition-colors duration-300"
          >
            View All Vehicles
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* Hero section */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${car.image})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{car.name}</h1>
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center bg-gold-500 text-black px-3 py-1 rounded-full">
                <Star size={18} className="fill-black mr-1" />
                <span className="font-bold">{car.rating}</span>
                <span className="mx-1">/</span>
                <span>5</span>
              </div>
              <span className="mx-3 text-gray-300">|</span>
              <div className="bg-black/50 px-3 py-1 rounded-full">
                {car.category}
              </div>
            </div>
          </div>
        </div>
        <button 
          onClick={() => navigate(-1)} 
          className=" absolute top-4 left-4 bg-black/50 hover:bg-gold-500 text-white hover:text-black p-2 rounded-full transition-colors duration-300"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Vehicle Details</h2>
              <p className="text-gray-700 mb-6">{car.description}</p>
              
              {/* Car Features Section */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800">Features:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {car.carFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Reviews section */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Customer Reviews</h2>
                <div className="flex items-center">
                  <Star size={20} className="text-gold-500 fill-gold-500 mr-1" />
                  <span className="font-bold text-lg">{car.rating}</span>
                  <span className="text-gray-500 ml-1">({car.reviews.length} reviews)</span>
                </div>
              </div>
              
              {car.reviews.length > 0 ? (
                <div className="space-y-6 mb-8">
                  {car.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{review.userName}</h4>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={i < review.rating ? "text-gold-500 fill-gold-500" : "text-gray-300"} 
                              />
                            ))}
                            <span className="text-gray-500 text-sm ml-2">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 mb-8">No reviews yet. Be the first to review this vehicle!</p>
              )}
              
              {/* Add review form */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      value={newReview.userName}
                      onChange={handleInputChange}
                      className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                      Rating
                    </label>
                    <select
                      id="rating"
                      name="rating"
                      value={newReview.rating}
                      onChange={handleInputChange}
                      className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      <option value={5}>5 - Excellent</option>
                      <option value={4}>4 - Very Good</option>
                      <option value={3}>3 - Good</option>
                      <option value={2}>2 - Fair</option>
                      <option value={1}>1 - Poor</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Review
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows={4}
                      value={newReview.comment}
                      onChange={handleInputChange}
                      className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-md transition-colors duration-300"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking card */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Book This Vehicle</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-700">
                    <DollarSign size={20} className="text-gold-500 mr-2" />
                    <span>Base fare:</span>
                  </div>
                  <span className="font-semibold">${car.baseFare}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-700">
                    <DollarSign size={20} className="text-gold-500 mr-2" />
                    <span>Per kilometer:</span>
                  </div>
                  <span className="font-semibold">${car.pricePerKm}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-700">
                    <Users size={20} className="text-gold-500 mr-2" />
                    <span>Capacity:</span>
                  </div>
                  <span className="font-semibold">
                    {car.category === 'SUV' ? '6-7 passengers' : '4-5 passengers'}
                  </span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <a 
                    href="/#booking" 
                    className="w-full block text-center px-6 py-3 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-md transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700">Need assistance?</h4>
                
                <a 
                  href="tel:+15551234567" 
                  className="flex items-center text-gray-700 hover:text-gold-500"
                >
                  <MessageSquare size={18} className="mr-2" />
                  <span>Call us at +1 (555) 123-4567</span>
                </a>
                
                <a 
                  href="https://wa.me/15559876543" 
                  className="flex items-center text-gray-700 hover:text-gold-500"
                >
                  <MessageSquare size={18} className="mr-2" />
                  <span>WhatsApp +1 (555) 987-6543</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;