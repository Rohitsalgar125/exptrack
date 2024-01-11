
const { default: mongoose } = require('mongoose');
const budget = require('../schema/expense/budget');
const objectId = mongoose.Types.ObjectId;


const addBudget = async (req, res) => {
    let payload;
    try {
        payload = req.body;
        if (Object.keys(payload).length > 0) {
            await budget.create(payload);
            res.send({ status: 1, repsponse: "Budget Added Successfully" });
        }
        else {
            res.send({ status: 0, repsponse: "Data Not Found" });
        }
    } catch (error) {
        res.send({ status: 0, repsponse: error.message });
    }
}

const deleteBudget = async (req, res) => {
    let payload, deleteReturn;
    try {
        payload = req.body;
        if (Object.keys(payload).length > 0) {
            deleteReturn = await budget.findByIdAndDelete({ _id: new objectId(payload) })
            if (deleteReturn !== null) {
                return res.send({ status: 1, repsponse: "Budget Deleted Successfully" })
            }
            else {
                return res.send({ status: 0, repsponse: "Budget ID can not found" })
            }
        }
        else {
            return res.send({ status: 0, repsponse: "Data not found" })
        }
    } catch (error) {
        res.send({ status: 0, repsponse: error.message });
    }
}

const addExpense = async (req, res) => {
    let payload, existingObject, totalSpending;
    try {
        payload = req.body;
        if (Object.keys(payload).length > 0) {
            existingObject = await budget.findOne({ _id: new objectId(payload.id) });
            if (existingObject !== null) {
                totalSpending = existingObject?.totalExpense + payload.spending;
                if (existingObject?.budget >= existingObject?.totalExpense && existingObject?.budget >= totalSpending) {
                    await budget.findByIdAndUpdate({ _id: new objectId(payload.id) }, {
                        $inc: { totalExpense: payload.spending },
                        $push: { expenses: { category: payload.category, spending: payload.spending } }
                    });
                    return res.send({ status: 1, repsponse: "Expense Added Successfully" });
                }
                else {
                    return res.send({ status: 0, repsponse: "Budget Exceeded" });
                }
            }
            else {
                res.send({ status: 0, repsponse: "budget not found" });
            }
        }
        else {
            res.send({ status: 0, repsponse: "Data not found" });
        }
    } catch (error) {
        res.send({ status: 0, repsponse: error.message });
    }
}

const deleteExpense = async (req, res) => {
    let payload, budgetId, expenseId, existingObject, deleteExpenseAmount;
    try {
        payload = req.body;
        if (Object.keys(payload).length > 0) {
            budgetId = payload.budgetId;
            expenseId = payload.expenseId;
            existingObject = await budget.findOne({ _id: new objectId(budgetId) , $in : [new objectId(expenseId)] });
            deleteExpenseAmount = existingObject.expenses.filter((e) => e._id == expenseId);
            let amount = deleteExpenseAmount[0].spending;
            await budget.findByIdAndUpdate({ _id: budgetId }, {
                $inc: { totalExpense: -  amount },
                $pull: { expenses: { _id: expenseId } }
            });
            return res.send({ status: 1, repsponse: "Expense Deleted Successfully" });

        }
        else {
            return res.send({ status: 0, repsponse: "Data Not Found" });

        }
    } catch (error) {
        res.send({ status: 0, repsponse: error.message });
    }
}

module.exports = {
    addBudget,
    deleteBudget,
    addExpense,
    deleteExpense
}