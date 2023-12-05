import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "../components/Layouts/MainLayout/MainLayout";

// Loaders
import { loader as discordLoader } from "../components/Pages/Home/Discord";

// Pages
import Demos from "../components/Pages/Demos/Demos";
import Home from "../components/Pages/Home/Home";
import NotFound from "../components/Pages/NotFound/NotFound";
import Stats from "../components/Pages/Stats/Stats";

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
