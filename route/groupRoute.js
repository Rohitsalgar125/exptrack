
const express = require("express");
const {  addGroup } = require("../controller/groupController");
let groupRouter = express.Router();

budgetRouter.post("/addGroup",addGroup );


module.exports = groupRouter;
