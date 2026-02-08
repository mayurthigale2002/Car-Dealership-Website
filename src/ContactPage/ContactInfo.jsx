import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div
      className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <h2 className="text-2xl font-semibold text-white">Get in Touch</h2>

      <div>
        <p className="text-gray-400">📍 Address</p>
        <p className="text-white">CarHub, Pune, Maharashtra</p>
      </div>

      <div>
        <p className="text-gray-400">📞 Phone</p>
        <p className="text-white">+91 8600832098</p>
      </div>

      <div>
        <p className="text-gray-400">📧 Email</p>
        <p className="text-white">carhub@gmail.com.com</p>
      </div>

      <div>
        <p className="text-gray-400">🛠 Services Support</p>
        <p className="text-white">
          Maintenance, Repairs, Detailing, Insurance & Performance Tuning
        </p>
      </div>

      {/* Social Media */}
      <div>
        <p className="text-gray-400 mb-3">🌐 Follow Us</p>
        <div className="flex gap-4">
          <a
            href="#"
            className="p-3 bg-gray-700 rounded-full text-white hover:bg-red-600 transition duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="p-3 bg-gray-700 rounded-full text-white hover:bg-pink-600 transition duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="p-3 bg-gray-700 rounded-full text-white hover:bg-blue-500 transition duration-300"
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            className="p-3 bg-gray-700 rounded-full text-white hover:bg-blue-700 transition duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
