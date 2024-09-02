const mongoose = require("mongoose");

const conn = async () => {
    try {
        await mongoose
            .connect(
                "mongodb+srv://user:1UserDatabase_123@cluster0.h7vs1.mongodb.net/"
            )
            .then(() => console.log("Connected to Database Successfully"));
    } catch (error) {
        console.log("Error: ", error);
    }
};

conn();
