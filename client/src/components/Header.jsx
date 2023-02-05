import { useContext, useState } from "react";

import { Box, styled } from "@mui/material";
import { Chat as MessageIcon } from "@mui/icons-material";

import { AuthContext } from "../context/AuthContext";

import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "./InfoDrawer";

const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  // padding-top : 60px;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #000;
  }
  & :first-of-type {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
  cursor: "pointer",
});

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { user } = useContext(AuthContext);

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <Component>
        <Image src={user?.picture} alt="" onClick={() => toggleDrawer()} />
        <Wrapper>
          <MessageIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
};

export default Header;
