// src/App.js
import React from "react";
import Footer from "./Footer";
import Menu from "./Menu"; 
import Slider from "./Slider";
import Services from "./Services";
import ContactPage from "./ContactPage";
import ResturantMenu from "./ResturantMenu";
import CaterersMenu from "./CaterersMenu";

import "@fortawesome/fontawesome-free/css/all.min.css";
// Assuming you have a Menu component

function App() {
  return (
    <div>
      <Menu />
      <main className="container-fluid">
        
      </main>
      <Slider />
       <ContactPage/>
       <ResturantMenu/>
       <CaterersMenu/>
       <Services/>
      <Footer />
     
    </div>
  );
}

export default App;
