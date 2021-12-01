const likeModel = require("../../db/models/like");

const addLike = (req, res) => {
  const { userId, postId } = req.body;
  const newlike = new likeModel({
    postId,
    userId,
  });
  newLike
    .save()
    .then((result) => {
      res.status(201).json(result,"Liked");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deleteLike = (req, res) => {
  const { id } = req.params;

  likeModel
    .findByIdAndRemove(id)
    .exec()
    .then((result) => {
      res.status(200).json("dislike");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
 module.exports = {deleteLike ,addLike}