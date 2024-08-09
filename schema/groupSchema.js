const mongoose = require("mongoose");


const groupSchema = mongoose.Schema({
  groupName: { type: String, required: true },
  groupType: { type: String, enum: ['Home', 'Trip'], required: true },
  groupPhoto: { type: String },
},{
    versionKey : false ,
    timestamps : true
})


module.exports = mongoose.model('group',groupSchema);
