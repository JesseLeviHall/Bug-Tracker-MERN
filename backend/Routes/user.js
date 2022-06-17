import express from "express";
import { getMe, loginUser, signup } from "../controllers/user.js";

const router = express.Router();

router.post("/register", signup);
router.post("/login", loginUser);
router.get("/me", getMe);

export default router;
