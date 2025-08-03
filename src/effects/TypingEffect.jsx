import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingEffect = (prop) => {
  

  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord =  prop.typingText[wordIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000); // pause before delete
        }
      } else {
        setDisplayText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % prop.typingText.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration:1.3, when: 'beforeChildren', }}
      className="text-neutral-300 font-medium"
    >
      {displayText}
      <motion.span
        className="inline-block w-1 bg-neutral-400 ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        &nbsp;
      </motion.span>
    </motion.span>
  );
};

export default TypingEffect;
