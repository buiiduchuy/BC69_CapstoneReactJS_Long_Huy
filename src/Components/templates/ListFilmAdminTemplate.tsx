import { Button, Input, Modal, Switch } from "antd";
import { quanLyPhimServices } from "../../services";
import { useQuery } from "@tanstack/react-query";
import { sleep } from "../../utils";
import axios from "axios";
import { token } from "../../constants";
import { useState } from "react";
import { Paginate } from "../ui/Paginate";

export const ListFilmAdminTemplate = () => {
  // lấy danh sách phim
  const { data } = useQuery({
    queryKey: ["DanhSachPhim"],
    queryFn: async () => {
      await sleep(1000);
      return quanLyPhimServices.getDanhSachPhim();
    },
    enabled: true,
  });

  // Delete Phim
  const headers = {
    Authorization: `Bearer ${token}`,
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2OSIsIkhldEhhblN0cmluZyI6IjAxLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczODM2ODAwMDAwMCIsIm5iZiI6MTcxMDUyMjAwMCwiZXhwIjoxNzM4NTE1NjAwfQ.ap-iPzMpXDeCuXH0aJnbbSuR3vIW4upk1nOK3h9D-5g",
  };

  // const [success, setSuccess] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
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

  return (
    <div className="sm:p-9 p-6 min-h-screen flex flex-col">
      <div className="flex flex-wrap justify-between md:mb-12 mb-5">
        <h2 className="text-white uppercase font-500 xl:text-[30px] md:text-[25px] text-[20px] mb-5 md:mb-0">
          Danh sách phim
        </h2>
        <Button
          className="py-5 hover:!bg-orange-400 hover:!text-white hover:!border-white"
          onClick={() => showModal()}>
          Thêm phim mới
        </Button>
      </div>
      <div className="mb-6">
        <Input.Search
          placeholder="Tìm phim..."
          className="w-full adminInputSearch"
        />
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
                  <>
                    <tr
                      key={phim.maPhim}
                      className="mb-2 xl:text-[16px] text-[12px]">
                      <td className="py-3 px-2 text-center">{phim.maPhim}</td>
                      <td className="py-3 px-2">{phim.tenPhim}</td>
                      <td className="py-3 px-2">
                        <img src={phim.hinhAnh} />
                      </td>
                      <td className="py-3 px-2">{`${phim.moTa.slice(
                        0,
                        200
                      )}...`}</td>
                      <td className="py-3 px-2 text-center">
                        <Button
                          danger
                          onClick={async () => {
                            console.log(phim.maPhim);
                            try {
                              await axios.delete(
                                "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=" +
                                  phim.maPhim,
                                {
                                  headers,
                                }
                              );
                              // setSuccess(true);
                            } catch (error) {
                              console.log("🚀 ~ onClick={ ~ error:", error);
                            }
                          }}>
                          Delete
                        </Button>
                        <Button type="primary" className="ms-2">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className="mb-5 mt-9">
        <Paginate
          total={totalPost}
          current={currentPage}
          setCurrent={setCurrentPage}
          numberPost={postPerPage}
        />
      </div>

      <Modal
        title={<h3 className="text-center text-[25px] mb-2">Thêm phim mới</h3>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
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
          <div className="flex w-full">
            <div className="w-1/3 mb-2 p-1">
              <p>Hot</p>
              <Switch />
            </div>
            <div className="w-1/3 mb-2 p-1">
              <p>Đang chiếu</p>
              <Switch />
            </div>
            <div className="w-1/3 mb-2 p-1">
              <p>Sắp chiếu</p>
              <Switch />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
