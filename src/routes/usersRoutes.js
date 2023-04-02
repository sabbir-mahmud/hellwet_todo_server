// imports
import { Router } from "express";
import { login_controller } from "../controllers/usersControllers.js";

// router
const router = Router();

// authenticate routes
router.put("/", login_controller);

// exports
export default router;
