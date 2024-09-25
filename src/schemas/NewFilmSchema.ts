import { z } from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];

// creating a schema for strings
export const phimSchema = z.object({
  maPhim: z.string({ message: "Vui lòng nhập mã phim" }),
  tenPhim: z.string({ message: "Vui lòng nhập tên phim" }),
  biDanh: z.string({ message: "Vui lòng nhập bí danh" }).optional(),
  trailer: z.string({ message: "Vui lòng nhập trailer" }).optional(),
  hinhAnh: z.any().optional(),
  moTa: z.string({ message: "Vui lòng nhập mô tả" }).optional(),
  maNhom: z.string({ message: "Vui lòng nhập mã nhóm" }),
  ngayKhoiChieu: z.string({ message: "Vui lòng nhập ngày khởi chiếu" }).optional(),
  danhGia: z.string({message: 'Vui lòng nhập số sao'}).optional(),
  hot: z.boolean().optional(),
  dangChieu: z.boolean().optional(),
  sapChieu: z.boolean().optional(),
});

export type phimSchemaType = z.infer<typeof phimSchema>;