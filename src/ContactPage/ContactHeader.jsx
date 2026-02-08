import React from "react";

const ContactHeader = () => {
  return (
    <div className="relative overflow-hidden bg-black py-20">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="relative z-10 text-center px-4">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide"
        >
          <span className="bg-linear-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            Contact Us
          </span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          We’d love to hear from you. Get in touch today to experience the best
          in automotive service and support.
        </p>

        {/* Decorative line */}
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="w-24 h-1 bg-linear-to-r from-red-500 to-orange-400 mx-auto mt-6 rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default ContactHeader;
