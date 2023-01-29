import express from "express";
import { getUser,getBranch, getDashboardStats } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/branch/:RollNumber", getBranch);
router.get("/dashboard", getDashboardStats);

export default router;