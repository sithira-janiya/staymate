const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Register new user
const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      nicNumber,
      contactNumber,
      age,
      userType,
      behaviorType,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    // Check age requirement
    if (age < 18) {
      return res
        .status(400)
        .json({ message: "Minimum age requirement is 18 years" });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      nicNumber,
      contactNumber,
      age,
      userType,
      behaviorType,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully! Awaiting approval.",
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        userType: newUser.userType,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
};

module.exports = {
  registerUser,
};
