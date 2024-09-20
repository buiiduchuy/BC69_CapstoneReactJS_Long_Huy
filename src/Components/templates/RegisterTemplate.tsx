//rafc

import { Button, Input } from "antd";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterSchemaType } from "../../schemas";
import { useRegisterMutaton } from "../hooks/api";

export const RegisterTemplate = () => {
  const registerMutation = useRegisterMutaton();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });
  console.log("errors: ", errors);

  // onsubmit chỉ được gọi khi validation không có lỗi
  const onsubmit: SubmitHandler<RegisterSchemaType> = async (values) => {
    registerMutation.mutate(values);
  };

  return (
    <div>
      <div className="flex justify-center">
        <a href="/">
          <img src="/images/logo.svg" alt="..." />
        </a>
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="mt-[30px]">
          <p className="text-white text-16 mb-10">
            Họ tên <span className="text-red-500">*</span>
          </p>
          <Controller
            name="hoTen"
            control={control}
            render={({ field }) => (
              <Input status={errors.hoTen && "error"} {...field} />
            )}
          />
          {errors.hoTen && (
            <p className="text-red-500">{errors.hoTen.message}</p>
          )}
        </div>

        <div className="mt-[20px]">
          <p className="text-white text-16 mb-10">
            Email <span className="text-red-500">*</span>
          </p>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input status={errors.email && "error"} {...field} />
            )}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="mt-[20px]">
          <p className="text-white text-16 mb-10">
            Số điện thoại <span className="text-red-500">*</span>
          </p>
          <Controller
            name="soDt"
            control={control}
            render={({ field }) => (
              <Input status={errors.soDt && "error"} {...field} />
            )}
          />
          {errors.soDt && <p className="text-red-500">{errors.soDt.message}</p>}
        </div>

        <div className="mt-[20px]">
          <p className="text-white text-16 mb-10">
            Mã nhóm <span className="text-red-500">*</span>
          </p>
          <Controller
            name="maNhom"
            control={control}
            render={({ field }) => (
              <Input status={errors.maNhom && "error"} {...field} />
            )}
          />
          {errors.maNhom && (
            <p className="text-red-500">{errors.maNhom.message}</p>
          )}
        </div>

        <div className="mt-[20px]">
          <p className="text-white text-16 mb-10">
            Tài Khoản <span className="text-red-500">*</span>
          </p>
          <Controller
            name="taiKhoan"
            control={control}
            render={({ field }) => (
              <Input status={errors.taiKhoan && "error"} {...field} />
            )}
          />
          {errors.taiKhoan && (
            <p className="text-red-500">{errors.taiKhoan.message}</p>
          )}
        </div>

        <div className="mt-[20px]">
          <p className="text-white text-16 mb-10">
            Mật khẩu <span className="text-red-500">*</span>
          </p>
          <Controller
            name="matKhau"
            control={control}
            render={({ field }) => (
              <Input.Password status={errors.matKhau && "error"} {...field} />
            )}
          />
          {errors.matKhau && (
            <p className="text-red-500">{errors.matKhau.message}</p>
          )}
        </div>

        <Button
          // loading={isLoadingRegister}
          loading={registerMutation.isPending}
          htmlType="submit"
          type="primary"
          style={{
            backgroundColor: "#F9AA00",
          }}
          className="!w-full mt-30 !h-[50px]"
        >
          Đăng ký
        </Button>
      </form>
    </div>
  );
};
