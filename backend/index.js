import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import { MongooseError } from "mongoose";

dotenv.config();

await connectDb();
const app = express();
app.use(express.json())
//import routes
import userRouter from "./routes/user.js";
//using routes
app.use("/api/v1",userRouter)
const PORT = 5000 || process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`);
})