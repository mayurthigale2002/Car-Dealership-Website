import React from "react";
import {
  FaCar,
  FaTools,
  FaMoneyCheckAlt,
  FaRoad,
  FaBullseye,
  FaEye,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-black text-white mt-16">

      {/* Hero Section with Image */}
      <div
        className="relative pt-32 pb-55 text-center"
        data-aos="fade-up"
      >
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="Cars"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-red-500">MyCars</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto px-6">
            Your trusted automotive partner delivering quality vehicles,
            reliable services, and exceptional customer experiences.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h2 className="text-3xl font-semibold mb-4">
            Who We Are
          </h2>
          <p className="text-gray-400 mb-4">
            MyCars is a complete automotive solutions platform offering car
            sales, financing, servicing, and roadside assistance—all in one
            place.
          </p>
          <p className="text-gray-400">
            Our expert team helps customers make confident decisions with
            transparency, trust, and technology.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
          alt="Car showroom"
          className="rounded-xl shadow-lg"
          data-aos="fade-left"
        />
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <div
          className="bg-gray-800 p-8 rounded-xl"
          data-aos="fade-up"
        >
          <div className="text-3xl text-red-500 mb-4">
            <FaBullseye />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-400">
            To simplify car ownership by delivering reliable vehicles,
            transparent pricing, and world-class customer service.
          </p>
        </div>

        <div
          className="bg-gray-800 p-8 rounded-xl"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="text-3xl text-red-500 mb-4">
            <FaEye />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-400">
            To become a trusted automotive brand known for innovation,
            quality, and long-term customer relationships.
          </p>
        </div>
      </div>

    </section>
  );
};

export default About;
