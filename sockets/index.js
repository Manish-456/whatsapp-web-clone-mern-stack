import { Server } from "socket.io";

const io = new Server(9000, {
    cors:{
        origin : "https://whatsapp-web-clone-v2.onrender.com"
    }
})

let users = [];

const addUser = (userData, socketId) => {
 !users.some(user => user.sub == userData.sub) && users.push({...userData, socketId})
}
// 

const getUser = (userId) => {
   return users.find(user =>{ return user.sub === userId})
}
const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId)
   
   
   }
io.on("connection", (socket) => {
   

    socket.on("addUser", (userData) => {
       addUser(userData, socket.id);
       io.emit("getUsers", users)
    })

    socket.on("sendMessage", (data) => {
      const user = getUser(data.receiverId);
      io.to(user?.socketId).emit('getMessage', data)
    })
    socket.on('disconnect', () => {
      
          removeUser(socket.id)
        io.emit("removeUser", users)
      });

})