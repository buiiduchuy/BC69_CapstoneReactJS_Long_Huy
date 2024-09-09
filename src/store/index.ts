import { configureStore } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    quanLyNguoiDungReducer,
  },
});

type appDispatch = (typeof store)["dispatch"];
export const useAppDispatch: () => appDispatch = useDispatch;

export type RootState = ReturnType<(typeof store)["getState"]>;
