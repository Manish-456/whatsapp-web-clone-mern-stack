import mongoose from "mongoose";

 const connectDB = (url) => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(url, {
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to database"))
    .catch(() => console.log("Failed to connect to database"));
};

export default connectDB;
