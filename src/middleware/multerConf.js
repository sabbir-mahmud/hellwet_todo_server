import fs from "fs";
import multer from "multer";
import path from "path";

const createStorage = (folderName, basePath) => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      const folder = folderName;

      const fullFolderPath = path.join(basePath, folderName);
      fs.mkdirSync(fullFolderPath, { recursive: true });
      cb(null, fullFolderPath);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
};

const uploadHandler = (folderName, basePath) =>
  multer({
    storage: createStorage(folderName, basePath),
    limits: {
      fileSize: 1024 * 1024 * 50,
    },
  });

export { uploadHandler };
