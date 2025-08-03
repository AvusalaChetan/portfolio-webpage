import React from "react";
import { motion } from "motion/react";

const MobileNavbar = ({ navOpen, onClickNavbtnHandile, closeNav }) => {
  return (
    <div>
      {/* Side Navbar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: navOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-64 bg-gray-900 text-white p-6 shadow-lg z-40"
      >
        
        <div id="close-nav">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e3e3e3"
        onClick={closeNav}
        className="fixed top-4 right-4 cursor-pointer z-50 hover:scale-110 hover:fill-red-400 transition duration-200"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
        </div>

        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <ul className="space-y-4 r">
          <li>
            <a href="#home" className="hover:text-gray-300 transition-colors duration-200" onClick={closeNav}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300 transition-colors duration-200" onClick={closeNav}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-300 transition-colors duration-200" onClick={closeNav}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300 transition-colors duration-200" onClick={closeNav}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 transition-colors duration-200" onClick={closeNav}>
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
      {/* Overlay and Close Button */}
      {navOpen && (
        <div
          onClick={onClickNavbtnHandile}
          className="fixed inset-0 bg-black bg-opacity-50"
        />
      )}
      
    </div>
  );
};

export default MobileNavbar;
