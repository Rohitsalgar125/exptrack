
const express = require("express");
const {  addGroup } = require("../controller/groupController");
const {  addExpenseValidation } = require("../validation/expenseValidation/budgetValidation");
// const { authChecker } = require("../common/common");
let groupRouter = express.Router();

budgetRouter.post("/addGroup",addGroup );


module.exports = groupRouter;
