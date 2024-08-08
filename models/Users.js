const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
    //id: {type}
    username: { type: String },
    password: { type: String },
    isApprove: {
        type:Boolean,
        default:false
    },
    fname: { type: String },
    lname: { type: String },
    gender: { type: String },
    age: { type: Number },
    role: { type: String },
});
module.exports = mongoose.model("users", usersSchema);