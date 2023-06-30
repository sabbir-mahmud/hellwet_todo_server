// imports
import mongoose from "mongoose";

// task schema
const taskSchema = new mongoose.Schema({
  email: { type: String, required: [true, "email required!"] },
  title: { type: String, required: [true, "title required!"] },
  description: { type: String, required: [true, "description required!"] },
  dueDate: { type: Date },
  status: { type: Boolean, default: false },
});

// task Models
const taskModel = mongoose.model("Tasks", taskSchema);

export default taskModel;
