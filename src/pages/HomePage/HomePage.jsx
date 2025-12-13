import {delay, motion} from "framer-motion";
import styles from "./home.module.css";
import {style} from "motion/react-client";
import ParticleBg from "../../animations/ParticleBg";

const name = "avusala chetan";
const letters = name.split("");

const helloVariants = {
  hidden: {opacity: 0, y: 40, scale: 0.8},
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {duration: 1, ease: [0.23, 1, 0.32, 1], delay: 1.5},
  },
};

const container = {
  hidden: {opacity: 1},
  visible: {
    opacity: 1,
    delay: 1.5,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 2,
    },
  },
};

const child = (i) => ({
  hidden: { opacity: 0, y: i % 2 === 0 ? 40 : -40, scale: 0.9, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
});

const HomePage = () => {
  return (
    <div
      id="home"
      className="min-h-[90vh]  w-full bg-gray-50  mx-auto z-40 flex justify-center items-center px-4"
    >
      <div className="w-full h-auto py-8 px-2 sm:px-4 md:px-5 flex flex-col justify-center items-center gap-3">
        <div className="text-center md:text-left">
          <motion.span
            id="hello"
            className={`text-xl sm:text-2xl font-extrabold block mb-2 ${styles.hello} `}
            variants={helloVariants}
            initial="hidden"
            animate="visible"
          >
            Hello, my name is
          </motion.span>
          <motion.h1
            className={`name text-2xl sm:text-4xl md:text-6xl lg:text-[110px] tracking-wider uppercase ${styles.name} flex flex-wrap justify-center`}
            variants={container}
            initial="hidden"
            animate="visible"
            id="name"
          >
            {letters.map((char, i) => (
              <motion.span
                key={i}
                variants={child(i)}
                className="inline-block"
                style={{minWidth: "0.5em"}}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="text-base sm:text-xl md:text-2xl font-medium mt-2 text-gray-600"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 2.5, duration: 0.7}}
          >
            Full-Stack Developer • MERN • UI Animations • Backend Architect
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
