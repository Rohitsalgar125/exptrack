const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const budgetSchema = mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "user"
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    totalExpense: {
        type: Number,
        default: 0
    },
    expenses: {
        type: [{ category: String, spending: Number }],
        default: []
    }
}, {
    timestamps: true,
    versionKey: false
})


module.exports = mongoose.model('budget', budgetSchema)