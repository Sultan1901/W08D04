//there are role and auth controllers
const roleModel = require("../../db/models/role");
const addRole = (req, res) => {
  const { role, Permissions } = req.body;
  const newRole = new roleModel({
    role,
    Permissions,
  });
  newRole
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getRole = (req, res) => {
  roleModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = { addRole, getRole };
