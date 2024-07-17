const mongoose = require("mongoose");
const connectDB = async() => {
  try {
    const connectionDB = await mongoose.connect("mongodb://127.0.0.1:27017/mongoosePractice");
    console.log("Connected DB");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;   
