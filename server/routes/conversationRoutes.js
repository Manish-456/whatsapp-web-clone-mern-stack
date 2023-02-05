import express from "express";
import {
  getConversation,
  newConversation,
} from "../controller/conversationController.js";

const router = express.Router();

router.post("/", newConversation);
router.post("/find", getConversation);

export default router;
