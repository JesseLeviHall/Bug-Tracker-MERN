import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";

const secret = "test";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, secret);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized Token");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, No Token");
  }
});

export default protect;
