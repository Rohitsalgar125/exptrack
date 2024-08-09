const express = require("express");
const {  addGroup } = require("../controller/groupController");
let groupRouter = express.Router();

groupRouter.post("/addGroup",addGroup );


module.exports = groupRouter;
