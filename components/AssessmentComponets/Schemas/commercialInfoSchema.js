

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
  .refine(
    (data) => {
      if (
        data.preferredPricingCurrency.includes("Other") &&
        !data.otherCurrency?.trim()
      ) {
        return false;
      }
      return true;
    },
    {
      path: ["otherCurrency"],
      message: "Please specify the other currency."
    }
  );
