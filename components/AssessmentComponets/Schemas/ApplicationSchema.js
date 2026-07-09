import React from "react";
import { applicantSchema } from "./applicantSchema";
import { z } from "zod";
import { businessSchema } from "./businessSchema";
import { exportStatusSchema } from "./exportStatusSchema";
import { productInfoSchema } from "./productInfoSchema";
import { commercialInfoSchema } from "./commercialInfoSchema";
import { uploadDocsSchema } from "./uploadDocsSchema";
import { supportingDocsSchema } from "./supportingDocsSchema";
import { registryConsentSchema } from "./registryConsetSchema";
import { declarationSchema } from "./declarationSchema";
import { paymentSchema } from "./paymentSchema";
import { finalSubmissionSchema } from "./finalSubmissionSchema";
import { serviceInfoSchema } from "./serviceInfoSchema";
import { productServiceSchema } from "./productServiceSchema";

export const applicationSchema = z.object({
  ...applicantSchema.shape,
  ...businessSchema.shape,
  ...exportStatusSchema.shape,
  ...productServiceSchema.shape,
  ...commercialInfoSchema.shape,
  ...uploadDocsSchema.shape,
  ...supportingDocsSchema.shape,
  ...registryConsentSchema.shape,
  ...declarationSchema.shape,
  ...paymentSchema.shape,
  ...finalSubmissionSchema.shape
});

export const formSteps = [
  {
    title: "Applicant Information",
    fields: Object.keys(applicantSchema.shape)
  },
  {
    title: "Business Information",
    fields: Object.keys(businessSchema.shape)
  },
  {
    title: "Export Status",
    fields: Object.keys(exportStatusSchema.shape)
  },
  {
    title: "Product / Service",
    type: "conditional",
    productFields: Object.keys(productInfoSchema.shape),
    serviceFields: Object.keys(serviceInfoSchema.shape)
  },
  {
    title: "Commercial Information",
    fields: Object.keys(commercialInfoSchema.shape)
  },
  {
    title: "Documents Upload",
    fields: Object.keys(uploadDocsSchema.shape)
  },
  {
    title: "Supporting Documents",
    fields: Object.keys(supportingDocsSchema.shape)
  },
  {
    title: "Registry Consent",
    fields: Object.keys(registryConsentSchema.shape)
  },
  {
    title: "Declaration",
    fields: Object.keys(declarationSchema.shape)
  },
  {
    title: "Payment",
    fields: Object.keys(paymentSchema.shape)
  },
  {
    title: "Final Submission",
    fields: Object.keys(finalSubmissionSchema.shape)
  }
];
