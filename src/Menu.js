// src/Menu.js
import React, { useState } from "react";
import logo from "./images/logo.png"; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ContactPage from './ContactPage';
// Make sure to add a logo image in the src folder with the name `logo.png`

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="text-white text-2xl font-bold">Master Chef</span>
        </div>

        {/* Menu button for mobile */}
        <button
          onClick={toggleMenu}
          className="text-white block md:hidden focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="text-white md:flex md:space-x-6">
            <li>
              <a href="./ContactPage.js" className="block px-3 py-2 hover:bg-gray-700 rounded">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block px-3 py-2 hover:bg-gray-700 rounded">
                About
              </a>
            </li>
            <li>
              <a href="./ResturantMenu.js" className="block px-3 py-2 hover:bg-gray-700 rounded">
                Restaurant Menu
              </a>
            </li>
            <li>
              <a href="./ContactPage.js" className="block px-3 py-2 hover:bg-gray-700 rounded">
                Caterers Menu
              </a>
            </li>
            <li>
              <a href="#about" className="block px-3 py-2 hover:bg-gray-700 rounded">
                Services
              </a>
            </li>
            
            <li>
              <a href="./ContactPage.js" element={<ContactPage />} className="block px-3 py-2 hover:bg-gray-700 rounded">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
