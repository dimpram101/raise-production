import { createProjectVideo, getProjectVideo, getProjectVideoByID, getProjectVideoByUserID, updateProjectVideo } from "../controllers/projectVideoController.js";
import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";

const projectVideoRoute = Router();

projectVideoRoute.get("/", verifyToken, getProjectVideo);
projectVideoRoute.get("/user", verifyToken, getProjectVideoByUserID);
projectVideoRoute.get("/:id", verifyToken, getProjectVideoByID);
projectVideoRoute.put("/:id", verifyToken, updateProjectVideo);
projectVideoRoute.post("/create",verifyToken, createProjectVideo);

export default projectVideoRoute;