import { useQuery } from "@tanstack/react-query";
import { objectToQueryString } from "../../../utils";
import { quanLyPhimServices } from "../../../services";

type useFilmDetailByIdParams = {
  id: string;
};

export const useFilmDetailById = ({ id }: useFilmDetailByIdParams) => {
  const query = useQuery({
    queryKey: ["PhimDetail", id],
    queryFn: () => {
      const queryString = objectToQueryString({
        maPhim: id,
      });
      return quanLyPhimServices.getPhimDetailById(queryString);
    },
  });
  return {
    ...query,
    data: query?.data?.data?.content,
  };
};
