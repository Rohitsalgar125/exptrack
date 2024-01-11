const express = require("express");
const { addBudget, addExpense, deleteExpense, deleteBudget } = require("../controller/budgetController");
const { addBudgetValidation, deleteExpenseValidation, addExpenseValidation } = require("../validation/expenseValidation/budgetValidation");
const { authChecker } = require("../common/common");
let budgetRouter = express.Router();
authChecker

budgetRouter.post("/addBudget", authChecker, addBudgetValidation, addBudget);
budgetRouter.post("/deleteBudget", authChecker, deleteBudget);
budgetRouter.post("/addExpense", authChecker, addExpenseValidation, addExpense);
budgetRouter.post("/deleteExpense", authChecker, deleteExpenseValidation, deleteExpense);

module.exports = budgetRouter;
