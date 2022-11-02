const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  services: {
    type: String,
  },
});
module.exports = mongoose.model("Post", postSchema);
