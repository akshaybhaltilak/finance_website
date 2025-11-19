import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import Apply from "./Pages/Apply";
import About from "./Pages/About";
import BusinessPartner from "./Pages/BusinessPartner";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import Footer from "./Components/Footer";


export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/apply" element={<Apply/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/partner" element={<BusinessPartner/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/faq" element={<Faq/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
