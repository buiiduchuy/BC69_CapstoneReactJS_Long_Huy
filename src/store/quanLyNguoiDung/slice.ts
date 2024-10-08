import { createSlice } from "@reduxjs/toolkit";
import { quanLyNguoiDungThunks } from "./thunk";
import { RegisterSchemaType } from "../../schemas";
import { storage } from "../../utils";
import { localStorageKey } from "../../constants";
import { LoginAPIResponse } from "../../@types";

const { dangKy } = quanLyNguoiDungThunks;

type initialState = {
  isLoadingRegister: boolean;
  userRegister?: RegisterSchemaType;
  user: LoginAPIResponse | null;
  // listSeat: [DanhSachGhe];
};

const initialState = {
  isLoadingRegister: false,
  userRegister: {},
  user: storage(localStorageKey.USER),
  // listSeat: [],
};

export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = createSlice({
  name: "quanLyNguoiDung",
  initialState,

  // xử lý action đồng bộ
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;

      // lưu user vào localStorage
      localStorage.setItem(localStorageKey.USER, JSON.stringify(payload));
    },
    logOut: (state) => {
      // xoá thông tin user ở store redux
      state.user = null;

      // xoá thông tin use ở localStorage
      localStorage.removeItem(localStorageKey.USER);
    },
    // setListSeat: (state, { payload }) => {
    //   let index = state.listSeat.findIndex(
    //     (item) => item?.maGhe === payload.maGhe
    //   );
    //   if (index === -1) {
    //     state.listSeat.push(payload);
    //   } else {
    //     state.listSeat.splice(index, 1);
    //   }
    // },
  },

  //xử lý action bất đồng bộ (API)
  extraReducers(builder) {
    builder
      .addCase(dangKy.pending, (state) => {
        state.isLoadingRegister = true;
        console.log("pending");
      })
      .addCase(dangKy.fulfilled, (state, action) => {
        const { payload } = action;
        console.log("payload: ", payload);
        console.log("fullfieled");
        state.isLoadingRegister = false;
        state.userRegister = payload;
      })
      .addCase(dangKy.rejected, (state) => {
        console.log("rejected");
        state.isLoadingRegister = false;
      });
  },
});
