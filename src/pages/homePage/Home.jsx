import React, { useState } from "react";
import { motion } from "framer-motion";
import Wave from "react-wavify";
import TypingEffect from "../../effects/TypingEffect";
import "./Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const profilePhoto = "/images/profile-photo.jpg"; 

// Animations
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
      ease: "easeInOut",
    },
  },
};


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.5, ease: "easeOut" },
  },
};

const buttonHoverWave = {
  initial: { y: 0, opacity: 0 },
  animate: {
    y: 2,
    opacity: [0, 0.5, 1],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const Home = () => {
  const [isHover, setIsHover] = useState(false);
  const typingText = [
    "I build responsive web applications.",
    "I love working with React and Node.js.",
    "Crafting elegant UIs is my passion.",
    "Always learning. Always coding.",
  ];

  return (
    <div className="relative container w-[80vw] min-h-[100vh] m-auto flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Background Gradient and Blurred Shape */}
      <div aria-hidden="true" className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-[#1a2980] via-[#26d0ce] to-[#f3e5ab] opacity-60"></div>
      <div aria-hidden="true" className="absolute -z-10 right-[-100px] bottom-[-100px] w-[300px] h-[300px] bg-purple-400 rounded-full blur-3xl opacity-30"></div>
      {/* Left Section */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center gap-6 z-10 w-full md:w-1/2 px-2"
        id="content"
      >
        <motion.p
          variants={fadeInUp}
          className="text-purple-400 text-lg font-medium ml-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0, color: ["#fff", "#d4af37", "#fff"] }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Avusala Chetan
        </motion.h1>

        <motion.hr
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 220 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          className="h-[0.3rem] mt-2 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b8860b] rounded-lg border-none"
          style={{ width: 210 }}
          id="hr-Home"
        />

        <motion.h3
          variants={fadeInUp}
          className="text-xl md:text-2xl text-gray-400"
        >
          A Fullstack Developer
        </motion.h3>

        <motion.h2
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-300"
        >
          <TypingEffect typingText={typingText} />
        </motion.h2>

        {/* Social Icons */}
        <motion.div
          className="flex gap-5 mt-2 ml-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-black bg-white/20 hover:bg-white p-2 rounded-full transition-colors duration-200 shadow-lg">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-blue-700 bg-white/20 hover:bg-white p-2 rounded-full transition-colors duration-200 shadow-lg">
            <FaLinkedin size={24} />
          </a>
        </motion.div>

        {/* Button */}
        <motion.button
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="group w-fit relative block px-6 py-3 font-bold bg-white text-black rounded-lg shadow-md transition overflow-hidden focus:outline-none"
          aria-label="About me"
        >
          <span className="flex items-center gap-2">
            <a href="#about">About me</a>
            <motion.span
              initial={{ x: 0 }}
              animate={{ x: isHover ? 8 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.span>
          </span>
          {isHover && (
            <motion.span
              {...buttonHoverWave}
              className="absolute bottom-0 left-0 w-full h-1/2 z-0"
            >
              <Wave
                fill="black"
                paused={false}
                style={{ width: "100%", height: "100%" }}
                options={{ height: 9, amplitude: 7, speed: 0.4, points: 4 }}
              />
            </motion.span>
          )}
        </motion.button>
      </motion.div>

      {/* Right Section (Profile Image) */}
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate="visible"
        id="img-container"
        className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-gray-800 rounded-xl shadow-lg flex items-center justify-center overflow-hidden transition-transform duration-300 group hover:rotate-3 hover:shadow-[0_0_30px_10px_rgba(212,175,55,0.5)]"
      >
        <img
          src={profilePhoto}
          alt="photo"
          className="rounded-lg object-cover w-full h-full group-hover:shadow-[0_0_30px_5px_rgba(212,175,55,0.7)] transition-shadow duration-300"
          aria-label="Profile photo"
        />
      </motion.div>

      {/* Animated SVG Wave Background */}
      <motion.svg
        aria-hidden="true"
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[180px] md:h-[220px] -z-10"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: 'none' }}
      >
        <motion.path
          d="M0,224L60,202.7C120,181,240,139,360,144C480,149,600,203,720,218.7C840,235,960,213,1080,197.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill="url(#waveGradient)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#26d0ce" />
            <stop offset="100%" stopColor="#1a2980" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default Home;
