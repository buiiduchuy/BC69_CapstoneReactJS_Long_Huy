import axios, { InternalAxiosRequestConfig } from "axios";

import { localStorageKey } from "./localStorageKey";

type Token = string;
const dataUser = localStorage.getItem(localStorageKey.USER)
  ? localStorage.getItem(localStorageKey.USER)
  : "";

export const token: Token = dataUser ? JSON.parse(dataUser).accessToken : "";

export const apiInstance = {
  create: (setting?: Partial<InternalAxiosRequestConfig>) => {
    // Partial : biến tất cả thuộc tính require thành optional
    // Required : biến tất cả thuộc tính optional thành  required
    const axiosInstance = axios.create();
    axiosInstance.interceptors.request.use((config) => {
      return {
        ...config,
        ...setting,
        ...SVGTextPositioningElement,
        headers: {
          ...(setting?.headers || {}),
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2OSIsIkhldEhhblN0cmluZyI6IjMxLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczODI4MTYwMDAwMCIsIm5iZiI6MTcxMDUyMjAwMCwiZXhwIjoxNzM4NDI5MjAwfQ.bsAaudu2iAsJe1QzbsWWy0HG7ofC_8rFKL-MG_jW1ig",
          Authorization: `Bearer ${token}`,
        },
      } as unknown as InternalAxiosRequestConfig;
    });
    return axiosInstance;
  },
};
