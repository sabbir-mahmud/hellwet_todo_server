import {
  ControllerSets,
  FileUploaderControllerSets,
} from "express-controller-sets";
import ProfileModel from "../models/ProfileModel.js";
import { basePath } from "../settings.js";

// Create an instance of the controller
// (Mongoose Model, Sorting/ordering field name, filters using req.query)
const taskController = new ControllerSets(ProfileModel, "-_id", ["email"]);

// (Mongoose Model, Upload options, basePath)
const uploadFile = new FileUploaderControllerSets(
  ProfileModel,
  {
    folder: "uploads/user/images/",
    fileField: "img",
  },
  basePath
);

export { taskController, uploadFile };
