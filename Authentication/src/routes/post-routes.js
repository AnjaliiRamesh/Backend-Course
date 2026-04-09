const express = require("express");

const router = express.Router();

router.post("/create",async(req,res)=>{
    const token= req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Unauthorized: please sign up"
        })
    }
  try {
     const decoded =  jwt.verify(token, process.env.JWT_SECRET);
     const user = await userModel.findById(decoded.id);
    //  console.log(decoded);
     console.log(user);
  } catch (error) {
    return res.status(401).json({
        message:"Unauthoized ,Invalid token"
    })
    
  }


    // console.log(req.body)
    // console.log(req.cookies)

    res.send("Post request received successfully");

})

module.exports = router;