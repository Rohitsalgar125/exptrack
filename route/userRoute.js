const express = require("express");
let userRouter = express.Router();
const { register, welcome, getalluser , login } = require("../controller/userController");
const {
  registerValidation, loginValidation,
} = require("../validation/userValidation/userValidation");

userRouter.get('/', welcome)
userRouter.get('/getalluser', getalluser)
userRouter.post("/register", registerValidation, register);
userRouter.post("/login", loginValidation, login);

module.exports = userRouter;
