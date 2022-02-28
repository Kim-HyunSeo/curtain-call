import express from "express";
// const express = require("express");
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import playRouter from "./routers/playRouter";
import teamRouter from "./routers/teamRouter";

const app = express();
const logger = morgan("dev");
app.use(logger);

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/images", express.static("images"));
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/play", playRouter);
app.use("/team", teamRouter);

app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${PORT} 🚀`));
