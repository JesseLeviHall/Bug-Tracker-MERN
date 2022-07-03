import express from "express";
import protect from "../Middleware/auth.js";
import {
  getBugs,
  getABug,
  createBug,
  updateBug,
  deleteBug,
} from "../Controllers/viewbugs.js";

const router = express.Router();

router.get("/", protect, getBugs);
router.get("/:id", protect, getABug);
router.post("/", createBug);
router.patch("/:id", protect, updateBug);
router.delete("/:id", protect, deleteBug);

export default router;
