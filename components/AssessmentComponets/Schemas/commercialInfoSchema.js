

import { z } from "zod";

export const commercialInfoSchema = z
  .object({
    currentPriceListAvailable: z.string().min(1, "Please select an option."),

    exportPriceListAvailable: z.string().min(1, "Please select an option."),

    preferredPricingCurrency: z
      .array(z.string())
      .min(1, "Select at least one currency."),

    otherCurrency: z.string().optional(),

    paymentTerms: z
      .array(z.string())
      .min(1, "Select at least one payment term.")
  })
  .superRefine((data, ctx) => {
    if (
      data.preferredPricingCurrency?.includes("Other") &&
      !data.otherCurrency?.trim()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please specify the other currency.",
        path: ["otherCurrency"]
      });
    }
  });
