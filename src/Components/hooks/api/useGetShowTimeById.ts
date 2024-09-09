import { useQuery } from "@tanstack/react-query";
import { QuanLyRap } from "../../../services";
import { objectToQueryString } from "../../../utils";

type UseGetShowtimesByIdParams = {
  id: string;
};

export const useGetShowtimeById = ({ id }: UseGetShowtimesByIdParams) => {
  const query = useQuery({
    queryKey: ["Showtimes", id],
    queryFn: () =>
      QuanLyRap.getShowTimeById(objectToQueryString({ maPhim: id })),
  });

  return {
    ...query,
    data: query?.data?.data?.content,
  };
};
