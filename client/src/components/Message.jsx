import { GetApp } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import { useContext } from "react";
import { iconPDF} from "../constants/assets";
import { AuthContext } from "../context/AuthContext";
import { downloadMedia, formatDate } from "../utils/common-utils";

const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  margin-top: 5px;
  padding: 5px;
  width: fit-content;
  border-radius: 10px;
  display: flex;
  word-break: break-word;
  margin-bottom: 5px;
`;
const Wrapper = styled(Box)`
  background: #ffffff;
  margin-top: 5px;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  border-radius: 10px;
  display: flex;
  word-break: break-word;
  margin-bottom: 5px;
`;
const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;
const TimeStamps = styled(Typography)`
  font-size: 10px;
  color: #919191;
  word-break: keep-all;
  margin-top: auto;
`;
const Message = ({ message }) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user?.sub === message?.senderId ? (
        <Own>
         {
          message?.type === "file" ? <ImageMessage message={message}/> : <TextMessage message={message}/>
         }
        </Own>
      ) : (
        <Wrapper>
           {
          message?.type === "file" ? <ImageMessage message={message}/> : <TextMessage message={message}/>
         }
        </Wrapper>
      )}
    </>
  );
};

const ImageMessage = ({ message }) => {

  return (
    <Box style={{
      position : "relative",
    }}>
      {message?.text?.includes(".pdf") ? (
        <Box style={{
          display : "flex"
        }}>
        <img src={iconPDF} alt="pdf" style={{width : 80}}/>
        <Typography fontSize={14}>{message?.text.split('/').pop()}</Typography>
          
        </Box>
      ) : 
        <img src={message?.text} alt={message?.text} style={{
          width : 300, height : "100%", objectFit : "cover"
        }} />}

      
      <TimeStamps style={{
        position : "absolute",
        bottom : 0,
        right : 0,
      }}>
        <GetApp style={{
          marginRight : 10,
          border : "1px solid gray",
          borderRadius : "50%",
         cursor : "pointer"
        }}
      onClick={(e) => downloadMedia(e, message?.text)}
        fontSize="small"/>
        {formatDate(message?.createdAt)}</TimeStamps>
    </Box>
  );
};

const TextMessage = ({ message }) => {
  return (
    <>
      <Text>{message?.text}</Text>
      <TimeStamps>{formatDate(message?.createdAt)}</TimeStamps>
    </>
  );
};

export default Message;
