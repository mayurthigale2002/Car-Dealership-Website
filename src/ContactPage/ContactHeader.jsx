import React from "react";

const ContactHeader = () => {
  return (
    <section className="w-full bg-black overflow-x-hidden">
      <div className="relative w-full py-20">

        {/* Background Layer */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">

          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-wide"
          >
            <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            We’d love to hear from you. Get in touch today to experience the best
            in automotive service and support.
          </p>

          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto mt-6 rounded-full"
          ></div>

        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
