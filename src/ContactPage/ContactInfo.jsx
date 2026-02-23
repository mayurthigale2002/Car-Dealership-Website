import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div
      className="
        w-full
        max-w-xl
        mx-auto
        bg-gray-800
        p-6 sm:p-8
        rounded-2xl
        shadow-xl
        space-y-6
        overflow-hidden
      "
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-white">
        Get in Touch
      </h2>

      <div>
        <p className="text-gray-400 text-sm">📍 Address</p>
        <p className="text-white break-words">
          CarHub, Pune, Maharashtra
        </p>
      </div>

      <div>
        <p className="text-gray-400 text-sm">📞 Phone</p>
        <p className="text-white break-words">
          +91 8600832098
        </p>
      </div>

      <div>
        <p className="text-gray-400 text-sm">📧 Email</p>
        <p className="text-white break-words">
          carhub@gmail.com
        </p>
      </div>

      <div>
        <p className="text-gray-400 text-sm">🛠 Services Support</p>
        <p className="text-white break-words">
          Maintenance, Repairs, Detailing, Insurance & Performance Tuning
        </p>
      </div>

      {/* Social Media */}
      <div>
        <p className="text-gray-400 mb-3 text-sm">🌐 Follow Us</p>

        <div className="flex flex-wrap gap-4">
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
