const { check, validationResult } = require("express-validator");

const addBudgetValidation = [
    check("userId").notEmpty().withMessage("userId can not be empty"),
    check("month").notEmpty().withMessage("month can not be empty"),
    check("year").notEmpty().withMessage("year can not be empty"),
    check("budget").notEmpty().withMessage("budget can not be empty"),

    (req, res, next) => {
        let errors = validationResult(req).array();
        if (errors.length > 0) {
            return res.send({ status: 0, message: errors[0].msg });
        }
        return next();
    },
];

const addExpenseValidation = [
    check("category").notEmpty().withMessage("category can not be empty"),
    check("amount").notEmpty().withMessage("amount can not be empty"),
    check("description").notEmpty().withMessage("description can not be empty"),
    check("date").notEmpty().withMessage("date can not be empty"),

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
    addExpenseValidation
};
