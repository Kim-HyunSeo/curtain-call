const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const logger = morgan("dev");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: path.resolve(__dirname + "/.env") });

import indexRouter from "./routes/indexRouter";
import userRouter from "./routes/userRouter";
import playRouter from "./routes/playRouter";
import teamRouter from "./routes/teamRouter";

mongoose.connect(process.env.mongo);
const db = mongoose.connection;
db.on("error", (error) => console.log("❌ DB Error", error));
db.once("open", () => console.log("✅ Connected to DB"));

app.use(logger);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.locals.basedir = path.join(__dirname, "public");

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/play", playRouter);
app.use("/team", teamRouter);

const PORT = 8510;
app.listen(PORT, () => console.log(`✅ Running on http://localhost:${PORT} 🚀`));
