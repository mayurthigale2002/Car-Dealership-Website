import React from "react";
import { FaCarSide, FaCalendarAlt, FaUser, FaPhone } from "react-icons/fa";

const TestDrive = () => {
  return (
    <div className="mt-16 px-6 md:px-16 lg:px-24 bg-black text-white py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-500">
          Book a Test Drive
        </h1>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Experience your dream car before you buy it. Choose your preferred
          model, select a date, and we’ll take care of the rest.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        
        {/* Left Image (Fixed Size) */}
        <div className="h-105 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9"
            alt="Test Drive"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form (Same Height as Image) */}
        <div className="bg-gray-900 shadow-xl rounded-xl p-8 h-105 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-6 text-gray-200">
            Test Drive Details
          </h2>

          <form className="space-y-5">
            {/* Name */}
            <div className="flex items-center gap-3 border border-gray-700 rounded-lg px-4 py-3">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 border border-gray-700 rounded-lg px-4 py-3">
              <FaPhone className="text-gray-400" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>

            {/* Car Model */}
            <div className="flex items-center gap-3 border border-gray-700 rounded-lg px-4 py-3">
              <FaCarSide className="text-gray-400" />
              <select className="w-full bg-transparent outline-none text-sm text-gray-400">
                <option>Select Car Model</option>
                <option>BMW X5</option>
                <option>Audi A6</option>
                <option>Mercedes C-Class</option>
                <option>Toyota Fortuner</option>
                <option>Honda City</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex items-center gap-3 border border-gray-700 rounded-lg px-4 py-3">
              <FaCalendarAlt className="text-gray-400" />
              <input type="date" className="w-full bg-transparent outline-none text-sm" />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-linear-to-r from-red-500 to-orange-400 text-white font-medium hover:opacity-90 transition"
            >
              Book Test Drive
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestDrive;
