import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollBar = ({ children }) => {
  const { scrollYProgress } = useScroll();

console.log("Scroll progress:", scrollYProgress.get());

  return (
    <>
      <motion.div
       className=" mr-0.5 my-1 rounded-full mix-blend-difference"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom:0,
          width: "6px",
        backgroundColor:'white',
          transformOrigin: "top",
          scaleY: scrollYProgress, 
        }}
      />
      {children}
    </>
  );
};

export default ScrollBar;