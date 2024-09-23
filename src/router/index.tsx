import { useRoutes } from "react-router-dom";
import { PATH } from "../constants";
import {
  Contact,
  FilmDetail,
  Home,
  Login,
  Register,
  AboutUs,
  Category,
  ListFimlAdmin,
  ListUser,
  ThemMoi,
} from "../pages";
import { AdminLayOut, AuthLayout, MainLayout } from "../Components";

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
          path: PATH.aboutUs,
          element: <AboutUs />,
        },
        {
          path: PATH.category,
          element: <Category />,
        },
        {
          path: PATH.contact,
          element: <Contact />,
        },
      ],
    },
    {
      element: <AdminLayOut />,
      children: [
        {
          path: PATH.admin,
          element: <ListFimlAdmin />,
        },
        {
          path: PATH.listUser,
          element: <ListUser />,
        },
        {
          path: PATH.addPhim,
          element: <ThemMoi />,
        },
      ],
    },
  ]);
