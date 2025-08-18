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
              <div key="main-content" className="main-container w-full max-w-[100vw] px-2 sm:px-4 mx-auto">
                <div className="w-full lg:w-[80vw] md:m-auto  sm:border-0 rounded-md bg-opacity-80"
                  id="page-container"
                >
                  <div id="home" className="h-[80vh] sm:w-full lg:w-[80vw]  flex items-center justify-center" >
                    <Home />
                  </div>
                  <div id="about" className="">
                    <About />
                  </div>
                  <div id="skills" className="mt-6">
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
