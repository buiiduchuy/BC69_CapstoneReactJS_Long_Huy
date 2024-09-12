import { useParams, Navigate } from "react-router-dom";
import { useFilmDetailById, useGetShowtimeById } from "../hooks/api";
import { Button, Collapse, Modal, Tabs } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { quanLyDatVe } from "../../services";
import { objectToQueryString } from "../../utils";
import "../../assets/style.scss";
import { useQuanLyNguoiDungSelector } from "../../store/quanLyNguoiDung/selector";
import { GheComponent } from "../ui";
import { Bounce, toast } from "react-toastify";

export const FilmDetailTemplate = () => {
  const { user, listSeat } = useQuanLyNguoiDungSelector();

  if (!user) {
    return <Navigate to="/login" />;
  }
  const { id = "" } = useParams();

  const { data } = useFilmDetailById({ id });

  const { data: Showtimes } = useGetShowtimeById({ id });

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const [maLichchieu, setMaLichChieu] = useState<string | undefined>();

  const { data: danhSachPhongVe } = useQuery({
    queryKey: ["DanhSachPhongVe", maLichchieu],
    queryFn: () =>
      quanLyDatVe.layDanhSachPhongVe(
        objectToQueryString({ MaLichchieu: maLichchieu })
      ),
    // enabled : false => không gọi api
    enabled: !!maLichchieu,
  });

  let loading = !!danhSachPhongVe;

  const [isComplete, setIsComplete] = useState<boolean>(false);
  let tong = 0;

  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleComplete = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setIsComplete(false);
      setConfirmLoading(false);
      setTimeout(() => {
        toast("Đặt vé thành công !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setTimeout(() => {
          <Navigate to="/" />;
        }, 2100);
      }, 200);
    }, 2000);
  };

  return (
    <>
      <div className="container xl:p-[50px] py-[50px] px-4">
        <h3 className="text-white text-[25px] mb-5 w-full">{data?.tenPhim}</h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 mb-9">
          <div className="flex flex-wrap lg:mb-0 mb-9">
            <div className="sm:w-4/12 w-full sm:mb-0 mb-5">
              <img src={data?.hinhAnh} alt="..." className="w-full" />
            </div>
            <div className="sm:w-8/12 w-full text-white sm:px-9 px-0">
              <p className="mb-10">
                <span>Đánh giá</span> :{" "}
                <span className="text-orange-400">{data?.danhGia}</span>
              </p>
              <p className="mb-10">
                <span>Ngày khởi chiếu</span> :{" "}
                <span className="text-orange-400">
                  {dayjs(data?.ngayKhoiChieu).format("DD-MM-YYYY")}
                </span>
              </p>
              <p className="mb-10">
                <span>Mã phim</span> :{" "}
                <span className="text-orange-400">{data?.maPhim}</span>
              </p>
              <div>
                {" "}
                <span>Mô tả phim</span> : <p>{data?.moTa.slice(0, 350)}...</p>
              </div>
            </div>
          </div>
          <div className="text-white">
            <iframe
              width="100%"
              height="366"
              src={`https://www.youtube.com/embed/${
                data?.trailer.split("=")[1]
              }`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
        <div>
          <Tabs
            type="card"
            items={Showtimes?.heThongRapChieu.map((item) => ({
              key: item.maHeThongRap,
              label: (
                <div className="uppercase text-white titleCinema font-500">
                  {item.tenHeThongRap}
                </div>
              ),
              children: (
                <div>
                  <Collapse
                    className="pt-2"
                    items={item?.cumRapChieu.map((cumRap) => ({
                      key: cumRap.maCumRap,
                      label: (
                        <div>
                          <p className="font-600 text-[16px] text-white">
                            {cumRap.tenCumRap}
                          </p>
                          <p className="text-[14px] italic text-gray-100">
                            {cumRap.diaChi}
                          </p>
                        </div>
                      ),
                      children: (
                        <div className="flex gap-10 flex-wrap">
                          {cumRap.lichChieuPhim.map((lichChieu) => (
                            <Button
                              type="primary"
                              onClick={() => {
                                setIsOpenModal(true);
                                setMaLichChieu(lichChieu.maLichChieu);
                              }}>
                              {dayjs(lichChieu.ngayChieuGioChieu).format(
                                "DD-MM-YYYY , HH:mm"
                              )}{" "}
                              -{" "}
                              {dayjs(lichChieu.ngayChieuGioChieu)
                                .add(lichChieu.thoiLuong, "minutes")
                                .format("HH:mm")}
                            </Button>
                          ))}
                        </div>
                      ),
                    }))}
                  />
                </div>
              ),
            }))}></Tabs>
        </div>

        {/* modal đặt vé */}
        <Modal
          open={isOpenModal}
          onCancel={() => {
            setIsOpenModal(false);
            setMaLichChieu(undefined);
          }}
          onOk={() => {
            setIsOpenModal(false);
            setIsComplete(true);
          }}
          okText="Đặt vé"
          cancelText="Huỷ"
          width={800}
          loading={!loading}>
          <h2 className="text-center text-[30px] font-semibold">Đặt vé</h2>
          <div className="grid md:grid-cols-12 grid-cols-6 gap-[10px] mt-20">
            {danhSachPhongVe?.data.content.danhSachGhe?.map((ghe) => (
              <GheComponent ghe={ghe} />
            ))}
          </div>
          <ul className="flex mt-12 mb-5 space-x-4 justify-center">
            <li className="flex items-center">
              <span className="inline-block me-2 w-9 h-9 rounded-md bg-green-800"></span>
              Ghế Vip
            </li>
            <li className="flex items-center">
              <span className="inline-block me-2 w-9 h-9 rounded-md bg-black"></span>
              Ghế Thường
            </li>
            <li className="flex items-center">
              <span className="inline-block me-2 w-9 h-9 rounded-md bg-orange-400"></span>
              Ghế Đang Chọn
            </li>
          </ul>
        </Modal>
        <Modal
          open={isComplete}
          onCancel={() => {
            setIsComplete(false);
          }}
          onOk={handleComplete}
          confirmLoading={confirmLoading}
          okText="Hoàn thành"
          cancelButtonProps={{ style: { display: "none" } }}>
          <h2 className="text-center text-[30px] font-semibold mb-9">
            Thông tin vé đã đặt
          </h2>
          <div className="flex mb-5 text-[20px]">
            <span className="me-2">
              <strong>Tên phim : </strong>
            </span>
            <h3>{data?.tenPhim}</h3>
          </div>
          <table className="w-full border-collapse border">
            <thead>
              <th className="border">
                <strong>Tên ghế</strong>
              </th>
              <th className="border">
                <strong>Giá tiền</strong>
              </th>
            </thead>
            <tbody>
              {listSeat.map((item) => {
                tong += Number(item.giaVe);
                return (
                  <tr className="border">
                    <td className="border text-center p-2">{item?.tenGhe}</td>
                    <td className="border text-center p-2">{item?.giaVe}</td>
                  </tr>
                );
              })}
            </tbody>
            <tr>
              <td className="text-center">
                <strong>Tổng tiền : {tong}</strong>
              </td>
            </tr>
          </table>
        </Modal>
      </div>
    </>
  );
};
