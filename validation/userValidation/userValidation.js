const { check, validationResult } = require("express-validator");

const registerValidation = [
  check("name").notEmpty().withMessage("name can not be empty"),
  check("email")
    .isEmail()
    .withMessage("email format is not correct")
    .notEmpty()
    .withMessage("email can not be empty"),
  check("password").notEmpty().withMessage("password can not be empty"),
  check("mobileNo").notEmpty().withMessage("mobile number can not be empty"),

  (req, res, next) => {
    let errors = validationResult(req).array();
    if (errors.length > 0) {
      return res.send({ status: 0, message: errors[0].msg });
    }
    return next();
  },
];

const loginValidation = [
  check("email")
    .isEmail()
    .withMessage("email format is not correct")
    .notEmpty()
    .withMessage("email can not be empty"),
  check("password").notEmpty().withMessage("password can not be empty"),

  (req, res, next) => {
    let errors = validationResult(req).array();
    if (errors.length > 0) {
      return res.send({ status: 0, message: errors[0].msg });
    }
    return next();
  },
];

module.exports = {
  registerValidation,
  loginValidation,
};
