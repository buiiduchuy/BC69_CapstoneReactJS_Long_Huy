import {
  FacebookFilled,
  SkypeFilled,
  WechatWorkFilled,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, ContactSchemaType } from "../../schemas";


export const ContactTemplate = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    mode: "onChange",
    resolver: zodResolver(ContactSchema),
  });


  return (
    <div className="container m-auto md:py-[90px] py-8 grid sm:grid-cols-2 gap-9 px-4">
      <div>
        <h2 className="text-white text-[35px] font-500 mb-9 after:contents:'' after:block after:w-9 after:h-[3px] after:bg-orange-300">
          Liên hệ
        </h2>
        <form onSubmit={handleSubmit((values) => {
          console.log("values: ", values);
          // Do something with data return from Form onSubmit
        })}>
          <div className="flex gap-5 mb-5">
            <div className="w-1/2">
              <p className="text-white mb-2">
                <span className="text-red-500 inline-block me-1">*</span>Họ tên
              </p>
              <Controller
                control={control}
                name="hoTen"
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Họ Tên"
                    className="w-full py-2 px-3 rounded-md border-none bg-gray-600"
                  />
                )}
              />
              {errors.hoTen && <p className="text-red-500">{errors.hoTen.message}</p>}
            </div>
            <div className="w-1/2">
              <p className="text-white mb-2">
                <span className="text-red-500 inline-block me-1">*</span>Email
              </p>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Email"
                    className="w-full py-2 px-3 rounded-md border-none bg-gray-600"
                  />
                )}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
          </div>
          <div className="mb-5">
            <p className="text-white mb-2">
              <span className="text-red-500 inline-block me-1">*</span>Tiêu đề
            </p>
            <Controller
              control={control}
              name="tieuDe"
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Tiêu đề"
                  className="w-full py-2 px-3 rounded-md border-none bg-gray-600"
                />
              )}
            />
            {errors.tieuDe && <p className="text-red-500">{errors.tieuDe.message}</p>}
          </div>
          <div className="mb-5">
            <p className="text-white mb-2">
              <span className="text-red-500 inline-block me-1">*</span>Ghi chú
            </p>
            <Controller
              control={control}
              name="ghiChu"
              render={({ field }) => (
                <textarea
                  {...field}
                  rows={5}
                  className="w-full py-2 px-3 rounded-md border-none bg-gray-600"
                  placeholder="Ghi chú"
                />
              )}
            />
            {errors.ghiChu && <p className="text-red-500">{errors.ghiChu.message}</p>}
          </div>
          <div>
            <Button
              htmlType="submit"
              className="text-white bg-orange-400 px-8 hover:!text-orange-400 border-none font-500"
              size="large"
            >
              Gửi
            </Button>
          </div>
        </form>
      </div>
      <div>
        <h2 className="text-white text-[35px] font-500 mb-9 after:contents:'' after:block after:w-9 after:h-[3px] after:bg-orange-300">
          Thông tin liên hệ
        </h2>
        <p className="text-white">
          Chúng tôi luôn sẵn lòng giúp đỡ và cung cấp thêm thông tin về các dịch vụ của chúng tôi. Bạn có thể liên hệ
          với chúng tôi qua email, điện thoại hoặc bằng cách điền vào biểu mẫu trên trang web của chúng tôi. Cảm ơn bạn
          đã cân nhắc đến chúng tôi!
        </p>
        <div className="mt-5">
          <a href="tel:0777-777-777" className="text-white text-[18px] font-500 hover:text-orange-400">
            0777-777-777
          </a>
        </div>
        <div className="mt-5">
          <a href="mailto:hotflix@gmail.com" className="text-white text-[18px] font-500 hover:text-orange-400">
            hotflix@gmail.com
          </a>
        </div>
        <ul className="flex gap-10 mt-5">
          <li>
            <FacebookFilled className="text-white text-[30px] cursor-pointer hover:text-orange-400" />
          </li>
          <li>
            <WechatWorkFilled className="text-white text-[30px] cursor-pointer hover:text-orange-400" />
          </li>
          <li>
            <SkypeFilled className="text-white text-[30px] cursor-pointer hover:text-orange-400" />
          </li>
        </ul>
      </div>
    </div>
  );
};
