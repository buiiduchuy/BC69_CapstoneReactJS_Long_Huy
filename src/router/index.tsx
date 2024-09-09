import { useRoutes } from "react-router-dom";
import { PATH } from "../constants";
import { Contact, FilmDetail, Home, Login, Register } from "../pages";
import { AuthLayout, MainLayout } from "../Components";
import { AboutUs } from "../pages/AboutUs";
import { Category } from "../pages/Category";

export const routers = () =>
  useRoutes([
    {
      element: <AuthLayout />,
      children: [
        {
          path: PATH.register,
          element: <Register />,
        },
        {
          path: PATH.login,
          element: <Login />,
        },
      ],
    },
    {
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: PATH.phimDetail,
          element: <FilmDetail />,
        },
        {
          path: PATH.contact,
          element: <Contact />,
        },
        {
          path: PATH.category,
          element: <Category />,
        },
      ],
    },
  ]);
