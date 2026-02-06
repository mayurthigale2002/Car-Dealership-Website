import { useNavigate } from "react-router-dom";

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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtNFAJWMQQl6HRYrynFtxZaBYuj7rJNEBcg&s",
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
    name: "Pickup Trucks",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    path: "/cars/pickup",
  },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Car Categories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover vehicles built for every road, lifestyle, and passion.
          </p>
        </div>

        {/* Swipeable Categories */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide lg:grid lg:grid-cols-5 lg:overflow-visible">

          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => navigate(cat.path)}
              data-aos="zoom-in"
              data-aos-delay={index * 80}
              className="min-w-[260px] lg:min-w-0 cursor-pointer group relative rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition"></div>

              {/* Text */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-semibold">{cat.name}</h3>
                <p className="text-sm text-gray-300 mt-1">
                  View Cars →
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Categories;
