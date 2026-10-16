// require("dotenv").config({path : "./.env"});
import dotenv from "dotenv";

import connectDB from "./db/index.js";
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";
import express from "express";
const app = express();

dotenv.config({ path: "./.env" });

connectDB() 


/*
;(async () => {
    try { 
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,);
        app.on("error", (err) => {
            console.error("Error connecting to MongoDB:", err);
            throw err;
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
})()
*/