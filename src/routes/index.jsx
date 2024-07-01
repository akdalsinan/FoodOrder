import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Menu from "../pages/menu";
import About from "../pages/about";
import User from "../pages/user";
import NotFound from "../pages/notFound";
import MainLayout from "../layouts/main";
import Contact from "../pages/contact";
import Basket from "../pages/basket";
import Admin from "../pages/admin";
import Profil from "../pages/profil";
import ProtectedRoute from "./ProtectedRoute";

import { setUser, clearUser } from "../reducer/userToken";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import NoEntry from "./noEntry";
import OrderOk from "../pages/basket/orderOk";

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
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "shopbasket",
        element: <Basket />,
      },
      {
        path: "admin",
        element: (
          <ProtectedRoute role="admin">
            <Admin />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: <Profil />,
      },
      {
        path: "orderOk",
        element: <OrderOk />,
      },
      {
        path: "noEntry",
        element: <NoEntry />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

const RoutesComponent = () => {
  const dispatch = useDispatch();

  const token = sessionStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      dispatch(setUser(decodedToken));
    } else {
      dispatch(clearUser());
    }
  }, [token]);

  return <RouterProvider router={routes} />;
};

export default RoutesComponent;
