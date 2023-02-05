import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./DB/connect.js";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import conversationRoutes from "./routes/conversationRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));


app.use("/api/user", userRoutes);
app.use("/api/conversation", conversationRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/file", fileRoutes);

const startServer = async () => {
  try {
   connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    })
  } catch (err) {
  
  }
};
startServer();
