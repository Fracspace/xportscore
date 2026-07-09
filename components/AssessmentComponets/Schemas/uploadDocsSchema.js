import { z } from "zod";

export const uploadDocsSchema = z.object({
  businessDocuments: z
    .any()
    .refine((files) => files?.length > 0, "Business Documents are required."),

  productServiceDocuments: z
    .any()
    .refine(
      (files) => files?.length > 0,
      "Product / Service Documents are required."
    ),

  packagingDocuments: z
    .any()
    .refine((files) => files?.length > 0, "Packaging Documents are required."),

  certificationQualityDocuments: z
    .any()
    .refine(
      (files) => files?.length > 0,
      "Certification & Quality Documents are required."
    ),

  pastExportDocuments: z
    .any()
    .refine((files) => files?.length > 0, "Past Export Documents are required.")
});
