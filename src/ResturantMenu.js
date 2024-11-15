import React from 'react'
import logo from "./images/logo.png";
import a3 from "./images/a3.jpg";
import a4 from "./images/a4.jpg";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ResturantMenu = () => {
  return (
    <div class="bg-black"><h2 className="text-3xl font-extrabold text-white text-center mb-6">ResturantMenu</h2>
    <div className="w-1/2 bg-white border-rounded border-e-red-200 mx-auto my-5 py-6 flex flex-row border-gray-200 rounded-lg shadow-lg ">
        <div class="flex md:flex-row items-center md:items-start">
      <div className="flex items-center space-x-4 mb-4">
      <img src={a3} alt="Logo" className="h-96 " />
      </div>
      <div class="w-full md:w-1/2 p-4">
        <h1 class="text-2xl font-bold mb-4">Mocktails & Shakes</h1>
        <p class="text-gray-700 mb-4 font-mono flex-col md:flex-col">
<ol>
<li>Paneer Tikka</li>
<li>Masala Soya Chaap</li>
<li>Malai Soya Chaap</li>
<li>Afghani Soya Chaap</li>
<li>Tandoori Veg. Momo</li>
<li>Tandoori Checken Mmo</li>
</ol>
        </p><div class="flex flex-row ">
        <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-500 hover:text-green-700 mx-5">
        <span><FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 mr-2" /></span>
        
        </a>
        <a href="tel:+15551234567" className="flex items-center text-blue-500 hover:text-blue-700">
        <span><FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-2" /></span>
        
        </a></div>
        </div>
        </div>
        </div>


        <div className="w-1/2 bg-white border-rounded border-e-red-200 mx-auto py-6 flex flex-row border-gray-200 rounded-lg shadow-lg ">
        <div class="flex md:flex-row items-center md:items-start">
     
      <div class="w-full md:w-1/2 p-4">
        <h1 class="text-2xl font-bold mb-4">Mocktails & Shakes</h1>
        <p class="text-gray-700 mb-4 font-mono flex-col md:flex-col">
<ol>
<li>Oreo Shake</li>
<li>lKitkat Shake</li>
<li>Bluebery Shake</li>
<li>Strawbery Shake</li>
<li>Cold Drink</li>
<li>Water Bottle</li>
</ol>
        </p><div class="flex flex-row ">
        <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-500 hover:text-green-700 mx-5">
        <span><FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 mr-2" /></span>
        
        </a>
        <a href="tel:+15551234567" className="flex items-center text-blue-500 hover:text-blue-700">
        <span><FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-2" /></span>
        
        </a>
        </div>
        
        </div>
        <div className="flex items-center space-x-4 mb-4">
      <img src={a4} alt="Logo" className="h-96 " />
      </div>
        </div>
        
        </div>

        </div>
        

  );
}

export default ResturantMenu;
