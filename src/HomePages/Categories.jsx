import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  {
    name: "SUV",
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5",
    path: "/cars/suv",
  },
  {
    name: "Sedan",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
    path: "/cars/sedan",
  },
  {
    name: "Hatchback",
    image: "https://images.unsplash.com/photo-1583267746897-2cf415887172",
    path: "/cars/hatchback",
  },
  {
    name: "Electric Cars",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
    path: "/cars/electric",
  },
  {
    name: "Luxury Cars",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16",
    path: "/cars/luxury",
  },
  {
    name: "Sports Cars",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
    path: "/cars/sports",
  },
  {
    name: "Hybrid Cars",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtNFAJWMQQl6HRYrynFtxZaBYuj7rJNEBcg&s",
    path: "/cars/hybrid",
  },
  {
    name: "Coupe",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    path: "/cars/coupe",
  },
  {
    name: "Convertible",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    path: "/cars/convertible",
  },
  {
    name: "Tesla Models",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    path: "/cars/pickup",
  },
];

const Categories = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full py-16 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">

        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Explore Car Categories
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Discover vehicles built for every road, lifestyle, and passion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">

          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => navigate(cat.path)}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="
                relative
                rounded-2xl
                overflow-hidden
                shadow-xl
                cursor-pointer
                h-44 sm:h-56 lg:h-60
                transform
                transition
                duration-300
                hover:scale-105
              "
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Title */}
              <div className="absolute bottom-4 left-4">
                <h3 className="text-base sm:text-lg font-semibold">
                  {cat.name}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Categories;