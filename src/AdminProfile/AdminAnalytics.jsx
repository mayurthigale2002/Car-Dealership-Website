import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, Legend, ResponsiveContainer } from "recharts";

const AdminAnalytics = () => {
  const salesData = [
    { month: "Jan", sold: 12, revenue: 500000 },
    { month: "Feb", sold: 18, revenue: 700000 },
    { month: "Mar", sold: 10, revenue: 400000 },
    { month: "Apr", sold: 15, revenue: 600000 },
    { month: "May", sold: 20, revenue: 900000 },
  ];

  const usersData = [
    { month: "Jan", users: 50 },
    { month: "Feb", users: 80 },
    { month: "Mar", users: 65 },
    { month: "Apr", users: 90 },
    { month: "May", users: 120 },
  ];

  return (
    <section className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">Analytics / Reports</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cars Sold per Month */}
        <div className="bg-white shadow rounded-lg p-4">
          <h4 className="font-semibold mb-2">Cars Sold Per Month</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sold" fill="#f43f5e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Trends */}
        <div className="bg-white shadow rounded-lg p-4">
          <h4 className="font-semibold mb-2">Revenue Trends</h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Active Users */}
        <div className="bg-white shadow rounded-lg p-4 col-span-1 md:col-span-2">
          <h4 className="font-semibold mb-2">Active Users</h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={usersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default AdminAnalytics;
