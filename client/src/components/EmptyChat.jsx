import { Box, Divider, styled, Typography } from "@mui/material";
import React from "react";
import { emptyChatImage } from "../constants/assets";

const Component = styled(Box)`
background-color : #f8f9fa;
padding : 30px 0;
text-align : center;
height : 100vh;
`
const Wrapper = styled(Box)`
 padding : 0 200px;
`
const Image = styled("img")({
  width : 400,
  marginTop : 100
})

const Title = styled(Typography)`
font-size : 32px;
margin : 25px 0 10px 0;
font-family : inherit;
font-weight : 400;
color : #41525d;
`
const SubTitle = styled(Typography)`
font-size : 14px;
color : #667781;
font-weight : 300;
font-family : inherit;
`

const Hr = styled(Divider)`
margin: 45px 0;
opacity : 0.4;
`
const EmptyChat = () => {
  return (
 
      <Component>
        <Wrapper>
          <Image src={emptyChatImage} alt="" />
          <Title >WhatsApp Web</Title>
          <SubTitle>
            Now send and receive messages without keeping your phone online.
          </SubTitle>
          <SubTitle>
            Use WhatsApp on up to a 4 linked devices and 1 phone at the same
            time.
          </SubTitle>
          <Hr/>
        </Wrapper>
      </Component>
 
  );
};

export default EmptyChat;
