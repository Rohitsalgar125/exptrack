const express = require("express");
const { addBudget, addExpense, deleteExpense, deleteBudget } = require("../controller/budgetController");
const { addBudgetValidation, deleteExpenseValidation, addExpenseValidation } = require("../validation/expenseValidation/budgetValidation");
// const { authChecker } = require("../common/common");
let budgetRouter = express.Router();

budgetRouter.post("/addBudget",addBudgetValidation, addBudget);
budgetRouter.post("/deleteBudget", deleteBudget);
budgetRouter.post("/addExpense",  addExpenseValidation, addExpense);
budgetRouter.post("/deleteExpense",  deleteExpenseValidation, deleteExpense);

module.exports = budgetRouter;
