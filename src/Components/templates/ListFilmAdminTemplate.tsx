import { Button, Input } from "antd";

export const ListFilmAdminTemplate = () => {
  return (
    <div className="p-9 min-h-screen flex flex-col">
      <div className="flex justify-between mb-12">
        <h2 className="text-white uppercase font-500 xl:text-[30px] md:text-[25px]">
          Danh sách phim
        </h2>
        <Button className="py-5 hover:!bg-orange-400 hover:!text-white hover:!border-white">
          Thêm phim mới
        </Button>
      </div>
      <div className="mb-6">
        <Input.Search
          placeholder="Tìm phim..."
          className="w-full adminInputSearch"
        />
      </div>
      <table className="w-full text-white">
        <thead>
          <tr className="xl:text-[16px] text-[12px]">
            <th className="py-3 px-2">MÃ</th>
            <th className="py-3 px-2">HÌNH ẢNH</th>
            <th className="py-3 px-2">TIÊU ĐỀ</th>
            <th className="py-3 px-2">MÔ TẢ</th>
            <th className="py-3 px-2">GIÁ VÉ</th>
            <th className="py-3 px-2">TRẠNG THÁI</th>
            <th className="py-3 px-2">NGÀY CHIẾU</th>
            <th className="py-3 px-2">HÀNH ĐỘNG</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-700 mb-2 xl:text-[16px] text-[12px]">
            <td>
              <div className="py-3 px-2 text-center">11</div>
            </td>
            <td>
              <div className="catalog__user">
                <img src="" alt="" width={40} />
              </div>
            </td>
            <td>
              <div className="py-3 px-2">Title</div>
            </td>
            <td>
              <div className="py-3 px-2">Description</div>
            </td>
            <td>
              <div className="py-3 px-2 text-center">100000</div>
            </td>
            <td>
              <div className="py-3 px-2 text-center">Hot</div>
            </td>
            <td>
              <div className="py-3 px-2 text-center">05.02.20234</div>
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
