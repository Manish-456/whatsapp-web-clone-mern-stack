import Conversation from "../model/Conversation.js";

export const newConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const conversation = await Conversation.findOne({
      members: {
        $all: [senderId, receiverId],
      },
    });
    if (conversation)
      return res.status(200).json("Conversation already exists");
    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });
    await newConversation.save();
    return res.status(201).json("new Conversation saved successfully");
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const getConversation = async (req, res) => {
  const { senderId, receiverId } = req.body;
  try {
    const conversation = await Conversation.findOne({
      members: {
        $all: [senderId, receiverId],
      },
    });
    return res.status(200).json(conversation);
  } catch (err) {
    return res.status(500).json(err);
  }
};
