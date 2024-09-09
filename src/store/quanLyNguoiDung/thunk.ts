import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyNguoiDungServices } from "../../services";
import { RegisterSchemaType } from "../../schemas";
import { sleep } from "../../utils";

const dangKy = createAsyncThunk(
  // đặt theo tên thư mục
  "quanLyNguoiDung/dangKy",
  // payload : giá trị truyền vào khi action ddc dispatch
  async (payload: RegisterSchemaType, thunkAPI) => {
    try {
      console.log("thunkAPI: ", thunkAPI);
      console.log("payload: ", payload);

      await sleep(2000);

      const result = await quanLyNguoiDungServices.dangKy(payload);
      console.log("result", result);

      return result.data.content;
    } catch (error) {
      const { rejectWithValue } = thunkAPI;
      console.log("error: ", error);
      return rejectWithValue(error);
    }
  }
);

export const quanLyNguoiDungThunks = { dangKy };
