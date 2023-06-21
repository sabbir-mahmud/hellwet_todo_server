// imports
import mongoose from "mongoose";

// task schema
const taskSchema = new mongoose.Schema({
  email: { type: String, required: [true, "email required!"] },
  title: { type: String, required: [true, "title required!"] },
  description: { type: String, required: [true, "description required!"] },
  profile_img: { type: String, required: [true, "profile_img required!"] },
  nid: { type: String, required: [true, "nid required!"] },
  birth_certificate: {
    type: String,
    required: false,
  },
  dueDate: { type: Date },
  status: { type: Boolean, default: false },
});

// task Models
const taskModel = mongoose.model("Tasks", taskSchema);

export default taskModel;
