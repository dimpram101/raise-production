import { login, register } from "../controllers/userController.js";
import { Router } from "express";

const userRoute = Router();

userRoute.post("/register", register);
userRoute.post("/login", login);

export default userRoute;