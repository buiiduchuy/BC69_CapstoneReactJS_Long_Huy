import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DanhSachGhe } from "../../@types";

type InitialState = {
  listSeat: DanhSachGhe[];
};

const initialState: InitialState = {
  listSeat: [],
};

export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeActions } =
  createSlice({
    name: "quanLyDatVe",
    initialState,

    // xử lý action đồng bộ
    reducers: {
      setListSeat: (state, { payload }: PayloadAction<DanhSachGhe>) => {
        let index = state.listSeat.findIndex(
          (item: DanhSachGhe) => item.maGhe === payload.maGhe
        );
        if (index === -1) {
          state.listSeat.push(payload);
        } else {
          state.listSeat.splice(index, 1);
        }
      },
      setClearSeat: (state, { payload }: PayloadAction<DanhSachGhe[]>) => {
        state.listSeat = payload;
      },
    },
  });
