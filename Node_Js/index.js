
/*
import http from "http"

const server = http.createServer((req,res)=>{

    if(req.url == "/"){
       res.end("Welcome to home route") 
    }
    else if(req.url == "/about"){
        res.end("welcome to about route")
    }
    else if(req.url == "/contact"){
        res.end("welcome to contact route")
    }
   else{
    res.end("404 not found")
   }
})

server.listen(8000,()=>{
    console.log("server is started");  
});

*/

import express from "express"

const app = express()
const port=8000

app.get("/",(req,res)=>{
    res.json({name:"anjali",age:22})
    res.send("hello")
})
app.listen(port,()=>{
    console.log(`Server is started at ${port}`); 
})
