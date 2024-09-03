const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//Sign up // register

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password);
    const user = new User({ email, username, password: hashpassword });
    await user.save().then(() => {
      res.status(200).json({ message: "User Registered Successfully" });
    });
  } catch (error) {
    res.status(400).json({ message: "User Already Exists" });
  }
});

// sign up // login

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).json({ message: "Please Register First" });
    }
    const ispasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!ispasswordCorrect) {
      return res.status(200).json({ message: "Please Enter Correct Password" });
    }
    const { password, ...others } = user._doc;
    res.status(200).json({ others });
  } catch (error) {
    res.status(400).json({ message: "Login Failed" });
  }
});

module.exports = router;
