import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/merndatabase");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;