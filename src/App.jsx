import "./App.css";
import {lazy, Suspense, useEffect, useState} from "react";
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage";
import Cursor from "./animations/Cursor";
import Projects from "./pages/Projects";
import ScrollBar from "./animations/ScrollBar";
import Loading from "./pages/Loading";
import Music from "./components/Music";
import ContactCard from "./pages/ContactCard";
import ParticleBg from "./animations/ParticleBg";
import {Progress, } from "antd";

function App() {
  const [loading, setLoading] = useState(true);
  const SkillComponent = lazy(() => import("./pages/SkillsPage"));

  // const router = createBrowserRouter(
  //   [
  //     {
  //       path: "",
  //       element: (
  //         <>
  //           <Navbar />
  //         </>
  //       ),
  //     },
  //   ],
  //   {future: {v7_startTransition: true}}
  // );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <main className="bg-gray-50 w-full overflow-x-hidden ">
      <ScrollBar>
        {/* <RouterProvider router={router} /> */}
        <Navbar/>
        <Cursor />
        <ParticleBg />
        <Music />
        <HomePage />
        <AboutPage />
        <Suspense fallback={<LoadingAntD />}>
          <SkillComponent />
        </Suspense>
        <Projects />
        <ContactCard />
      </ScrollBar>
    </main>
  );
}

const LoadingAntD = () => {
  return (
    <Progress
      type="circle"
      percent={100}
      strokeColor="#000"
      strokeWidth={20}
      style={{
        width:'100vw',
        margin: "auto",

      }}
    />
  );
};
export default App;
