import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./NavbarPage/Navbar";

// Home Pages
import Home from "./HomePages/Home";
import Hero from "./HomePages/Hero";
import Categories from "./HomePages/Categories";
import HomeVideo from "./HomePages/HomeVideo";
import Features from "./HomePages/Features";
import Testimonials from "./HomePages/Testimonials";

// Cars Pages
import Cars from "./CarsPage/Cars";
import BrandCars from "./CarsPage/BrandCars";

// Services Pages
import Services from "./ServicesPage/Services";
import BookService from "./ServicesPage/BookService";

// Contact Pages
import ContactPage from "./ContactPage/ContactPage";
import ContactHeader from "./ContactPage/ContactHeader";
import ContactInfo from "./ContactPage/ContactInfo";
import ContactForm from "./ContactPage/ContactForm";
import ContactMap from "./ContactPage/ContactMap";

// About Page
import About from "./AboutPage/About";

// Test Drive Page
import TestDrive from "./TestDrivePage/TestDrive";

// Auth Pages
import Login from "./LoginPage/Login";
import Signup from "./SignupPage/Signup";

// Protected Route
import ProtectedRoute from "./ProtectedRoute";

// Footer Pages
import Footer from "./FooterPage/Footer";
import CarSales from "./FooterPage/CarSales";
import CarFinancing from "./FooterPage/CarFinancing";
import CarServicing from "./FooterPage/CarServicing";
import RoadsideAssistance from "./FooterPage/RoadsideAssistance";
import UserProfile from "./UserProfile/UserProfile";
import Booking from "./UserProfile/Booking";

const App = () => {
  const isAuth = localStorage.getItem("isAuth");

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/homevideo" element={<HomeVideo />} />
        <Route path="/features" element={<Features />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />

        {/* Contact Pages (Public) */}
        <Route path="/contactheader" element={<ContactHeader />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contactinfo" element={<ContactInfo />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/contactmap" element={<ContactMap />} />

        {/* Services Page */}
        <Route path="/services" element={<Services />} />


        {/* Footer Pages */}
        <Route path="/sales" element={<CarSales />} />
        <Route path="/financing" element={<CarFinancing />} />
        <Route path="/servicing" element={<CarServicing />} />
        <Route path="/roadside" element={<RoadsideAssistance />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booking" element={<Booking />} />

        {/* Protected Pages */}

        <Route
          path="/cars/:brand"
          element={
            <ProtectedRoute>
              <BrandCars />
            </ProtectedRoute>
          }
        />

        <Route
          path="/book-services"
          element={
            <ProtectedRoute>
              <BookService />
            </ProtectedRoute>
          }
        />

        <Route
          path="/testdrive"
          element={
            <ProtectedRoute>
              <TestDrive />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={isAuth ? <UserProfile /> : <Navigate to="/login" />}
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
