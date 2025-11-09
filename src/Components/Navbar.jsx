import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { MoreVertical } from "lucide-react"; // 3-dot icon
import logo from "../assets/main-logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAdminAuthenticated") === "true";
    setIsAdmin(auth);
  }, []);

  const handleAdminClick = () => {
    setShowMenu(false);
    navigate("/admin-login");
  };

  const handleAdminPage = () => {
    setShowMenu(false);
    navigate("/admin");
  };

  const handleLogout = () => {
    setShowMenu(false);
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/admin-login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-12 py-2">
        {/* Left: Logo + Title */}
        <div className="flex items-center space-x-3">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain scale-110"
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
            Prabha Foundation Care
          </NavLink>
        </div>

        {/* Right: Contact & 3-Dot Menu */}
        <div className="relative flex items-center space-x-3">
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfpokjh49QYgJzgvIf-mQATIam7pehn4G4uqGkh2xI5S-eGMg/viewform",
                "_blank"
              )
            }
            className="border border-green-600 text-green-700 px-5 py-2 rounded-md font-semibold 
              hover:bg-green-600 hover:text-white transition-all duration-300 shadow-sm"
          >
            Contact
          </button>

          {/* Three-dot icon */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <MoreVertical size={24} className="text-gray-700" />
            </button>

            {/* Dropdown menu */}
            {showMenu && (
              <div
                className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-2 
                animate-fade-in"
              >
                {!isAdmin ? (
                  // 🔒 If not logged in
                  <button
                    onClick={handleAdminClick}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                  >
                    Admin Login
                  </button>
                ) : (
                  // ✅ If logged in
                  <>
                    <button
                      onClick={handleAdminPage}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                    >
                      Admin Page
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
