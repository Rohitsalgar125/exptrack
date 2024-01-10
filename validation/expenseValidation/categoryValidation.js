const { check, validationResult } = require("express-validator");

const addCategoryValidation = [
  check("userId").notEmpty().withMessage("userId can not be empty"),
  check("categoryName").notEmpty().withMessage("categoryName can not be empty"),

  (req, res, next) => {
    let errors = validationResult(req).array();
    if (errors.length > 0) {
      return res.send({ status: 0, message: errors[0].msg });
    }
    return next();
  },
];

module.exports = {
  addCategoryValidation,
};
