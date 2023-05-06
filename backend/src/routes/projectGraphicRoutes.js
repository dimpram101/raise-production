import { createProjectGraphic, getProjectGraphic, getProjectGraphicByID, getProjectGraphicByUserID, updateProjectGraphic } from "../controllers/projectGraphicController.js";
import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";

const projectGraphicRoute = Router();

projectGraphicRoute.get("/", verifyToken, getProjectGraphic);
projectGraphicRoute.get("/user", verifyToken, getProjectGraphicByUserID);
projectGraphicRoute.get("/:id", verifyToken, getProjectGraphicByID);
projectGraphicRoute.put("/:id", verifyToken, updateProjectGraphic);
projectGraphicRoute.post("/create", verifyToken, createProjectGraphic);

export default projectGraphicRoute;