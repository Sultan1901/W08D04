
// comment routers ,endpoints of comments controllers exported 
const express = require("express");
const {
  updateComment,
  deleteComment,
  getCommentById,
  getComment,
  addComment,
} = require("./../controller/comment");
const authentication = require("./../middleware/authentication");
const authorization = require("./../middleware/authorization");

const commentRouter = express.Router();
commentRouter.post("/addComment", authentication, addComment);
commentRouter.get("/getComment",authentication,authorization, getComment);
commentRouter.get("/getCommentById/:id", authentication, getCommentById);
commentRouter.delete(
  "/deleteComment/:id",
  authentication,
  authorization,
  deleteComment
);
commentRouter.put(
  "/updateComment/:id",
  authentication,
  authorization,
  updateComment
);

module.exports = commentRouter;
