import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import Cursor from "./animations/Cursor";
import Projects from "./pages/Projects";
import ScrollBar from "./animations/ScrollBar";

function App() {

  
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

  return (
    <main className="bg-white  w-full overflow-x-hidden ">
    <ScrollBar>
      <RouterProvider router={router}/>
      <Cursor/>
      <HomePage/>
      <AboutPage/>
      <SkillsPage/>
      <Projects/>
    </ScrollBar>
    </main>
  );
}
export default App;
