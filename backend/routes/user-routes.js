import express from "express";
import { getAllUser, login, signup } from "../controllers/user-controller";

const router = express.Router();

router.get("https://travel-bog.onrender.com/", getAllUser);
router.post("https://travel-bog.onrender.com/signup", signup);
router.post("https://travel-bog.onrender.com/login", login);

export default router;