import { createSlice } from "@reduxjs/toolkit";
import { quanLyNguoiDungThunks } from "./thunk";
import { phimSchemaType } from "./../../schemas";

const { edit } = quanLyNguoiDungThunks;

type initialState = {
  phimEdit?: phimSchemaType;
};

const initialState = {
  phimEdit: undefined,
};

export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } =
  createSlice({
    name: "quanLyPhim",
    initialState,

    reducers: {},

    extraReducers(builder) {
      builder
        .addCase(edit.pending, () => {
          console.log("pending");
        })
        .addCase(edit.fulfilled, () => {
          // const { payload } = action;
          // console.log("payload: ", payload);
          // console.log("fullfieled");
          // state.phimEdit = payload;
        })
        .addCase(edit.rejected, () => {
          console.log("rejected");
        });
    },
  });
