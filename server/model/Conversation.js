import { Schema, model } from "mongoose";

const ConversationSchema = Schema(
  {
    members: {
      type: Array,
      required: true,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Conversation", ConversationSchema);
