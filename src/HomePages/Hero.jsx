import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="min-h-screen text-white flex items-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://blog.serchen.com/wp-content/uploads/2024/06/car-brand-logos-1.jpg')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Text */}
        <div data-aos="fade-right">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-20">
            Drive the <span className="text-red-500">Future</span>
          </h1>
          <p className="text-gray-300 mb-8">
            Experience luxury, performance, and innovation with our latest
            car models designed for modern roads.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/cars")}
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold"
            >
              Explore Cars
            </button>

            <button
              onClick={() => navigate("/testdrive")}
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Book Test Drive
            </button>
          </div>
        </div>

        {/* Image */}
        <div data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Car"
            className="rounded-xl shadow-2xl mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
