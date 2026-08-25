import { z } from "zod";

export const businessSchema = z
  .object({
    legalBusinessName: z.string().min(2, "Legal business name is required!"),
    brandName: z.string().optional(),
    country: z.string().min(2, "Country of registration is required!"),
    city: z.string().min(2, "City / State is required!"),
    address: z.string().min(2, "Business address is required!"),
    website: z.string().optional(),
    businessType: z.string().min(1, "Business type is required!"),
    yearEstablished: z.string().optional(),
    otherBusinessType: z.string().optional()
  })
  .superRefine((data, ctx) => {
    if (data.businessType === "Others" && !data.otherBusinessType?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please specify your business type!",
        path: ["otherBusinessType"]
      });
    }
  });
