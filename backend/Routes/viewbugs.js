import express from "express";
import auth from "../Middleware/auth.js";
import {
  getBugs,
  getABug,
  createBug,
  updateBug,
  deleteBug,
} from "../Controllers/viewbugs.js";

const router = express.Router();

router.get("/", getBugs);
router.get("/:id", getABug);
router.post("/", createBug);
router.patch("/:id", updateBug);
router.delete("/:id", deleteBug);

export default router;
