import { z } from "zod";

export const productInfoSchema = z.object({
  productCategory: z
    .string()
    .min(2, "Product / Service Category is required."),

  monthlyProductionCapacity: z
    .string()
    .min(1, "Monthly Production / Supply Capacity is required."),

  minimumOrderQuantity: z
    .string()
    .min(1, "Minimum Order Quantity is required."),

  productShelfLife: z
    .string()
    .min(1, "Product Shelf Life is required."),

  productDescription: z
    .string()
    .min(10, "Product Description is required."),

  skus: z
    .array(z.string().min(1))
    .min(1, "Add at least one SKU."),
});