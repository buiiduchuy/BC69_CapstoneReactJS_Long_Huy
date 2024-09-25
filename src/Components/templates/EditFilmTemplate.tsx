import { Button, DatePicker, Input, Switch, Upload } from "antd";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { phimSchema, phimSchemaType } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import moment from "moment";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

export const EditFilmTemplate = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const maPhim = searchParams.get("maPhim");
  console.log("maPhim: ", maPhim);


  const [fileList, setFileList] = useState([])

  const handleOnChangeUpload = ({fileList: newFileList}) => {
    setFileList(newFileList)
  }

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
      <form
        id="addFilmForm"
        className="bg-white md:px-5 md:py-8 p-3"
        onSubmit={handleSubmit((values) => {
          console.log("values: ", values);
          const uploadedFiles = values.hinhAnh.map((file) => file.originFileObj);
          console.log("uploadedFiles: ", uploadedFiles);
        })}
      >
        <div className="flex flex-wrap">
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Mã phim</p>
            <Controller
              name="maPhim"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Mã phim" />}
            />
            {errors?.maPhim?.message && <p className="text-red-500">{errors?.maPhim?.message}</p>}
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Tên phim</p>
            <Controller
              name="tenPhim"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Tên phim" />}
            />
            {errors?.tenPhim?.message && <p className="text-red-500">{errors?.tenPhim?.message}</p>}
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Bí danh</p>
            <Controller
              name="biDanh"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Bí danh" />}
            />
            {errors?.biDanh?.message && <p className="text-red-500">{errors?.biDanh?.message}</p>}
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Trailer</p>
            <Controller
              name="trailer"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Trailer" />}
            />
            {errors?.trailer?.message && <p className="text-red-500">{errors?.trailer?.message}</p>}
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Hình ảnh</p>
            <Controller
              name="hinhAnh"
              control={control}
              defaultValue={fileList}
              render={({ field: { onChange } }) => (
                <Upload
                  maxCount={1}
                  listType="picture"
                  fileList={fileList}
                  onChange={(info) => {
                    handleOnChangeUpload(info); // Cập nhật fileList trong state
                    onChange(info.fileList); // Cập nhật giá trị trong React Hook Form
                  }}
                  beforeUpload={() => false} // Ngăn chặn việc tải lên ngay lập tức
                >
                  <Button icon={<UploadOutlined />}>Tải tệp lên</Button>
                </Upload>
              )}
            />
            {errors?.hinhAnh?.message && <p className="text-red-500">{errors?.hinhAnh?.message}</p>}
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Mô tả</p>
            <Controller
              name="moTa"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Mô tả" />}
            />
            {errors?.moTa?.message && <p className="text-red-500">{errors?.moTa?.message}</p>}
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Mã nhóm</p>
            <Controller
              name="maNhom"
              control={control}
              render={({ field }) => <Input {...field} placeholder="Mã nhóm" />}
            />
            {errors?.maNhom?.message && <p className="text-red-500">{errors?.maNhom?.message}</p>}
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
            {errors?.ngayKhoiChieu?.message && <p className="text-red-500">{errors?.ngayKhoiChieu?.message}</p>}
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Đánh giá</p>
            <Controller
              name="danhGia"
              control={control}
              render={({ field }) => <Input {...field} type="number" min={0} max={5} placeholder="Số sao" />}
            />
            {errors?.danhGia?.message && <p className="text-red-500">{errors?.danhGia?.message}</p>}
          </div>
          <div className="flex w-full flex-wrap">
            <div className="w-1/2 md:w-1/6 mb-2 p-1">
              <p>Hot</p>
              <Controller
                name="hot"
                control={control}
                render={({ field }) => <Switch {...field} defaultValue={false} />}
              />
              {errors?.hot?.message && <p className="text-red-500">{errors?.hot?.message}</p>}
            </div>
            <div className="w-1/2 md:w-1/6 mb-2 p-1">
              <p>Đang chiếu</p>
              <Controller
                name="dangChieu"
                control={control}
                render={({ field }) => <Switch {...field} defaultValue={false} />}
              />
              {errors?.dangChieu?.message && <p className="text-red-500">{errors?.dangChieu?.message}</p>}
            </div>
            <div className="w-1/2 md:w-1/6 mb-2 p-1">
              <p>Sắp chiếu</p>
              <Controller
                name="sapChieu"
                control={control}
                render={({ field }) => <Switch {...field} defaultValue={false} />}
              />
              {errors?.sapChieu?.message && <p className="text-red-500">{errors?.sapChieu?.message}</p>}
            </div>
          </div>
        </div>
        <div className="my-5">
          <Button type="dashed" danger size="large">
            Huỷ
          </Button>
          <Button type="primary" size="large" className="ms-3" htmlType="submit">
            Cập nhật
          </Button>
        </div>
      </form>
    </div>
  );
};
