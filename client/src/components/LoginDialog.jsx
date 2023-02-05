import {
  Box,
  Dialog,
  List,
  ListItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { qrCodeImage } from "../constants/assets";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { addUser } from "../Apis/api";
const dialogStyle = {
  height: "95%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const Title = styled(Typography)`
  font-size: 28px;
  font-weight: 100;
  line-height: normal;
  color: #41525d;
  margin-bottom: 52px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 40px;
    color: #4a4a4a;
  }
`;
// Get the data if the login is successful
const LoginDialog = () => {
  const {setUser} = useContext(AuthContext)
  const handleLoginSuccess = (responseCredentials) => {
    let userData = jwtDecode(responseCredentials.credential);
    setUser(userData);
    addUser(userData);
  };


  // Handle error if there is any error on google authentication
  const handleLoginError = () => {
    
  };
  return (
    <Dialog
      open={true}
      PaperProps={{
        sx: dialogStyle,
      }}
      hideBackdrop={true}
    >
      <Stack direction={"row"} p={4} justifyContent="space-between" mt={2}>
        <Box>
          <Title>To use WhatsApp on your computer :</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code.
            </ListItem>
          </StyledList>
        </Box>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <img
            src={qrCodeImage}
            style={{
              height: "264px",
              width: "264px",
            }}
            alt=""
          />
          <Box
            sx={{
              position: "absolute",
              top: "40%",
              bottom: "60%",
              left: "5%",
            }}
          >
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginError}
            />
          </Box>
        </Box>
      </Stack>
    </Dialog>
  );
};

export default LoginDialog;
