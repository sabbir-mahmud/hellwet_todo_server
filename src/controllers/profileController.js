import {
  ControllerSets,
  FileServe,
  FileUploaderControllerSets,
} from "express-controller-sets";
import ProfileModel from "../models/ProfileModel.js";
import { basePath } from "../settings.js";

// Create an instance of the controller
// (Mongoose Model, Sorting/ordering field name, filters using req.query)
const profileController = new ControllerSets(ProfileModel, "-_id", ["email"]);

// (Mongoose Model, Upload options, basePath)
const profileUploadFile = new FileUploaderControllerSets(
  ProfileModel,
  {
    folder: "uploads/user/images/",
    fileField: "img",
  },
  basePath
);
const paths = ["uploads", "user", "images"];
const profilePictures = new FileServe(paths, basePath);

export { profileController, profilePictures, profileUploadFile };
