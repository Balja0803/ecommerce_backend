import multer from "multer";
import { nanoid } from "nanoid";

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "C:/Users/jxsjv/AppData/Local/Temp"); //"C:/Users/jxsjv/AppData/Local/Temp" for windows, "/tmp" for mac
  },
  filename: (req, file, cb) => {
    const ext = getExtension(file.originalname);
    const newName = nanoid() + "." + ext;
    cb(null, newName);
  },
});

function getExtension(name) {
  const arr = name.split(".");
  return arr[arr.length - 1];
}

const upload = multer({ storage: Storage });

export default upload;
