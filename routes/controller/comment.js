const commentModel = require("../../db/models/comment");
const addComment = (req, res) => {
  const { description, userId, postId } = req.body;
  const newcomment = new commentModel({
    description,
    postId,
    userId,
  });
  newcomment
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getComment = (req, res) => {
  commentModel
    .find({})
    .populate({ description, userId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json("you Don't have authorization");
    });
};

const getCommentById = (req, res) => {
  const { id } = req.params;
  commentModel
    .find({ _id: id })
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json("comment does not exist");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deleteComment = (req, res) => {
  const { id } = req.params;

  commentModel
    .findByIdAndUpdate(id, { $set: { isDel: true } })
    .exec()
    .then((result) => {
      res.status(200).json("Deleted");
    })
    .catch((err) => {
      res.status(400).json("you Don't have authorization");
    });
};
const updateComment = (req, res) => {
  const { description } = req.body;
  const { id } = req.params;
  commentModel
    .findByIdAndUpdate(id, { $set: { description: description } })
    .then((result) => {
      if (result) {
        res.status(200).json("updated");
      } else {
        res.status(404).json("you Don't have authorization");
      }
    })
    .catch((err) => {
      res.status(400).json("Comment dosnot Exist");
    });
};

module.exports = {
  updateComment,
  deleteComment,
  getCommentById,
  getComment,
  addComment,
};
