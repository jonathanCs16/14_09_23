import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://jdgm1038:1038867765@cluster0.sz3bzb9.mongodb.net/");
        console.log(">> DB Connect");
    } catch (error) {
        console.log(error)
    }
}