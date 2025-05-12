import { useEffect, useState } from "react";
import Cursor from "./components/Cursor";
import Loading from "./components/Loading";
import "./App.css";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Home from "./pages/homePage/Home";
import About from "./pages/AboutPage/About";
import Skills from "./pages/SkillsPage/Skills";
import Projects from "./pages/ProjectPage/Projects";
import Contact from "./pages/ContactPage/Contact";
import Footer from "./pages/FooterPage/Footer";
function App() {
  {
    /*cursor animation disapper */
  }
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({ x: event.x, y: event.y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorVarient = {
    visible: {
      opacity: 1,
      x: cursorPos.x,
      y: cursorPos.y,

      transition: {
        duration: 0.1,
      },
    },
  };

  {
    /*loading animation disapper */
  }

  const [loadingEnd, setLoadingEnd] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoadingEnd(false);
    }, 3100);
  }, []);

  return (
    <>
      <main
        className="bg-neutral-900 h-screen w-screen text-white"
        style={{ overflowX: "hidden" }}
      > 
        <Cursor cursorVarient={cursorVarient} />

        <div className="loading-container ">
          <AnimatePresence>
            {loadingEnd ? (
              <motion.div
                key="box"
                initial={{ opacity: 1, overflow: "hidden" }}
                exit={{
                  opacity: [1, 0.5, 0],

                  filter: [
                    "blur(0px)",
                    "blur(5px)",
                    "blur(10px)",
                    "blur(20px)",
                  ],
                  scale: 10,
                  visibility: "hidden",
                }}
                transition={{ duration: 0.9 }}
                className={`w-fit h overflow-hidden h-screen`}
              >
                <Loading />
              </motion.div>
            ) : (
              <div className="main-container">
                <div>
                  <Navbar />
                </div>
                {/* <hr className="w-[100px] h-[2px] rotate-90 bg-white border-none" /> */}
                <div className="w-[80vw] m-auto "
                id="page-container"
                >
                  <div id="home">
                    <Home />
                  </div>
                  <div id="about">
                    <About />
                  </div>
                  <div id="skills">
                    <Skills />
                  </div>
                  <div id="projects">
                    <Projects />
                  </div>
                  <div id="contact">
                    <Contact />
                  </div>
                </div>
                <footer>
                  <Footer />
                </footer>
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}

export default App;
