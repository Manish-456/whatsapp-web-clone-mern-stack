import axios from "axios";

const publicRequest = axios.create({
  baseURL: "https://react-whatsapp-web-clone.onrender.com",
});

export const addUser = async (data) => {
  try {
    await publicRequest.post("/api/user/add", data);
  } catch (err) {
    console.log(err);
  }
};
export const getUsers = async () => {
  try {
    let res = await publicRequest.get("/api/user");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
export const setConversation = async (info) => {
  try {
    await publicRequest.post("/api/conversation", info);
  } catch (err) {
    console.log(err);
  }
};

// This function is called inside chatBox;
export const getConversation = async (info) => {
  try {
    let res = await publicRequest.post("/api/conversation/find", info);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const addMessage = async (data) => {
  try {
    await publicRequest.post("/api/message/add", data);
  } catch (err) {
    console.log(err);
  }
};
export const getMessage = async (conversationId) => {
  try {
  let res = await publicRequest.get(`/api/message/${conversationId}`);
  return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const uploadFile = (data) => {
  try{
    return publicRequest.post("/api/file/upload", data);
  }catch(err){
    console.log(err);
  };

};
