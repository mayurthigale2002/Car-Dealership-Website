import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BrandCars = () => {
  const { brand } = useParams(); // tata, mahindra, etc
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/brands")
      .then((res) => {
        setCars(res.data[brand] || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cars:", err);
        setLoading(false);
      });
  }, [brand]);

  if (loading) {
    return (
      <div className="text-center mt-20 text-white">
        Loading cars...
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white py-12 px-6 mt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 capitalize">
        {brand} Cars
      </h2>

      {cars.length === 0 ? (
        <p className="text-center text-gray-400">
          No cars found for this brand.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="
                bg-gray-900 rounded-xl overflow-hidden
                hover:-translate-y-2 hover:shadow-xl
                transition-all duration-300
              "
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">
                  {car.name}
                </h3>
                <p className="text-sm text-gray-400 mb-1">
                  Model: {car.model}
                </p>
                <p className="text-red-400 font-bold">
                  {car.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandCars;
