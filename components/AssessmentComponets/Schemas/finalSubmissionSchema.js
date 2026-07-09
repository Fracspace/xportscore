import { z } from "zod";

export const finalSubmissionSchema = z.object({
  applicantName: z.string().min(3, "Applicant Name is required."),

  companyName: z.string().min(2, "Company Name is required."),

  date: z.string().min(1, "Date is required."),

  digitalSignature: z.string().min(2, "Digital Signature is required.")
});
