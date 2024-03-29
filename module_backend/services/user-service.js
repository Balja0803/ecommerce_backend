import User from "../model/user.js";

export const getUser = async (limit) => {
  return await User.find({})
    .limit(limit)
    .then((res) => {
      return res;
    });
};

export const addUser = async (props) => {
  const newUser = new User(props);
  const result = await newUser.save();
  return result;
};
