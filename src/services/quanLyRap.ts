import { ShowTimes } from "../@types";
import { apiInstance } from "../constants";

const api = apiInstance.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/",
});

export const QuanLyRap = {
  getShowTimeById: (query = "") =>
    api.get<HttpResponse<ShowTimes>>(`/LayThongTinLichChieuPhim${query}`),
};
