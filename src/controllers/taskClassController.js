import { ControllerSets } from "express-controller-sets";
import taskModel from "../models/taskModels.js";

// Create an instance of the controller
// (Mongoose Model, Sorting/ordering field name, filters using req.query)
const taskController = new ControllerSets(taskModel, "-_id", [
  "email",
  "status",
]);

export { taskController };
