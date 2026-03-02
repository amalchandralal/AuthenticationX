import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import { MongooseError } from "mongoose";
import { createClient } from "redis";

dotenv.config();
//redis setup start//
const redisUrl = process.env.REDIS_URL;
if (!redisUrl) {
  console.log("Redis url missing..");
}
export const redisClient = createClient({
    url: redisUrl
})
redisClient.connect().then(console.log("redis connected successfully")).catch(console.error);
//redis setup end//

await connectDb();

const app = express();
app.use(express.json());
//import routes
import userRouter from "./routes/user.js";
//using routes
app.use("/api/v1", userRouter);
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
