import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://698c204a21a248a273608bc4.mockapi.io/bookings");
      setBookings(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch bookings!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;
    try {
      await axios.delete(`https://698c204a21a248a273608bc4.mockapi.io/bookings/${id}`);
      setBookings(bookings.filter((b) => b.id !== id));
      toast.success("Booking canceled!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to cancel booking!");
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const res = await axios.put(`https://698c204a21a248a273608bc4.mockapi.io/bookings/${id}`, { status });
      setBookings(bookings.map((b) => (b.id === id ? res.data : b)));
      toast.success("Booking status updated!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update status!");
    }
  };

  return (
    <section className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">Bookings / Orders</h3>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        {loading ? (
          <p className="p-4 text-gray-500">Loading bookings...</p>
        ) : (
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
              <tr>
                <th className="border px-4 py-3">ID</th>
                <th className="border px-4 py-3">Customer</th>
                <th className="border px-4 py-3">Car</th>
                <th className="border px-4 py-3">Status</th>
                <th className="border px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="hover:bg-gray-50 transition">
                  <td className="border px-4 py-2">{b.id}</td>
                  <td className="border px-4 py-2">{b.customer}</td>
                  <td className="border px-4 py-2">{b.car}</td>
                  <td className="border px-4 py-2">
                    <select
                      value={b.status}
                      onChange={(e) => handleStatusChange(b.id, e.target.value)}
                      className="border px-2 py-1 rounded-md"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleDelete(b.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center transition transform hover:scale-105"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default AdminBookings;
