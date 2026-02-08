import React from "react";

const ContactForm = () => {
  return (
    <form
      className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-5"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Send a Message
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 rounded bg-gray-700 outline-none text-white placeholder-gray-400"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 rounded bg-gray-700 outline-none text-white placeholder-gray-400"
      />

      <textarea
        rows="4"
        placeholder="Your Message"
        className="w-full p-3 rounded bg-gray-700 outline-none text-white placeholder-gray-400"
      />

      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-300 p-3 rounded font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
