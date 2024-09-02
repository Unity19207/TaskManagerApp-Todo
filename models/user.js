const mongoose = require("mongoose");
const List = require("./list");

// create schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        //required: true, cretated in ui
    },
    password: {
        type: String,
        required: true,
    },
    list: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "List",
    }],
});

module.exports = mongoose.model("User", userSchema);
