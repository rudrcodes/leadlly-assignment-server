import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: String,
  password: String,
});


export const UserModel = mongoose.model("User", UserSchema);
