import { AttachFile, EmojiEmotionsOutlined, Mic } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";
import React, { useEffect } from "react";
import { uploadFile } from "../Apis/api";

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    color: #919191;
    margin: 10px 5px;
  }
`;
const TextBox = styled(Box)`
  background: #ffffff;
  border-radius: 18px;
  width: calc(94% - 100px);
`;
const MessageBox = styled(InputBase)`
  padding: 20px;
  width: 100%;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;

const ClipIcon = styled(AttachFile)`
  transform: rotate(40deg);
`;
const Footer = ({ sendMessage, setValue, value, file, setFile, setImage }) => {
  useEffect(() => {
   const getFile = async() => {
    if (file) {
      const data = new FormData();
      data.append("name", file?.name);
      data.append("file", file);
    let res = await uploadFile(data);
    setImage(res.data)
    }
   }
   getFile()
  }, [file]);

  const fileHandler = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0]?.name);
  };

  return (
    <Container>
      <EmojiEmotionsOutlined />
      <label htmlFor="file">
        {" "}
        <ClipIcon />
      </label>
      <input
        type="file"
        id="file"
        name="file"
        style={{
          display: "none",
        }}
        onChange={(e) => fileHandler(e)}
      />
      <TextBox>
        <MessageBox
          onChange={(e) => setValue(e.target.value)}
          placeholder="Write a message.."
          value={value}
          onKeyPress={(e) => sendMessage(e)}
        />
      </TextBox>
      <Mic />
    </Container>
  );
};

export default Footer;
