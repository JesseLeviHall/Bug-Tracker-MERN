import express from "express";
import { loginUser, signup } from "../controllers/user.js";

const router = express.Router();

router.post("/", signup);
router.post("/login", loginUser);

export default router;
