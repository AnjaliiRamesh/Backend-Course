import app from "./src/app.js";
import connectDB from "./src/config/database.js";


connectDB();

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})

// QMPAqI9VVhrm7x6P
//7w4AXjZdetOPlaNB

// mongodb+srv://auth-learning:7w4AXjZdetOPlaNB@cluster0.r0jyatm.mongodb.net/