import { useRoutes } from "react-router-dom";
import { PATH } from "../constants";
import { Contact, FilmDetail, Home, Login, Register } from "../pages";
import { AuthLayout, MainLayout } from "../Components";
import { AboutUs } from "../pages/AboutUs";

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
          path: PATH.aboutUs,
          element: <AboutUs />,
        },
      ],
    },
  ]);
