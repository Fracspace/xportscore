import { z } from "zod";

export const verificationScopeSchema = z
  .object({
    identityVerification: z.array(z.string()).default([]),

    tradeIntelligence: z.array(z.string()).default([]),

    businessReputation: z.array(z.string()).default([]),

    operationalReview: z.array(z.string()).default([]),

    complianceReview: z.array(z.string()).default([]),

    riskDueDiligence: z.array(z.string()).default([]),

    contactVerification: z.array(z.string()).default([])
  })
  .refine(
    (data) =>
      data.identityVerification.length > 0 ||
      data.tradeIntelligence.length > 0 ||
      data.businessReputation.length > 0 ||
      data.operationalReview.length > 0 ||
      data.complianceReview.length > 0 ||
      data.riskDueDiligence.length > 0 ||
      data.contactVerification.length > 0,
    {
      message: "Please select at least one verification scope.",
      path: ["verificationScope"]
    }
  );
