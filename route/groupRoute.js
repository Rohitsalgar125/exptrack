
const express = require("express");
const { addGroup } = require("../controller/groupController");
const { addGroupValidation } = require("../validation/groupValidation");
let groupRouter = express.Router();


groupRouter.post("/addGroup", addGroupValidation, addGroup);


module.exports = groupRouter;
