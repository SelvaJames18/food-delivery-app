import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://selvajames:selva123@cluster0.zxo1q57.mongodb.net/food-delivery-app').then(()=>console.log("DB connected"))
}