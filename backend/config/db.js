import mongoose from "mongoose";
const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            dbName: "MernAuthentication"
        });
        console.log("Database connected")
    }catch(error){
        console.log("failed to connect database",error.message);

    }
    
}

export default connectDb;