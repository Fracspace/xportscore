import { z } from "zod";

export const exportStatusSchema = z.object({
  exportStatus: z.string().min(1, "Please select at least one export status."),

  countriesExportedTo: z.string().optional(),

  iecExportRegistration: z
    .string()
    .min(1, "Please select your IEC / Export Registration status."),
  iecNumber: z.string().optional()
});
