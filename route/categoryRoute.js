const express = require("express");
let categoryRouter = express.Router();
const { addCategory, deleteCategory, getAllCategoryBasedOnUser } = require("../controller/categoryController");
const {
  addCategoryValidation,
} = require("../validation/expenseValidation/categoryValidation");
const { authChecker } = require("../common/common");

categoryRouter.post("/add", authChecker, addCategoryValidation, addCategory);
categoryRouter.post("/delete", authChecker, deleteCategory);
categoryRouter.post("/getAllCategoryBasedOnUser", authChecker, getAllCategoryBasedOnUser);

module.exports = categoryRouter;
