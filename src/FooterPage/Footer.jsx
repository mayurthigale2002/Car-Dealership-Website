import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16">
      <hr className="border-gray-800 mb-10" />
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-800 pb-12">
          {/* Brand */}
          <div >
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="bg-linear-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                CarHub
              </span>
            </h2>
            <p className="text-sm leading-relaxed">
              Experience premium cars with cutting-edge technology, unmatched
              comfort, and top-class safety.
            </p>
          </div>

          {/* Quick Links */}
          <div >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block transition ${
                      isActive
                        ? "text-red-500 font-semibold"
                        : "text-gray-400 hover:text-red-500"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/cars"
                  className={({ isActive }) =>
                    `block transition ${
                      isActive
                        ? "text-red-500 font-semibold"
                        : "text-gray-400 hover:text-red-500"
                    }`
                  }
                >
                  Cars
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block transition ${
                      isActive
                        ? "text-red-500 font-semibold"
                        : "text-gray-400 hover:text-red-500"
                    }`
                  }
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block transition ${
                      isActive
                        ? "text-red-500 font-semibold"
                        : "text-gray-400 hover:text-red-500"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div >
            <h3 className="text-white font-semibold mb-4">Our Services</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/sales"
                  className={({ isActive }) =>
                    `block transition ${
                      isActive
                        ? "text-red-500 font-semibold"
                        : "text-gray-400 hover:text-red-500"
                    }`
                  }
                >
                  Car Sales
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/financing"
                  className={({ isActive }) =>
                    `block transition ${
                      isActive
                        ? "text-red-500 font-semibold"
                        : "text-gray-400 hover:text-red-500"
                    }`
                  }
                >
                  Car Financing
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/servicing"
                  className={({ isActive }) =>
                    `block transition ${
                      isActive
                        ? "text-red-500 font-semibold"
                        : "text-gray-400 hover:text-red-500"
                    }`
                  }
                >
                  Car Servicing
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/roadside"
                  className={({ isActive }) =>
                    `block transition ${
                      isActive
                        ? "text-red-500 font-semibold"
                        : "text-gray-400 hover:text-red-500"
                    }`
                  }
                >
                  Roadside Assistance
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Call To Action */}
          <div >
            <h3 className="text-white font-semibold mb-4">
              Looking for Your Next Car?
            </h3>
            <p className="text-sm mb-5 text-gray-400">
              Compare models, explore features, and book a test drive instantly.
            </p>

            {/* About Link */}
            <Link
  to="/about"
  className="inline-flex items-center gap-2 px-10 py-1.5 
             rounded-full bg-linear-to-r from-gray-500 to-orange-300
             text-white text-sm font-semibold
             hover:scale-105 hover:shadow-lg
             transition duration-300"
>
  About Us
  <span className="text-lg">→</span>
</Link>

          </div>
        </div>

        {/* Copyright */}
        <div
          className="flex flex-col items-center py-6 gap-4"
        >
          {/* Social Icons */}
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 hover:bg-linear-to-r from-red-500 to-orange-400 transition cursor-pointer"
                >
                  <Icon className="text-white text-sm" />
                </div>
              ),
            )}
          </div>

          {/* Copyright Text */}
          <p className="text-sm text-center text-gray-400">
            © {new Date().getFullYear()} CarHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
