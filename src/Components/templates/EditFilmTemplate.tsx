import { Button, DatePicker, Input, Switch, Upload } from "antd";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { phimSchema, phimSchemaType } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import moment from "moment";

export const EditFilmTemplate = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const maPhim = searchParams.get("maPhim");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<phimSchemaType>({
    mode: "onChange",
    resolver: zodResolver(phimSchema),
    defaultValues: {
      hinhAnh: undefined,
      ngayKhoiChieu: null,
    },
  });
  console.log("errors: ", errors);

  return (
    <div className="sm:p-9 p-6 min-h-screen flex flex-col">
      <h2 className="text-white uppercase font-500 xl:text-[30px] md:text-[25px] text-[20px] mb-5">
        Sửa thông tin phim
      </h2>
      <form id="addFilmForm" className="bg-white md:px-5 md:py-8 p-3">
        <div className="flex flex-wrap">
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Mã phim</p>
            <Controller
              name="maPhim"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Mã phim" />}
            />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Tên phim</p>
            <Controller
              name="tenPhim"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Tên phim" />}
            />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Bí danh</p>
            <Controller
              name="biDanh"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Bí danh" />}
            />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Trailer</p>
            <Controller
              name="trailer"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Trailer" />}
            />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Hình ảnh</p>
            <Controller
              name="hinhAnh"
              control={control}
              render={({ field }) => (
                <Upload {...field} beforeUpload={() => false} accept="image/jpg">
                  Upload hình
                </Upload>
              )}
            />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Mô tả</p>
            <Controller
              name="moTa"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Mô tả" />}
            />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Mã nhóm</p>
            <Controller
              name="maNhom"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Mã nhóm" />}
            />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Ngày khởi chiếu</p>
            <Controller
              name="ngayKhoiChieu"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  format="DD/MM/YYYY"
                  value={field.value ? moment(field.value, "DD/MM/YYYY") : null}
                  onChange={(date) => field.onChange(date ? date.format("DD/MM/YYYY") : null)}
                />
              )}
            />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Đánh giá</p>
            <Controller
              name="danhGia"
              control={control}
              render={({ field }) => <Input {...field} type="number" min={0} max={5} placeholder="Số sao" />}
            />
          </div>
          <div className="flex w-full flex-wrap">
            <div className="w-1/2 md:w-1/6 mb-2 p-1">
              <p>Hot</p>
              <Controller
                name="hot"
                control={control}
                render={({ field }) => <Switch {...field} defaultValue={false} />}
              />
            </div>
            <div className="w-1/2 md:w-1/6 mb-2 p-1">
              <p>Đang chiếu</p>
              <Controller
                name="dangChieu"
                control={control}
                render={({ field }) => <Switch {...field} defaultValue={false} />}
              />
            </div>
            <div className="w-1/2 md:w-1/6 mb-2 p-1">
              <p>Sắp chiếu</p>
              <Controller
                name="sapChieu"
                control={control}
                render={({ field }) => <Switch {...field} defaultValue={false} />}
              />
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
