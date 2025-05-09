import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const myVariant = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 5,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: [5, 4, 3, 2, 1.2],
    filter: ["blur(20px)", "blur(10px)", "blur(5px)", "blur(0px)"],
    transition: {
      duration: 0.9,
      ease: "easeInOut", 
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <div
          className={`flex items-center justify-center flex-col w-screen h-screen bg-neutral-900 text-white`}
        >
          <motion.div
            key="title"
            className="capitalize text-4xl"
            style={{
              filter: "blur(10px)",
            }}
            variants={myVariant}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            my portfolio website
          </motion.div>

          <motion.div
            key="subtitle"
            className="mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p className="capitalize text-[17px]">created by A.chetan</p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Loading;