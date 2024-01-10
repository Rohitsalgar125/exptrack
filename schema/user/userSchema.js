const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    mobileNo: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    signedIn: {
      type: String,
      default: 2
    }

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("user", userSchema);
