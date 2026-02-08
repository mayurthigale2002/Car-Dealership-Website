import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Image = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="hidden md:flex flex-col justify-center p-12 text-white bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://w0.peakpx.com/wallpaper/25/992/HD-wallpaper-bmw-8-series-coupe-black-luxury-cars-shiny-vehicle.jpg')",
      }}
      data-aos="fade-right"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold mb-4">
          Join CarHub ...!
        </h1>
        <p className="text-gray-200 text-lg leading-relaxed">
          Create your account to explore premium cars,
          book test drives, and unlock exclusive features.
        </p>
      </div>
    </div>
  );
};

export default Image;
