import React from "react";
import "./Landingpage.css";


const LandingPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-black text-white">
      {/* Wrapper for animation */}
      <div className="relative flex justify-center items-center">
        {/* Left symbol */}
        <span className="text-7xl font-bold animate-left">&lt;</span>

        {/* Middle text */}
        <div className="mx-4 opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 tracking-wide drop-shadow-lg">
            Hi, Welcome to my portfolio
          </h1>
        </div>
        {/* Right symbol */}
        <span className="text-7xl font-bold animate-right">&gt;</span>
      </div>
    </div>
    
  );
};

export default LandingPage;
