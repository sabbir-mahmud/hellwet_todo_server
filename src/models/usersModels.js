// imports
import mongoose from "mongoose";

// users schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: [true, "email required!"] },
});

// users models
const userModel = mongoose.model("auth/users", userSchema);

export default userModel;
