import { Dialog, styled, Box } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ChatBox from "./ChatBox";
//components
import ChatMenu from "./ChatMenu";
import EmptyChat from "./EmptyChat";
const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)`
  min-width: 450px;
`;
const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;
const dialogStyle = {
  height: "95%",
  width: "100%",
  margin: "20px",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: 0,
  boxShadow: "none",
  overflow: "hidden",
};
const ChatDialog = () => {
  const { friend } = useContext(AuthContext);
  return (
    <Dialog
      open={true}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
      PaperProps={{ sx: dialogStyle }}
      maxWidth={"md"}
    >
      <Component>
        <LeftComponent>
          <ChatMenu />
        </LeftComponent>
        <RightComponent>
          {Object.keys(friend)?.length ? <ChatBox /> : <EmptyChat />}
      
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default ChatDialog;
