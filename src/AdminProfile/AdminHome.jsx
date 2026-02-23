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

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchData();
  }, []);


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


  return (
  <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Centered Content */}
    <div className="relative z-10 w-full max-w-6xl px-6 text-center">
      <h1 className="text-4xl font-bold mb-10 text-white">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center gap-4">
            <FaCar className="text-red-600 text-4xl" />
            <h2 className="text-2xl font-semibold">{cars.length}</h2>
            <p className="text-gray-600">Total Cars</p>
          </div>
        </div>

        <div
          className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-col items-center gap-4">
            <FaUsers className="text-blue-600 text-4xl" />
            <h2 className="text-2xl font-semibold">{users.length}</h2>
            <p className="text-gray-600">Total Users</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default AdminHome;
