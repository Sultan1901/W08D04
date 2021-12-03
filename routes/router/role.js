//routers of post role

const express = require("express");
const { addRole, getRole } = require("../controller/role");
const roleRouter = express.Router();
roleRouter.post("/addRole", addRole);
roleRouter.get("/getRole", getRole);
module.exports = roleRouter;
