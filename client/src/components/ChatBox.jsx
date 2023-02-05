import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { getConversation } from "../Apis/api";
import { AuthContext } from "../context/AuthContext";
import ChatHeader from "./ChatHeader";

import Messages from "./Messages";

const ChatBox = () => {
  const { friend, user } = useContext(AuthContext);
   const [conversation, setConversation] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: user?.sub,
        receiverId: friend?.sub,
      });
       setConversation(data);
    };
    getConversationDetails();
  }, [friend?.sub]);
  return (
    <Box
      style={{
        height: "75%",
      }}
    >
      <ChatHeader friend={friend} />
      <Messages conversation={conversation} friend={friend}/>
    </Box>
  );
};

export default ChatBox;
