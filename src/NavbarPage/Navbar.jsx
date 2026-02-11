import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../assets/whitelogo.jpg";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const isAuth = localStorage.getItem("isAuth");
  const userName = localStorage.getItem("userName");

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-red-500 font-semibold"
      : "text-white hover:text-red-400 transition";

  // 🔍 Search
  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    navigate(`/cars?search=${search}`);
    setSearch("");
  };

  const logout = () => {
    localStorage.clear();
    toast.success("Logged out successfully 👋");
    navigate("/login");
  };

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="CarHub Logo" className="h-12 w-auto" />
          <p className="text-3xl font-extrabold tracking-wider bg-linear-to-r from-gray-300 to-red-800 bg-clip-text text-transparent">
            CarHub
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/cars" className={linkClass}>Cars</NavLink></li>
          <li><NavLink to="/services" className={linkClass}>Services</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">

          {/* Search */}
          <form onSubmit={handleSearch}>
            <div className="flex border border-gray-700 rounded-lg overflow-hidden w-56">
              <input
                type="text"
                placeholder="Search cars..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-3 py-1.5 bg-gray-800 text-sm text-white"
              />
              <button className="bg-red-500 px-3">🔍</button>
            </div>
          </form>

          {/* AUTH */}
          {isAuth ? (
            <div className="relative" ref={dropdownRef}>
              {/* Profile Icon */}
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 text-white hover:text-red-400 transition"
              >
                <FaUserCircle size={32} />
              </button>

              {/* Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-gray-900 border border-gray-700 rounded-xl shadow-xl overflow-hidden z-50">

                  <div className="px-4 py-3 border-b border-gray-700">
                    <p className="text-sm text-gray-400">Signed in User Name :-</p>
                    <p className="text-white font-semibold truncate">
                      {userName}
                    </p>
                  </div>

                  <NavLink
                    to="/profile"
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800"
                    onClick={() => setProfileOpen(false)}
                  >
                    👤 My Profile
                  </NavLink>

                  <NavLink
                    to="/booking"
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800"
                    onClick={() => setProfileOpen(false)}
                  >
                    🚗 My Bookings
                  </NavLink>

                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-gray-800"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className="bg-red-500 px-4 py-2 rounded-lg text-white"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
