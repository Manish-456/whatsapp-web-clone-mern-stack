import { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [friend, setFriend] = useState({});
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessage, setNewMessage] = useState(false);
  const [incomingMsg, setIncomingMsg] = useState(null);
  const socket = useRef();
  useEffect(() => {
    socket.current = io("https://whatsapp-web-socket.onrender.com");
  }, [newMessage]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        friend,
        setFriend,
        socket,
        activeUsers,
        setActiveUsers,
        newMessage,
        setNewMessage,
        incomingMsg,
        setIncomingMsg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
