const mongoose = require("mongoose");

async function connectDB(params) {
    await mongoose.connect("mongodb+srv://anjaliramesh14012005_db_user:W8l7E1ezmiNzzY4h@cluster0.tguba7j.mongodb.net/?appName=Cluster0")

    console.log("connected to DB")
    
}

module.exports = connectDB