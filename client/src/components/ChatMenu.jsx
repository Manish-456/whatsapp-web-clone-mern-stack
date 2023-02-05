import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import Conversations from "./Conversations";
import Header from "./Header";
import SearchBar from "./SearchBar";

const ChatMenu = () => {
  const [searchText, setSearchText] = useState(""); 
  
  return (
    <Box>
      <Header />
      <SearchBar setSearchText={setSearchText}/>
      <Conversations searchText={searchText}/>
    </Box>
  );
};

export default ChatMenu;
