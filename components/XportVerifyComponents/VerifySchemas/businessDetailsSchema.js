import { z } from "zod";

export const businessDetailsSchema = z.object({
  legalCompanyName: z.string().min(2, "Legal Company Name is required!"),

  brandTradingName: z.string().optional(),

  countryOfCompany: z.string().min(1, "Please select a country!"),

  registeredAddress: z.string().optional(),

  website: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || /^https?:\/\/.+\..+/.test(value), {
      message: "Please enter a valid website URL!"
    }),

  companyEmail: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || z.string().email().safeParse(value).success, {
      message: "Invalid email address!"
    }),

  companyPhone: z
    .string()
    .optional()
    .refine((value) => !value || value.replace(/\D/g, "").length >= 10, {
      message: "Invalid phone number!"
    }),

  businessRegistrationNumber: z.string().optional(),

  taxVatNumber: z.string().optional(),

  importExportRegistrationNumber: z.string().optional(),

  businessContactPerson: z.string().optional()
});
