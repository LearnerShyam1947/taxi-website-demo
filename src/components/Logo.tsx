import React from 'react';
import logo from '../assets/logo.jpeg';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img src={logo} style={{ width: '60px', height: '60px' }} alt="Logo" />
      <span className="ml-2 text-xl font-bold text-white">
      VIP<span className="text-gold-500"> TRAVELS</span>
      </span>
    </div>
  );
};

export default Logo;