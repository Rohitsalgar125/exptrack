const express = require("express");
let categoryRouter = express.Router();
const { addCategory, deleteCategory, getAllCategoryBasedOnUser } = require("../controller/categoryController");
const {
  addCategoryValidation,
} = require("../validation/expenseValidation/categoryValidation");

categoryRouter.post("/add", addCategoryValidation, addCategory);
categoryRouter.post("/delete", deleteCategory);
categoryRouter.post("/getAllCategoryBasedOnUser", getAllCategoryBasedOnUser);

module.exports = categoryRouter;
