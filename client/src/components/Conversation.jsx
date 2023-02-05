import { Badge, Box, styled, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { getConversation, setConversation } from "../Apis/api";
import { AuthContext } from "../context/AuthContext";
import { formatDate } from "../utils/common-utils";
const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;
const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
  objectFit: "cover",
});
const Container = styled(Box)`
  display: flex;
`;

const TimeStamp = styled(Typography)`
  margin-left: auto;
  margin-right: 20px;
  color: #00000099;
  font-size: 12px;
`;

const Text = styled(Typography)`
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
`;
const Conversation = ({ user }) => {
  const {
    setFriend,
    user: sender,
    newMessage,
    incomingMsg,
  } = useContext(AuthContext);
  const [message, setMessage] = useState({});
   
  const getUser = async () => {
    setFriend(user);
    await setConversation({ senderId: sender?.sub, receiverId: user?.sub });
  };
  useEffect(() => {
    const fetchNewMessage = async () => {
      let data ;

        data = await getConversation({
          senderId: user?.sub,
          receiverId: sender?.sub,
        });
      setMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    fetchNewMessage();
  }, [newMessage]);


  return (
    <Component onClick={getUser}>
      <Box>
        <Image src={user?.picture} alt="" />
      </Box>
      <Box
        style={{
          width: "100%",
        }}
      >
        <Container>
          <Typography>{user?.name}</Typography>
          {message?.text && (
            <TimeStamp>{formatDate(message?.timestamp)}</TimeStamp>
          )}
        </Container>
        <Box style={{
          display : "flex",
          justifyContent : "space-between",
          alignItems : "center",
        }}>
          <Text>
     {incomingMsg?.senderId === user?.sub ? incomingMsg?.text :   (message?.text?.includes("react-whatsapp-web-clone"))
   ? "media"
 : message?.text}
          </Text>
          {incomingMsg?.senderId === user?.sub  && <Badge badgeContent={1} color={"error"} style={{
            marginRight : "40px"
          }}></Badge>}
        </Box>
      </Box>
    </Component>
  );
};

export default Conversation;

