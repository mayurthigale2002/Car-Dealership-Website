import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-red-500 font-semibold"
      : "text-white hover:text-red-400 transition";

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      console.log("Search:", search);
      // later: navigate(`/cars?search=${search}`)
      setSearch("");
    }
  };

  return (
    // <nav className="bg-gray-800 fixed top-0 w-full z-50 shadow-lg">
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800">

      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-white">
          Car<span className="text-red-500">Hub</span>
        </NavLink>

        {/* Search Box (Center) */}
        <form
  onSubmit={handleSearch}
  className="hidden md:flex flex-1 justify-center"
>
  <div className="flex border border-gray-700 rounded-lg overflow-hidden w-72">
    <input
      type="text"
      placeholder="Search cars..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="flex-1 px-3 py-1.5 bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none"
    />
    <button
      type="submit"
      className="bg-red-500 px-3 text-sm hover:bg-red-600 transition"
    >
      🔍
    </button>
  </div>
</form>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cars" className={linkClass}>
              Cars
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/test-drive"
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition text-white"
            >
              Test Drive
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700 px-6 py-4 space-y-4">

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search cars..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white"
            />
            <button className="bg-red-500 px-4 rounded-r-lg">🔍</button>
          </form>

          {/* Links */}
          <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/cars" onClick={() => setIsOpen(false)} className={linkClass}>
            Cars
          </NavLink>
          <NavLink to="/offers" onClick={() => setIsOpen(false)} className={linkClass}>
            Offers
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={linkClass}>
            Contact
          </NavLink>
          <NavLink
            to="/test-drive"
            onClick={() => setIsOpen(false)}
            className="block bg-red-500 px-4 py-2 rounded-lg text-center text-white"
          >
            Test Drive
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
