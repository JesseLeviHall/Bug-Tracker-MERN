import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../Models/userModel.js";
const secret = "test";

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

  const token = jwt.sign({ id: result._id }, secret, { expiresIn: "1h" });

  if (result) {
    res.status(201).json({
      _id: result._id,
      firstName: result.firstName,
      lastName: result.lastName,
      token: token,
    });
  } else {
    res.status(400).json({ message: "Something went wrong" });
    console.log(error);
  }
};
