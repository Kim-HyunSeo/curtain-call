const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        post: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timeStamps: true,
    },
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
