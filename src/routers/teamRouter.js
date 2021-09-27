import express from "express";
import { info, video, watch } from "../controllers/teamControllers";

const teamRouter  = express.Router();

teamRouter.get("/", info);
teamRouter.get("/video", video);
teamRouter.get("/video/:id(\\d+)", watch);

export default teamRouter;