const express = require("express");
const { registerUser, loginUser } = require("../controllers/user");
const router = express.Router();

router.route("/signup").get(loginUser).post(registerUser);
module.exports = router;
