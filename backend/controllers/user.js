import { json } from "zod";
import registerSchema from "../config/zod.js";
import registerUser from "../config/zod.js";
import TryCatch from "../middleware/TryCatch.js";
import sanitize from "mongo-sanitize";
import formatZodError from "../middleware/zodErrorCatch.js";

const register = TryCatch(async (req, res) => {
  const sanitizedBody = sanitize(req.body);
  const validation = registerSchema.safeParse(sanitizedBody);

  if (!validation.success) {
    return res.status(400).json({errors : formatZodError(validation.error)});
  }
  const { name, email, password } = validation.data;
  res.json({ name, email, password });
});

export default register;
