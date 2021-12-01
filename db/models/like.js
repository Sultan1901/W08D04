const mongoose = require("mongoose");
const like = new mongoose.Schema({
  description: { type: String, required: true },
  time: { type: Date, default: new Date() },
  img: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  like: { type: Boolean, ref: "Post" },
});
module.exports = mongoose.model("Like", like);
