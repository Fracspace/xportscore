import { z } from "zod";

export const registryConsentSchema = z.object({
  registryConsent: z
    .string()
    .min(1, "Please select your registry consent preference.")
});
