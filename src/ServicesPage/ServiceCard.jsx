import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 bg-opacity-80 text-gray-100 p-6 rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 h-75 flex flex-col justify-between">
      <div className="text-5xl text-center mb-4 text-yellow-400">{icon}</div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
