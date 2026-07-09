import { z } from "zod";

export const businessSchema = z.object({
  legalBusinessName: z.string().min(2, "business name is required!"),
  brandName: z.string().min(2, "brand name is required!"),
  country: z.string().min(2, "country is required!"),
  city: z.string().min(2, "city is required!"),
  address: z.string().min(2, "address is required!"),
  website: z.string().optional(),
  businessType: z.string().optional(),
  yearEstablished: z.string().min(2, "year established is required!"),
  otherBusinessType: z.string().optional()
});
