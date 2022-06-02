import express from "express";
import {
  getBugs,
  createBug,
  updateBug,
  deleteBug,
} from "../Controllers/viewbugs.js";

const router = express.Router();

router.get("/", getBugs);
router.post("/", createBug);
router.put("/", updateBug);
router.delete("/", deleteBug);

export default router;
