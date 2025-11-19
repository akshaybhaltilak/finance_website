import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-lg shadow-lg py-2" 
        : "bg-white/90 backdrop-blur-md shadow-sm py-3"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
                Tirupati Finance
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Trusted Financial Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { to: "/home", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/products", label: "Branches" },
              { to: "/about", label: "About" },
              { to: "/partner", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-indigo-700 bg-indigo-50 font-semibold"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  }`
                }
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full opacity-0 transition-opacity duration-200"></span>
              </NavLink>
            ))}
            
            <Link
              to="/apply"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 hover:from-indigo-700 hover:to-purple-700"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                open ? "rotate-45 top-1/2" : "-translate-y-2"
              }`}></span>
              <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}></span>
              <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                open ? "-rotate-45 top-1/2" : "translate-y-2"
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}>
          <div className="flex flex-col space-y-3 px-2">
            {[
              { to: "/home", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/products", label: "Products" },
              { to: "/about", label: "About" },
              { to: "/partner", label: "Partner" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "text-indigo-700 bg-indigo-50 border-l-4 border-indigo-600"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            <Link
              to="/apply"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-200"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;