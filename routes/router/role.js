//routers of post role

const express = require("express");
const { addRole, getRole } = require("../controller/role");
const authentication  = require("./../middleware/authentication");
const authorization = require("./../middleware/authorization")
const roleRouter = express.Router();
roleRouter.post("/addRole", authentication, authorization, addRole);
roleRouter.get("/getRole", authentication, authorization, getRole);
module.exports = roleRouter;
