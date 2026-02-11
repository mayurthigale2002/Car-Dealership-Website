import React, { useState } from "react";
import toast from "react-hot-toast";

const AdminSettings = () => {
  const [profile, setProfile] = useState({ name: "Admin", email: "admin@gmail.com.com" });
  const [password, setPassword] = useState({ current: "", new: "" });


  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword((prev) => ({ ...prev, [name]: value }));
  };

  const saveProfile = () => {
    toast.success("Profile updated successfully!");
  };

  const changePassword = () => {
    if (!password.current || !password.new) {
      toast.error("All fields are required!");
      return;
    }
    toast.success("Password changed successfully!");
    setPassword({ current: "", new: "" });
  };


  return (
    <section className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">Settings</h3>

      {/* Admin Profile */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h4 className="font-semibold mb-2">Update Profile</h4>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
            placeholder="Name"
            className="border px-4 py-2 rounded-md w-full md:w-1/3 focus:ring-2 focus:ring-red-500 outline-none"
          />
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
            placeholder="Email"
            className="border px-4 py-2 rounded-md w-full md:w-1/3 focus:ring-2 focus:ring-red-500 outline-none"
          />
          <button
            onClick={saveProfile}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition transform hover:scale-105"
          >
            Save Profile
          </button>
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h4 className="font-semibold mb-2">Change Password</h4>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="password"
            name="current"
            value={password.current}
            onChange={handlePasswordChange}
            placeholder="Current Password"
            className="border px-4 py-2 rounded-md w-full md:w-1/3 focus:ring-2 focus:ring-red-500 outline-none"
          />
          <input
            type="password"
            name="new"
            value={password.new}
            onChange={handlePasswordChange}
            placeholder="New Password"
            className="border px-4 py-2 rounded-md w-full md:w-1/3 focus:ring-2 focus:ring-red-500 outline-none"
          />
          <button
            onClick={changePassword}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition transform hover:scale-105"
          >
            Change Password
          </button>
        </div>
      </div>


    </section>
  );
};

export default AdminSettings;
