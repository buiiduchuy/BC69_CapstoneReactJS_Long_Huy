import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "../../services";
import { sleep } from "../../utils";

const edit = createAsyncThunk(
  // đặt theo tên thư mục
  "quanLyPhim/edit",
  // payload : giá trị truyền vào khi action ddc dispatch
  async (payload: string, thunkAPI) => {
    try {
      console.log("thunkAPI: ", thunkAPI);
      console.log("payload: ", payload);

      await sleep(2000);

      const result = await quanLyPhimServices.getPhimDetailById(payload);
      console.log("result", result);

      return result.data.content;
    } catch (error) {
      const { rejectWithValue } = thunkAPI;
      console.log("error: ", error);
      return rejectWithValue(error);
    }
  }
);

export const quanLyNguoiDungThunks = { edit };
