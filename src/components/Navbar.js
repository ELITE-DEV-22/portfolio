import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Use Link from react-scroll
import { Link as RouterLink } from 'react-router-dom'; // Use Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-90 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="text-3xl font-bold text-purple-400 font-mono">
          <a href="/">Elita Gonsalves</a> {/* Home link */}
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-8">
          {/* About Me link for smooth scrolling */}
          <ScrollLink
            to="about-me"
            smooth={true}
            duration={500}
            className="relative text-lg font-medium transition duration-300 ease-in-out hover:text-purple-400 group"
          >
            About Me
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
          </ScrollLink>

          {/* Projects and Contact links to open in a new page */}
          <RouterLink
            to="/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-lg font-medium transition duration-300 ease-in-out hover:text-purple-400 group"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
          </RouterLink>
          <RouterLink
            to="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-lg font-medium transition duration-300 ease-in-out hover:text-purple-400 group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
          </RouterLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
