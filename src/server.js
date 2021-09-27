import express from "express";
// const express = require("express");
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import playRouter from "./routers/playRouter";
import teamRouter from "./routers/teamRouter";

const PORT = 7901;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views")

app.use('/images', express.static('images'));
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/play", playRouter);
app.use("/team", teamRouter);

const handleListening = () =>
    console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);