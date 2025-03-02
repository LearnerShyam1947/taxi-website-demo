import React from 'react';
import { Car } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Car className="h-8 w-8 text-gold-500" />
      <span className="ml-2 text-xl font-bold text-white">
        Taxi<span className="text-gold-500">Ride</span>
      </span>
    </div>
  );
};

export default Logo;