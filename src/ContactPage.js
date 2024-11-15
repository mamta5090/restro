// ContactPage.js
import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-3xl w-full bg-white p-8 shadow-lg rounded-lg">
        
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Contact Us</h2>
        
        <div className="flex flex-col md:flex-row md:space-x-10">
          
          {/* Contact Information */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-4">
             Send us a message and we’ll get back to you as soon as possible. You can also reach us by phone at 212.980.4796. Looking forward to hearing from you.
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> info@example.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> 123 Main St, Anytown, USA
            </p>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Have some questions ?</h3>
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
