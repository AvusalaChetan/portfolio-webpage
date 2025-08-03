import  { useRef, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MobileNavbar from "./MobileNavbar";
import MagnetEffect from "../effects/MagnetEffect";

{/* animation of SVG */}
const svgVariant = {
  hidden: { rotate: -90 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariant = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: [0.6, 1],
    transition: {
      delay: 1.0,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

{/* animation of UL */}
const ulVarient = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.3,
      duration: 1.5,
      staggerChildren: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
      when: 'beforeChildren',
    },
  },
};

const liVariant = {
  hidden: {
    opacity: 0,
    y: -6,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.3,
      ease: 'easeInOut',
    },
  },
};

const Navbar = () => {
  const navRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);
  const navbarMobileBtn = useRef(null);
  const { contextSafe } = useGSAP({ scope: navbarMobileBtn });

  const onClickNavbtnHandile = contextSafe(() => {
    setNavOpen((prev) => !prev);
    gsap.to(navbarMobileBtn.current, {
      duration: 0.5,
      rotation: navOpen ? 0 : 90,
      ease: "power2.inOut",
    });
  });
  
  const closeNavbar = contextSafe(() => {
    setNavOpen(false);
    gsap.to(navbarMobileBtn.current, {
      duration: 0.5, 
      rotation: 0,
      ease: "power2.inOut",
    });
  });

  return (
    <header className="w-[90vw] m-auto">
      <nav className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <MagnetEffect>
             <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400 font-extrabold text-2xl md:text-3xl">
          Avusala Chetan
        </h1>
          </MagnetEffect>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center justify-between gap-1 w-fit p-3">
            <motion.ul
              variants={ulVarient}
              initial="hidden"
              animate="visible"
              ref={navRef}
              className="navul flex space-x-8 text-gray-300 font-medium"
            >
              <MagnetEffect>
                <motion.li
                  variants={liVariant}
                  className="hover:text-white cursor-pointer transition"
                >
                  <a href="#home">Home</a>
                </motion.li>
              </MagnetEffect>

              <MagnetEffect>
                <motion.li
                  variants={liVariant}
                  className="hover:text-white cursor-pointer transition"
                >
                  <a href="#about">About</a>
                </motion.li>
              </MagnetEffect>

              <MagnetEffect>
                <motion.li
                  variants={liVariant}
                  className="hover:text-white capitalize cursor-pointer transition"
                >
                  <a href="#skills">Skills</a>
                </motion.li>
              </MagnetEffect>

              <MagnetEffect>
                <motion.li
                  variants={liVariant}
                  className="hover:text-white cursor-pointer transition"
                >
                  <a href="#projects">Projects</a>
                </motion.li>
              </MagnetEffect>

              <MagnetEffect>
                <motion.li
                  variants={liVariant}
                  className="hover:text-white cursor-pointer transition"
                >
                  <a
                 href="#contact" 
                  >Contact</a>
                </motion.li>
              </MagnetEffect>
            </motion.ul>
          </div>

          {/* Mobile Button */}
          <div
            ref={navbarMobileBtn}
            className="md:hidden navbar-mobile-btn fixed right-4 z-50"
          >
            <button
              onClick={onClickNavbtnHandile}
              className={`text-gray-100  hover:text-white focus:outline-none ${navOpen?'hidden':''}`}
            >
              <motion.svg
                variants={svgVariant}
                initial="hidden"
                animate="visible"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <motion.path
                  variants={pathVariant}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </motion.svg>
            </button>
          </div>
        </div>

        <motion.hr
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ delay: 1, duration: 2.4, ease: 'easeOut' }}
          className="text-white bg-cyan-400 w-55 mt-2 h-[0rem]"
        />
      </nav>

      {/* Side Navbar */}
      <MobileNavbar navOpen={navOpen} openNav={onClickNavbtnHandile} closeNav={closeNavbar} />
    </header>
  );
};

export default Navbar;
