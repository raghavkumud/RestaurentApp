const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const cors = require("cors");
const dotnev = require("dotenv");
dotnev.config();
app.use(cors());
mongoose
  .connect(process.env.MONGO_URI)
  .then((con) => {
    console.log(`Database Connected: ${con.connection.host}`);
  })
  .catch((err) => console.log(err));
const postRoute = require("./routes/post");
const userRoute = require("./routes/user");
app.use("/api", postRoute);
app.use("/api", userRoute);
app.listen(3000, () => {
  console.log("app is running on port 3000");
});
