import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
      className="
        bg-black/70 backdrop-blur-lg
        border border-gray-700
        rounded-2xl p-6 h-full
        text-center text-gray-200
        shadow-xl
        hover:scale-105 hover:border-yellow-400
        transition-all duration-300
      "
    >
      {/* Icon */}
      <div className="text-5xl text-yellow-400 mb-4 flex justify-center">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
