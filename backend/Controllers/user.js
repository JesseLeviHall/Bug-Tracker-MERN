import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../Models/userModel.js";
const secret = "test";

export const signup = async (req, res) => {
  const { firstName, lastName, userName, password } = req.body;

  try {
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

    res.status(201).json({
      _id: result._id,
      userName: result.userName,
      firstName: result.firstName,
      lastName: result.lastName,
      role: result.role,
      token: generateToken(result._id),
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({ userName });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        _id: user._id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};

export const getMe = async (req, res) => {
  const user = {
    id: req.user._id,
    userName: req.user.userName,
  };
  res.status(200).json(user);
};

const generateToken = (id) => {
  return jwt.sign({ id }, secret, {
    expiresIn: "8h",
  });
};

export default User;
