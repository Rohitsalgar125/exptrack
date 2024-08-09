const { check, validationResult } = require("express-validator");



const addGroupValidation = [
    check("groupName").notEmpty().withMessage("groupName can not be empty"),
    check("groupType").notEmpty().withMessage("groupType can not be empty"),

    (req, res, next) => {
        let errors = validationResult(req).array();
        if (errors.length > 0) {
            return res.send({ status: 0, message: errors[0].msg });
        }
        return next();
    },
];

module.exports = {
    addGroupValidation
};

