const express = require("express");
const {
  updatePost,
  deletePost,
  getPostById,
  getPost,
  addPost,
} = require("./../controller/post");
const authentication = require("./../middleware/authentication");
const authorization = require("./../middleware/authorization");

const postRouter = express.Router();
postRouter.post("/addPost",  addPost);
postRouter.get("/getPost",  getPost);
postRouter.get("/getPostById/:id",  getPostById);
postRouter.delete("/deletePost/:id",  deletePost);
postRouter.put("/updatePost/:id",  updatePost);

module.exports = postRouter;
