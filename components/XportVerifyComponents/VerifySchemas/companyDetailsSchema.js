import { z } from "zod";

export const companyDetailsSchema = z.object({
  companyName: z.string().min(2, "Company Name is required!"),

  contactPerson: z.string().min(3, "Contact Person Name is required!"),

  designation: z.string().min(2, "Designation is required!"),

  email: z
  .string()
  .min(1, "Email address is required!")
  .email("Invalid email address!"),

  phone: z
    .string()
    .min(10, "Invalid phone number!")
    .max(15, "Phone number is too long!"),

  country: z.string().min(1, "Please select a country!")
});
