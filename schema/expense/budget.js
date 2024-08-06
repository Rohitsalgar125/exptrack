const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const budgetSchema = mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "user"
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: 0
    },
}, {
    timestamps: true,
    versionKey: false
})


module.exports = mongoose.model('budget', budgetSchema)
