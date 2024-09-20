import { apiInstance } from "../constants";
import { Banner } from "../@types";

const api = apiInstance.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim",
});

export const quanLyBannerServices = {
  layDanhSachBanner: api.get<HttpResponse<Banner>>(`/LayDanhSachBanner`),
};
