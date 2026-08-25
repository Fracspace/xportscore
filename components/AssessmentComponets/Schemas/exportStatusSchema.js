import { z } from "zod";

export const exportStatusSchema = z
  .object({
    exportStatus: z.string().min(1, "Please select at least one export status."),

    countriesExportedTo: z
      .string()
      .min(1, "Countries Willing/Exported To is required."),

    iecExportRegistration: z
      .string()
      .min(1, "Please select your IEC / Export Registration status."),

    iecNumber: z.string().optional()
  })
  .superRefine((data, ctx) => {
    if (["Yes", "Applied"].includes(data.iecExportRegistration)) {
      if (!data.iecNumber || !data.iecNumber.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "IEC Code / Number is required.",
          path: ["iecNumber"]
        });
      }
    }
  });
