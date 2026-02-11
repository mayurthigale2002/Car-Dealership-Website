import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCar, FaUsers, FaTrash, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";

const AdminHome = () => {
  const [cars, setCars] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchData();
  }, []);

  // Fetch cars and users
  const fetchData = async () => {
    try {
      setLoading(true);
      const [carsRes, usersRes] = await Promise.all([
        axios.get("https://698c204a21a248a273608bc4.mockapi.io/cars"),
        axios.get("https://698c204a21a248a273608bc4.mockapi.io/users"),
      ]);
      setCars(carsRes.data);
      setUsers(usersRes.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch data!");
    } finally {
      setLoading(false);
    }
  };

  // Delete car
  const handleDeleteCar = async (id) => {
    if (!window.confirm("Are you sure you want to delete this car?")) return;
    try {
      await axios.delete(`https://698c204a21a248a273608bc4.mockapi.io/cars/${id}`);
      setCars(cars.filter((car) => car.id !== id));
      toast.success("Car deleted successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete car!");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-[1.02]"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-4">
            <FaCar className="text-red-600 text-3xl" />
            <div>
              <h2 className="text-xl font-semibold">{cars.length}</h2>
              <p className="text-gray-500">Total Cars</p>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-[1.02]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex items-center gap-4">
            <FaUsers className="text-blue-600 text-3xl" />
            <div>
              <h2 className="text-xl font-semibold">{users.length}</h2>
              <p className="text-gray-500">Total Users</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminHome;
