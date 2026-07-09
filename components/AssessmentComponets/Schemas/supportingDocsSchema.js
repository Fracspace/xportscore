import { z } from "zod";

export const supportingDocsSchema = z.object({
  distributorAgreement: z.any(),
  productVideos: z.any(),

  factoryPhotos: z.any(),

  qualityControlProcessDocuments: z.any()
});
