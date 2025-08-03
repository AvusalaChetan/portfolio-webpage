import { useEffect, useState, lazy, Suspense } from "react";
import Loading from "./components/Loading";
import "./App.css";
import {  AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Home from "./pages/homePage/Home";
import About from "./pages/AboutPage/About";
import Skills from "./pages/SkillsPage/Skills";
import Projects from "./pages/ProjectPage/Projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3100);

    return () => clearTimeout(timer);
  }, []);

//lazy loading
const LazyContactPage = lazy(()=>import('./pages/ContactPage/Contact'))

  if (isLoading) {
    return <Loading />
  }


  return (
    <>
      <main
        className="bg-gradient-to-br from-[#151042] via-[#302b63] to-[#24243e] h-screen  text-white min-h-screen w-full overflow-x-hidden "
        style={{ overflowX: "hidden" }}
      >
        <Suspense>
          <div className="loading-container  ">
            <AnimatePresence>
                <div key="navbar">
                  <Navbar />
                </div>
              <div key="main-content" className="main-container w-[85%] mx-auto">
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
                    <Suspense fallback={<div className="text-white">Loading contact...</div>}>
                      <LazyContactPage />
                    </Suspense>
                  </div>
                </div>
              </div>
            </AnimatePresence>
          </div>
        </Suspense>
      </main>
    </>
  );
}

export default App;
