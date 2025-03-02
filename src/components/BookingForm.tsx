import React, { useState } from 'react';
import { MapPin, Calendar, Clock, ChevronRight } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: '1',
    vehicleType: 'premium'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    alert('Booking request submitted! We will confirm shortly.');
  };

  return (
    <section id="booking" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your <span className="text-gold-500">Premium Ride</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill in the details below to book your luxury ride. Our system will instantly calculate the fare and assign the best vehicle for your journey.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto transform -translate-y-6 relative z-20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-500" size={18} />
                  <input
                    type="text"
                    id="pickup"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    placeholder="Enter pickup address"
                    className="pl-10 w-full py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700 mb-1">Drop-off Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-500" size={18} />
                  <input
                    type="text"
                    id="dropoff"
                    name="dropoff"
                    value={formData.dropoff}
                    onChange={handleChange}
                    placeholder="Enter destination address"
                    className="pl-10 w-full py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-500" size={18} />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="pl-10 w-full py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold-500" size={18} />
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="pl-10 w-full py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                <select
                  id="passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent pl-3"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="w-full py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent pl-3"
                >
                  <option value="economy">Economy</option>
                  <option value="premium">Premium</option>
                  <option value="luxury">Luxury</option>
                  <option value="suv">SUV</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-md transition-all duration-300 flex items-center"
              >
                Book Now
                <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;