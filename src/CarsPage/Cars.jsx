import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Cars = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const brands = [
    {
      name: "Tata",
      slug: "tata",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=80",
    },
    {
      name: "Mahindra",
      slug: "mahindra",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/9/brands/logos/mahindra.jpg?v=1629973668273&q=80",
    },
    {
      name: "Hyundai",
      slug: "hyundai",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=80",
    },
    {
      name: "Maruti Suzuki",
      slug: "Maruti_Suzuki",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=80",
    },
    {
      name: "Kia",
      slug: "kia",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/70/brands/logos/kia.jpg?v=1630057189593&q=80",
    },
    {
      name: "Toyota",
      slug: "toyota",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/toyota.jpg?v=1630055705330&q=80",
    },
    {
      name: "Honda",
      slug: "honda",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/7/brands/logos/honda.jpg?v=1630056209549&q=80",
    },
    {
      name: "Volkswagen",
      slug: "volkswagen",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/20/brands/logos/volkswagen.jpg?v=1630056096439&q=80",
    },
    {
      name: "Skoda",
      slug: "skoda",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/15/brands/logos/skoda.jpg?v=1629973842345&q=80",
    },
    {
      name: "Renault",
      slug: "renault",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/45/brands/logos/renault.jpg?v=1630057266767&q=80",
    },
    {
      name: "Nissan",
      slug: "nissan",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/21/brands/logos/nissan.jpg?v=1631163973143&q=80",
    },
    {
      name: "MG",
      slug: "mg",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/72/brands/logos/mg.jpg?v=1631163895654&q=80",
    },
    {
      name: "Jeep",
      slug: "jeep",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/43/brands/logos/jeep.jpg?v=1631163646486&q=80",
    },
    {
      name: "BMW",
      slug: "bmw",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=80",
    },
    {
      name: "Mercedes-Benz",
      slug: "mercedesbenz",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/11/brands/logos/mercedes-benz.jpg?v=1629973270530&q=80",
    },
    {
      name: "Audi",
      slug: "audi",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/18/brands/logos/audi.jpg?v=1630055874070&q=80",
    },
    {
      name: "Volvo",
      slug: "volvo",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/37/brands/logos/volvo.jpg?v=1641478299001&q=80",
    },
    {
      name: "Lexus",
      slug: "lexus",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/34/brands/logos/lexus1753266706938.jpg?v=1753266707154&q=80",
    },
    {
      name: "Porsche",
      slug: "porsche",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/19/brands/logos/porsche.jpg?v=1631164048727&q=80",
    },
    {
      name: "Land Rover",
      slug: "landrover",
      logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/23/brands/logos/land-rover1647236056893.jpg?v=1647236057234&q=80",
    },
  ];

  return (
    <div className="bg-black mt-16 min-h-screen text-white py-12">
      <h1
        className="text-center text-4xl md:text-4xl font-bold mb-5"
        data-aos="fade-up"
      >
        <span className="bg-linear-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
          Explore Car Brands
        </span>
        
      </h1>
      <div
        className="flex justify-center mb-4"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <p className="mt-2 mb-15 max-w-3xl text-center text-base sm:text-lg text-gray-600 leading-relaxed">
          Explore a premium collection of cars and bikes with detailed
          information, modern designs, and performance insights to help you
          choose the right vehicle effortlessly.
        </p>
      </div>

   

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="
              bg-gray-900 rounded-xl p-6 
              flex flex-col items-center
              hover:-translate-y-2
              hover:bg-red-500
              transition-all duration-300
            "
          >
            {/* Logo */}
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-20 object-contain mb-4 bg-white p-2 rounded-md"
            />

            {/* Brand Name */}
            <h3 className="font-semibold text-center text-sm mb-4">
              {brand.name}
            </h3>

            {/* Explore Button */}
            <button
              onClick={() => navigate(`/cars/${brand.name.toLowerCase()}`)}
              className="mt-auto bg-black/30 border border-white/20 px-5 py-2 rounded-full"
            >
              Explore →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
