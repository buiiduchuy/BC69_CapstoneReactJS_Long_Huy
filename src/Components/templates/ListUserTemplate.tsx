import { Button, Input, Modal, Space, Table } from "antd";
import type { TableProps } from "antd";
import { useState } from "react";

export const ListUserTemplate = () => {
  interface DataType {
    taiKhoan: string;
    email: string;
    hoTen: string;
    soDienThoai: string;
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDienThoai",
      key: "soDienThoai",
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
      taiKhoan: "1",
      email: "Email",
      hoTen: "Họ tên",
      soDienThoai: "0987654321",
    },
    {
      taiKhoan: "2",
      email: "Email",
      hoTen: "Họ tên",
      soDienThoai: "0987654321",
    },
    {
      taiKhoan: "3",
      email: "Email",
      hoTen: "Họ tên",
      soDienThoai: "0987654321",
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
          Danh sách người dùng
        </h2>
        <Button
          className="py-5 hover:!bg-orange-400 hover:!text-white hover:!border-white"
          onClick={() => showModal()}>
          Thêm người dùng mới
        </Button>
      </div>
      <div className="mb-6">
        <Input.Search
          placeholder="Tìm người dùng..."
          className="w-full adminInputSearch"
        />
      </div>
      <Table columns={columns} dataSource={data} className="tableAdmin" />;
      {/* <table className="w-full text-white">
        <thead>
          <tr className="xl:text-[16px] text-[12px]">
            <th className="py-3 px-2">TÀI KHOẢN</th>
            <th className="py-3 px-2">TÊN NGƯỜI DÙNG</th>
            <th className="py-3 px-2">EMAIL</th>
            <th className="py-3 px-2">SỐ ĐIỆN THOẠI</th>
            <th className="py-3 px-2">LOẠI NGƯỜI DÙNG</th>
            <th className="py-3 px-2">HÀNH ĐỘNG</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-700 mb-2 xl:text-[16px] text-[12px]">
            <td>
              <div className="py-3 px-2 text-center">admin123</div>
            </td>
            <td>
              <div className="py-3 px-2">Hehehe</div>
            </td>
            <td>
              <div className="py-3 px-2">abc@gmail.com</div>
            </td>
            <td>
              <div className="py-3 px-2">0987654321</div>
            </td>
            <td>
              <div className="py-3 px-2 text-center">Quản trị</div>
            </td>
            <td>
              <div className="catalog__btns text-center">
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
            <p>Tài khoản</p>
            <Input placeholder="Tài khoản" />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Mật khẩu</p>
            <Input placeholder="Mật khẩu" />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Email</p>
            <Input placeholder="Email" />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Số điện thoại</p>
            <Input placeholder="Số điện thoại" />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Mã nhóm</p>
            <Input placeholder="Mã nhóm" />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Loại người dùng</p>
            <Input placeholder="Loại người dùng" />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Họ tên</p>
            <Input placeholder="Họ tên" />
          </div>
        </div>
      </Modal>
    </div>
  );
};
