const express = require("express");
const router = express.Router();
const { createUser, allUser, updateUser } = require("../controllers/userController");

router.route("/").post(createUser).get(allUser).put(updateUser);

module.exports = router;
