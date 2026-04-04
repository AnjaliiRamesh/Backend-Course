//you start server here


const express = require('express');

const app = express();//server instance create ho raha h which is stored in variable called app


//req => jo bhi dtat frontend se aa raha h usse access karne ke liye use req
//res => when tumhe response bhejna h from backend to frontend
app.get('/', (req,res)=>{
    res.send("hi, node is running");
})

app.listen(3000);//server ko start karne ke liye use listen
//3000 is a port number and port is door number which tell you where to go
