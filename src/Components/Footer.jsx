import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";
import logo from "../assets/main-logo.png";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#152317] text-white relative">
      {/* Footer content */}
      <div className="max-w-8xl mx-auto px-12 py-10 flex flex-wrap justify-between items-center gap-10">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={logo}
            alt="Logo"
            className="h-44 w-44 object-contain rounded-full shadow-md"
          />
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col text-center md:text-left space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Reach out</h3>
            <p className="text-gray-100 text-lg">
              {" "}
              Prabhafoundation11@gmail.com
            </p>
          </div>

          <div className="flex justify-center md:justify-start space-x-8 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="pb-4">
          <h3 className="text-2xl font-bold text-white ">Location</h3>
          <p className="text-gray-100 text-base leading-snug max-w-[250px] pt-2">
            h/o: Jrm 34, Second floor bda complex, Manisha market shahpura, Bhopal M.P
          </p>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col space-y-3 w-full sm:w-auto">
          <h3 className="text-xl font-bold text-white">
            Newsletter Signup Form
          </h3>
          <input
            type="text"
            placeholder="Type & Hit Enter..."
            className="w-full sm:w-80 px-4 py-2 rounded-md text-gray-900 outline-none focus:ring-2 focus:ring-green-400 bg-white"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Prabha Foundation. All rights reserved.
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-sm shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
