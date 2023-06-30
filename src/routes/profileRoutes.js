import { Router } from "express";
import {
  profileController,
  profilePictures,
  profileUploadFile,
} from "../controllers/profileController.js";

const router = Router();

router.get("/", profileController.getAll.bind(profileController));
router.get("/:id", profileController.getById.bind(profileController));
router.get("/images/:fileName", profilePictures.serve.bind(profilePictures));
router.post("/", profileUploadFile.fileUpload.bind(profileUploadFile));
router.patch(
  "/:id",
  profileUploadFile.updateFileUpload.bind(profileUploadFile)
);
router.delete("/:id", profileController.delete.bind(profileController));

export default router;
