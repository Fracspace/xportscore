import { z } from "zod";

export const verifyDeclarationSchema = z.object({
  agree: z.boolean().refine((value) => value === true, {
    message: "You must agree to the declaration before continuing.",
  }),
});