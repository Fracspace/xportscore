import { z } from "zod";

export const submissionSchema = z.object({
  requestorName: z
    .string()
    .min(3, "Requestor Name is required!"),

  company: z
    .string()
    .min(2, "Company Name is required!"),

  date: z
    .string()
    .min(1, "Please select a date!")
    .refine((val) => /^\d{4}-\d{2}-\d{2}$/.test(val), {
      message: "Please enter a valid 4-digit year (YYYY-MM-DD)."
    })
    .refine((val) => new Date(val) <= new Date(), {
      message: "Date cannot be in the future."
    }),

  digitalSignature: z
    .string()
    .min(3, "Digital Signature is required!"),
});