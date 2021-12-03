//likes schema
const mongoose = require("mongoose");
const like = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
});
module.exports = mongoose.model("Like", like);
