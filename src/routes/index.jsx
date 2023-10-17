import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Menu from "../pages/menu";
import About from "../pages/about";
import User from "../pages/user";
import NotFound from "../pages/notFound";
import MainLayout from "../layouts/main";
import Contact from "../pages/contact";
import Basket from "../pages/basket";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: "true",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "booktable",
        element: <Contact/>,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "shopbasket",
        element: <Basket/>,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
