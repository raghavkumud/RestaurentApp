const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors()); 
mongoose
  .connect(
    "mongodb+srv://root_user:raghavji8@cluster0.mjcfj.mongodb.net/RestaurentApp?retryWrites=true&w=majority"
  )
  .then((con) => {
    console.log(`Database Connected: ${con.connection.host}`);
  })
  .catch((err) => console.log(err));
const postRoute = require("./routes/post");
const userRoute = require("./routes/user");
app.use("/", postRoute);
app.use("/", userRoute);
app.listen(3000, () => {
  console.log("app is running on port 3000");
});