import { useQuery } from "@tanstack/react-query";
import { sleep } from "../../utils";
import { quanLyPhimServices } from "../../services";
import { Phim } from "../../@types";
import { Button, Card, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";
import { MANHOM, PATH } from "../../constants";
import { generatePath, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const CategoryTemplate = () => {
  // lấy danh sách phim
  const { data, isFetching } = useQuery({
    queryKey: ["DanhSachPhim"],
    queryFn: async () => {
      await sleep(1000);
      return quanLyPhimServices.getDanhSachPhim(MANHOM.manhom);
    },
    enabled: true,
  });

  const navigate = useNavigate();

  const renderPhim = (data: Phim[] = []) => {
    return data.map((phim) => {
      return (
        <div className="flex justify-center sm:p-5" key={phim.maPhim}>
          <Card
            hoverable
            style={{ width: "100%", textAlign: "left" }}
            cover={
              <img
                alt="example"
                src={phim.hinhAnh}
                className="aspect-[3/5] !rounded-[10px]"
              />
            }
            className="mb-[30px] bg-transparent border-none sm:max-w-full max-w-96 mx-auto"
            styles={{ body: { padding: "10px 0" } }}>
            <Meta title={<h3 className="text-white py-2">{phim.tenPhim}</h3>} />
            <Button
              type="text"
              className="mt-10 bg-transparent !text-white rounded-md border-2 border-orange-300 hover:!bg-orange-300"
              onClick={() => {
                const path = generatePath(PATH.phimDetail, {
                  id: phim.maPhim,
                });
                navigate(path);
              }}>
              Đặt vé
            </Button>
          </Card>
        </div>
      );
    });
  };
  if (isFetching) {
    return (
      <>
        <Skeleton active className="!h-[650px] !w-full bg-gray-950 mb-12" />
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-40 gap-[20px] container p-5">
          {[...Array(5)].map(() => {
            return (
              <div key={uuidv4()}>
                <Skeleton.Input
                  active
                  className="!h-[350px] !w-full bg-gray-950"
                />
                <Skeleton.Input active className="mt-2 !w-full bg-gray-950" />
                <Skeleton.Input active className="mt-2 !w-[80px] bg-gray-950" />
              </div>
            );
          })}
        </div>
      </>
    );
  }
  return (
    <div className="container m-auto md:py-[90px] py-8 px-4">
      <h2 className="text-white text-[35px] font-500 mb-9 after:contents:'' after:block after:w-9 after:h-[3px] after:bg-orange-300">
        Danh Sách Phim
      </h2>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-0 gap-[20px]">
        {renderPhim(data?.data.content)}
      </div>
    </div>
  );
};
