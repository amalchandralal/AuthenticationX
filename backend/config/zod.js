

import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(3, "name should have atleast 3 characters"),

  email: z.string().email("invalid email format"),
  password: z
    .string()
    .min(8,"pass must be atleast 8 characters")
    .regex(/[A-Z]/, "should contain uppercase")
    .regex(/[a-z]/, "should contain lowercase")
    .regex(/[0-9]/, "should contain numbers")
    .regex(/[!@#$%^&*]/, "should contain special character")
});

export default registerSchema;
