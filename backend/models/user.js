const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
});
module.exports = mongoose.model("User", userSchema);
