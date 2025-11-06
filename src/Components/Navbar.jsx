import { Link, NavLink } from "react-router-dom";
import logo from "../assets/main-logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-12 py-2">
        {/* Left: Logo + Title */}
        <div className="flex items-center space-x-3">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain scale-110" // visually larger without increasing navbar height
            />
          </div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Prabha Foundation
          </h1>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center space-x-12 font-semibold text-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "hover:text-green-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/prabha-foundation-care"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-green-600 border-b-2 border-green-600 pb-1"
                  : "hover:text-green-600"
              }`
            }
          >
            Prabha foundation Care
          </NavLink>
        </div>

        {/* Right: Contact Button */}
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSfpokjh49QYgJzgvIf-mQATIam7pehn4G4uqGkh2xI5S-eGMg/viewform",
              "_blank"
            )
          }
          className="ml-4 border border-green-600 text-green-700 px-5 py-2 rounded-md font-semibold 
             hover:bg-green-600 hover:text-white transition-all duration-300 shadow-sm"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
