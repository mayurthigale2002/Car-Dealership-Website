import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCar,
  FaTools,
  FaGasPump,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaTachometerAlt,
  FaCarSide,
  FaRecycle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";

// Services data
const servicesData = [
  {
    icon: <FaCar />,
    title: "Car Sales",
    description:
      "Buy or sell your car easily with trusted valuations and secure transactions.",
  },
  {
    icon: <FaTools />,
    title: "Car Repair & Maintenance",
    description: "Professional repairs and maintenance for all car models.",
  },
  {
    icon: <FaGasPump />,
    title: "Fuel & Gas Services",
    description:
      "Fuel delivery, consumption tracking, and nearby gas stations.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Car Insurance",
    description: "Comprehensive insurance coverage tailored for your car.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Car Tracking & GPS",
    description: "Monitor your car location in real-time for safety.",
  },
  {
    icon: <FaTachometerAlt />,
    title: "Car Performance Tuning",
    description: "Enhance engine performance, speed, and fuel efficiency.",
  },
  {
    icon: <FaCarSide />,
    title: "Car Accessories",
    description: "Premium accessories to customize and improve your car.",
  },
  {
    icon: <FaRecycle />,
    title: "Car Recycling & Disposal",
    description: "Eco-friendly disposal and recycling of old vehicles.",
  },
  {
    icon: <FaTools />,
    title: "Emergency Roadside Assistance",
    description: "24/7 support for breakdowns, towing, and tire changes.",
  },
  {
    icon: <FaGasPump />,
    title: "Car Wash & Detailing",
    description: "Professional cleaning and detailing services.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: true,
    });
  }, []);

  // Navigate to booking page
  const handleBooking = () => {
    navigate("/book-services");
  };

  return (
    <div
      className="min-h-screen py-20 px-4 overflow-y-auto relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://e1.pxfuel.com/desktop-wallpaper/678/439/desktop-wallpaper-black-car-amoled-phone-black-car-thumbnail.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <h2
        className="text-5xl mt-10 font-bold text-center mb-10 text-gray-400 drop-shadow-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <span className="bg-linear-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
          Car Services
        </span>
      </h2>
     <p
  className="text-center text-gray-600 mb-16 mx-auto max-w-3xl text-lg drop-shadow-md"
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-easing="ease-in-out"
  data-aos-once="true"
>
  At{" "}
  <span className="text-yellow-600 font-semibold">Our Car Services</span>,
  all-in-one automotive solutions including maintenance, diagnostics, repairs,
  detailing, insurance, and performance tuning—delivering safety, reliability,
  and a smooth, hassle-free driving experience.
</p>


      {/* Book Service Button */}
      <button
        onClick={handleBooking}
        className="bg-linear-to-r from-yellow-600 to-orange-300 
             text-black font-bold py-3 px-8 rounded-xl 
             mx-auto block mb-10 shadow-lg border-t-2 border-yellow-400
             hover:from-yellow-100 hover:to-orange-900 
             transition-all duration-300 transform hover:scale-105 
             hover:shadow-2xl hover:-translate-y-1"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Book Your Service →
        <hr className="border-t-2 border-black-400 my-2"></hr>
      </button>

      {/* Services Cards */}
      <div className="flex flex-nowrap lg:grid lg:grid-cols-4 gap-10 lg:gap-10 max-w-7xl mx-auto overflow-x-auto lg:overflow-x-visible p-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-700">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="w-80 lg:w-auto snap-start"
            data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
            data-aos-delay={index * 150}
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>

      {/* Footer text */}
      <p className="text-center text-gray-300 mt-16 text-lg drop-shadow-md">
        And many more car-related services to make your driving experience
        smooth and safe.
      </p>
    </div>
  );
};

export default Services;
