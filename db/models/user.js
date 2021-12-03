//users schema
const mongoose = require("mongoose");
const user = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  img: { type: String },
  isdel: { type: Boolean },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
});
module.exports = mongoose.model("User", user);
