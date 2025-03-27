import mongoose from "mongoose";
import { MONGODB_URI, DB_NAME } from "../constants";

const connectDb = async () => {
  try {
    await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
    console.log('MongoDB connected');
  } catch (error) {
    console.log('Mongodb connection failed');
    console.log("error" , error)
  }
};


export default connectDb ;