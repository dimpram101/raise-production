import { createProjectVideo, getProjectVideo, getProjectVideoByID, getProjectVideoByUserID, updateProjectVideo, insertPayment } from "../controllers/projectVideoController.js";
import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import paymentStorage from "../../storage/paymentStorage.js";

const projectVideoRoute = Router();

projectVideoRoute.get("/", verifyToken, getProjectVideo);
projectVideoRoute.get("/user", verifyToken, getProjectVideoByUserID);
projectVideoRoute.get("/:id", verifyToken, getProjectVideoByID);
projectVideoRoute.put("/:id", verifyToken, updateProjectVideo);
projectVideoRoute.post("/create", verifyToken, createProjectVideo);
projectVideoRoute.put("/payment/:id", [verifyToken, paymentStorage.single('file')], insertPayment);

export default projectVideoRoute;