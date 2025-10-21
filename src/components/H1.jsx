import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const H1 = ({ text, color }) => {
    const h1Ref = useRef(null)
  const inView = useInView(h1Ref, { amount: 0.8 });
  return (
    <>
      <h1
      ref={h1Ref}
      className="text-6xl text-start capitalize  ml-12 flex items-center justify-start gap-4 ">

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="120"
          height="120"
        >
          <motion.path
    d="M4 12h16M18 8l4 4-4 4"
                stroke={color}
            strokeWidth="0.5"
            fill={"none"}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={inView?{ pathLength: 1 }:""}
            transition={{ duration: 1.5}}
            />
        </motion.svg>

<motion.div 
initial={{opacity:0,x:-55}}
animate={inView?{ opacity:1,x:0}:""}
transition={{ duration:0.5 ,delay:0.2}}
>
            {text}

</motion.div>

      </h1>
      <hr className="mx-5 mt-3 " />
    </>
  );
};

export default H1;
