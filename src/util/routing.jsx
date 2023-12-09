import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout/MainLayout";
import Demos from "../components/Pages/Demos/Demos";
import { loader as discordLoader } from "../components/Pages/Home/Discord";
import Home from "../components/Pages/Home/Home";
import NotFound from "../components/Pages/NotFound/NotFound";
import Stats, { loader as statsLoader } from "../components/pages/Stats/Stats";

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
          path: "/stats",
          element: <Stats />,
          loader: statsLoader,
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
