const express = require("express");
const router = express.Router();
const {
  allBook,
  deleteBook,
  createBook,
  updateBook,
} = require("../controllers/bookController");

router
  .route("/")
  .post(createBook)
  .get(allBook)
  .put(updateBook)
  .delete(deleteBook);

module.exports = router;
