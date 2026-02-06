import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./HomePages/Home";
import Navbar from "./components/Navbar";
import Cars from "./CarsPage/Cars";
import BrandCars from "./CarsPage/BrandCars";
import Services from "./ServicesPage/Services";
import BookService from "./ServicesPage/BookService";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:brand" element={<BrandCars />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book-services" element={<BookService />} />
      </Routes>
    </Router>
  );
};

export default App;
