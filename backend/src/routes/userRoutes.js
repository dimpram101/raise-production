import { register } from "../controllers/userController.js";
import { Router } from "express";

const userRoute = Router();

userRoute.post("/register", register);

export default userRoute;