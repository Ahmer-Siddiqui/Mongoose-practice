const Book = require("../models/bookModel");

const createBook = async (req, res) => {
  try {
    const bookData = await Book.create({
      title: "Mathematics XII",
      author: "RD Sharma",
      price: 90,
      discount:120
    });
    res.send("book created Successfully");
  } catch (error) {
    res.send(error.message);
  }
};

const allBook = async (req, res) => {
  try {
    const bookData = await Book.find({ age: { $lt: 38 } });
    res.send(bookData);
  } catch (error) {
    res.send(error.message);
  }
};

const updateBook = async (req, res) => {
  try {
    const bookData = await Book.findByIdAndUpdate(
      "6698060fb0165f7025cee4de",
      { price: -96 },
      { new: true, runValidators:true }
    );
    res.send(bookData);
  } catch (err) {
    res.send(err.errors.price.properties.message);  //mongoose errors object
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookData = await Book.findByIdAndDelete("");
    res.send(bookData);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { createBook, allBook, updateBook, deleteBook };
