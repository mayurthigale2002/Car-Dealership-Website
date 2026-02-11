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
