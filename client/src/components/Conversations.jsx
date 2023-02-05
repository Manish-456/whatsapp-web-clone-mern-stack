import { Box, Divider, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { getUsers } from "../Apis/api";
import { AuthContext } from "../context/AuthContext";
import Conversation from "./Conversation";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

const Conversations = ({ searchText }) => {
  const { user: currentUser, socket, setActiveUsers } = useContext(AuthContext);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      let data = await getUsers();
      const filteredData = data.filter((user) => {
        return user.name.toLowerCase().includes(searchText?.toLowerCase());
      });
      setUserList(
        filteredData?.filter((user) => {
          return user?.sub !== currentUser?.sub;
        })
      );
    };
    fetchUsers();
  }, [searchText]);

  useEffect(() => {
    socket?.current.emit("addUser", currentUser);
    socket?.current.on("getUsers", (data) => {
      setActiveUsers(data);
    });
    socket?.current.on("removeUser", (msg) => {});
  }, [currentUser]);

  return (
    <Component>
      {userList?.map((user) => {
        return (
          <Box key={user?._id}>
            <Conversation key={user?._id} user={user} />
            <StyledDivider />
          </Box>
        );
      })}
    </Component>
  );
};

export default Conversations;
