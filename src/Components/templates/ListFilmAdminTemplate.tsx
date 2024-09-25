import { Button, Input, Modal, Switch } from "antd";
import { quanLyPhimServices } from "../../services";
import { useQuery } from "@tanstack/react-query";
import { sleep } from "../../utils";
import axios from "axios";
import { token } from "../../constants";
import { useState } from "react";
import { Paginate } from "../ui/Paginate";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { phimSchema, phimSchemaType } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { any } from "zod";

export const ListFilmAdminTemplate = () => {
  // lấy danh sách phim
  const { data, refetch } = useQuery({
    queryKey: ["DanhSachPhim"],
    queryFn: async () => {
      await sleep(1000);
      return quanLyPhimServices.getDanhSachPhim();
    },
    enabled: true,
  });

  // const [success, setSuccess] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    // setIsModalOpen(false);
    document.getElementById("submitForm").click();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // paginate
  const totalPost = data?.data.content.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const indexFirstPost = currentPage * postPerPage - postPerPage;
  const lastIndexPost = indexFirstPost + postPerPage;
  const listPost = data?.data.content.slice(indexFirstPost, lastIndexPost);


  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<phimSchemaType>({
    mode: "onChange",
    resolver: zodResolver(phimSchema),
    defaultValues: {
      hinhAnh: undefined,
    },
  });

  const headers = {
    Authorization: `Bearer ${token}`,
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2OSIsIkhldEhhblN0cmluZyI6IjAxLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczODM2ODAwMDAwMCIsIm5iZiI6MTcxMDUyMjAwMCwiZXhwIjoxNzM4NTE1NjAwfQ.ap-iPzMpXDeCuXH0aJnbbSuR3vIW4upk1nOK3h9D-5g",
  };


  const onSubmitHandle: SubmitHandler<phimSchemaType> = async (data) => {
    console.log("data: ", data);
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if( value === undefined ) formData.append(key, !!value);
      else formData.append(key, value)
    }
    console.log("formData: ", typeof formData);
    // try {
    //   const response = await axios.post(
    //     "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
    //     formData,
    //     {
    //       headers: {
    //         ...headers,
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );

    //   console.log("File upload response:", response.data);
    // } catch (error) {
    //   console.log("error: ", error);
    // }
  };

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    return checked;
  };



  return (
    <div className="sm:p-9 p-6 min-h-screen flex flex-col">
      <div className="flex flex-wrap justify-between md:mb-12 mb-5">
        <h2 className="text-white uppercase font-500 xl:text-[30px] md:text-[25px] text-[20px] mb-5 md:mb-0">
          Danh sách phim
        </h2>
        <Button className="py-5 hover:!bg-orange-400 hover:!text-white hover:!border-white" onClick={() => showModal()}>
          Thêm phim mới
        </Button>
      </div>
      <div className="mb-6">
        <Input.Search placeholder="Tìm phim..." className="w-full adminInputSearch" />
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border text-white bg-gray-700">
          <thead>
            <tr className="xl:text-[16px] text-[12px]">
              <th className="py-3 px-2">Mã phim</th>
              <th className="py-3 px-2">Tên phim</th>
              <th className="py-3 px-2">Hình ảnh</th>
              <th className="py-3 px-2">Mô tả</th>
              <th className="py-3 px-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listPost &&
              listPost.map((phim) => {
                return (
                  <tr key={phim.maPhim} className="mb-2 xl:text-[16px] text-[12px]">
                    <td className="py-3 px-2 text-center">{phim.maPhim}</td>
                    <td className="py-3 px-2">{phim.tenPhim}</td>
                    <td className="py-3 px-2">
                      <img src={phim.hinhAnh} />
                    </td>
                    <td className="py-3 px-2">{`${phim.moTa.slice(0, 200)}...`}</td>
                    <td className="py-3 px-2 text-center">
                      <Button
                        danger
                        onClick={async () => {
                          console.log(phim.maPhim);
                          try {
                            await axios.delete(
                              "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=" + phim.maPhim,
                              {
                                headers,
                              }
                            );
                            refetch();
                          } catch (error) {
                            console.log("🚀 ~ onClick={ ~ error:", error);
                          }
                        }}
                      >
                        Delete
                      </Button>
                      <Button type="primary" className="ms-2">
                        Edit
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className="mb-5 mt-9">
        <Paginate total={totalPost} current={currentPage} setCurrent={setCurrentPage} numberPost={postPerPage} />
      </div>

      <Modal
        title={<h3 className="text-center text-[25px] mb-2">Thêm phim mới</h3>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form id="addFilmForm" onSubmit={handleSubmit(onSubmitHandle)}>
          <div className="flex flex-wrap">
            <div className="md:w-1/2 w-full mb-2 p-1">
              <p>Mã phim</p>
              <Controller
                control={control}
                render={({ field }) => <Input {...field} placeholder="Mã phim" />}
                name="maPhim"
              />
              {errors?.maPhim?.message && <p className="text-red-500">{errors?.maPhim?.message}</p>}
            </div>
            <div className="md:w-1/2 w-full mb-2 p-1">
              <p>Tên phim</p>
              <Controller
                control={control}
                render={({ field }) => <Input {...field} placeholder="Tên phim" />}
                name="tenPhim"
              />
              {errors?.tenPhim?.message && <p className="text-red-500">{errors?.tenPhim?.message}</p>}
            </div>
            <div className="md:w-1/2 w-full mb-2 p-1">
              <p>Bí danh</p>
              <Controller
                control={control}
                render={({ field }) => <Input {...field} placeholder="Bí danh" />}
                name="biDanh"
              />
              {errors?.biDanh?.message && <p className="text-red-500">{errors?.biDanh?.message}</p>}
            </div>
            <div className="md:w-1/2 w-full mb-2 p-1">
              <p>Trailer</p>
              <Controller
                control={control}
                render={({ field }) => <Input {...field} placeholder="Trailer" />}
                name="trailer"
              />
              {errors?.trailer?.message && <p className="text-red-500">{errors?.trailer?.message}</p>}
            </div>
            <div className="md:w-1/2 w-full mb-2 p-1">
              <p>Hình ảnh</p>
              <Controller
                control={control}
                render={({ field }) => <Input {...field} type="file" placeholder="Hình ảnh" accept="image/jpg" />}
                name="hinhAnh"
              />
              {errors?.hinhAnh?.message && <p className="text-red-500">{errors?.hinhAnh?.message}</p>}
            </div>
            <div className="md:w-1/2 w-full mb-2 p-1">
              <p>Mô tả</p>
              <Controller
                control={control}
                render={({ field }) => <Input {...field} placeholder="Mô tả" />}
                name="moTa"
              />
              {errors?.moTa?.message && <p className="text-red-500">{errors?.moTa?.message}</p>}
            </div>
            <div className="md:w-1/2 w-full mb-2 p-1">
              <p>Mã nhóm</p>
              <Controller
                control={control}
                render={({ field }) => <Input {...field} placeholder="Mã nhóm" />}
                name="maNhom"
              />
              {errors?.maNhom?.message && <p className="text-red-500">{errors?.maNhom?.message}</p>}
            </div>
            <div className="md:w-1/2 w-full mb-2 p-1">
              <p>Ngày khởi chiếu</p>
              <Controller
                control={control}
                render={({ field }) => <Input {...field} placeholder="Ngày khởi chiếu" />}
                name="ngayKhoiChieu"
              />
              {errors?.ngayKhoiChieu?.message && <p className="text-red-500">{errors?.ngayKhoiChieu?.message}</p>}
            </div>
            <div className="md:w-1/2 w-full mb-2 p-1">
              <p>Đánh giá</p>
              <Controller
                control={control}
                render={({ field }) => <Input {...field} type="number" min={0} max={5} placeholder="Số sao" />}
                name="danhGia"
              />
              {errors?.danhGia?.message && <p className="text-red-500">{errors?.danhGia?.message}</p>}
            </div>
            <div className="flex w-full">
              <div className="w-1/3 mb-2 p-1">
                <p>Hot</p>
                <Controller
                  control={control}
                  render={({ field: { onChange } }) => <Switch defaultValue={false} onChange={onChange} />}
                  name="hot"
                />
                {errors?.hot?.message && <p className="text-red-500">{errors?.hot?.message}</p>}
              </div>
              <div className="w-1/3 mb-2 p-1">
                <p>Đang chiếu</p>
                <Controller
                  control={control}
                  render={({ field: { onChange } }) => <Switch defaultValue={false} onChange={onChange} />}
                  name="dangChieu"
                />
                {errors?.dangChieu?.message && <p className="text-red-500">{errors?.dangChieu?.message}</p>}
              </div>
              <div className="w-1/3 mb-2 p-1">
                <p>Sắp chiếu</p>
                <Controller
                  control={control}
                  render={({ field: { onChange } }) => <Switch defaultValue={false} onChange={onChange} />}
                  name="sapChieu"
                />
                {errors?.sapChieu?.message && <p className="text-red-500">{errors?.sapChieu?.message}</p>}
              </div>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              id="submitForm"
              style={{
                display: "none",
              }}
            >
              Thêm phim
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
