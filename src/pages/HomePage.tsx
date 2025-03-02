import React from 'react';
import HeroSection from '../components/HeroSection';
import BookingForm from '../components/BookingForm';
import CarConsole from '../components/CarConsole';
import ServicesSection from '../components/ServicesSection';
import PricingCalculator from '../components/PricingCalculator';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <BookingForm />
      <CarConsole />
      <ServicesSection />
      <PricingCalculator />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;