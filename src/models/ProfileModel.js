import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  email: { type: String, required: [true, "email required!"] },
  firstName: { type: String, required: [true, "first name required!"] },
  lastName: { type: String, required: [true, "last name required!"] },
  bio: { type: String, required: false },
  education: { type: String, required: false },
  about: { type: String, required: false },
  gender: { type: String, required: false, enum: ["Male", "Female", "Others"] },
  img: { type: String, required: false },
  yearOfExperience: { type: Number, required: false },
  completedProjects: { type: Number, required: false },
  certification: { type: Number, required: false },
  link: { type: String, required: false },
  address: { type: String, required: false },
  img: { type: String, required: false },
  created_at: { type: Date, default: Date.now },
});

const ProfileModel = mongoose.model("Profile", ProfileSchema);
export default ProfileModel;
