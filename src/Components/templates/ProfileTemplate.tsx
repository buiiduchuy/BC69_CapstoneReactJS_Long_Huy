import { Button, Descriptions, DescriptionsProps, Input, Modal } from "antd";
import { useQuanLyNguoiDungSelector } from "../../store/quanLyNguoiDung/selector";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const ProfileTemplate = () => {
  const { user } = useQuanLyNguoiDungSelector();
  console.log("user: ", user);

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Họ tên",
      children: user.hoTen,
    },
    {
      key: "2",
      label: "Tài khoản",
      children: user.taiKhoan,
    },
    {
      key: "3",
      label: "Số điện thoại",
      children: user.soDT,
    },
    {
      key: "4",
      label: "Email",
      children: user.email,
    },
    {
      key: "5",
      label: "Chức vụ",
      children: user.maLoaiNguoiDung,
    },
    {
      key: "6",
      label: "Mã nhóm",
      children: user.maNhom,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto md:pt-24 px-5 py-8">
      <div className="p-8 bg-white">
        <Descriptions title="Thông tin người dùng" items={items} />
        {/* <div className="mt-9">
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Sửa thông tin
          </Button>
        </div> */}
        <div className="mt-9">
          <NavLink
            to="/"
            className="py-2 px-3 border rounded-md border-orange-400 bg-white hover:bg-orange-400 text-orange-400 hover:text-white transition-all">
            <i className="fa-solid fa-backward-step text-[15px] me-2 w-[15px] text-center"></i>
            <span className="xl:inline-block">Về trang chủ</span>
          </NavLink>
        </div>
      </div>
      <Modal
        title={
          <h3 className="text-center text-[25px] mb-2">
            Sửa thông tin tài khoản
          </h3>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button type="dashed" danger>
            Huỷ
          </Button>,
          <Button type="primary">Xác nhận</Button>,
        ]}>
        <div className="flex flex-wrap">
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Tài khoản</p>
            <Input placeholder="Tài khoản" value={user.taiKhoan} />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Email</p>
            <Input placeholder="Email" value={user.email} />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Số điện thoại</p>
            <Input placeholder="Số điện thoại" value={user.soDT} />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Mã nhóm</p>
            <Input placeholder="Mã nhóm" value={user.maNhom} />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Loại người dùng</p>
            <Input placeholder="Loại người dùng" value={user.maLoaiNguoiDung} />
          </div>
          <div className="md:w-1/2 w-full mb-2 p-1">
            <p>Họ tên</p>
            <Input placeholder="Họ tên" value={user.hoTen} />
          </div>
        </div>
      </Modal>
    </div>
  );
};
