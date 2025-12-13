import {motion} from "framer-motion";

const container = {
  hidden: {opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.7,
    },
  },
};

const child = (i) => ({
  hidden: {opacity: 0, y: i % 2 === 0 ? 40 : -40},
  visible: {
    opacity: 1,
    y: 0,
    transition: {type: "spring", stiffness: 500, damping: 30},
  },
});

const TextBasedAnimation = ({text,textColor,className}) => {
  const letters = text ? text.split("") : [];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      id="name"
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={child(i)}
          className={`inline ${textColor} ${className}` }
          style={{minWidth: "0.5em",color:textColor}}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextBasedAnimation;
