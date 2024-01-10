const express = require("express");
const { addBudget , addExpense } = require("../controller/budgetController");
const { addBudgetValidation } = require("../validation/expenseValidation/budgetValidation");
let budgetRouter = express.Router();

budgetRouter.post("/add/budget", addBudgetValidation, addBudget);
budgetRouter.post("/add/expense", addExpense);

module.exports = budgetRouter;
