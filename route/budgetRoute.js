const express = require("express");
const {  addExpense, deleteExpense } = require("../controller/budgetController");
const { addBudgetValidation, deleteExpenseValidation, addExpenseValidation } = require("../validation/expenseValidation/budgetValidation");
// const { authChecker } = require("../common/common");
let budgetRouter = express.Router();

budgetRouter.post("/addExpense",addBudgetValidation, addExpense);
budgetRouter.post("/deleteExpense", deleteExpense);

module.exports = budgetRouter;
