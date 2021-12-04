//users controllers

const userModel = require("./../../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SALT = Number(process.env.SALT);
const SECKEY = process.env.SECKEY;

const register = async (req, res) => {
  const { email, password, role, username, img } = req.body;
  const semail = email.toLowerCase();
  const hashpass = await bcrypt.hash(password, SALT);
  const newUser = new userModel({
    email: semail,
    password: hashpass,
    username,
    img,
    role,
  });
  newUser
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
// can login with username or email or both all we accept there lol
const login = (req, res) => {
  const {  password,  username,email } = req.body;
  userModel
    .findOne({ $or:[{email},{username}]})
    .then(async (result) => {
      if (result) {
        if ((
          email === result.email ||
          username === result.username
        )) {
          console.log(result);
          const payload = {
            role: result.role,
            id: result._id,
          };

          const crackedhashpwd = await bcrypt.compare(
            password,
            result.password
          );

          if (crackedhashpwd) {
            const options = {
              expiresIn: "3600m",
            };

            const token = jwt.sign(payload, SECKEY, options);
            res.status(200).json({ result, token });
          } else {
            res.status(400).json("wrong email || password");
          }
        } else {
          res.status(400).json("wrong email || password");
        }
      } else {
        res.status(400).json("email does not ===> match our records");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const deleteUser = (req, res) => {
  const { id } = req.params;

  userModel
    .findByIdAndRemove(id)
    .exec()
    .then((result) => {
      res.status(200).json("Deleted");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const updateUser = (req, res) => {
  const { email } = req.body;
  const { id } = req.params;
  userModel
    .findByIdAndUpdate(id, { $set: { email: email } })
    .then((result) => {
      if (result) {
        res.status(200).json("updated");
      } else {
        res.status(404).json(err);
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { register, login, deleteUser, updateUser };
