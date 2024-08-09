const { default: mongoose } = require('mongoose');
const objectId = mongoose.Types.ObjectId;
const group = require('../schema/groupSchema');


const addGroup = async (req, res) => {
    let payload;
    try {
        payload = req.body;
        if (Object.keys(payload).length > 0) {
            await group.create(payload);
            res.send({ status: 1, repsponse: "Group Added Successfully" });
        }
        else {
            res.send({ status: 0, repsponse: "Data Not Found" });
        }
    } catch (error) {
        res.send({ status: 0, repsponse: error.message });
    }
}


const getAllGroup = async (req, res) => {
    let payload, data;
    try {
        payload = req.body;
        if (Object.keys(payload).length > 0) {
            data = await group.find({ userId: new objectId(payload.id) });
            res.send({ status: 1, data: data });
        }
        else {
            res.send({ status: 0, repsponse: "Data Not Found" });
        }
    } catch (error) {
        res.send({ status: 0, repsponse: error.message });
    }
}



module.exports = {
    addGroup,
    getAllGroup
}
