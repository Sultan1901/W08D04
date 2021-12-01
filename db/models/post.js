const mongoose = require("mongoose");
const post = new mongoose.Schema({
  description: { type: String, required: true },
  time: { type: Number },
  img: { type: String},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  like: { type: String,  ref: "User" },
});
module.exports = mongoose.model("Post", post);
