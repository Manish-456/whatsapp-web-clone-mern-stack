import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AvatarContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AvatarImg = styled("img")`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: none;
  padding: 25px 0;
`;

const BoxWrapper = styled(Box)`
  background-color: #ffffff;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  & :first-of-type {
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  }
  &: last-child {
    margin: 14px 0;
    color: #4a4a4a;
  }
`;

const DescWrapper = styled(Box)`
  padding: 15px 20px 28px 30px;
  & :first-of-type {
    font-size: 13px;
    color: #8696a0;
    font-style : inherit;
    font-weight: 200;
  }
`;

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <AvatarContainer>
        <AvatarImg src={user?.picture} alt="" />
      </AvatarContainer>
      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{user?.name}</Typography>
      </BoxWrapper>
      <DescWrapper>
        <Typography>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </DescWrapper>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Just Chill ✌🤞</Typography>
      </BoxWrapper>
    </>
  );
};

export default Profile;
