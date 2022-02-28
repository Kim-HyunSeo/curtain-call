import express from "express";
import { see, logout, edit, remove } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/:id(\\d+)", see);

export default userRouter;

export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");

export const see = (req, res) => res.send("See");
export const logout = (req, res) => res.send("Logout");
export const edit = (req, res) => res.send("Edit");
export const remove = (req, res) => res.send("Remove");
