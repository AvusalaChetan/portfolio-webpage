import  { useState } from "react";
import { motion } from "framer-motion";
import TypingEffect from "../../effects/TypingEffect";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    <div className="relative overflow-x-hidden container lg:w-[80vw] sm:w-full min-h-full m-auto flex flex-col md:flex-row items-center justify-center overflow-hidden text-center">
      {/* Left Section */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center gap-4 z-10 w-full md:w-1/2 px-2"
        id="content"
      >
        <motion.p
          variants={fadeInUp}
          className="text-purple-400 text-lg font-medium ml-4 "
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hi, i am
        </motion.p>
  <div className="  p-2">
            <h1 className="text-4xl md:text-5xl font-semibold">
              MERN STACK{" "}
              <span className="text-4xl md:text-5xl uppercase font-bold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                developer
              </span>
            </h1>
          </div>


        <motion.hr
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 300 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          className="h-[0.3rem] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b8860b] rounded-lg border-none m-auto"
          style={{ width: 210 }}
          id="hr-Home"
        />

          <div className="flex flex-wrap justify-center items-center gap-2 mt-4 text-center">
            {["mongoDB", "Express.js", "React.js", "Node.js"].map((tech,idx) => (
              <span
                key={idx}
                className="px-4 py-1 bg-white/10 text-white text-sm rounded-full shadow-sm hover:bg-white/20 transition"
              >
                {tech}
              </span>
            ))}
          </div>

        <motion.h2
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-300"
        >
          <TypingEffect typingText={typingText} />
        </motion.h2>

        {/* Social Icons */}
        <motion.div
          className="flex gap-5 mt-2 ml-4  items-center justify-center"
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
