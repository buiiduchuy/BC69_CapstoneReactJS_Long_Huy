import { useQuery } from "@tanstack/react-query";
import { Carousel } from "antd";
import { sleep } from "../../utils";
import { quanLyBannerServices } from "../../services";
import { v4 as uuidv4 } from "uuid";

export const CarouselBanner = () => {
  const { data } = useQuery({
    queryKey: ["DanhSachBanner"],
    queryFn: async () => {
      await sleep(1000);
      return quanLyBannerServices.layDanhSachBanner;
    },
    enabled: true,
  });
  console.log("data: ", data?.data.content);
  // const contentStyle: React.CSSProperties = {
  //   height: "160px",
  //   color: "#fff",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#364d79",
  // };

  return (
    <Carousel autoplay className="bannerCarousel">
      {data?.data.content.map((item) => (
        <div key={uuidv4()} className="w-full h-full">
          <img
            src={item.hinhAnh}
            alt={item.maPhim}
            className="w-full xl:max-h-[650px] lg:max-h-[500px] md:max-h-[360px] max-h-[180px] h-full object-cover object-center"
          />
        </div>
      ))}
    </Carousel>
  );
};
