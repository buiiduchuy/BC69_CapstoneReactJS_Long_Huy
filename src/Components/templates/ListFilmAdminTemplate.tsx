import { Button, Input, Modal, Space, Switch, Table } from "antd";
import type { TableProps } from "antd";
import { useState } from "react";

export const ListFilmAdminTemplate = () => {
  interface DataType {
    id: string;
    hinhAnh: string;
    tenPhim: string;
    moTa: string;
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Mã Phim",
      dataIndex: "id",
      key: "id",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
    },
    {
      title: "Mô Tả",
      dataIndex: "moTa",
      key: "moTa",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button
            className="catalog__btn--banned
                ">
            <i className="fa-solid fa-pen"></i>
          </Button>
          <Button className="catalog__btn--delete">
            <i className="fa-solid fa-trash"></i>
          </Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      id: "1",
      hinhAnh: "hình ảnh",
      tenPhim: "Tên Phim",
      moTa: "New York No. 1 Lake Park",
    },
    {
      id: "2",
      hinhAnh: "hình ảnh",
      tenPhim: "Tên Phim",
      moTa: "London No. 1 Lake Park",
    },
    {
      id: "3",
      hinhAnh: "hình ảnh",
      tenPhim: "Tên Phim",
      moTa: "Sydney No. 1 Lake Park",
    },
  ];

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
      <Table columns={columns} dataSource={data} className="tableAdmin" />;
      {/* <table className="w-full text-white">
        <thead>
          <tr className="xl:text-[16px] text-[12px] text-left">
            <th className="py-3 px-2 w-28">MÃ PHIM</th>
            <th className="py-3 px-2 w-44">HÌNH ẢNH</th>
            <th className="py-3 px-2">TÊN PHIM</th>
            <th className="py-3 px-2">MÔ TẢ</th>
            <th className="py-3 px-2 w-36">HÀNH ĐỘNG</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-700 mb-2 xl:text-[16px] text-[12px]">
            <td>
              <div className="py-3 px-2">111</div>
            </td>
            <td>
              <div className="catalog__user">
                <img src="" alt="" width={40} />
              </div>
            </td>
            <td>
              <div className="py-3 px-2">Tên phim</div>
            </td>
            <td>
              <div className="py-3 px-2">Mô tả</div>
            </td>
            <td>
              <div className="catalog__btns">
                <Button
                  className="catalog__btn--banned me-2
                ">
                  <i className="fa-solid fa-pen"></i>
                </Button>
                <Button className="catalog__btn--delete">
                  <i className="fa-solid fa-trash"></i>
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table> */}
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
