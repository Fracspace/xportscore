import { object, z } from "zod";
import { verificationScopeSchema } from "./verificationScopeSchema";
import { additionalInfoSchema } from "./additionalInfoSchema";
import { businessDetailsSchema } from "./businessDetailsSchema";
import { businessRelationSchema } from "./businessRelationSchema";
import { companyDetailsSchema } from "./companyDetailsSchema";
import { submissionSchema } from "./submissionSchema";
import { supportingInfoSchema } from "./supportingInfoSchema";
import { verifyDeclarationSchema } from "./verifyDeclarationSchema";

export const verifySchema = z.object({
  ...additionalInfoSchema.shape,
  ...businessDetailsSchema.shape,
  ...businessRelationSchema.shape,
  ...companyDetailsSchema.shape,
  ...submissionSchema.shape,
  ...supportingInfoSchema.shape,
  ...verifyDeclarationSchema.shape,
  ...verificationScopeSchema.shape
});

export const verifyformSteps = [
  {
    title: "Requesting Company",
    fields: Object.keys(companyDetailsSchema.shape)
  },
  {
    title: "Business to Verify",
    fields: Object.keys(businessDetailsSchema.shape)
  },
  {
    title: "Relationship Nature",
    fields: Object.keys(businessRelationSchema.shape)
  },
  {
    title: "Verification Scope",
    fields: Object.keys(verificationScopeSchema.shape)
  },
  {
    title: "Supporting Info",
    fields: Object.keys(supportingInfoSchema.shape)
  },
  {
    title: "Additional Info",
    fields: Object.keys(additionalInfoSchema.shape)
  },
  {
    title: "Declaration",
    fields: Object.keys(verifyDeclarationSchema.shape)
  },
  {
    title: "Submission",
    fields: Object.keys(submissionSchema.shape)
  }
];
