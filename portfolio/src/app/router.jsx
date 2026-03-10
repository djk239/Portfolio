import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Rutgers from "../pages/Rutgers";
import Hobbies from "../pages/Hobbies";
import Classes from "../pages/Classes";
import Stack from "../pages/Stack";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/rutgers", element: <Rutgers /> },
      { path: "/hobbies", element: <Hobbies /> },
      { path: "/classes", element: <Classes /> },
      { path: "/stack", element: <Stack /> },


    ],
  },
]);
