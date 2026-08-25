import { z } from "zod";

export const productInfoSchema = z.object({
  productCategory: z
    .string()
    .min(2, "Product / Service Category is required."),

  monthlyProductionCapacity: z
    .string()
    .min(1, "Monthly Production / Supply Capacity is required."),

  minimumOrderQuantity: z.string().optional(),

  productShelfLife: z.string().optional(),

  productDescription: z
    .string()
    .min(10, "Product Description is required."),

  skus: z.array(z.string()).optional()
});