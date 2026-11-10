import {createBrowserRouter, RouterProvider} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Overview from "../../pages/Overview";
import About from "../../pages/About";
import Skills from "../../pages/Skills";
import Projects from "../../pages/Projects";
import AskMe from "../../pages/AskMe";
import Connect from "../../pages/Connect";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {path: "", element: <Overview />},
        {path: "about", element: <About />},
        {path: "skills", element: <Skills />},
        {path: "projects", element: <Projects />},
        {path: "connect", element: <Connect />},
        {path: "ai", element: <AskMe />},
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
