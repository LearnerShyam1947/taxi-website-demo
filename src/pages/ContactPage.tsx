import React from 'react';
import ContactSection from '../components/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-16">
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Contact <span className="text-gold-500">TaxiRide</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            We're here to help with your transportation needs. Reach out to our team for bookings, inquiries, or support.
          </p>
        </div>
      </div>
      
      <ContactSection />
    </div>
  );
};

export default ContactPage;