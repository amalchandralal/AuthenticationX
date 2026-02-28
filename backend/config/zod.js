import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be atleast 3 characters long"),
  email: z.string().email().min(2, "Invalid email format"),
  password: z.string()
  .min("password must have atleast 8 characters long")
  .regex(/[A-Z]/,"Password should have atleast one uppercase letter")
  .regex(/[!@#$%^&*]/,"password should have atleast one special character.")
});
