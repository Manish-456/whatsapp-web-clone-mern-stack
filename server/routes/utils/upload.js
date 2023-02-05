import multer from "multer";
import * as dotenv from "dotenv";
import { GridFsStorage } from "multer-gridfs-storage";

dotenv.config();
const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file : (req, file) => {
    const match = ["image/jpg", "image/jpeg", "image/png"];
    if(match.indexOf(file.mimeType) === -1){
        return `${Date.now()}-file-${file.originalname}`
    }
    return {
        bucketName : "photos",
        filename : `${Date.now()}-file-${file.originalname}`
    }
  }
});

export default multer({storage});
