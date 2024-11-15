import React from 'react'
import a11 from "./images/a11.jpg"
import a12 from "./images/a12.jpg"
import a13 from "./images/a13.jpg"
import a14 from "./images/a14.jpg"
import a15 from "./images/a15.jpg"
import a16 from "./images/a16.jpg"
import a17 from "./images/a17.jpg"
import a18 from "./images/a18.jpg"

const services = () => {
  return (
      <div class="bg-black"><h2 className="text-3xl font-extrabold text-white text-center mb-6">Services</h2>
<div class="flex flex-row flex-wrap">
    <div class="rounded p-5 w-1/3">
        <img src={a11} class="rounded p-5 px-5 w-full"/>
        <p class="text-white text-center">Wedding PLaner</p>
    </div>
    <div class="rounded p-5 px-5 w-1/3">
        <img src={a12} class="rounded p-5 px-5 w-full"/>
        <p class="text-white text-center">Catering</p>
    </div>
    <div class="rounded p-5 px-5 w-1/3">
        <img src={a13} class="rounded p-5 px-5 w-full"/>
        <p class="text-white text-center">Decor</p>
    </div>
</div>
<div class="flex flex-row flex-wrap">
    <div class="rounded p-5 px-5 w-1/3">
        <img src={a14} class="rounded p-5 px-5 w-full"/>
        <p class="text-white text-center">Corporate Lunch Packs</p>
    </div>
    <div class="rounded p-5 w-1/3">
        <img src={a15} class="rounded p-5 px-5 w-full"/>
        <p class="text-white text-center">Photography</p>
    </div>
    <div class="rounded p-5 w-1/3">
        <img src={a16} class="rounded p-5 px-5 w-full"/>
        <p class="text-white text-center">Birthday Party</p>
    </div>
</div>
<div class="flex flex-row"> 
    <img src={a17} class="h-full w-1/4 rounded-lg mx-5"/>
    <img src={a18} class="h-full w-1/4 rounded-lg"/>We serve food, harmony, and laughter. Making delicious food a
 <div class="flex flex-col "> <h1 class=" text-white text-center mx-24">QUALITY & BALANCED FOOD</h1>
  <p class="font-mono text-justify text-center text-white">and providing a wonderful eating experience

We see our customer as invited guests to a party, and we are the hosts. It's our job every day to make every important aspect of the customer experience a little bit better.</p></div>

</div>

</div>

  )
}

export default services;
