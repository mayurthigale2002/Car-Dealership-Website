// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Home = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-in-out",
//     });
//   }, []);

//   return (
//     <div className="w-full overflow-hidden">
//       {/* Hero Section */}
//       <section className="min-h-screen bg-black text-white flex items-center">
//         <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
//           {/* Text */}
//           <div data-aos="fade-right">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               Drive the <span className="text-red-500">Future</span>
//             </h1>
//             <p className="text-gray-300 mb-8">
//               Experience luxury, performance, and innovation with our latest
//               car models designed for modern roads.
//             </p>
//             <div className="flex gap-4">
//               <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold">
//                 Explore Cars
//               </button>
//               <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
//                 Book Test Drive
//               </button>
//             </div>
//           </div>

//           {/* Image */}
//           <div data-aos="fade-left">
//             <img
//               src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
//               alt="Car"
//               className="rounded-xl shadow-2xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-gray-100">
//         <div className="container mx-auto px-6">
//           <h2
//             className="text-3xl md:text-4xl font-bold text-center mb-12"
//             data-aos="fade-up"
//           >
//             Why Choose Our Cars
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Card 1 */}
//             <div
//               className="bg-white p-6 rounded-xl shadow-lg text-center"
//               data-aos="zoom-in"
//             >
//               <h3 className="text-xl font-semibold mb-3">High Performance</h3>
//               <p className="text-gray-600">
//                 Powerful engines with smooth handling for thrilling drives.
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div
//               className="bg-white p-6 rounded-xl shadow-lg text-center"
//               data-aos="zoom-in"
//               data-aos-delay="150"
//             >
//               <h3 className="text-xl font-semibold mb-3">Luxury Interior</h3>
//               <p className="text-gray-600">
//                 Premium interiors designed for comfort and elegance.
//               </p>
//             </div>

//             {/* Card 3 */}
//             <div
//               className="bg-white p-6 rounded-xl shadow-lg text-center"
//               data-aos="zoom-in"
//               data-aos-delay="300"
//             >
//               <h3 className="text-xl font-semibold mb-3">Advanced Safety</h3>
//               <p className="text-gray-600">
//                 Top-class safety features for peace of mind on every journey.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-black text-white text-center">
//         <div className="container mx-auto px-6" data-aos="fade-up">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to Own Your Dream Car?
//           </h2>
//           <p className="text-gray-400 mb-8">
//             Choose from a wide range of models and start your journey today.
//           </p>
//           <button className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-lg font-semibold">
//             Get Started
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;





import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import components
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Categories from "./Categories";




const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);


  return (
    <div>
      <Hero />
      <Categories/>
      <Features />
      <Testimonials />

    </div>
  );
};

export default Home;
