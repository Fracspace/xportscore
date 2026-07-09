import { z } from "zod";

export const businessRelationSchema = z
  .object({
    beforePlacingOrder: z.boolean().optional(),
    beforeShippingGoods: z.boolean().optional(),
    beforeMakingPayment: z.boolean().optional(),
    beforeAppointingImporter: z.boolean().optional(),
    beforeAppointingDistributor: z.boolean().optional(),
    beforeAppointingSupplier: z.boolean().optional(),
    vendorOnboarding: z.boolean().optional(),
    investmentDueDiligence: z.boolean().optional(),
    strategicPartnership: z.boolean().optional(),
    other: z.boolean().optional()
  })
  .refine((data) => Object.values(data).some((value) => value === true), {
    message: "Please select at least one reason for verification.",
    path: ["verificationReasons"]
  });
