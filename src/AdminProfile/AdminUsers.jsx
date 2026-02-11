import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://698c204a21a248a273608bc4.mockapi.io/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch users!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`https://698c204a21a248a273608bc4.mockapi.io/users/${id}`);
      setUsers(users.filter((u) => u.id !== id));
      toast.success("User deleted successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete user!");
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email || !newUser.password) {
      toast.error("All fields are required!");
      return;
    }
    try {
      const res = await axios.post("https://698c204a21a248a273608bc4.mockapi.io/users", newUser);
      setUsers([...users, res.data]);
      setNewUser({ name: "", email: "", password: "" });
      toast.success("User added successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add user!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Manage Users</h2>

        {/* Add User Form */}
        <form
          onSubmit={handleAddUser}
          className="mb-6 flex flex-col md:flex-row gap-4 items-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/4 focus:ring-2 focus:ring-red-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/4 focus:ring-2 focus:ring-red-500 outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={newUser.password}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/4 focus:ring-2 focus:ring-red-500 outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md flex items-center gap-2 transition transform hover:scale-105"
          >
            <FaPlus /> Add User
          </button>
        </form>

        {/* Users Table */}
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          {loading ? (
            <p className="p-4 text-gray-500">Loading users...</p>
          ) : (
            <table className="w-full table-auto border-collapse">
              <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
                <tr>
                  <th className="border px-4 py-3 text-left">ID</th>
                  <th className="border px-4 py-3 text-left">Name</th>
                  <th className="border px-4 py-3 text-left">Email</th>
                  <th className="border px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50 transition">
                    <td className="border px-4 py-2">{u.id}</td>
                    <td className="border px-4 py-2">{u.name}</td>
                    <td className="border px-4 py-2">{u.email}</td>
                    <td className="border px-4 py-2 flex gap-2">
                      
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center transition transform hover:scale-105"
                        onClick={() => handleDelete(u.id)}
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
      </div>
    </div>
  );
};

export default AdminUsers;
