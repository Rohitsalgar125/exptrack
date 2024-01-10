const user = require("../schema/user/userSchema");
const bcrypt = require('bcrypt')

const register = async (req, res) => {
  let userPayload, encryptedPassword;
  try {
    userPayload = req.body;
    encryptedPassword = await bcrypt.hash(userPayload?.password, 10);
    userPayload.password = encryptedPassword;
    await user.create(userPayload);

    return res.send({ status: 1, response: "Registered Successfully" });
  } catch (error) {
    return res.send({
      status: 0,
      message: error.message,
    });
  }
};

const welcome = async (req, res) => {
  try {

    return res.send("Hello From Expense Tracker");
  } catch (error) {
    return res.send({
      status: 0,
      message: error.message,
    });
  }
};

const getalluser = async (req, res) => {
  let userData;
  try {
    userData = await user.find({});
    return res.send({ status: 1, data: userData });
  } catch (error) {
    return res.send({
      status: 0,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  let payload, existingUser, comparePassword;
  try {
    payload = req.body;
    existingUser = await user.findOne({ email: payload.email });
    if (existingUser !== null) {
      comparePassword = await bcrypt.compare(payload.password, existingUser.password);
      if (comparePassword) {
        return res.send({ status: 1, response: "Login Successfully" });
      }
      else {
        return res.send({ status: 0, response: "email or password incorrect" });
      }
    }
    else {

      return res.send({ status: 1, response: "user not found" });
    }
  } catch (error) {
    return res.send({
      status: 0,
      message: error.message,
    });
  }
};


module.exports = {
  register,
  welcome,
  getalluser,
  login
}
