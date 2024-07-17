const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, maxLength: 20 },
  author: { type: String },
  price: { type: Number, min: [1,"Your price is less then 1"] },
  discount: { type: Number, default: 0 },
  genre: [String],
  category: { type: String, enum: ["fiction", "non-fiction"] },
});

module.exports = mongoose.model("Book", bookSchema);
