import { z } from "zod";

export const supportingInfoSchema = z
  .object({
    supportingDocuments: z.array(z.string()).default([]),

    uploadedDocuments: z.any().optional(),
  })
  .refine(
    (data) =>
      data.supportingDocuments.length > 0 ||
      (data.uploadedDocuments && data.uploadedDocuments.length > 0),
    {
      message:
        "Please select a document type or upload at least one document.",
      path: ["supportingDocuments"],
    }
  );