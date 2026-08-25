import { z } from "zod";

export const verificationScopeSchema = z.object({
  identityVerification: z.array(z.string()).default([]),

  tradeIntelligence: z.array(z.string()).default([]),

  businessReputation: z.array(z.string()).default([]),

  operationalReview: z.array(z.string()).default([]),

  complianceReview: z.array(z.string()).default([]),

  riskDueDiligence: z.array(z.string()).default([]),

  contactVerification: z
    .array(z.string())
    .min(1, "Please select at least one for Contact Verification.")
});
