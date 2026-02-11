import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit, FaPlus, FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";

const AdminCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newCar, setNewCar] = useState({ name: "", model: "", price: "", image: "" });
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://698c204a21a248a273608bc4.mockapi.io/cars");
      setCars(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch cars!");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCar = async (id) => {
    if (!window.confirm("Are you sure you want to delete this car?")) return;
    try {
      await axios.delete(`https://698c204a21a248a273608bc4.mockapi.io/cars/${id}`);
      setCars(cars.filter((c) => c.id !== id));
      toast.success("Car deleted successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete car!");
    }
  };

  const handleAddCar = async (e) => {
    e.preventDefault();
    if (!newCar.name || !newCar.model || !newCar.price || !newCar.image) {
      toast.error("All fields are required!");
      return;
    }
    try {
      const res = await axios.post("https://698c204a21a248a273608bc4.mockapi.io/cars", newCar);
      setCars([...cars, res.data]);
      setNewCar({ name: "", model: "", price: "", image: "" });
      toast.success("Car added successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add car!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCar((prev) => ({ ...prev, [name]: value }));
  };

  const filteredCars = cars.filter((c) => {
    const brandMatch = selectedBrand ? c.name.toLowerCase() === selectedBrand.toLowerCase() : true;
    const searchMatch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.model.toLowerCase().includes(search.toLowerCase()) ||
      c.price.toLowerCase().includes(search.toLowerCase());
    return brandMatch && searchMatch;
  });

  return (
    <section className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">Manage Cars / Inventory</h3>

      <div className="mb-4 flex gap-2">
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-red-500 outline-none"
        >
          <option value="">All Brands</option>
          {[...new Set(cars.map((c) => c.name.toLowerCase()))].map((b) => (
            <option key={b} value={b}>
              {b.charAt(0).toUpperCase() + b.slice(1)}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by name, model, price"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/3 focus:ring-2 focus:ring-red-500 outline-none"
        />
        <FaSearch className="text-gray-500 mt-2" />
      </div>

      {/* Add Car Form */}
      <form onSubmit={handleAddCar} className="mb-6 flex flex-col md:flex-row gap-4 items-center">
        <input type="text" name="name" placeholder="Car Name" value={newCar.name} onChange={handleChange} className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/4 focus:ring-2 focus:ring-red-500 outline-none" />
        <input type="text" name="model" placeholder="Model" value={newCar.model} onChange={handleChange} className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/4 focus:ring-2 focus:ring-red-500 outline-none" />
        <input type="text" name="price" placeholder="Price" value={newCar.price} onChange={handleChange} className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/4 focus:ring-2 focus:ring-red-500 outline-none" />
        <input type="text" name="image" placeholder="Image URL" value={newCar.image} onChange={handleChange} className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/4 focus:ring-2 focus:ring-red-500 outline-none" />
        <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md flex items-center gap-2 transition transform hover:scale-105">
          <FaPlus /> Add Car
        </button>
      </form>

      {/* Cars List */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        {loading ? (
          <p className="p-4 text-gray-500">Loading cars...</p>
        ) : (
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
              <tr>
                <th className="border px-4 py-3 text-left">ID</th>
                <th className="border px-4 py-3 text-left">Name</th>
                <th className="border px-4 py-3 text-left">Model</th>
                <th className="border px-4 py-3 text-left">Price</th>
                <th className="border px-4 py-3 text-left">Image</th>
                <th className="border px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCars.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50 transition">
                  <td className="border px-4 py-2">{c.id}</td>
                  <td className="border px-4 py-2">{c.name}</td>
                  <td className="border px-4 py-2">{c.model}</td>
                  <td className="border px-4 py-2">{c.price}</td>
                  <td className="border px-4 py-2">
                    <img src={c.image} alt={c.name} className="h-16 w-24 object-cover rounded-md" />
                  </td>
                  <td className="border px-4 py-2 flex gap-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md flex items-center transition transform hover:scale-105">
                      <FaEdit />
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center transition transform hover:scale-105"
                      onClick={() => handleDeleteCar(c.id)}
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

export default AdminCars;
