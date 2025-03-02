import React from 'react';

const services = [
  {
    id: 1,
    name: 'Economy',
    description: 'Affordable comfort for everyday travel with professional drivers and well-maintained vehicles.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: ['30 MPG', '2022 Model', '₹4,150/day', '4 passengers max']
  },
  {
    id: 2,
    name: 'Premium',
    description: 'Enhanced comfort with newer model vehicles, extra amenities, and priority service.',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80',
    features: ['25 MPG', '2021 Model', '₹5,810/day', '4 passengers']
  },
  {
    id: 3,
    name: 'Luxury',
    description: 'First-class experience with high-end luxury vehicles and VIP treatment for special occasions.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    features: ['15 MPG', '2023 Model', '₹12,450/day', '4 passengers']
  },
  {
    id: 4,
    name: 'SUV',
    description: 'Spacious vehicles perfect for groups, families, or those requiring extra luggage space.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: ['20 MPG', '2020 Model', '₹6,640/day', '6 passengers']
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gold-500">Premium Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of premium vehicles to match your needs. From economy to luxury, we have the perfect ride for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#booking" 
                  className="mt-6 inline-block px-4 py-2 bg-black text-white rounded hover:bg-gold-500 hover:text-black transition-colors duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;