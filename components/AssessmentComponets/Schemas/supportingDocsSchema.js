import { z } from "zod";

export const supportingDocsSchema = z.object({
  distributorAgreement: z
    .any()
    .refine((files) => files && files.length > 0, "Distributor Agreement is required."),

  productVideos: z
    .any()
    .refine((files) => files && files.length > 0, "Product Videos are required."),

  factoryPhotos: z.any().optional(),

  qualityControlProcessDocuments: z.any().optional()
});
