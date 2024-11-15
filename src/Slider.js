// src/Slider.js
import React, { useState, useEffect } from "react";
import a1 from "./images/a1.jpg";
import a2 from "./images/a2.jpg";
import a3 from "./images/a3.jpg";
import App from "./App.css";
import logo from "./images/logo.png"; 
import ContactPage from "./ContactPage.js";


const images = [a1, a2, a3];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full  mx-auto">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
           className="min-w-fit a object-cover"
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        &#10095;
      </button>

      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      <div class="container mx-auto p-6 "><h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">About Us</h2>
    <div class="flex flex-col md:flex-row items-center md:items-start">

     
      <div class="w-full md:w-1/2 p-4">
      <img src={logo} alt="Logo" className="h-96 w-96" />
      </div>

     
      <div class="w-full md:w-1/2 p-4">
        <h1 class="text-2xl font-bold mb-4">Welcome to Master Chef</h1>
        <p class="text-gray-700 mb-4 font-mono">
        Nestled in the heart of Gorakhpur, Master Chef is a culinary haven where passion for food meets a love for community. Our restaurant offers an exceptional dining experience, combining authentic flavors, fresh ingredients, and a warm, inviting atmosphere. We are committed to delivering dishes that are both creative and rooted in tradition, ensuring every meal is a memorable one
        </p>
        <h1 class="text-2xl font-bold mb-4">Our Menu</h1>
        <p class="text-gray-700 mb-4 font-mono">Our menu features a diverse array of dishes, celebrating seasonal ingredients and local produce. From our signature [mention a popular dish] to our carefully curated selection of wines and cocktails, every item is designed to delight the senses. Whether you’re here for a casual lunch, a romantic dinner, or a special celebration, we have something to suit every taste.</p>
      </div>

    </div>
  </div>

  <div class="container mx-auto p-6 ">
    <div class="flex flex-col md:flex-row items-center md:items-start">

  <div class="w-full md:w-1/2 p-4">
        <h1 class="text-2xl font-bold mb-4">The Experience</h1>
        <p class="text-gray-700 mb-4 font-mono">
        Step into Master Chef and be transported to a place of comfort and elegance. Our interior combines modern design with rustic elements, creating a relaxed yet sophisticated ambiance. With warm lighting, comfortable seating, and attentive service, our goal is to make every guest feel at home.</p>
        <h1 class="text-2xl font-bold mb-4">Our Commitment</h1>
        <p class="text-gray-700 mb-4 font-mono">At Master Chef, we believe in supporting our community and practicing sustainability. We prioritize sourcing ingredients from local farmers and suppliers, ensuring the freshest quality and reducing our environmental impact. Our commitment extends beyond the food, with efforts to minimize waste and support local businesses.</p>
       </div>

      <div class="w-full md:w-1/2 p-4">
      <img src={logo} alt="Logo" className="h-80 w-80" />
      </div>
    </div>
    </div>


  
   
    
 


    </div>
    
   

);
}

export default Slider;
