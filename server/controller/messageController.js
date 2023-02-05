import Conversation from "../model/Conversation.js";
import Message from "../model/Message.js";

export const newMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    await Conversation.findByIdAndUpdate(
      req.body.conversationId,
      {
        $set: {
          message: req.body.text
        },
      },
      {
        new: true,
      }
    );
    return res.status(201).json("Message has been saved");
  } catch (err) {
    return res.status(400).json(err);
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    return res.status(200).json(messages);
  } catch (err) {
    return res.status(500).json(err);
  }
};
