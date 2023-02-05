import express from "express";
import { getMessages, newMessage } from "../controller/messageController.js";

const router = express.Router();

router.post("/add", newMessage);
router.get("/:id", getMessages);

export default router;