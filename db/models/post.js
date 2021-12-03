//posts schema
const mongoose = require("mongoose");
const post = new mongoose.Schema({
  description: { type: String, required: true },
  time: { type: Date, default: new Date() },
  img: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  commentId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  isDel: { type: Boolean, default: false },
  like: [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }],
});
module.exports = mongoose.model("Post", post);
