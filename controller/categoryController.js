const { default: mongoose } = require("mongoose");
const category = require("../schema/expense/category");

const addCategory = async (req, res) => {
  let userPayload;
  try {
    userPayload = req.body;
    if (Object.keys(userPayload).length > 0) {
      await category.create(userPayload);
      return res.send({ status: 1, response: "Added Category Successfully" });
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

const deleteCategory = async (req, res) => {
  let userId;
  try {
    userId = req.body.id;
    if (Object.keys(userId).length > 0) {
      await category.findOneAndDelete({ _id: new objectId(userId) });
      return res.send({ status: 1, response: "Deleted Category Successfully" });
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
}

const getAllCategoryBasedOnUser = async (req, res) => {
  let categories, payload;
  try {
    payload = req.body;
    if (Object.keys(payload).length > 0) {
      categories = await category.find({ userId: payload.id });
      return res.send({ status: 1, data: categories });
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
}

module.exports = {
  addCategory,
  deleteCategory,
  getAllCategoryBasedOnUser
};
