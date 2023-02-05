import { MoreVert, Search } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  // padding-top : 60px;
`;
const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
  objectFit: "cover",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`;
const Status = styled(Typography)`
  margin-left: 12px !important;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px !important;
`;

const RightContainer = styled(Box)`
  margin-left : auto;
  & > svg {
    padding : 8px;
    font-size : 22px;
    color : #000;
  }
`

const ChatHeader = ({friend}) => {
  const {activeUsers} = useContext(AuthContext);

  return (
    <Header>
      <Image src={friend?.picture} alt="DP" />
      <Box>
        <Name>{friend?.name}</Name>
        <Status>{activeUsers?.find(user => user.sub === friend?.sub) ? "online" : "offline"}</Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;
