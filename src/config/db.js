const mongoose = require("mongoose");
async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to Database successfully");
    } catch (err) {
        console.log("Error in connecting to Database", err);
    }
}
module.exports = connectDB;