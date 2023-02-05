import React from "react";
import { AppBar, Box, styled, Toolbar } from "@mui/material";
import LoginDialog from "./LoginDialog";
import ChatDialog from "./ChatDialog";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;
const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Header = styled(AppBar)`
  height: 125px;
  box-shadow: none;
  background-color: #00bfa5;
`;

const Messenger = () => {
  const { user } = useContext(AuthContext);
  return (
    <Component>
      {user ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;
