
const budget = require('../schema/expense/budget');


const addBudget = async (req, res) => {
    let payload;
    try {
        payload = req.body;
        await budget.create(payload);
        res.send({ status: 1, repsponse: "Budget Added Successfully" });
    } catch (error) {
        res.send({ status: 0, repsponse: error.message });
    }
}
const addExpense = async (req, res) => {
    let payload;
    try {
        payload = req.body;
        await budget.findByIdAndUpdate({ _id: payload.id }, {
            $push: { expenses: { category: payload.category, spending: payload.spending } }
        });
        res.send({ status: 1, repsponse: "Expense Added Successfully" });
    } catch (error) {
        res.send({ status: 0, repsponse: error.message });
    }
}

module.exports = {
    addBudget,
    addExpense

}