import { env } from "#config/env.js";
import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(`${env.MONGO_URI}/retailkartts`);
        console.log("MongoDB connected successfully");
    }
    catch (error) {
        console.log("MongoDB connection failed:", error);
        throw error;
    }
};
export default connectDB;
//# sourceMappingURL=connectDB.js.map