import React, { useState, useEffect } from 'react';
import { MapPin, Calculator } from 'lucide-react';

const PricingCalculator: React.FC = () => {
  const [distance, setDistance] = useState<number>(5);
  const [vehicleType, setVehicleType] = useState<string>('premium');
  const [price, setPrice] = useState<number>(0);

  // Base rates per km
  const rates = {
    economy: 2.5,
    premium: 3.5,
    luxury: 5.0,
    suv: 4.0
  };

  // Calculate price based on distance and vehicle type
  useEffect(() => {
    const baseRate = rates[vehicleType as keyof typeof rates];
    const baseFare = 10; // Base fare
    const calculatedPrice = baseFare + (distance * baseRate);
    setPrice(parseFloat(calculatedPrice.toFixed(2)));
  }, [distance, vehicleType]);

  return (
    <section id="pricing" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Instant <span className="text-gold-500">Fare Estimation</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get an instant estimate for your journey. Adjust the distance and vehicle type to see the fare change in real-time.
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="distance" className="block text-sm font-medium text-gray-300 mb-2">
                  Estimated Distance (km)
                </label>
                <input
                  type="range"
                  id="distance"
                  min="1"
                  max="50"
                  step="1"
                  value={distance}
                  onChange={(e) => setDistance(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>1 km</span>
                  <span>{distance} km</span>
                  <span>50 km</span>
                </div>
              </div>

              <div>
                <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-300 mb-2">
                  Vehicle Type
                </label>
                <select
                  id="vehicleType"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent text-white"
                >
                  <option value="economy">Economy</option>
                  <option value="premium">Premium</option>
                  <option value="luxury">Luxury</option>
                  <option value="suv">SUV</option>
                </select>
              </div>

              <div className="pt-4">
                <a 
                  href="#booking" 
                  className="w-full block text-center px-6 py-3 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-md transition-all duration-300"
                >
                  Book This Ride
                </a>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 flex flex-col justify-center items-center">
              <div className="text-center">
                <p className="text-gray-400 mb-2">Estimated Fare</p>
                <div className="text-5xl font-bold text-gold-500 mb-4">
                  ${price}
                </div>
                <div className="text-sm text-gray-400 mb-6">
                  <p>Base fare + distance rate</p>
                  <p>Prices may vary based on traffic and waiting time</p>
                </div>

                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Base fare:</span>
                    <span className="text-white">$10.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Distance ({distance} km):</span>
                    <span className="text-white">${(price - 10).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-700 my-2 pt-2 flex justify-between">
                    <span className="text-gray-300">Total:</span>
                    <span className="text-gold-500 font-bold">${price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;