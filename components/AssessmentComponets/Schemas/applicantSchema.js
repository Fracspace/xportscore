import z, { email } from "zod";

export const applicationSchema = z.object({
    fullname : z.string().min(3,"Full Name is Required!"),
    designation : z.string().min(2,"Designation is Required!"),
    email:z.string.email("Invalid Email"),
    phone:z.phone.min(10,"Invalid Phone number")
})