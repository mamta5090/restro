import React from 'react'
import a9 from "./images/a9.jpg";
import a10 from "./images/a10.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const CaterersMenu = () => {
  return (
    <div class="bg-black"><h2 className="text-3xl font-extrabold text-white text-center mb-6">Caterers Menu</h2>
    <div className="w-1/2 bg-white border-rounded border-e-red-200 mx-auto py-6 flex flex-row border-gray-200 rounded-lg shadow-lg ">
        <div class="flex md:flex-row items-center md:items-start">
      <div className="flex items-center space-x-4 mb-4">
      <img src={a9} alt="Logo" className="h-96 " />
      </div>
      <div class="w-full md:w-1/2 p-4">
        <h1 class="text-2xl font-bold mb-4">Choice of Salad</h1>
        <p class="text-gray-700 mb-4 font-mono flex-col md:flex-col">
<ol>
<li>Sliced Greens</li>
<li>Waldrof Salad</li>
<li>Russian Salad</li>
<li>Coleslaw Salad</li>
<li>Bean Sprouts</li>
<li>Caesar Salad</li>
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


        <div className="w-1/2 bg-white border-rounded border-e-red-200 mx-auto py-6 my-5 flex flex-row border-gray-200 rounded-lg shadow-lg ">
        <div class="flex md:flex-row items-center md:items-start">
     
      <div class="w-full md:w-1/2 p-4">
        <h1 class="text-2xl font-bold mb-4">Choice of Soup</h1>
        <p class="text-gray-700 mb-4 font-mono flex-col md:flex-col">
<ol>
<li>Man chow Soup</li>
<li>Minestrone Soup</li>
<li>Hot 'n' Sour Soup</li>
<li>Tomato Soup</li>
<li>Veg. Clear Soup</li>
<li>Creme de Mushroom</li>
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
      <img src={a10} alt="Logo" className="h-96 " />
      </div>
        </div>
        
        </div>

        </div>
  )
}

export default CaterersMenu
