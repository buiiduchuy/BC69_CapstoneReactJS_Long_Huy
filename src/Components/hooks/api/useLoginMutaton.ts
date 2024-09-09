import { useNavigate } from "react-router-dom";
import { quanLyNguoiDungServices } from "../../../services";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { LoginSchemaType } from "../../../schemas";
import { quanLyNguoiDungActions } from "../../../store/quanLyNguoiDung";
import { useAppDispatch } from "../../../store";

export const useLoginMutaton = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: (payload: LoginSchemaType) =>
      quanLyNguoiDungServices.dangNhap(payload),
    onSuccess: (data) => {
      console.log("data: ", data);
      // lưu thông tin đăng nhập của user
      dispatch(quanLyNguoiDungActions.setUser(data.data.content));

      // điều hướng về trang chủ
      navigate("/");
    },
    onError: (error: any) => {
      toast.error(error.response.data.content);
      // toast.error
    },
  });
  return loginMutation;
};
