import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const servicesOptions = [
  "Car Sales",
  "Car Repair & Maintenance",
  "Fuel & Gas Services",
  "Car Insurance",
  "Car Tracking & GPS",
  "Car Performance Tuning",
  "Car Accessories",
  "Car Wash & Detailing",
  "Emergency Roadside Assistance",
  "Car Recycling & Disposal"
];

const BookService = () => {
  const navigate = useNavigate(); // useNavigate hook

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carModel: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: send form data to API here

    alert("Your service booking has been submitted!");

    // Clear the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      carModel: "",
      service: "",
      message: ""
    });

    // Redirect to Services page after submission
    navigate("/services"); 
  };

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <h2 className="text-5xl text-yellow-400 font-bold text-center mb-16 drop-shadow-lg">
        Book Your Service
      </h2>

      <form 
        onSubmit={handleSubmit} 
        className="max-w-3xl mx-auto bg-gray-800 bg-opacity-80 p-8 rounded-2xl shadow-xl space-y-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            className="flex-1 p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            value={formData.email} 
            onChange={handleChange} 
            className="flex-1 p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            value={formData.phone} 
            onChange={handleChange} 
            className="flex-1 p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
            required
          />
          <input 
            type="text" 
            name="carModel" 
            placeholder="Car Model" 
            value={formData.carModel} 
            onChange={handleChange} 
            className="flex-1 p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        >
          <option value="" disabled>Select a Service</option>
          {servicesOptions.map((service, idx) => (
            <option key={idx} value={service}>{service}</option>
          ))}
        </select>

        <textarea
          name="message"
          placeholder="Additional Message (Optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          rows={4}
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookService;
