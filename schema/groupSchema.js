const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const groupSchema = mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: "user"
  },
  groupName: { type: String, required: true },
  groupType: { type: String,  required: true },
  groupPhoto: { type: String },
}, {
  versionKey: false,
  timestamps: true
})


module.exports = mongoose.model('group', groupSchema);
