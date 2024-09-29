import { configureStore } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung";
import { useDispatch } from "react-redux";
import { quanLyDatVeReducer } from "./quanLyDatVe";
import { quanLyPhimReducer } from "./quanLyPhim";

export const store = configureStore({
  reducer: {
    quanLyNguoiDungReducer,
    quanLyDatVeReducer,
    quanLyPhimReducer,
  },
});

type appDispatch = (typeof store)["dispatch"];
export const useAppDispatch: () => appDispatch = useDispatch;

export type RootState = ReturnType<(typeof store)["getState"]>;
