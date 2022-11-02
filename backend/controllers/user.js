const User = require("../models/user");

exports.registerUser = async (req, res) => {
  try {
    console.log("req's body ", req.body);
    const { email, password, phone, name } = req.body;
    const newUser = new User({
      email,
      phone,
      password,
      name,
    });
    console.log("new user's data is ", newUser);
    let userExists = await User.findOne({ email }).exec();
    console.log(userExists);
    if (userExists) {
      return res.status(404).json({
        success: false,
        message: "Email already exists",
      });
    }
    const user = User.create(newUser);
    return res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
exports.loginUser = async (req, res) => {
  try {
    const users = await User.find().exec();
    console.log(users);
    res.status(200).json([...users]);
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
