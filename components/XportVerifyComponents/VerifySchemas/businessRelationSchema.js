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
    otherReason: z.boolean().optional(),
    otherText: z.string().optional()
  })
  .superRefine((data, ctx) => {
    const { otherText, ...booleans } = data;
    const hasAnyChecked = Object.values(booleans).some((val) => val === true);

    if (!hasAnyChecked) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select at least one reason for verification.",
        path: ["otherReason"]
      });
    }

    if (data.otherReason && !data.otherText?.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please specify your reason.",
        path: ["otherText"]
      });
    }
  });
