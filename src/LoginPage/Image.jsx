import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Image = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      data-aos="fade-right"
      className="
        hidden md:flex flex-col justify-center p-12 text-white
        bg-cover bg-center relative overflow-hidden
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/80" />

      {/* Content */}
      <div className="relative z-10 max-w-md">
        <h1 className="text-4xl font-extrabold mb-4">
          Welcome Back ...!
        </h1>

        <p className="text-gray-200 text-lg leading-relaxed">
          Login to explore premium cars, book test drives,
          and manage your CarHub experience seamlessly.
        </p>
      </div>
    </div>
  );
};

export default Image;
