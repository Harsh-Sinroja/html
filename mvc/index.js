const express = require("express")
const dotenv= require("dotenv").config()

const app = express();

app.listen(process.env.port,()=>{
    console.log("server is running");
    
})