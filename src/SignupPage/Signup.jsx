import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import Image from "./Image";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/users", formData);
      alert("Account created successfully 🎉");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen mt-20 flex items-center justify-center bg-black relative overflow-hidden px-4">

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-black rounded-full blur-3xl -top-20 -left-20" />
      <div className="absolute w-96 h-96 bg-black rounded-full blur-3xl -bottom-20 -right-20" />

      {/* Card */}
      <div
        className="relative w-full max-w-5xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
        data-aos="zoom-in"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left Image */}
          <Image />

          {/* Right Form */}
          <div className="p-8 md:p-12 bg-white rounded-3xl md:rounded-l-none">
            <h2 className="text-3xl font-bold text-center mb-2">
              Create Account
            </h2>
            <p className="text-center text-gray-500 mb-8">
              Start your CarHub journey today
            </p>

            <form onSubmit={submitHandler} className="space-y-5">

              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <div className="relative">
                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition transform hover:scale-[1.02]">
                Sign Up
              </button>

              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <NavLink
                  to="/login"
                  className="text-red-600 font-semibold hover:underline"
                >
                  Login
                </NavLink>
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;
