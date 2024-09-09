import { useMutation } from "@tanstack/react-query";
import { RegisterSchemaType } from "../../../schemas";
import { quanLyNguoiDungServices } from "../../../services";
import { sleep } from "../../../utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../constants";

// JS docs để note document
/**
 *
 * @param a: string , b:number
 * @returns registerMutation
 * @description thực hiện đăng ký user
 *
 */

export const useRegisterMutaton = () => {
  const naviagte = useNavigate();

  const registerMutation = useMutation({
    mutationKey: ["Register"],
    // mutationFn: (payload: RegisterSchemaType) =>
    //   quanLyNguoiDungServices.dangKy(payload),
    mutationFn: async (payload: RegisterSchemaType) => {
      await sleep(2000);
      return quanLyNguoiDungServices.dangKy(payload);
    },
    onSuccess: () => {
      // hàm được gọi khi API thành công
      toast.success("Đăng ký thành công!");

      // chuyển user đến trang đăng nhập
      naviagte(PATH.login);
    },
    onError: (error: any) => {
      // hàm được gọi khi API thất bại
      toast.error(error?.response?.data.content);
    },
  });
  return registerMutation;
};
