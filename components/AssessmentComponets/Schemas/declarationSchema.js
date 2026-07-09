// import { z } from "zod";

// export const declarationSchema = z.object({
//   informationAccuracy: z
//     .string({
//       required_error: "This field is required."
//     })
//     .min(1, "Information Accuracy is required!"),

//   documentAuthenticity: z
//     .string({
//       required_error: "This field is required."
//     })
//     .min(1, "documentation "),

//   privateAuditAcknowledgement: z
//     .string({
//       required_error: "This field is required."
//     })
//     .min(1, "You must accept the Private Audit Acknowledgement."),

//   noGuaranteeAcknowledgement: z
//     .string({
//       required_error: "This field is required."
//     })
//     .min(1, "You must accept the No Guarantee Acknowledgement."),

//   revocationAcknowledgement: z
//     .string({
//       required_error: "This field is required."
//     })
//     .min(1, "You must accept the Revocation Acknowledgement."),

//   dataConsent: z
//     .string({
//       required_error: "This field is required."
//     })
//     .min(1, "You must accept the Data Consent declaration.")
// });

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