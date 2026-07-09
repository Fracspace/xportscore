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
    .min(1, "Please select a date!"),

  digitalSignature: z
    .string()
    .min(3, "Digital Signature is required!"),
});