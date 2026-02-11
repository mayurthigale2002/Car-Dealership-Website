import { useState } from "react";
import AdminHome from "./AdminHome";
import AdminUsers from "./AdminUsers.jsx";
import AdminCars from "./AdminCars.jsx";
import AdminBookings from "./AdminBookings.jsx";
import AdminAnalytics from "./AdminAnalytics.jsx";
import AdminSettings from "./AdminSettings.jsx";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row mt-20">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-800 text-white p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>
        <ul className="space-y-3">
          <li>
            <button
              onClick={() => setActiveTab("home")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === "home" ? "bg-red-600 font-bold" : "hover:bg-gray-700"
              }`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("users")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === "users" ? "bg-red-600 font-bold" : "hover:bg-gray-700"
              }`}
            >
              Users
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("cars")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === "cars" ? "bg-red-600 font-bold" : "hover:bg-gray-700"
              }`}
            >
              Cars
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("bookings")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === "bookings" ? "bg-red-600 font-bold" : "hover:bg-gray-700"
              }`}
            >
              Bookings
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === "analytics" ? "bg-red-600 font-bold" : "hover:bg-gray-700"
              }`}
            >
              Analytics
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full text-left px-4 py-2 rounded ${
                activeTab === "settings" ? "bg-red-600 font-bold" : "hover:bg-gray-700"
              }`}
            >
              Settings
            </button>
          </li>
        </ul>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-8">
  {activeTab === "home" && <AdminHome />}
  {activeTab === "users" && <AdminUsers />}
  {activeTab === "cars" && <AdminCars />}
  {activeTab === "bookings" && <AdminBookings />}
  {activeTab === "analytics" && <AdminAnalytics />}
  {activeTab === "settings" && <AdminSettings />}
</main>

    </div>
  );
};

export default AdminPanel;
