import express from "express";
const router = express.Router();

router.get("/", (req, res) => res.send("info"));
router.get("/video", (req, res) => res.send("Video"));
router.get("/video/:id(\\d+)", (req, res) => res.send(`Watch Video #${req.params.id}`));

module.exports = router;
