import React, { useState, useRef, useEffect } from "react";
import myskills from "./json/skills.json";
import { motion, useInView } from "framer-motion";
import { HoverBehaviour } from "../animations/Cursor";
import H1 from "../components/H1";

const SkillsPage = () => {
  const circleRef = useRef(null);
  const inView = useInView(circleRef, { amount: 0.5 });

  const [radius, setRadius] = useState(230);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) setRadius(100); // small screens
      else if (width < 1024) setRadius(160); // tablets
      else setRadius(230); // desktops
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div id="skills" className="bg-white lg:min-h-full w-full py-2">
      <H1 text={"my skills"} color={"black"} />

      <div
        ref={circleRef}
className="hidden sm:flex relative items-center justify-center lg:h-[85vh] h-[60vh]"      >
        {myskills.map((item, idx) => {
          if (!item.icon) return null;

          const angle = (2 * Math.PI * idx) / myskills.length;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, x: 0, y: 0 },
                visible: { opacity: 1, x, y },
              }}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
              className="circle absolute rounded-full p-1 overflow-hidden flex items-center justify-center 
                         w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px]"
            >
              <HoverBehaviour scale={5} bgc={"#ff9800"}>
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

      {/* Optional fallback for very small screens */}
      <div className="sm:hidden grid grid-cols-3 gap-4 px-4 mt-10">
        {myskills.map((item, idx) => (
          <div key={idx} className="w-16 h-16 mx-auto">
            <img
              src={item.icon}
              alt={item.skill}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;