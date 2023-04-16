// imports
import { Router } from "express";
import {
  login_controller,
  refreshToken,
} from "../controllers/usersControllers.js";

// router
const router = Router();

// authenticate routes
router.put("/", login_controller);
router.post("/refresh", refreshToken);

// exports
export default router;
