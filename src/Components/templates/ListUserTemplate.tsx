import { Button, Input } from "antd";

export const ListUserTemplate = () => {
  return (
    <div className="p-9 min-h-screen flex flex-col">
      <div className="flex justify-between mb-12">
        <h2 className="text-white uppercase font-500 xl:text-[30px] md:text-[25px]">
          Danh sách người dùng
        </h2>
        <Button className="py-5 hover:!bg-orange-400 hover:!text-white hover:!border-white">
          Thêm người dùng mới
        </Button>
      </div>
      <div className="mb-6">
        <Input.Search
          placeholder="Tìm người dùng..."
          className="w-full adminInputSearch"
        />
      </div>
      <table className="w-full text-white">
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
      </table>
      <div className="mt-auto">
        <ul className="adminPaginate flex gap-[10px]">
          <li>
            <a
              href="#"
              className="inline-flex items-center justify-center w-9 h-9 text-white rounded-md border-2 border-transparent bg-gray-800 hover:bg-orange-400 active">
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center justify-center w-9 h-9 text-white rounded-md border-2 border-transparent bg-gray-800 hover:bg-orange-400">
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center justify-center w-9 h-9 text-white rounded-md border-2 border-transparent bg-gray-800 hover:bg-orange-400">
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center justify-center w-9 h-9 text-white rounded-md border-2 border-transparent bg-gray-800 hover:bg-orange-400">
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center justify-center w-9 h-9 text-white rounded-md border-2 border-transparent bg-gray-800 hover:bg-orange-400">
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center justify-center w-9 h-9 text-white rounded-md border-2 border-transparent bg-gray-800 hover:bg-orange-400">
              6
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
