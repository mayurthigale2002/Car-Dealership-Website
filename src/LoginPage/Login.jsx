import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import AuthImage from "./Image";

const Login = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Hardcoded admin credentials
  const adminCredentials = {
    email: "admin@gmail.com",
    password: "2098",
    name: "Admin",
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "https://698c204a21a248a273608bc4.mockapi.io/users",
      );
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email === adminCredentials.email &&
      formData.password === adminCredentials.password
    ) {
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("userType", "admin");
      localStorage.setItem("userName", adminCredentials.name);
      toast.success("Welcome Admin!");
      navigate("/adminpanel");
      return;
    }

    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password,
    );

    if (user) {
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("userType", "user");
      localStorage.setItem("userId", user.id);
      localStorage.setItem("userName", user.name);
      toast.success("Logged in successfully 👋");
      navigate("/");
    } else {
      toast.error("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="min-h-screen mt-10 flex items-center justify-center bg-black px-4 relative overflow-hidden">

      <div className="absolute w-96 h-96 bg-black blur-3xl -top-20 -left-20" />
      <div className="absolute w-96 h-96 bg-black blur-3xl -bottom-20 -right-20" />

      <div
        className="relative w-full max-w-5xl
        backdrop-blur-xl bg-white/10 border border-white/20
        rounded-3xl shadow-2xl overflow-hidden"
        data-aos="zoom-in"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">

          <AuthImage />

          <div
            className="p-8 md:p-12 bg-white rounded-3xl md:rounded-l-none"
            data-aos="fade-left"
          >
            <h2 className="text-3xl font-bold text-center mb-2">
              Login to CarHub
            </h2>

            <p className="text-center text-gray-500 mb-8">
              Drive your dream, one click away
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border rounded-xl
                  focus:ring-2 focus:ring-red-500 outline-none"
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
                  className="w-full pl-11 pr-4 py-3 border rounded-xl
                  focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <button
                className="w-full py-3 bg-red-600 hover:bg-red-700
                text-white font-semibold rounded-xl transition
                transform hover:scale-[1.02]"
              >
                Login
              </button>

              <p className="text-center text-sm text-gray-500">
                Don’t have an account?{" "}
                <NavLink
                  to="/signup"
                  className="text-red-600 font-semibold hover:underline"
                >
                  Create one
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
