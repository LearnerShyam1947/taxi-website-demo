import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gold-500">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Our customer service team is available 24/7 to help you with your booking or any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact information */}
          <div className="bg-black text-white rounded-xl shadow-xl p-8 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-gold-500">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-gold-500 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-400 mt-1">Available 24/7 for bookings</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageSquare className="text-gold-500 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">WhatsApp</h4>
                  <p className="text-gray-300">+1 (555) 987-6543</p>
                  <p className="text-sm text-gray-400 mt-1">Quick responses within minutes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-gold-500 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">bookings@goldride.com</p>
                  <p className="text-sm text-gray-400 mt-1">For inquiries and support</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-gold-500 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Office Location</h4>
                  <p className="text-gray-300">123 Luxury Drive, Suite 500</p>
                  <p className="text-gray-300">New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-gold-500 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-gray-300">24/7 Service</p>
                  <p className="text-sm text-gray-400 mt-1">Always available for you</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <a 
                href="https://wa.me/15559876543" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center transition-colors duration-300"
              >
                <MessageSquare size={18} className="mr-2" />
                WhatsApp
              </a>
              
              <a 
                href="tel:+15551234567" 
                className="bg-gold-500 hover:bg-gold-600 text-black px-4 py-2 rounded-md flex items-center transition-colors duration-300"
              >
                <Phone size={18} className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="bg-white rounded-xl shadow-xl p-8 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full py-3 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full py-3 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  className="w-full py-3 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Booking Inquiry"
                  className="w-full py-3 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full py-3 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-black hover:bg-gold-500 text-white hover:text-black font-semibold rounded-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;