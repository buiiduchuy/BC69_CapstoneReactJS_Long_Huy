import {
  FacebookFilled,
  SkypeFilled,
  WechatWorkFilled,
} from "@ant-design/icons";
import { Button } from "antd";

export const ContactTemplate = () => {
  return (
    <div className="container m-auto md:py-[90px] py-8 grid sm:grid-cols-2 gap-9 px-4">
      <div>
        <h2 className="text-white text-[35px] font-500 mb-9 after:contents:'' after:block after:w-9 after:h-[3px] after:bg-orange-300">
          Liên hệ
        </h2>
        <form>
          <div className="flex gap-5 mb-5">
            <div className="w-1/2">
              <p className="text-white mb-2">
                <span className="text-red-500 inline-block me-1">*</span>Họ tên
              </p>
              <input
                type="text"
                placeholder="Nhập họ tên"
                className="w-full py-2 px-3 rounded-md outline-none bg-gray-600 text-white"
              />
            </div>
            <div className="w-1/2">
              <p className="text-white mb-2">
                <span className="text-red-500 inline-block me-1">*</span>Email
              </p>
              <input
                type="text"
                placeholder="abc@gmail.com"
                className="w-full py-2 px-3 rounded-md outline-none bg-gray-600 text-white"
              />
            </div>
          </div>
          <div className="mb-5">
            <p className="text-white mb-2">
              <span className="text-red-500 inline-block me-1">*</span>Tiêu đề
            </p>
            <input
              type="text"
              placeholder="Nhập tiêu đề"
              className="w-full py-2 px-3 rounded-md outline-none bg-gray-600 text-white"
            />
          </div>
          <div className="mb-5">
            <p className="text-white mb-2">
              <span className="text-red-500 inline-block me-1">*</span>Ghi chú
            </p>
            <textarea
              name=""
              id=""
              rows={5}
              className="w-full py-2 px-3 rounded-md outline-none bg-gray-600 text-white"></textarea>
          </div>
          <div>
            <Button
              className="text-white bg-orange-400 px-8 hover:!text-orange-400 outline-none border-none font-500"
              size="large">
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
          Chúng tôi luôn sẵn lòng giúp đỡ và cung cấp thêm thông tin về các dịch
          vụ của chúng tôi. Bạn có thể liên hệ với chúng tôi qua email, điện
          thoại hoặc bằng cách điền vào biểu mẫu trên trang web của chúng tôi.
          Cảm ơn bạn đã cân nhắc đến chúng tôi!
        </p>
        <div className="mt-5">
          <a
            href="tel:0777-777-777"
            className="text-white text-[18px] font-500 hover:text-orange-400">
            0777-777-777
          </a>
        </div>
        <div className="mt-5">
          <a
            href="mailto:hotflix@gmail.com"
            className="text-white text-[18px] font-500 hover:text-orange-400">
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
