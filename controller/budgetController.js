
const { default: mongoose } = require('mongoose');
const budget = require('../schema/expense/budget');
const objectId = mongoose.Types.ObjectId;


const addExpense = async (req, res) => {
    let payload;
    try {
        payload = req.body;
        if (Object.keys(payload).length > 0) {
            await budget.create(payload);
            res.send({ status: 1, repsponse: "Expense Added Successfully" });
        }
        else {
            res.send({ status: 0, repsponse: "Data Not Found" });
        }
    } catch (error) {
        res.send({ status: 0, repsponse: error.message });
    }
}

const getAllExpense = async (req, res) => {
    let payload , data;
    try {
        payload = req.body;
        if (Object.keys(payload).length > 0) {
           data = await budget.find({ userId : new objectId(payload.id)});
            res.send({ status: 1, repsponse: "Expense Added Successfully" , data : data  });
        }
        else {
            res.send({ status: 0, repsponse: "Data Not Found" });
        }
    } catch (error) {
        res.send({ status: 0, repsponse: error.message });
    }
}

const deleteExpense = async (req, res) => {
    let payload, deleteReturn;
    try {
        payload = req.body;
        if (Object.keys(payload).length > 0) {
            deleteReturn = await budget.findByIdAndDelete({ _id: new objectId(payload) })
            if (deleteReturn !== null) {
                return res.send({ status: 1, repsponse: "Expense Deleted Successfully" })
            }
            else {
                return res.send({ status: 0, repsponse: "Expense ID can not found" })
            }
        }
        else {
            return res.send({ status: 0, repsponse: "Data not found" })
        }
    } catch (error) {
        res.send({ status: 0, repsponse: error.message });
    }
}          



module.exports = {
    addExpense,
    deleteExpense,
    getAllExpense
}
