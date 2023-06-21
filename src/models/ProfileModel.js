import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  email: { type: String, required: [true, "email required!"] },
  firstName: { type: String, required: [true, "first name required!"] },
  lastName: { type: String, required: [true, "last name required!"] },
  bio: { type: String, required: false },
  gender: { type: String, required: false, enum: ["Male", "Female", "Others"] },
  img: { type: String, required: [true, "img required!"] },
  created_at: { type: Date, default: Date.now },
});

const ProfileModel = mongoose.model("Profile", ProfileSchema);
export default ProfileModel;
