import User from "../model/user.js";

export const addUser = async (props) => {
  const newUser = new User(props);
  const result = await newUser.save();
  return result;
};
