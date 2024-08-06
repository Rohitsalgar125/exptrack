
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



module.exports = {
    addBudget,
    deleteBudget,
}
