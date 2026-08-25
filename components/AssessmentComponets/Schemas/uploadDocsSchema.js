import { z } from "zod";

export const uploadDocsSchema = z.object({
  businessDocuments: z
    .any()
    .refine((files) => files && files.length > 0, {
      message: "Business Documents are required."
    }),

  productServiceDocuments: z
    .any()
    .refine((files) => files && files.length > 0, {
      message: "Product / Service Documents are required."
    }),

  packagingDocuments: z
    .any()
    .refine((files) => files && files.length > 0, {
      message: "Packaging Documents are required."
    }),

  certificationQualityDocuments: z.any().optional(),

  pastExportDocuments: z.any().optional()
});
