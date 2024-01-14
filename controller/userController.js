const user = require("../schema/user/userSchema");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  let userPayload, encryptedPassword, existingUser;
  try {
    userPayload = req.body;
    if (Object.keys(userPayload).length > 0) {
      existingUser = await user.findOne({ email: userPayload.email });
      if (existingUser === null) {
        encryptedPassword = await bcrypt.hash(userPayload?.password, 10);
        userPayload.password = encryptedPassword;
        await user.create(userPayload);
        return res.send({ status: 1, response: "Registered Successfully" });
      }
      else {
        return res.send({ status: 0, response: "Email already Exist" });
      }
    }
    else {
      return res.send({ status: 0, response: "Data Not Found" });
    }
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
  let payload, existingUser, comparePassword, updatedUserData;
  try {
    payload = req.body;
    if (Object.keys(payload).length > 0) {
      updatedUserData = {};
      existingUser = await user.findOne({ email: payload.email });
      updatedUserData.name = existingUser.name;
      updatedUserData.mobileNo = existingUser.mobileNo;
      updatedUserData.email = existingUser.email;
      updatedUserData.signedIn = existingUser.signedIn
      if (existingUser !== null) {
        comparePassword = await bcrypt.compare(payload.password, existingUser.password);
        if (comparePassword) {
          await user.findOneAndUpdate({ email: payload.email }, { signedIn: "1" })
          return res.send({
            status: 1, response: "Login Successfully", token: jwt.sign(
              {
                data: updatedUserData,
              },
              "secretkey", { expiresIn: '2h' }
            ),

          });
        }
        else {
          return res.send({ status: 0, response: "email or password incorrect" });
        }
      }
      else {

        return res.send({ status: 1, response: "user not found" });
      }
    }
    else {
      return res.send({ status: 1, response: "Data not found" });
    }
  } catch (error) {
    return res.send({
      status: 0,
      message: error.message,
    });
  }
};

const Logout = async (req, res) => {
  let payload;
  try {
    payload = req.body;
    if (Object.keys(payload).length > 0) {
      await user.findOneAndUpdate({ email: payload.email }, { signedIn: "2" })
    }
  } catch (error) {
    return res.send({
      status: 0,
      message: error.message,
    });
  }
}


module.exports = {
  register,
  welcome,
  getalluser,
  login,
  Logout
}
