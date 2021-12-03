//comment schema
const mongoose = require("mongoose");
const comment = new mongoose.Schema({
  description: { type: String, required: true },
  time: { type: Date, default: new Date() },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  isDel:{ type: Boolean ,default:false}
});
module.exports = mongoose.model("Comment", comment);
