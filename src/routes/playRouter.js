import express from "express";

const router = express.Router();

router.get("/genre", (req, res) => res.send("Genre Page"));
router.get("/community", (req, res) => res.send("Community Page"));
router.get("/detail", (req, res) => res.send("Detail Page"));
router.get("/mainimg", (req, res) => {
    fs.readFile("main.png", function (error, data) {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(data);
    });
});

export default router;
export const comments = [
    {
        title: "쉬어 매드니스 후기",
        type: 0,
        comments: 2,
        good: 3,
        createdAt: "2020/10/20",
        id: 0,
    },
    {
        title: "쉬어 매드니스 후기",
        type: 0,
        comments: 2,
        good: 3,
        createdAt: "2020/10/20",
        id: 1,
    },
    {
        title: "쉬어 매드니스 후기",
        type: 0,
        comments: 2,
        good: 3,
        createdAt: "2020/10/20",
        id: 2,
    },
];
