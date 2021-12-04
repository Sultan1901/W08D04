//routers of post comments
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
postRouter.post("/addPost", authentication,  addPost);
postRouter.get("/getPost", authentication,authorization,getPost);
postRouter.get("/getPostById/:id",authentication,  getPostById);
postRouter.delete("/deletePost/:id", authentication,authorization, deletePost);
postRouter.put("/updatePost/:id", authentication, authorization, updatePost);

module.exports = postRouter;

