import { z } from "zod";
import { productInfoSchema } from "./productInfoSchema";
import { serviceInfoSchema } from "./serviceInfoSchema";

export const productServiceSchema = z
  .object({
    exportType: z.enum(["product", "service"]),

    // Product fields
    ...productInfoSchema.partial().shape,

    // Service fields
    ...serviceInfoSchema.partial().shape
  })
  .superRefine((data, ctx) => {
    if (data.exportType === "product") {
      const result = productInfoSchema.safeParse(data);

      if (!result.success) {
        result.error.issues.forEach((issue) => {
          ctx.addIssue(issue);
        });
      }
    }

    if (data.exportType === "service") {
      const result = serviceInfoSchema.safeParse(data);

      if (!result.success) {
        result.error.issues.forEach((issue) => {
          ctx.addIssue(issue);
        });
      }
    }
  });
