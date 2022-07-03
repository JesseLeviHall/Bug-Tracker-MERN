import express from "express";
import { signup, loginUser, getMe } from "../Controllers/user.js";

const router = express.Router();

router.post("/register", signup);
router.post("/login", loginUser);
router.get("/me", getMe);

export default router;
