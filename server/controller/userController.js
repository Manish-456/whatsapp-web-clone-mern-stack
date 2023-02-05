import User from "../model/User.js";

export const addUser = async (req, res) => {
  try {
    const user = await User.findOne({ sub: req.body.sub });
    if (user) return res.status(200).json({ message: "User already exists" });
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
