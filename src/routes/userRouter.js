import express from "express";
const router = express.Router();

router.get("/logout", (req, res) => res.send("Logout"));
router.get("/edit", (req, res) => res.send("Edit"));
router.get("/remove", (req, res) => res.send("Remove"));
router.get("/:id(\\d+)", (req, res) => res.send("See"));

export default router;
