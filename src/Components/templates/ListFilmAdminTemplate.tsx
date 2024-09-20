import { Button, Input } from "antd";
import { quanLyPhimServices } from "../../services";
import { useQuery } from "@tanstack/react-query";
import { sleep } from "../../utils";
import axios from "axios";
import { token } from "../../constants";
import { useState } from "react";

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

  const [success, setSuccess] = useState<boolean>(false);

  return (
    <div className="sm:p-9 p-6 min-h-screen flex flex-col">
      <div className="flex flex-wrap justify-between md:mb-12 mb-5">
        <h2 className="text-white uppercase font-500 xl:text-[30px] md:text-[25px] text-[20px] mb-5 md:mb-0">
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
      <table className="table-auto">
        <thead>
          <tr>
            <th>Tên phim</th>
            <th>Mã phim</th>
            <th>Hình ảnh</th>
            <th>Mô tả</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.content?.map((phim) => {
            return (
              <>
                <tr key={phim.maPhim}>
                  <td>{phim.tenPhim}</td>
                  <td>{phim.maPhim}</td>
                  <td>
                    <img src={phim.hinhAnh} />
                  </td>
                  <td>{phim.maPhim}</td>
                  <td>{phim.moTa}</td>
                  <td>
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
                          setSuccess(true);
                        } catch (error) {
                          console.log("🚀 ~ onClick={ ~ error:", error);
                        }
                      }}
                    >
                      Delete
                    </Button>
                    <Button type="primary">Edit</Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
