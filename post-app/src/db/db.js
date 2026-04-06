const mongoose = require("mongoose");

async function connectDB(params) {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to DB");
    
}

module.exports = connectDB;