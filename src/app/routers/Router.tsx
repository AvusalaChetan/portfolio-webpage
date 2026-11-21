import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "../../pages/About";
import Connect from "../../pages/Connect";
import Overview from "../../pages/Overview";
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";
import MainLayout from "../layouts/MainLayout";
import Loading from "../../shared/components/Loading";

const AskMe = lazy(() => import("../../pages/AskMe"));

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
        {
          path: "ai",
          element: (
            <Suspense fallback={<Loading/>}>
              <AskMe />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
