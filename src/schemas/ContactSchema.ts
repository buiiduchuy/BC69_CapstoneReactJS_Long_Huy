import { z, ZodType } from "zod"; // Add new import

export const ContactSchema: ZodType<ContactSchemaType> = z.object({
  hoTen: z.string(),
  email: z.string().email(),
  tieuDe: z.string(),
});
