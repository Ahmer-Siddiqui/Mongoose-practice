const User = require("../models/userModel");

const createUser = async (req, res) => {
  const user1 = new User({
    name: "Adam",
    email: "adam@yahoo.in",
    age: 48,
  });
  const userData = await User.create([
    {
      name: "Adam",
      email: "adam@yahoo.in",
      age: 48,
    },
    {
      name: "Eve",
      email: "eve@gmail.com",
      age: 35,
    },
    {
      name: "John",
      email: "john@hotmail.com",
      age: 29,
    },
    {
      name: "Alice",
      email: "alice@outlook.com",
      age: 42,
    },
    {
      name: "Bob",
      email: "bob@ymail.com",
      age: 55,
    },
  ]);
  res.send("User created Successfully");
};
const allUser = async (req, res) => {
  const userData = await User.find({ age: { $lt: 38 } });
  res.send(userData);
};
const updateUser = async (req, res) => {
  const userData = await User.findByIdAndUpdate("6697ad490dc90596dedf1b6d",{age: 99},{new:true});
  res.send(userData);
};

module.exports = { createUser, allUser,updateUser };
