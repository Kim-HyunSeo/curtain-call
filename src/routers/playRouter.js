import express from "express";
import { genre, community, detail } from "../controllers/playControllers";

const playRouter  = express.Router();

playRouter.get("/genre", genre);
playRouter.get("/community", community);
playRouter.get("/detail", detail);
playRouter.get("/mainimg", function (req,res) {
    fs.readFile('main.png', function (error, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(data)
    })
})

export default playRouter;