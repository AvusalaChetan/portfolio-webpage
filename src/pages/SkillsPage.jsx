import React, { useState, useRef } from "react";
import myskills from "./json/skills.json";
import { motion, useInView } from "framer-motion";
import { HoverBehaviour } from "../animations/Cursor";
import H1 from "../components/H1";

const SkillsPage = () => {
  const circleRef = useRef(null);
  const inView = useInView(circleRef, { amount: 0.8 });

  return (
    <div id="skills" className=" bg-white min-h-full w-full py-2 ">
     
      <H1 text={"my skills"} color={'black'}/>

      <div
        ref={circleRef}
        className=" relative flex items-center justify-center h-[80vh] mt-12 ">
        {myskills.map((item, idx) => {
          const angle = (2 * Math.PI * idx) / myskills.length;
          const radius = 230;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          if (!item.icon) return null;
          return (

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 0, y: 0 },
                  visible: { opacity: 1, x, y },
                }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6 }}
                className={`circle rounded-full p-1 mx-1 absolute overflow-hidden flex items-center justify-center w-[80px] h-[80px] `}
                key={idx}
              >
                <HoverBehaviour scale={5} bgc={'#ff9800'} >
                  <img
                    src={item.icon}
                    alt={item.skill}
                    className="object-center object-cover w-full h-full"
                  />
                </HoverBehaviour>
              </motion.div>

          );
        })}
      </div>
    </div>
  );
};

export default SkillsPage;
