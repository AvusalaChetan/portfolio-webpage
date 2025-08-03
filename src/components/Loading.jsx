import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa';
const Loading = () => {

  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.7, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };


  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#151042] via-[#302b63] to-[#24243e] flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="text-center">
        <motion.div
          className=" logo mb-8"
          variants={logoVariants}
        >
          <motion.div
            className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
            variants={pulseVariants}
            animate="pulse"
          >
            <FaCode className="text-white text-4xl" />
          </motion.div>
        </motion.div>


        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          MERN Developer
        </motion.h1>

        
        <motion.p
          className="text-lg md:text-xl text-white/80 mb-8"
          variants={itemVariants}
        >
          Loading Portfolio...
        </motion.p>

        {/* loading Bar */}
        <motion.div
          className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mx-auto mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            variants={progressVariants}
          />
        </motion.div>

        
        <motion.div
          className="flex justify-center gap-4 mb-8"
          variants={itemVariants}
        >
          {["MongoDB", "Express", "React", "Node.js"].map((tech, index) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* contact me Icons Animation */}
        <motion.div
          className="flex justify-center gap-6"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/AvusalaChetan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white/70 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/avusala-chetan-73a697312/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white/70 hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>

        {/*  Dots */}
        <motion.div
          className="flex justify-center gap-2 mt-8"
          variants={itemVariants}
        >
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-3 h-3 bg-purple-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: dot * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loading;