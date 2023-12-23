import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout/MainLayout";
import { loader as discordLoader } from "../components/Pages/Home/Discord/Discord";
import Home from "../components/Pages/Home/Home";
import NotFound from "../components/Pages/NotFound/NotFound";
import Demos, { loader as demoLoader } from "../components/Pages/Demos/Demos";

export default function Routing() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: discordLoader,
        },
        {
          path: "/demos",
          element: <Demos />,
          loader: demoLoader,
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
