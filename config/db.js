import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://harshsingh45831_db_user:wdf1SdkD0hhKKmiR@cluster0.swrbyiy.mongodb.net/?appName=Cluster0");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;