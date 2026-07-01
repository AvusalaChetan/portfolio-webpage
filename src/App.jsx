import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Askme from "./pages/Askme";
import Contact from "./pages/Contact";
import Music from './components/Music'



const App = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start bg-(--bg-2)">
      <Navbar />

      <div className="w-full max-w-5xl lg:max-w-4xl h-screen  px-4 md:px-8 py-6">
        <HomePage />
        <Skills />
        <Projects />
        <Askme />
        <Contact />
      </div>
        <Music/>
    </main>
  );
};

export default App;
