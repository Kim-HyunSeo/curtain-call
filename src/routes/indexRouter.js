const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.get("/", async (req, res) => {
    const posts = await Post.find({}).populate("User");
    return res.render("main", { pageTitle: "메인 | 커튼콜", posts });
});
router.get("/join", (req, res) => res.send("Join"));
router.get("/login", (req, res) => res.send("Login"));

module.exports = router;
