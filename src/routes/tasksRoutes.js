// imports
import { Router } from "express";
import { taskController } from "../controllers/taskClassController.js";
import authenticate from "../middleware/authMiddleware.js";

// routers
const router = Router();

router.use(authenticate);

// task routes
router.get("/", taskController.getAll.bind(taskController));
router.get("/:id", taskController.getById.bind(taskController));
router.post("/", taskController.create.bind(taskController));
router.put("/:id", taskController.update.bind(taskController));
router.delete("/:id", taskController.delete.bind(taskController));

// exports
export default router;
