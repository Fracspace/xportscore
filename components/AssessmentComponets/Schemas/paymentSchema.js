import { z } from "zod";

export const paymentSchema = z.object({
  paymentReferenceNumber: z
    .string()
    .min(1, "Payment Reference Number is required."),

  billingName: z.string().min(2, "Billing Name is required."),

  billingEmail: z.string().email("Invalid Billing Email."),

  billingAddress: z.string().min(5, "Billing Address is required.")
});
