// src/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold">Company</h2>
          <p className="mt-4 text-gray-400">
            We provide top-quality services to help you achieve your business goals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#about" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Restaurant Menu
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-gray-300">
                Caterers Menu
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://instagram.com" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400">
        © {new Date().getFullYear()} My Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
