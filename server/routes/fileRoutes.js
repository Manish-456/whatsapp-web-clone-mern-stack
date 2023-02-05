import express from "express";
import { getFile, uploadFile } from "../controller/uploadFileController.js";
import upload from "./utils/upload.js";

const router = express.Router();
 router.post('/upload',upload.single('file'), uploadFile);
 router.get('/:filename', getFile);

export default router;