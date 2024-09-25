import { Button, Input, Switch } from "antd";

export const EditFilmTemplate = () => {
  return (
    <div className="sm:p-9 p-6 min-h-screen flex flex-col">
      <h2 className="text-white uppercase font-500 xl:text-[30px] md:text-[25px] text-[20px] mb-5">
        Sửa thông tin phim
      </h2>
      <form id="addFilmForm" className="bg-white md:px-5 md:py-8 p-3">
        <div className="flex flex-wrap">
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Mã phim</p>
            <Input placeholder="Mã phim" />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Tên phim</p>
            <Input placeholder="Tên phim" />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Bí danh</p>
            <Input placeholder="Bí danh" />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Trailer</p>
            <Input placeholder="Trailer" />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Hình ảnh</p>
            <Input placeholder="Hình ảnh" />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Mô tả</p>
            <Input placeholder="Mô tả" />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Mã nhóm</p>
            <Input placeholder="Mã nhóm" />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Ngày khởi chiếu</p>
            <Input placeholder="Ngày khởi chiếu" />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Đánh giá</p>
            <Input placeholder="Số sao" />
          </div>
          <div className="flex w-full flex-wrap">
            <div className="w-1/2 mb-2 p-1">
              <p>Hot</p>
              <Switch />
            </div>
            <div className="w-1/2 mb-2 p-1">
              <p>Đang chiếu</p>
              <Switch />
            </div>
            <div className="w-1/2 mb-2 p-1">
              <p>Sắp chiếu</p>
              <Switch />
            </div>
          </div>
        </div>
        <div className="my-5">
          <Button type="dashed" danger size="large">
            Huỷ
          </Button>
          <Button type="primary" size="large" className="ms-3">
            Cập nhật
          </Button>
        </div>
      </form>
    </div>
  );
};
