import { Box, styled } from "@mui/material";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { addMessage, getMessage } from "../Apis/api";
import { AuthContext } from "../context/AuthContext";
import Footer from "./Footer";
import Message from "./Message";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 0 80px;
`;

const Messages = ({ friend, conversation }) => {
  const { user, socket, setNewMessage, newMessage, incomingMsg, setIncomingMsg } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const scrollRef = useRef();
  
  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMsg({
        ...data,
        createdAt: Date.now(),
      });
    });
  }, []);


  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

 useEffect(() => {
  incomingMsg && conversation?.members?.includes(incomingMsg?.senderId) && 
  setMessages(prev => [...prev, incomingMsg])
 }, [incomingMsg, conversation])

  const sendMessage = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13 && value) {
      let message;
      if (!file) {
        message = {
          senderId: user.sub,
          receiverId: friend.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: user.sub,
          receiverId: friend.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }
      socket.current.emit("sendMessage", message);
      await addMessage(message);
      setValue("");
      setNewMessage((prev) => !prev);
      setFile("");
      setImage("");
      setIncomingMsg(prev => !prev);
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      let data = await getMessage(conversation?._id);
      setMessages(data);
    };
    conversation?._id && fetchMessages();
  }, [conversation?._id, newMessage]);

  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => {
            return (
              <Container ref={scrollRef} key={message?._id}>
                <Message key={message?._id} message={message} />
              </Container>
            );
          })}
      </Component>
      <Footer
        sendMessage={sendMessage}
        file={file}
        setFile={setFile}
        value={value}
        setValue={setValue}
        setImage={setImage}
      />
    </Wrapper>
  );
};

export default Messages;
