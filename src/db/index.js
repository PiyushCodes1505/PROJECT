import mongoose from "mongoose";
import {DB_NAME} from "../constraints";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`\n Connected to MongoDB!! DB HOST: ${connection.connection.host} \n`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with an error code
    }
};

export default connectDB;