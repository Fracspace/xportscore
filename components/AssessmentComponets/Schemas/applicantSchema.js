import z, { email } from "zod";

export const applicantSchema = z.object({
  fullname: z.string().min(3, "Full Name is Required!"),
  designation: z.string().min(2, "Designation is Required!"),
  email: z.string().email("Invalid Email!"),
  phone: z.string().min(10, "Invalid Phone number!"),
  company: z.string().min(2, "Company Name is required!"),
  country: z.string().min(2, "Country is required!")
});
