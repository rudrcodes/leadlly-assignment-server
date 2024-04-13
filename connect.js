import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("connected To db");
  } catch (error) {
    console.log(error);
  }
};

