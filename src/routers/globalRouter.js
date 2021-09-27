import express from "express";
import path from "path";
import { home } from "../controllers/playControllers";
import { join, login } from "../controllers/userControllers";

const app = express();
const globalRouter  = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;