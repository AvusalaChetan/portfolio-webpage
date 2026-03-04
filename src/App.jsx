import {lazy, Suspense, useState} from "react";
import Navbar from "./components/navbar/Navbar";
import Loading from "./pages/Loading";
import Music from "./components/Music";

const HomePage = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Connect = lazy(() => import("./pages/Connect"));

const App = () => {
  const [isLoading, setisLoading] = useState(true);

  setTimeout(() => {
    setisLoading(false);
  }, 4000);

  if (isLoading) return <Loading></Loading>;

  return (
    <main
      style={{scrollBehavior: "smooth"}}
      className="bg-black/10 h-screen w-screen overflow-x-hidden"
    >
      <Navbar />
      <Music />
      <Suspense fallback={<>showing ....</>}>
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="connect">
          <Connect />
        </section>
      </Suspense>
    </main>
  );
};

export default App;
