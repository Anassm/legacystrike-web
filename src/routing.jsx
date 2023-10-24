import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "./components/Layouts/MainLayout/MainLayout";

// Pages
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
import Demos from "./componentPages/Demos/Demos";

export default function Routing() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/demos",
          element: <Demos />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
