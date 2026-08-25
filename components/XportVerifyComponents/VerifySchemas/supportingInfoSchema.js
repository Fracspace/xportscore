import { z } from "zod";

export const supportingInfoSchema = z
  .object({
    supportingDocuments: z.array(z.string()).default([]),

    otherSupportingDocument: z.string().optional(),

    uploadedDocuments: z.any().optional()
  })
  .superRefine((data, ctx) => {
    // 1. If "Other Supporting Documents" is selected, require custom document name
    if (
      data.supportingDocuments?.includes("Other Supporting Documents") &&
      !data.otherSupportingDocument?.trim()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please specify the document name.",
        path: ["otherSupportingDocument"]
      });
    }

    // 2. If any supporting document option is selected, require file upload
    const hasAnySelected =
      data.supportingDocuments && data.supportingDocuments.length > 0;
    const hasUploadedFiles =
      data.uploadedDocuments &&
      data.uploadedDocuments.length &&
      data.uploadedDocuments.length > 0;

    if (hasAnySelected && !hasUploadedFiles) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please upload at least one supporting document.",
        path: ["uploadedDocuments"]
      });
    }
  });