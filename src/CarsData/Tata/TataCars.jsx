// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import AOS from "aos";
// // import "aos/dist/aos.css";

// // const TataCars = () => {
// //   const [cars, setCars] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     AOS.init({ duration: 800 });

// //     axios
// //       .get("/db.json")
// //       .then((res) => {
// //         setCars(res.data.tataCars); // 👈 fetch Tata only
// //       })
// //       .catch((err) => console.error(err));
// //   }, []);

// //   return (
// //     <section className="bg-black min-h-screen text-white py-12">
// //       <h2 className="text-4xl font-bold text-center mb-4">Tata Cars</h2>

// //       <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
// //         Discover Tata cars with modern design, advanced safety features, and
// //         powerful performance built for Indian roads.
// //       </p>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
// //         {cars.map((car) => (
// //           <div
// //             key={car.id}
// //             data-aos="fade-up"
// //             className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition"
// //           >
// //             <img
// //               src={car.image}
// //               alt={car.name}
// //               className="w-full h-44 object-cover"
// //             />

// //             <div className="p-4 text-center">
// //               <h3 className="font-semibold text-lg">{car.name}</h3>
// //               <p className="text-sm text-gray-400">{car.price}</p>

// //               <button
// //                 onClick={() => navigate(`/cars/tata/${car.id}`)}
// //                 className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm"
// //               >
// //                 Explore
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default TataCars;





// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const TataCars = () => {
//   const [cars, setCars] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 800 });

//     axios
//       .get("http://localhost:3000/brands")
//       .then((res) => {
//         setCars(res.data.tata); // ✅ correct for your API
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <section className="bg-black min-h-screen text-white py-12">
//       <h2 className="text-4xl font-bold text-center mb-4">Tata Cars</h2>

//       <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
//         Discover Tata cars with modern design, advanced safety features, and
//         powerful performance built for Indian roads.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
//         {cars.map((car, index) => (
//           <div
//             key={index}
//             data-aos="fade-up"
//             className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
//           >
//             <img
//               src={car.image}
//               alt={car.name}
//               className="w-full h-44 object-cover"
//             />

//             <div className="p-4 text-center">
//               <h3 className="font-semibold text-lg">{car.name}</h3>
//               <p className="text-sm text-gray-400">{car.model}</p>
//               <p className="text-red-400 font-semibold">{car.price}</p>

//               <button
//                 onClick={() =>
//                   navigate("/cars/tata/details", { state: car })
//                 }
//                 className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm transition"
//               >
//                 Explore
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TataCars;
