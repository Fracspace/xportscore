
import { z } from "zod";

export const declarationSchema = z.object({
  informationAccuracy: z.boolean().refine(val => val, {
    message: "You must accept the Information Accuracy declaration."
  }),

  documentAuthenticity: z.boolean().refine(val => val, {
    message: "You must accept the Document Authenticity declaration."
  }),

  privateAuditAcknowledgement: z.boolean().refine(val => val, {
    message: "You must accept the Private Audit Acknowledgement."
  }),

  noGuaranteeAcknowledgement: z.boolean().refine(val => val, {
    message: "You must accept the No Guarantee Acknowledgement."
  }),

  revocationAcknowledgement: z.boolean().refine(val => val, {
    message: "You must accept the Revocation Acknowledgement."
  }),

  dataConsent: z.boolean().refine(val => val, {
    message: "You must accept the Data Consent declaration."
  })
});