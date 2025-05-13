import React, { useState } from "react";
import { motion } from "framer-motion";
import Wave from "react-wavify";
import TypingEffect from "../../effects/TypingEffect";
import "./Home.css";

const profilePhoto = "/public/images/profile-photo.jpg"; // Updated path

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
    <div className="container w-[80vw] h-[100vh] m-auto flex items-center justify-between ">
      {/* Left Section */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center gap-6 "
        id="content"
      >
        <motion.p
          variants={fadeInUp}
          className="text-purple-400 text-lg font-medium ml-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-bold text-white"
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

        {/* Button */}
        <motion.button
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="w-fit relative block px-6 py-3 font-bold bg-white text-black rounded-lg shadow-md transition overflow-hidden"
        >
          <a href="#about">About me</a>
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
        className="w-[350px] h-[350px] bg-gray-800 rounded-xl shadow-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300"
      >
        <img
          src={profilePhoto}
          alt="photo"
          className="rounded-lg object-cover w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default Home;
