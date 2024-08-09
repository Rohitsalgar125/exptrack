
const express = require("express");
const { addGroup, getAllGroup } = require("../controller/groupController");
const { addGroupValidation } = require("../validation/groupValidation");
let groupRouter = express.Router();


groupRouter.post("/addGroup", addGroupValidation, addGroup);
groupRouter.post("/getAllGroup", getAllGroup);


module.exports = groupRouter;
