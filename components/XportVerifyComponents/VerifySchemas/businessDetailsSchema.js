import { z } from "zod";

export const businessDetailsSchema = z.object({
  legalCompanyName: z.string().min(2, "Legal Company Name is required!"),

  brandTradingName: z.string().min(1, "Brand / Trading Name is required!"),

  countryOfCompany: z.string().min(1, "Please select a country!"),

  registeredAddress: z.string().optional(),

  website: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || /^https?:\/\/.+\..+/.test(value), {
      message: "Please enter a valid website URL starting with http:// or https://"
    }),

  companyEmail: z
    .string()
    .min(1, "Email Address is required!")
    .email("Invalid email address!"),

  companyPhone: z
    .string()
    .min(1, "Phone Number is required!")
    .refine((value) => value.replace(/\D/g, "").length >= 7, {
      message: "Invalid phone number!"
    }),

  businessRegistrationNumber: z.string().optional(),

  taxVatNumber: z.string().optional(),

  importExportRegistrationNumber: z.string().optional(),

  businessContactPerson: z.string().optional()
});
