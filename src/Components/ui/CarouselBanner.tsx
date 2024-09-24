import { useQuery } from "@tanstack/react-query";
import { Carousel } from "antd";
import { sleep } from "../../utils";
import { quanLyPhimServices } from "../../services";
import { v4 as uuidv4 } from "uuid";

export const CarouselBanner = () => {
  const { data } = useQuery({
    queryKey: ["DanhSachBanner"],
    queryFn: async () => {
      await sleep(1000);
      return quanLyPhimServices.layDanhSachBanner();
    },
    enabled: true,
  });

  const listBanner = data?.data.content;
  return (
    <Carousel autoplay className="bannerCarousel" arrows={true} fade={true}>
      {listBanner &&
        listBanner.map((item: any) => (
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
