import express from "express";
import { genre, community, detail } from "../controllers/playControllers";

const playRouter = express.Router();

playRouter.get("/genre", genre);
playRouter.get("/community", community);
playRouter.get("/detail", detail);
playRouter.get("/mainimg", function (req, res) {
    fs.readFile("main.png", function (error, data) {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(data);
    });
});

export default playRouter;
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
export const home = (req, res) => {
    return res.render("main", { pageTitle: "메인 | 커튼콜", comments });
};

export const genre = (req, res) => res.send("Genre Page");
export const community = (req, res) => res.send("Community Page");
export const detail = (req, res) => res.send("Detail Page");
