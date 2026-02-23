import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="w-full min-h-screen overflow-hidden text-white flex items-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://blog.serchen.com/wp-content/uploads/2024/06/car-brand-logos-1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Container */}
      <div className="max-w-7xl w-full mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* Left Text Section */}
        <div data-aos="fade-right">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Drive the <span className="text-red-500">Future</span>
          </h1>

          <p className="text-gray-300 mb-8 md:w-4/5">
            Experience luxury, performance, and innovation with our latest
            car models designed for modern roads.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/cars")}
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold transition"
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

        {/* Right Image Section */}
        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Car"
            className="w-full max-w-[500px] h-[300px] md:h-[400px] object-cover rounded-xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;