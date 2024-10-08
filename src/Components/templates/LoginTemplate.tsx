import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "../../schemas";
import { useLoginMutaton } from "../hooks/api";

export const LoginTemplate = () => {
  const loginMutation = useLoginMutaton();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((values) => {
        console.log(values);
        // gọi api đăng nhập
        loginMutation.mutate(values);
      })}>
      <h2 className="text-white text-36 font-700 mb-30">Đăng nhập</h2>
      <p className="text-white text-16 mb-10">
        Tài Khoản <span className="text-red-500">*</span>
      </p>
      <Controller
        control={control}
        name="taiKhoan"
        render={({ field }) => <Input {...field} />}
      />
      {errors?.taiKhoan && (
        <p className="text-red-500">{errors.taiKhoan.message}</p>
      )}

      <p className="text-white text-16 mb-10">
        Mật khẩu <span className="text-red-500">*</span>
      </p>

      <Controller
        control={control}
        name="matKhau"
        render={({ field }) => <Input.Password {...field} />}
      />
      {errors?.matKhau && (
        <p className="text-red-500">{errors.matKhau.message}</p>
      )}

      <Button
        htmlType="submit"
        type="primary"
        danger
        loading={loginMutation.isPending}
        className="!w-full mt-30 !h-[50px]">
        Đăng nhập
      </Button>
    </form>
  );
};
