// imports
import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasksControllers.js";
import authenticate from "../middleware/authMiddleware.js";

// routers
const router = Router();

// authenticated
router.use(authenticate);

// task routes
router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

// exports
export default router;
