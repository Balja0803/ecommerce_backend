import multer from "multer";

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "C:/Users/jxsjv/AppData/Local/Temp"); //"C:/Users/jxsjv/AppData/Local/Temp" for windows "/tmp" for mac
  },
  filename: (req, file, cb) => {
    req.image = file.path;
    console.log(file);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: Storage });

export default upload;
