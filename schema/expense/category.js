const mongoose = require("mongoose");
const { ObjectId } = require("bson");

const categorySchema = mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      required: true,
      ref: "user",
    },
    categoryName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("category", categorySchema);