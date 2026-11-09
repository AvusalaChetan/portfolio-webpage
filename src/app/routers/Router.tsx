import {createBrowserRouter, RouterProvider} from "react-router";
import MainLayout from "../layouts/MainLayout";

const Router = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>
    }
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
