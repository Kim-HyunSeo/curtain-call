import express from "express";
import { info, video, watch } from "../controllers/teamControllers";

const teamRouter = express.Router();

teamRouter.get("/", info);
teamRouter.get("/video", video);
teamRouter.get("/video/:id(\\d+)", watch);

export default teamRouter;

export const info = (req, res) => res.send("Info");
export const video = (req, res) => res.send("Video");
export const watch = (req, res) => {
    res.send(`Watch Video #${req.params.id}`);
};
