import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import userModal from "../Models/userModel.js";

const secret = "test";

export const signup = async (req, res) => {
  const { firstName, lastName, userName, password } = req.body;

  try {
    const isUser = await userModal.findOne({ userName });

    if (isUser)
      return res.status(400).json({ message: "User name already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await userModal.create({
      firstName,
      lastName,
      userName,
      password: hashedPassword,
    });

    const token = jwt.sign({ user: result.userName, id: result._id }, secret, {
      expiresIn: "4h",
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
