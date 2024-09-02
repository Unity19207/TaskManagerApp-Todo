require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.MONGO_URI;
const conn = async () => {
    try {
        await mongoose
            .connect(url)
            .then(() => console.log("Connected to Database Successfully"));
    } catch (error) {
        console.log("Error: ", error);
    }
};
conn();
