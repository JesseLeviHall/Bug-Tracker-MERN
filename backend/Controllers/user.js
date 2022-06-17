import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../Models/userModel.js";
const secret = "test";
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export const signup = async (req, res) => {
  const { firstName, lastName, userName, password } = req.body;

  const isUser = await User.findOne({ userName });

  if (isUser) {
    return res.status(400).json({ message: "User name already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const result = await User.create({
    firstName,
    lastName,
    userName,
    password: hashedPassword,
  });

  if (result) {
    res.status(201).json({
      _id: result._id,
      firstName: result.firstName,
      lastName: result.lastName,
      token: generateToken(result._id),
    });
  } else {
    res.status(400).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      token: token,
    });
  } else {
    res.status(400).json({ message: "password did no match data" });
    console.log(error);
  }
};
