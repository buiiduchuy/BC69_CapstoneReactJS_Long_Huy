import { useQuery } from "@tanstack/react-query";
import { quanLyPhimServices } from "../../services";
import { Button, Card, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";
import { sleep } from "../../utils";
import { Phim } from "../../@types";
import { generatePath, useNavigate } from "react-router-dom";
import { PATH } from "../../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";
import { CarouselBanner } from "../ui";

export const HomeTemplate = () => {
  const navigate = useNavigate();

  // lấy danh sách phim
  const { data, isFetching } = useQuery({
    queryKey: ["DanhSachPhim"],
    queryFn: async () => {
      await sleep(1000);
      return quanLyPhimServices.getDanhSachPhim("maNhom=GP03");
    },
    enabled: true,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          top: "-20px",
          right: "20px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          top: "-20px",
          right: "45px",
          left: "auto",
        }}
        onClick={onClick}
      />
    );
  }

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
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-40 container">
          {[...Array(12)].map(() => {
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
    <>
      <CarouselBanner />
      <div className="container m-auto py-[50px] px-4">
        <div className="mb-24">
          <p className="font-500 lg:text-[30px] md:text-[25px] text-[20px] lg:mb-30 mb-3 text-white uppercase">
            Phim đang chiếu
          </p>
          <Slider {...settings} className="xl:-mx-5">
            {renderPhim(data?.data.content.filter((item) => item.dangChieu))}
          </Slider>
          <div className="text-center">
            <Button
              type="text"
              className="!text-white rounded-md border-2 border-orange-300 ms-2 hover:!bg-orange-300"
              size="large">
              Xem tất cả
            </Button>
          </div>
        </div>

        <div>
          <p className="font-500 lg:text-[30px] md:text-[25px] text-[20px] lg:mb-30 mb-3 text-white uppercase">
            Phim sắp chiếu
          </p>
          <Slider {...settings}>
            {renderPhim(data?.data.content.filter((item) => !item.dangChieu))}
          </Slider>
          <div className="text-center">
            <Button
              type="text"
              className="!text-white rounded-md border-2 border-orange-300 ms-2 hover:!bg-orange-300"
              size="large">
              Xem tất cả
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
