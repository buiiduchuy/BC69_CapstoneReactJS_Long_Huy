import { useRoutes } from "react-router-dom";
import { PATH } from "../constants";
import { Contact, FilmDetail, Home, Login, Register, AboutUs, Category } from "../pages";
import { AuthLayout, MainLayout } from "../Components";

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
        }
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
        {
          path: PATH.aboutUs,
          element: <AboutUs />,
        },
      ],
    },
  ]);
