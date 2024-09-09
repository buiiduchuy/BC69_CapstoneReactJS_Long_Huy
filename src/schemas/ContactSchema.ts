import { z } from "zod"; // Add new import

export const ContactSchema = z.object({
  hoTen: z.string({
    message: 'Vui lòng nhập họ tên'
  }),
  email: z.string({
    message: 'Vui lòng nhập email'
  }).email({
    message: 'Vui lòng nhập đúng định dạng email'
  }),
  tieuDe: z.string({
    message: 'Vui lòng nhập tiêu đề'
  }),
  ghiChu: z.string({
    message: 'Vui lòng nhập ghi chú'
  })
});

export type ContactSchemaType = z.infer<typeof ContactSchema>