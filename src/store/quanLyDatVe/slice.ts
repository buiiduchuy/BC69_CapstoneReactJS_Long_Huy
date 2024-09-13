import { createSlice } from "@reduxjs/toolkit";

import { DanhSachGhe } from "../../@types";

type initialState = {
  listSeat: [DanhSachGhe];
};

const initialState = {
  listSeat: [],
};

export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeActions } =
  createSlice({
    name: "quanLyDatVe",
    initialState,

    // xử lý action đồng bộ
    reducers: {
      setListSeat: (state, { payload }) => {
        let index = state.listSeat.findIndex(
          (item) => item?.maGhe === payload.maGhe
        );
        if (index === -1) {
          state.listSeat.push(payload);
        } else {
          state.listSeat.splice(index, 1);
        }
      },
    },
  });
