// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Booking = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     car: "",
//     date: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     alert("Booking Confirmed 🚗🔥");
//     navigate("/profile");
//   };

//   return (
//     <div className="min-h-screen bg-black flex justify-center items-start pt-24 px-4">
//       {/* Glass Card */}
//       <div
//         data-aos="zoom-in"
//         className="w-full max-w-xl p-6 rounded-2xl
//         bg-white/10 backdrop-blur-xl border border-white/20
//         shadow-[0_0_40px_rgba(239,68,68,0.25)]"
//       >
//         {/* Header */}
//         <div data-aos="fade-down" className="text-center">
//           <h2 className="text-2xl font-bold text-white tracking-wide">
//             Book Your Car
//           </h2>
//           <p className="text-gray-400 text-sm mt-2">
//             Schedule your test drive or booking in seconds
//           </p>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={submitHandler}
//           data-aos="fade-up"
//           data-aos-delay="200"
//           className="mt-8 space-y-4"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-2.5 rounded-lg
//             bg-black/60 text-white border border-white/20
//             focus:ring-2 focus:ring-red-500 outline-none"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2.5 rounded-lg
//             bg-black/60 text-white border border-white/20
//             focus:ring-2 focus:ring-red-500 outline-none"
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Mobile Number"
//             required
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full px-4 py-2.5 rounded-lg
//             bg-black/60 text-white border border-white/20
//             focus:ring-2 focus:ring-red-500 outline-none"
//           />

//           <select
//             name="car"
//             required
//             value={formData.car}
//             onChange={handleChange}
//             className="w-full px-4 py-2.5 rounded-lg
//             bg-black/60 text-white border border-white/20
//             focus:ring-2 focus:ring-red-500 outline-none"
//           >
//             <option value="">Select Car Model</option>
//             <option>Tata Nexon</option>
//             <option>Hyundai Creta</option>
//             <option>Mahindra Thar</option>
//             <option>BMW X5</option>
//           </select>

//           <input
//             type="date"
//             name="date"
//             required
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full px-4 py-2.5 rounded-lg
//             bg-black/60 text-white border border-white/20
//             focus:ring-2 focus:ring-red-500 outline-none"
//           />

//           <button
//             type="submit"
//             className="w-full py-3 rounded-lg font-semibold
//             bg-red-600 text-white
//             hover:bg-red-700 transition duration-300"
//           >
//             Confirm Booking
//           </button>
//         </form>

//         {/* Footer */}
//         <p
//           data-aos="fade-up"
//           data-aos-delay="400"
//           className="text-center text-gray-400 text-xs mt-6"
//         >
//           Our team will contact you shortly after confirmation 🚀
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Booking;







import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Booking = () => {
  const [bookings, setBookings] = useState([]);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const allBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const userBookings = allBookings.filter(
      (b) => b.userId === userId
    );

    setBookings(userBookings);
  }, [userId]);

  return (
    <div className="min-h-screen bg-black pt-24 px-4">
      <h2
        data-aos="fade-down"
        className="text-center text-3xl font-bold text-white mb-10"
      >
        My Booking cars ...!!
      </h2>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-400">
          No bookings yet. Book your first car!
        </p>
      ) : (
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              data-aos="zoom-in"
              className="bg-white/10 backdrop-blur-xl
              border border-white/20 rounded-2xl p-6
              shadow-[0_0_30px_rgba(239,68,68,0.2)]"
            >
              <h3 className="text-xl font-semibold text-white">
                {booking.car}
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                📅 Date: {booking.date}
              </p>

              <p className="text-gray-400 text-sm">
                📞 Phone: {booking.phone}
              </p>

              <span className="inline-block mt-4 px-3 py-1 text-sm
                bg-green-600/20 text-green-400 rounded-full">
                {booking.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Booking;
