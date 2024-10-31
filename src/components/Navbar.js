import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-90 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="text-3xl font-bold text-purple-400 font-mono">
          <Link to="/">Elita Gonsalves</Link> {/* Changed to Link */}
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-8">
          {["About Me", "Projects", "Contact"].map((section, index) => (
            <Link
              key={index}
              to={section === "About Me" ? "/about-me" : section === "Projects" ? "/projects" : "/contact"} // Updated links for router
              className="relative text-lg font-medium transition duration-300 ease-in-out hover:text-purple-400 group"
            >
              {section}
              {/* Gradient Border Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
