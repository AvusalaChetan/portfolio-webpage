import "./App.css";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import Cursor from "./animations/Cursor";
import Projects from "./pages/Projects";
import ScrollBar from "./animations/ScrollBar";
import Loading from "./pages/Loading";
import Music from "./components/Music";
import ContactCard from "./pages/ContactCard";

function App() {

   const [loading, setLoading] = useState(true);

  
  const router = createBrowserRouter(
    [
      {
        path: "",
        element: (
          <>
            <Navbar />
          </>
        ),
      },
    ],
    { future: { v7_startTransition: true } }
  );


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;


  return (
    <main className="bg-white  w-full overflow-x-hidden ">
    <ScrollBar>
      <RouterProvider router={router}/>
      <Cursor/>
    <Music/>
      <HomePage />
      <AboutPage/>
      <SkillsPage/>
      <Projects/>
      <ContactCard/>
    </ScrollBar>
    </main>
  );
}
export default App;
