import { getDecodedToken, getUserData, login, register } from "../controllers/userController.js";
import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";

const userRoute = Router();

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/data", verifyToken, getUserData);
userRoute.get('/token', verifyToken, getDecodedToken)

export default userRoute;