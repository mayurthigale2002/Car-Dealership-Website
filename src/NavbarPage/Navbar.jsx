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
  const userType = localStorage.getItem("userType");
  const userName = localStorage.getItem("userName");

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-red-500 font-semibold"
      : "text-white hover:text-red-400 transition";

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/cars?search=${search}`);
    setSearch("");
  };

  const logout = () => {
    localStorage.clear();
    toast.success("Logged out successfully");
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
      <p className="text-2xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-red-800">
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

    {/* Desktop Right Section */}
    <div className="hidden md:flex items-center gap-4">
      <form onSubmit={handleSearch}>
        <div className="flex border border-gray-700 rounded-lg overflow-hidden w-56">
          <input
            type="text"
            placeholder="Search cars..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-3 py-1.5 bg-gray-800 text-sm text-white outline-none"
          />
          <button className="bg-red-500 px-3">🔍</button>
        </div>
      </form>

      {isAuth ? (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="text-white hover:text-red-400"
          >
            <FaUserCircle size={32} />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-3 w-52 bg-gray-900 border border-gray-700 rounded-xl shadow-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-700">
                <p className="text-sm text-gray-400">Signed in as</p>
                <p className="text-white font-semibold truncate">{userName}</p>
              </div>

              {userType === "user" && (
                <>
                  <NavLink to="/profile" className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800">
                    👤 My Profile
                  </NavLink>
                  <NavLink to="/booking" className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800">
                    🚗 My Bookings
                  </NavLink>
                </>
              )}

              {userType === "admin" && (
                <NavLink to="/adminpanel" className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800">
                  ⚙️ Settings
                </NavLink>
              )}

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
        <NavLink to="/login" className="bg-red-500 px-4 py-2 rounded-lg text-white">
          Login
        </NavLink>
      )}
    </div>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden text-white text-2xl"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? "✕" : "☰"}
    </button>
  </div>

  {/* ================= MOBILE MENU ================= */}
  <div
    className={`md:hidden bg-black border-t border-gray-800 transition-all duration-300 overflow-hidden ${
      isOpen ? "max-h-screen py-6" : "max-h-0"
    }`}
  >
    <div className="flex flex-col gap-6 px-6">

      {/* Mobile Links */}
      <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
      <NavLink to="/cars" className={linkClass} onClick={() => setIsOpen(false)}>Cars</NavLink>
      <NavLink to="/services" className={linkClass} onClick={() => setIsOpen(false)}>Services</NavLink>
      <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>

      {/* Mobile Search */}
      <form onSubmit={handleSearch}>
        <div className="flex border border-gray-700 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search cars..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-3 py-2 bg-gray-800 text-sm text-white outline-none"
          />
          <button className="bg-red-500 px-4">🔍</button>
        </div>
      </form>

      {/* Auth Section */}
      {isAuth ? (
        <div className="flex flex-col gap-4 border-t border-gray-800 pt-4">
          <p className="text-gray-400 text-sm">
            Signed in as <span className="text-white font-semibold">{userName}</span>
          </p>

          {userType === "user" && (
            <>
              <NavLink to="/profile" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-red-400">
                👤 My Profile
              </NavLink>
              <NavLink to="/booking" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-red-400">
                🚗 My Bookings
              </NavLink>
            </>
          )}

          {userType === "admin" && (
            <NavLink to="/adminpanel" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-red-400">
              ⚙️ Settings
            </NavLink>
          )}

          <button
            onClick={logout}
            className="text-left text-red-400 hover:text-red-500"
          >
            🚪 Logout
          </button>
        </div>
      ) : (
        <NavLink
          to="/login"
          onClick={() => setIsOpen(false)}
          className="bg-red-500 px-4 py-2 rounded-lg text-white text-center"
        >
          Login
        </NavLink>
      )}
    </div>
  </div>
</nav>

  );
};

export default Navbar;
