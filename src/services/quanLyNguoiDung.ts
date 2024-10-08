// import axios from "axios";
import { LoginSchemaType, RegisterSchemaType } from "../schemas";
import { apiInstance } from "../constants";
import {
  InfoUserType,
  LoginAPIResponse,
  RegisterAPIResponese,
} from "../@types";

const api = apiInstance.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung",
});

export const quanLyNguoiDungServices = {
  // dangKy: (payload: any) => {
  //   return axios.post(
  //     "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
  //     payload,
  //     {
  //       headers: {
  //         TokenCybersoft:
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2OSIsIkhldEhhblN0cmluZyI6IjMxLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczODI4MTYwMDAwMCIsIm5iZiI6MTcxMDUyMjAwMCwiZXhwIjoxNzM4NDI5MjAwfQ.bsAaudu2iAsJe1QzbsWWy0HG7ofC_8rFKL-MG_jW1ig",
  //       },
  //     }
  //   );
  // },
  dangKy: (payload: RegisterSchemaType) =>
    api.post<HttpResponse<RegisterAPIResponese>>("/DangKy", payload),
  // dangNhap: (payload: LoginSchemaType) => {
  //   return axios.post(
  //     "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
  //     payload,
  //     {
  //       headers: {
  //         TokenCybersoft:
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2OSIsIkhldEhhblN0cmluZyI6IjMxLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczODI4MTYwMDAwMCIsIm5iZiI6MTcxMDUyMjAwMCwiZXhwIjoxNzM4NDI5MjAwfQ.bsAaudu2iAsJe1QzbsWWy0HG7ofC_8rFKL-MG_jW1ig",
  //       },
  //     }
  //   );
  // },
  dangNhap: (payload: LoginSchemaType) =>
    api.post<HttpResponse<LoginAPIResponse>>("/DangNhap", payload),
  danhSachNguoiDung: (query = "") =>
    api.get<HttpResponse<InfoUserType>>(`/LayDanhSachNguoiDung?${query}`),
};
