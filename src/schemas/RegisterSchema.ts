import {z} from 'zod'

// Validaiton và quy định kiểu dữ liệu trả về của form tương ứng với schema
export const RegisterSchema = z.object({
  // nếu thông tin không bắt buộc thì thêm .optional()
  taiKhoan: z.string({ message: "Vui lòng nhập thông tin tài khoản"})
            .min(5,"Tài khoản tối thiểu 5 ký tujw")
            .max(100,"Tài khoản tối đa 100 ký tự"),
            
  matKhau: z.string({ message: "Vui lòng nhập thông tin mật khẩu"}),
  email: z.string({ message: "Vui lòng nhập thông email"}).email({message: "Vui lòng nhập đúng email"}),
  soDt: z.string({ message: "Vui lòng nhập số điện thoại"}),
  maNhom: z.string({ message: "Vui lòng nhập mã nhóm"}),
  hoTen: z.string({ message: "Vui lòng nhập họ tên"}),
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>