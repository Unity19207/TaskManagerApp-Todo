const mongoose = require("mongoose");

// create schema
const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
},
    { timestamps: true }
);

module.exports = mongoose.model("List", listSchema);
