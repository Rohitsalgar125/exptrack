const { check, validationResult } = require("express-validator");

const addBudgetValidation = [
    check("userId").notEmpty().withMessage("userId can not be empty"),
    check("budget").notEmpty().withMessage("budget can not be empty"),

    (req, res, next) => {
        let errors = validationResult(req).array();
        if (errors.length > 0) {
            return res.send({ status: 0, message: errors[0].msg });
        }
        return next();
    },
];


const deleteExpenseValidation = [
    check("budgetId").notEmpty().withMessage("Budget Id can not be empty"),
    check("expenseId").notEmpty().withMessage("Expense Id can not be empty"),

    (req, res, next) => {
        let errors = validationResult(req).array();
        if (errors.length > 0) {
            return res.send({ status: 0, message: errors[0].msg });
        }
        return next();
    },
];

const addExpenseValidation = [
    check("spending").notEmpty().withMessage("Spending can not be empty"),
    check("category").notEmpty().withMessage("Category can not be empty"),

    (req, res, next) => {
        let errors = validationResult(req).array();
        if (errors.length > 0) {
            return res.send({ status: 0, message: errors[0].msg });
        }
        return next();
    },
];

module.exports = {
    addBudgetValidation,
    addExpenseValidation,
    deleteExpenseValidation,
    addExpenseValidation
};
