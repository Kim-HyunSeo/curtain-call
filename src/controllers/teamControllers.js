export const info = (req, res) => res.send("Info");
export const video = (req, res) => res.send("Video");
export const watch = (req, res) => {
    res.send(`Watch Video #${req.params.id}`);
}