import { z } from "zod";

export const additionalInfoSchema = z.object({
  additionalInformation: z
    .string()
    .min(
      10,
      "Please provide at least 10 characters describing your concerns."
    )
    .max(5000, "Additional information cannot exceed 5000 characters."),
});