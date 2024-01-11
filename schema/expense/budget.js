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
        type: [{ category: { type: String, required: true }, spending: { type: Number, required: true } }],
        default: []
    }
}, {
    timestamps: true,
    versionKey: false
})


module.exports = mongoose.model('budget', budgetSchema)